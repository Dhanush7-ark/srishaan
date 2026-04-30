'use client';
import { useEffect, useRef } from 'react';
interface Props { children: string; as?: 'h1'|'h2'|'h3'; className?: string; }
export default function WordReveal({ children, as: Tag = 'h1', className = '' }: Props) {
  const ref = useRef<HTMLElement>(null);
  const words = children.split(' ');
  useEffect(() => {
    const el = ref.current; if (!el) return;
    el.classList.add('word-reveal');
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const spans = words.map((w, i) => (
    <span key={i} className="word" style={{ transitionDelay: `${i * 0.08}s`, marginRight: '0.25em' }}>
      <span>{w}</span>
    </span>
  ));
  return <Tag ref={ref as any} className={`word-reveal ${className}`}>{spans}</Tag>;
}
