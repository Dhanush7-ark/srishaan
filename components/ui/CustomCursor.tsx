'use client';
import { useEffect, useRef } from 'react';
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window === 'undefined' || window.matchMedia('(pointer:coarse)').matches) return;
    const dot = dotRef.current!; const ring = ringRef.current!;
    const onMove = (e: MouseEvent) => {
      dot.style.left = ring.style.left = e.clientX + 'px';
      dot.style.top = ring.style.top = e.clientY + 'px';
    };
    window.addEventListener('mousemove', onMove, {passive:true});
    const hoverEls = 'a, button, input, textarea, select, .tilt-card, .leader-card, .recog-card, .svc-item, .info-card';
    const over = () => document.body.classList.add('chover');
    const out  = () => document.body.classList.remove('chover');
    document.querySelectorAll(hoverEls).forEach(el=>{ el.addEventListener('mouseenter',over); el.addEventListener('mouseleave',out); });
    const obs = new MutationObserver(()=>{
      document.querySelectorAll(hoverEls).forEach(el=>{ el.addEventListener('mouseenter',over); el.addEventListener('mouseleave',out); });
    });
    obs.observe(document.body,{childList:true,subtree:true});
    return () => { window.removeEventListener('mousemove',onMove); obs.disconnect(); };
  }, []);
  return (<><div id="cursor-dot" ref={dotRef}/><div id="cursor-ring" ref={ringRef}/></>);
}
