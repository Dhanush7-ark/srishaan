'use client';
import { useEffect, useRef } from 'react';
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window === 'undefined' || window.matchMedia('(pointer:coarse)').matches) return;
    const dot = dotRef.current!; const ring = ringRef.current!;
    let rx = 0, ry = 0, mx = 0, my = 0;
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; dot.style.left = mx+'px'; dot.style.top = my+'px'; };
    const lerp = (a:number,b:number,t:number)=>a+(b-a)*t;
    let raf: number;
    const loop = () => { rx=lerp(rx,mx,.15); ry=lerp(ry,my,.15); ring.style.left=rx+'px'; ring.style.top=ry+'px'; raf=requestAnimationFrame(loop); };
    loop();
    window.addEventListener('mousemove', onMove, {passive:true});
    const hoverEls = 'a, button, input, textarea, select, .tilt-card';
    const over = () => ring.classList.add('chover');
    const out  = () => ring.classList.remove('chover');
    document.querySelectorAll(hoverEls).forEach(el=>{ el.addEventListener('mouseenter',over); el.addEventListener('mouseleave',out); });
    const obs = new MutationObserver(()=>{
      document.querySelectorAll(hoverEls).forEach(el=>{ el.addEventListener('mouseenter',over); el.addEventListener('mouseleave',out); });
    });
    obs.observe(document.body,{childList:true,subtree:true});
    return () => { window.removeEventListener('mousemove',onMove); cancelAnimationFrame(raf); obs.disconnect(); };
  }, []);
  return (<><div id="cursor-dot" ref={dotRef}/><div id="cursor-ring" ref={ringRef}/></>);
}
