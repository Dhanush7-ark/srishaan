'use client';
import { useScrollProgress } from '@/hooks/useScrollProgress';
export default function ScrollProgress() {
  const pct = useScrollProgress();
  return <div id="progress-bar" style={{width:`${pct}%`}} />;
}
