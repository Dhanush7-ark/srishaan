'use client';
import { useEffect, useRef } from 'react';
import React from 'react';
export default function SectionReveal({ children, className='', delay=0, style, id }: { children:React.ReactNode; className?:string; delay?:number; style?:React.CSSProperties; id?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e])=>{ if(e.isIntersecting){el.classList.add('in');obs.disconnect();} }, {threshold:0.12,rootMargin:'0px 0px -30px 0px'});
    obs.observe(el);
    return ()=>obs.disconnect();
  }, []);
  return <div id={id} ref={ref} className={`reveal ${className}`} style={{transitionDelay:`${delay}s`,...style}}>{children}</div>;
}
