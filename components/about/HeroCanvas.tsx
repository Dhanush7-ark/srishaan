'use client';
import { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animId: number;
    let cleanupFns: Array<() => void> = [];

    (async () => {
      const THREE = await import('three');
      const canvas = canvasRef.current;
      if (!canvas) return;

      const parent = canvas.parentElement;
      const W = () => parent?.offsetWidth || window.innerWidth;
      const H = () => parent?.offsetHeight || window.innerHeight;

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(W(), H());

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(55, W() / H(), 0.1, 100);
      camera.position.set(0, 0, 6);

      // In newer Three.js, default decay is 2. Set to 0 for r128 legacy behavior, or multiply intensity
      scene.add(new THREE.AmbientLight(0xffffff, 0.6));

      const gL = new THREE.PointLight(0xF0A500, 150, 20); // increased intensity
      gL.position.set(5, 3, 3);
      gL.decay = 1;
      scene.add(gL);

      const bL = new THREE.PointLight(0x2D5BE3, 80, 16); // increased intensity
      bL.position.set(-4, -2, 3);
      bL.decay = 1;
      scene.add(bL);

      const tk = new THREE.Mesh(
        new THREE.TorusKnotGeometry(1.2, 0.3, 120, 16),
        new THREE.MeshPhongMaterial({ color: 0x1A3A8F, transparent: true, opacity: 0.6, shininess: 80, specular: 0x3366FF })
      );
      tk.position.set(4.2, 0, 0);
      scene.add(tk);

      const tke = new THREE.LineSegments(
        new THREE.EdgesGeometry(new THREE.TorusKnotGeometry(1.22, 0.305, 60, 8)),
        new THREE.LineBasicMaterial({ color: 0xF0A500, transparent: true, opacity: 0.15 })
      );
      tke.position.copy(tk.position);
      scene.add(tke);

      const N = 80;
      const pos = new Float32Array(N * 3);
      for (let i = 0; i < N; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 16;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
      }
      const pg = new THREE.BufferGeometry();
      pg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      scene.add(new THREE.Points(pg, new THREE.PointsMaterial({ color: 0xF0A500, size: 0.02, transparent: true, opacity: 0.3 })));

      let mx = 0, my = 0, t = 0;
      const onMove = (e: MouseEvent) => {
        mx = (e.clientX / window.innerWidth - 0.5) * 2;
        my = (e.clientY / window.innerHeight - 0.5) * 2;
      };

      if (!window.matchMedia('(pointer: coarse)').matches) {
        window.addEventListener('mousemove', onMove, { passive: true });
        cleanupFns.push(() => window.removeEventListener('mousemove', onMove));
      }

      const tick = () => {
        animId = requestAnimationFrame(tick);
        t += 0.005;
        tk.rotation.x += 0.003;
        tk.rotation.y += 0.005;
        tke.rotation.x = tk.rotation.x;
        tke.rotation.y = tk.rotation.y;

        // Smooth parallax
        tk.position.x += (4.2 + mx * 0.3 - tk.position.x) * 0.05;
        tk.position.y += (-my * 0.2 - tk.position.y) * 0.05;
        tke.position.copy(tk.position);

        camera.position.x += (mx * 0.2 - camera.position.x) * 0.04;
        camera.position.y += (-my * 0.15 - camera.position.y) * 0.04;
        camera.lookAt(2, 0, 0); // Focus slightly towards the right

        gL.intensity = 150 + Math.sin(t * 1.5) * 30;
        renderer.render(scene, camera);
      };
      tick();

      const onResize = () => {
        renderer.setSize(W(), H());
        camera.aspect = W() / H();
        camera.updateProjectionMatrix();
      };
      window.addEventListener('resize', onResize);
      cleanupFns.push(() => window.removeEventListener('resize', onResize));
      cleanupFns.push(() => { cancelAnimationFrame(animId); renderer.dispose(); });
    })();

    return () => cleanupFns.forEach(fn => fn());
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />;
}
