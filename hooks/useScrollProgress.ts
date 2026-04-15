'use client';
import { useEffect, useState } from 'react';
export function useScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const handler = () => {
      const p = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
      setPct(Math.min(100, Math.max(0, p)));
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return pct;
}
