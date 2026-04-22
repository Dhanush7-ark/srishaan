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

      const parent = canvas.parentElement;
      const W = () => parent?.offsetWidth || window.innerWidth;
      const H = () => parent?.offsetHeight || window.innerHeight;

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(W(), H());

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(55, W() / H(), 0.1, 100);
      camera.position.set(0, 0, 4.5);

      // In newer Three.js, default decay is 2. Set to 0 for r128 legacy behavior, or multiply intensity
      scene.add(new THREE.AmbientLight(0xffffff, 0.7));
      
      const gL = new THREE.PointLight(0xF0A500, 130, 18); // increased intensity
      gL.position.set(4, 3, 3);
      gL.decay = 1;
      scene.add(gL);
      
      const bL = new THREE.PointLight(0x2D5BE3, 80, 14); // increased intensity
      bL.position.set(-3, -1, 2);
      bL.decay = 1;
      scene.add(bL);

      const dm = new THREE.Mesh(
        new THREE.DodecahedronGeometry(1.4, 0),
        new THREE.MeshPhongMaterial({ color: 0x1A3A8F, transparent: true, opacity: 0.55, shininess: 100, specular: 0x2255CC })
      );
      scene.add(dm);

      const de = new THREE.LineSegments(
        new THREE.EdgesGeometry(new THREE.DodecahedronGeometry(1.42, 0)),
        new THREE.LineBasicMaterial({ color: 0xF0A500, transparent: true, opacity: 0.35 })
      );
      scene.add(de);

      let t = 0;
      const tick = () => {
        animId = requestAnimationFrame(tick);
        t += 0.004;
        
        dm.rotation.x += 0.004;
        dm.rotation.y += 0.007;
        
        de.rotation.x = dm.rotation.x;
        de.rotation.y = dm.rotation.y;
        
        dm.position.y = Math.sin(t) * 0.1;
        de.position.y = dm.position.y;
        
        gL.intensity = 130 + Math.sin(t * 2) * 20;
        
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

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />;
}
