'use client';
import { useEffect, useRef } from 'react';

export default function ContactHeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animId: number;
    let cleanupFns: Array<() => void> = [];

    (async () => {
      const THREE = await import('three');
      const canvas = canvasRef.current;
      if (!canvas) return;

      const parent = canvas.parentElement!;
      const w = parent.offsetWidth  || 480;
      const h = parent.offsetHeight || 480;

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

      const scene  = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
      camera.position.z = 4.5;

      // ── Icosahedron body ──
      const geo  = new THREE.IcosahedronGeometry(1.1, 0);
      const mat  = new THREE.MeshPhongMaterial({
        color: 0x1A3A8F, emissive: 0x070E26,
        transparent: true, opacity: 0.48, shininess: 120,
      });
      const mesh = new THREE.Mesh(geo, mat);
      scene.add(mesh);

      // ── Gold edge wireframe ──
      const edgeMesh = new THREE.LineSegments(
        new THREE.EdgesGeometry(geo),
        new THREE.LineBasicMaterial({ color: 0xF0A500, transparent: true, opacity: 0.78 })
      );
      scene.add(edgeMesh);

      // ── Rotating torus ring ──
      const torus = new THREE.Mesh(
        new THREE.TorusGeometry(1.75, 0.015, 16, 100),
        new THREE.MeshBasicMaterial({ color: 0xF0A500, transparent: true, opacity: 0.35 })
      );
      torus.rotation.x = Math.PI / 3;
      scene.add(torus);

      // ── Second torus (perpendicular) ──
      const torus2 = new THREE.Mesh(
        new THREE.TorusGeometry(2.1, 0.008, 12, 80),
        new THREE.MeshBasicMaterial({ color: 0x2D5BE3, transparent: true, opacity: 0.22 })
      );
      torus2.rotation.z = Math.PI / 4;
      scene.add(torus2);

      // ── Inner glow ──
      scene.add(new THREE.Mesh(
        new THREE.SphereGeometry(0.38, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0x2D5BE3, transparent: true, opacity: 0.18 })
      ));

      // ── Particle cloud ──
      const pPos: number[] = [];
      for (let i = 0; i < 80; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi   = Math.random() * Math.PI;
        const r     = 2.4 + Math.random() * 1.2;
        pPos.push(r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta), r * Math.cos(phi));
      }
      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute('position', new THREE.Float32BufferAttribute(pPos, 3));
      scene.add(new THREE.Points(pGeo, new THREE.PointsMaterial({ color: 0xF0A500, size: 0.04, transparent: true, opacity: 0.5 })));

      // ── Lights ──
      const goldLight = new THREE.PointLight(0xF0A500, 2.5, 14);
      goldLight.position.set(3, 2, 4);
      scene.add(goldLight);
      const blueLight = new THREE.PointLight(0x2D5BE3, 1.8, 12);
      blueLight.position.set(-3, -2, 2);
      scene.add(blueLight);
      scene.add(new THREE.AmbientLight(0xffffff, 0.06));

      // ── Camera follows mouse ──
      let tx = 0, ty = 0, cx = 0, cy = 0;
      const onMove = (e: MouseEvent) => {
        tx = (e.clientX / innerWidth  - 0.5) * 0.6;
        ty = (e.clientY / innerHeight - 0.5) * 0.45;
      };
      if (!matchMedia('(pointer:coarse)').matches) {
        window.addEventListener('mousemove', onMove, { passive: true });
        cleanupFns.push(() => window.removeEventListener('mousemove', onMove));
      }

      // ── Render loop ──
      const loop = () => {
        animId = requestAnimationFrame(loop);
        const t = Date.now() * 0.001;

        mesh.rotation.y     += 0.004;
        mesh.rotation.x     += 0.0025;
        edgeMesh.rotation.y  = mesh.rotation.y;
        edgeMesh.rotation.x  = mesh.rotation.x;

        torus.rotation.z  += 0.008;
        torus2.rotation.y += 0.005;

        cx += (tx - cx) * 0.05;
        cy += (ty - cy) * 0.05;
        camera.position.x = cx;
        camera.position.y = -cy;
        camera.lookAt(0, 0, 0);

        goldLight.intensity = 2.0 + Math.sin(t)       * 0.5;
        blueLight.intensity = 1.4 + Math.cos(t * 1.4) * 0.4;

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
