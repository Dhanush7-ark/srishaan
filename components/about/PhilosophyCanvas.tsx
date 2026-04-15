'use client';
import { useEffect, useRef } from 'react';

export default function PhilosophyCanvas() {
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
      const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
      camera.position.z = 5.5;

      const group = new THREE.Group();
      scene.add(group);

      // ── 6 value nodes arranged in a ring ──
      const NODE_COUNT = 6;
      const RING_R = 2.0;
      type V3 = InstanceType<typeof THREE.Vector3>;
      const nodePositions: V3[] = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        const angle = (i / NODE_COUNT) * Math.PI * 2;
        const x = RING_R * Math.cos(angle);
        const y = RING_R * Math.sin(angle);
        const z = (Math.random() - 0.5) * 0.8;
        nodePositions.push(new THREE.Vector3(x, y, z));

        // Node sphere
        const sphere = new THREE.Mesh(
          new THREE.SphereGeometry(0.12, 12, 12),
          new THREE.MeshBasicMaterial({ color: 0xF0A500 })
        );
        sphere.position.set(x, y, z);
        group.add(sphere);

        // Pulse ring around each node
        const ring = new THREE.Mesh(
          new THREE.RingGeometry(0.18, 0.25, 20),
          new THREE.MeshBasicMaterial({ color: 0xF0A500, side: THREE.DoubleSide, transparent: true, opacity: 0.22 })
        );
        ring.position.set(x, y, z);
        ring.lookAt(camera.position);
        group.add(ring);
      }

      // ── Central core ──
      group.add(new THREE.Mesh(
        new THREE.SphereGeometry(0.32, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0x2D5BE3, transparent: true, opacity: 0.55 })
      ));
      group.add(new THREE.Mesh(
        new THREE.SphereGeometry(0.18, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0x4A7AFF, transparent: true, opacity: 0.7 })
      ));

      // ── Connection lines from center to each node ──
      nodePositions.forEach(pos => {
        const pts = [new THREE.Vector3(0, 0, 0), pos];
        const geo = new THREE.BufferGeometry().setFromPoints(pts);
        group.add(new THREE.Line(geo, new THREE.LineBasicMaterial({ color: 0xF0A500, transparent: true, opacity: 0.28 })));
      });

      // ── Cross-connections between adjacent nodes ──
      for (let i = 0; i < NODE_COUNT; i++) {
        const a = nodePositions[i];
        const b = nodePositions[(i + 1) % NODE_COUNT];
        const geo = new THREE.BufferGeometry().setFromPoints([a, b]);
        group.add(new THREE.Line(geo, new THREE.LineBasicMaterial({ color: 0x2D5BE3, transparent: true, opacity: 0.2 })));
      }
      // Diagonal cross-connections
      for (let i = 0; i < NODE_COUNT; i++) {
        const a = nodePositions[i];
        const b = nodePositions[(i + 2) % NODE_COUNT];
        const geo = new THREE.BufferGeometry().setFromPoints([a, b]);
        group.add(new THREE.Line(geo, new THREE.LineBasicMaterial({ color: 0x1A3A8F, transparent: true, opacity: 0.12 })));
      }

      // ── Ambient particles ──
      const pPos: number[] = [];
      for (let i = 0; i < 60; i++) {
        pPos.push((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 4);
      }
      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute('position', new THREE.Float32BufferAttribute(pPos, 3));
      scene.add(new THREE.Points(pGeo, new THREE.PointsMaterial({ color: 0xF0A500, size: 0.03, transparent: true, opacity: 0.3 })));

      // ── Mouse tilt ──
      let tx = 0, ty = 0, cx = 0, cy = 0;
      const onMove = (e: MouseEvent) => {
        tx = (e.clientX / innerWidth  - 0.5) * 0.5;
        ty = (e.clientY / innerHeight - 0.5) * 0.4;
      };
      if (!matchMedia('(pointer:coarse)').matches) {
        window.addEventListener('mousemove', onMove, { passive: true });
        cleanupFns.push(() => window.removeEventListener('mousemove', onMove));
      }

      // ── Render loop ──
      const loop = () => {
        animId = requestAnimationFrame(loop);
        group.rotation.y += 0.003;
        group.rotation.z += 0.001;
        cx += (tx - cx) * 0.04;
        cy += (ty - cy) * 0.04;
        camera.position.x = cx;
        camera.position.y = -cy;
        camera.lookAt(0, 0, 0);
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
