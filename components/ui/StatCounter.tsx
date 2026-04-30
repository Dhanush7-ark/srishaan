'use client';
import { useEffect, useRef, useState } from 'react';
interface Props { target: number; suffix?: string; prefix?: string; symbol?: string; duration?: number; }
export default function StatCounter({ target, suffix='', prefix='', symbol='', duration=1800 }: Props) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(ease * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return (
    <span ref={ref} style={{ display: 'inline-flex', alignItems: 'flex-end', justifyContent: 'center', gap: '0.05em' }}>
      <span style={{ lineHeight: 0.9 }}>{prefix}{val.toLocaleString()}{symbol}</span>
      {suffix && (
        <span style={{ 
          fontSize: '0.35em', 
          fontWeight: 500, 
          opacity: 0.8, 
          marginLeft: '4px', 
          lineHeight: 1.2, 
          paddingBottom: '0.15em',
          letterSpacing: '0'
        }}>
          {suffix}
        </span>
      )}
    </span>
  );
}
