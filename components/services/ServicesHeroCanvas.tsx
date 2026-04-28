'use client';
import { useEffect, useRef } from 'react';

export default function ServicesHeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animId: number;
    let cleanupFns: Array<() => void> = [];

    (async () => {
      const THREE = await import('three');
      const canvas = canvasRef.current;
      if (!canvas) return;

      const parent = canvas.parentElement!;
      const w = parent.offsetWidth || 480;
      const h = parent.offsetHeight || 480;

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
      camera.position.z = 4.2;

      // ── Octahedron body ──
      const geo = new THREE.OctahedronGeometry(1.2, 0);
      const mat = new THREE.MeshPhongMaterial({
        color: 0x1A3A8F, emissive: 0x0C1532,
        transparent: true, opacity: 0.52, shininess: 100,
      });
      const mesh = new THREE.Mesh(geo, mat);
      scene.add(mesh);

      // ── Gold edge lines ──
      const edgeMesh = new THREE.LineSegments(
        new THREE.EdgesGeometry(geo),
        new THREE.LineBasicMaterial({ color: 0xF0A500, transparent: true, opacity: 0.82 })
      );
      scene.add(edgeMesh);

      // ── Inner glow sphere ──
      scene.add(new THREE.Mesh(
        new THREE.SphereGeometry(0.45, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0x2D5BE3, transparent: true, opacity: 0.14 })
      ));

      // ── Particle cloud ──
      const pPos: number[] = [];
      for (let i = 0; i < 100; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        const r = 1.9 + Math.random() * 1.4;
        pPos.push(r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta), r * Math.cos(phi));
      }
      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute('position', new THREE.Float32BufferAttribute(pPos, 3));
      scene.add(new THREE.Points(pGeo, new THREE.PointsMaterial({ color: 0xF0A500, size: 0.04, transparent: true, opacity: 0.55 })));

      // ── Lights ──
      const light1 = new THREE.PointLight(0xF0A500, 2.2, 12);
      light1.position.set(3, 3, 3);
      scene.add(light1);
      const light2 = new THREE.PointLight(0x2D5BE3, 1.6, 12);
      light2.position.set(-3, -2, 2);
      scene.add(light2);
      scene.add(new THREE.AmbientLight(0xffffff, 0.08));

      // ── Mouse tilt ──
      let tx = 0, ty = 0, cx = 0, cy = 0;
      const onMove = (e: MouseEvent) => {
        tx = (e.clientX / innerWidth - 0.5) * 0.55;
        ty = (e.clientY / innerHeight - 0.5) * 0.4;
      };
      if (!matchMedia('(pointer:coarse)').matches) {
        window.addEventListener('mousemove', onMove, { passive: true });
        cleanupFns.push(() => window.removeEventListener('mousemove', onMove));
      }

      // ── Render loop ──
      const loop = () => {
        animId = requestAnimationFrame(loop);
        mesh.rotation.y += 0.005;
        mesh.rotation.x += 0.003;
        edgeMesh.rotation.y = mesh.rotation.y;
        edgeMesh.rotation.x = mesh.rotation.x;
        cx += (tx - cx) * 0.05;
        cy += (ty - cy) * 0.05;
        camera.position.x = cx;
        camera.position.y = -cy;
        camera.lookAt(0, 0, 0);
        const t = Date.now() * 0.001;
        light1.intensity = 1.8 + Math.sin(t) * 0.4;
        light2.intensity = 1.2 + Math.cos(t * 1.3) * 0.35;
        renderer.render(scene, camera);
      };
      loop();

      // ── Resize ──
      const onResize = () => {
        const nw = parent.offsetWidth || 480, nh = parent.offsetHeight || 480;
        renderer.setSize(nw, nh);
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
      };
      window.addEventListener('resize', onResize);
      cleanupFns.push(() => window.removeEventListener('resize', onResize));
      cleanupFns.push(() => { cancelAnimationFrame(animId); renderer.dispose(); });
    })();

    return () => cleanupFns.forEach(fn => fn());
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />;
}
