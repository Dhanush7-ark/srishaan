'use client';
import { useEffect, useRef } from 'react';

export default function FinanceCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animId: number;
    (async () => {
      const THREE = await import('three');
      const canvas = canvasRef.current;
      if (!canvas) return;
      const parent = canvas.parentElement!;
      const w = parent.offsetWidth || 520, h = parent.offsetHeight || 520;

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
      camera.position.set(4, 3, 5);
      camera.lookAt(0, 0, 0);

      const group = new THREE.Group();
      scene.add(group);

      // Lighting
      scene.add(new THREE.AmbientLight(0xffffff, 0.6));
      const gL = new THREE.PointLight(0xF0A500, 100, 20);
      gL.position.set(3, 4, 2);
      gL.decay = 1;
      scene.add(gL);

      const bL = new THREE.PointLight(0x2D5BE3, 80, 20);
      bL.position.set(-3, 2, 4);
      bL.decay = 1;
      scene.add(bL);

      // Financial Story: Growing Bar Chart
      const bars: any[] = [];
      const data = [0.2, 0.5, 0.9, 1.4, 2.1, 3.0]; // Upward trend
      
      const barMaterial = new THREE.MeshPhongMaterial({
        color: 0x1A3A8F,
        transparent: true,
        opacity: 0.8,
        shininess: 90,
      });

      const goldMaterial = new THREE.MeshPhongMaterial({
        color: 0xF0A500,
        shininess: 100,
      });

      const gap = 0.8;
      const startX = -((data.length - 1) * gap) / 2;

      data.forEach((val, i) => {
        // Base bar
        const geometry = new THREE.BoxGeometry(0.5, 0.1, 0.5); // Initial tiny height
        const mesh = new THREE.Mesh(geometry, barMaterial);
        mesh.position.set(startX + i * gap, 0.05, 0);
        
        // Store target height for animation (storytelling growth)
        mesh.userData = { targetHeight: val, currentHeight: 0.1 };
        
        // Gold cap on top of the bar
        const capGeom = new THREE.BoxGeometry(0.52, 0.05, 0.52);
        const cap = new THREE.Mesh(capGeom, goldMaterial);
        cap.position.y = 0.05;
        mesh.add(cap);
        mesh.userData.cap = cap;

        group.add(mesh);
        bars.push(mesh);
      });

      // Upward Trendline (Spline)
      const points = data.map((val, i) => new THREE.Vector3(startX + i * gap, val + 0.3, 0));
      const curve = new THREE.CatmullRomCurve3(points);
      const tubeGeom = new THREE.TubeGeometry(curve, 64, 0.04, 8, false);
      const tubeMat = new THREE.MeshPhongMaterial({
        color: 0xF0A500,
        emissive: 0xF0A500,
        emissiveIntensity: 0.5,
        transparent: true,
        opacity: 0.9,
      });
      const trendline = new THREE.Mesh(tubeGeom, tubeMat);
      
      // Animate line drawing
      tubeGeom.setDrawRange(0, 0);
      group.add(trendline);

      // Floating Particles (representing data/wealth)
      const N = 60, pPos: number[] = [];
      for (let i = 0; i < N; i++) {
        pPos.push((Math.random() - 0.5) * 6, Math.random() * 4, (Math.random() - 0.5) * 6);
      }
      const pGeom = new THREE.BufferGeometry();
      pGeom.setAttribute('position', new THREE.Float32BufferAttribute(pPos, 3));
      const pMat = new THREE.PointsMaterial({ color: 0xF0A500, size: 0.05, transparent: true, opacity: 0.6 });
      const particles = new THREE.Points(pGeom, pMat);
      group.add(particles);

      // Base grid (context for chart)
      const grid = new THREE.GridHelper(8, 16, 0x1A3A8F, 0x1A3A8F);
      grid.position.y = 0;
      (grid.material as any).transparent = true;
      (grid.material as any).opacity = 0.15;
      group.add(grid);

      // Mouse interactivity
      let tX = 0, tY = 0, cX = 0, cY = 0;
      const onMove = (e: MouseEvent) => {
        tX = (e.clientX / innerWidth - 0.5) * 0.5;
        tY = (e.clientY / innerHeight - 0.5) * 0.5;
      };
      if (!matchMedia('(pointer:coarse)').matches) window.addEventListener('mousemove', onMove, { passive: true });

      let time = 0;
      let lineProgress = 0;

      const loop = () => {
        animId = requestAnimationFrame(loop);
        time += 0.01;

        // Smooth mouse rotation
        cX += (tX - cX) * 0.05;
        cY += (tY - cY) * 0.05;
        group.rotation.y = Math.sin(time * 0.2) * 0.2 + cX;
        group.rotation.x = cY;

        // Storytelling Animation: Bars growing
        bars.forEach((bar, i) => {
          // Staggered growth
          const delay = i * 0.2;
          if (time > delay) {
            bar.userData.currentHeight += (bar.userData.targetHeight - bar.userData.currentHeight) * 0.05;
            bar.scale.y = bar.userData.currentHeight / 0.1; // Scale relative to initial geometry height
            bar.position.y = bar.userData.currentHeight / 2;
            
            // Keep cap visually same thickness by inverse scaling
            bar.userData.cap.scale.y = 0.1 / bar.userData.currentHeight;
            bar.userData.cap.position.y = 0.05; // Stay at top of scaled box
          }
        });

        // Storytelling Animation: Line drawing
        if (time > 1.0) {
          lineProgress += (1 - lineProgress) * 0.03;
          const maxPoints = tubeGeom.index ? tubeGeom.index.count : tubeGeom.attributes.position.count;
          tubeGeom.setDrawRange(0, Math.floor(maxPoints * lineProgress));
        }

        // Particle floating
        const positions = particles.geometry.attributes.position.array;
        for (let i = 0; i < N; i++) {
          positions[i * 3 + 1] += 0.005; // Float up
          if (positions[i * 3 + 1] > 4) positions[i * 3 + 1] = 0; // Reset
        }
        particles.geometry.attributes.position.needsUpdate = true;

        renderer.render(scene, camera);
      };

      loop();

      const onResize = () => {
        const nw = parent.offsetWidth || 520, nh = parent.offsetHeight || 520;
        renderer.setSize(nw, nh);
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
      };
      window.addEventListener('resize', onResize);

      return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener('mousemove', onMove);
        window.removeEventListener('resize', onResize);
        renderer.dispose();
      };
    })();

    return () => cancelAnimationFrame(animId);
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />;
}
