'use client';
import React, { useRef } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function TiltCard({ children, className = '', style }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    el.style.transform = `perspective(700px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.02)`;
    el.style.setProperty('--mx', `${(e.clientX - r.left) / r.width  * 100}%`);
    el.style.setProperty('--my', `${(e.clientY - r.top)  / r.height * 100}%`);
  };

  const onLeave = () => {
    const el = ref.current!;
    el.style.transform = '';
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{ transition: 'transform .18s ease', willChange: 'transform', position: 'relative', ...style }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* Shimmer overlay driven by mouse position */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 'inherit', pointerEvents: 'none', zIndex: 1,
        background: 'radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,.06) 0%, transparent 65%)',
      }} />
      {children}
    </div>
  );
}
