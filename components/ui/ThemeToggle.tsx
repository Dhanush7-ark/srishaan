'use client';
import { useTheme } from '@/hooks/useTheme';
export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button onClick={toggle} aria-label="Toggle theme" className="w-[38px] h-[38px] rounded-[8px] border flex items-center justify-center transition-all duration-200 hover:scale-105" style={{background:'none',borderColor:'var(--bdr)',color:'var(--muted)'}}>
      {theme === 'dark' ? (
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="8" cy="8" r="4"/><line x1="8" y1="1" x2="8" y2="3"/><line x1="8" y1="13" x2="8" y2="15"/><line x1="1" y1="8" x2="3" y2="8"/><line x1="13" y1="8" x2="15" y2="8"/><line x1="2.9" y1="2.9" x2="4.3" y2="4.3"/><line x1="11.7" y1="11.7" x2="13.1" y2="13.1"/><line x1="2.9" y1="13.1" x2="4.3" y2="11.7"/><line x1="11.7" y1="4.3" x2="13.1" y2="2.9"/></svg>
      ) : (
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 10A6 6 0 1 1 6 2a4.5 4.5 0 0 0 8 8z"/></svg>
      )}
    </button>
  );
}
