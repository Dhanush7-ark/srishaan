'use client';
import { useEffect, useRef } from 'react';
export default function GlobeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    let animId: number;
    (async () => {
      const THREE = await import('three');
      const canvas = canvasRef.current; if (!canvas) return;
      const parent = canvas.parentElement!;
      const w = parent.offsetWidth || 520, h = parent.offsetHeight || 520;
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(w, h); renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 100);
      camera.position.z = 2.85;
      const G = new THREE.Group(); scene.add(G);
      const R = 1;
      // Dot field
      const N=1600, pos:number[]=[];
      const phi=Math.PI*(3-Math.sqrt(5));
      for(let i=0;i<N;i++){const y=1-(i/(N-1))*2;const r=Math.sqrt(1-y*y);const th=phi*i;pos.push(R*r*Math.cos(th),R*y,R*r*Math.sin(th));}
      const dg=new THREE.BufferGeometry();dg.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));
      G.add(new THREE.Points(dg,new THREE.PointsMaterial({color:0x2D5BE3,size:0.013,transparent:true,opacity:0.55})));
      // Wireframe
      G.add(new THREE.Mesh(new THREE.SphereGeometry(R,36,18),new THREE.MeshBasicMaterial({color:0x1A3A8F,wireframe:true,transparent:true,opacity:0.04})));
      // Core
      G.add(new THREE.Mesh(new THREE.SphereGeometry(0.18,16,16),new THREE.MeshBasicMaterial({color:0x2D5BE3,transparent:true,opacity:0.13})));
      G.add(new THREE.Mesh(new THREE.SphereGeometry(0.09,16,16),new THREE.MeshBasicMaterial({color:0x4A7AFF,transparent:true,opacity:0.22})));
      // Hub nodes
      const ll2v=(lat:number,lng:number)=>{const ph=(90-lat)*Math.PI/180;const th=(lng+180)*Math.PI/180;return new THREE.Vector3(-R*Math.sin(ph)*Math.cos(th),R*Math.cos(ph),R*Math.sin(ph)*Math.sin(th));};
      const HUBS=[[51.5,0],[40.7,-74],[35.7,139.7],[22.3,114.2],[19.1,72.9],[1.3,103.8],[48.9,2.3],[37.6,-122.4],[-33.9,18.4],[55.8,37.6]];
      const hvs=HUBS.map(([la,lg])=>ll2v(la,lg));
      hvs.forEach(p=>{
        const m=new THREE.Mesh(new THREE.SphereGeometry(0.024,8,8),new THREE.MeshBasicMaterial({color:0xF0A500}));m.position.copy(p);G.add(m);
        const ring=new THREE.Mesh(new THREE.RingGeometry(0.038,0.054,20),new THREE.MeshBasicMaterial({color:0xF0A500,side:THREE.DoubleSide,transparent:true,opacity:0.28}));ring.position.copy(p);ring.lookAt(new THREE.Vector3(0,0,0));G.add(ring);
      });
      // Arcs
      type V3 = InstanceType<typeof THREE.Vector3>;
      const makeArc=(v1:V3,v2:V3)=>{const pts=[];for(let i=0;i<=56;i++){const t=i/56;const p=new THREE.Vector3().lerpVectors(v1,v2,t);p.normalize().multiplyScalar(R+Math.sin(Math.PI*t)*0.32);pts.push(p);}return new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),new THREE.LineBasicMaterial({color:0xF0A500,transparent:true,opacity:0.3}));};
      [[0,1],[1,2],[2,3],[3,4],[4,5],[5,2],[1,6],[0,7],[6,0],[4,9],[8,1],[7,5]].forEach(([a,b])=>G.add(makeArc(hvs[a],hvs[b])));
      // Halo
      scene.add(new THREE.Mesh(new THREE.RingGeometry(R*1.06,R*1.16,80),new THREE.MeshBasicMaterial({color:0x2D5BE3,side:THREE.DoubleSide,transparent:true,opacity:0.06})));
      // Dust
      const dp:number[]=[];for(let i=0;i<200;i++){const th=Math.random()*Math.PI*2;const ph=Math.random()*Math.PI;const r=1.28+Math.random()*.65;dp.push(r*Math.sin(ph)*Math.cos(th),r*Math.sin(ph)*Math.sin(th),r*Math.cos(ph));}
      const dg2=new THREE.BufferGeometry();dg2.setAttribute('position',new THREE.Float32BufferAttribute(dp,3));
      scene.add(new THREE.Points(dg2,new THREE.PointsMaterial({color:0xF0A500,size:0.009,transparent:true,opacity:0.28})));
      // Mouse tilt
      let tX=0,tY=0,cX=0,cY=0,autoY=0;
      const onMove=(e:MouseEvent)=>{tX=(e.clientY/innerHeight-.5)*.45;tY=(e.clientX/innerWidth-.5)*.55;};
      if(!matchMedia('(pointer:coarse)').matches) window.addEventListener('mousemove',onMove,{passive:true});
      const loop=()=>{animId=requestAnimationFrame(loop);autoY+=.0028;cX+=(tX-cX)*.04;cY+=(tY-cY)*.04;G.rotation.y=autoY+cY;G.rotation.x=cX;renderer.render(scene,camera);};
      loop();
      const onResize=()=>{const nw=parent.offsetWidth||520,nh=parent.offsetHeight||520;renderer.setSize(nw,nh);camera.aspect=nw/nh;camera.updateProjectionMatrix();};
      window.addEventListener('resize',onResize);
      return ()=>{cancelAnimationFrame(animId);window.removeEventListener('mousemove',onMove);window.removeEventListener('resize',onResize);renderer.dispose();};
    })();
    return ()=>cancelAnimationFrame(animId);
  }, []);
  return <canvas ref={canvasRef} style={{width:'100%',height:'100%',display:'block'}} />;
}
