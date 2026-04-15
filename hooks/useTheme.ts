'use client';
import { useEffect, useState } from 'react';
export function useTheme() {
  const [theme, setTheme] = useState<'dark'|'light'>('dark');
  useEffect(() => {
    const saved = localStorage.getItem('srishaan-theme');
    if (saved === 'light') { document.body.classList.add('light'); setTheme('light'); }
  }, []);
  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.body.classList.toggle('light', next === 'light');
    localStorage.setItem('srishaan-theme', next);
    setTheme(next);
  };
  return { theme, toggle };
}
