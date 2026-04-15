'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Navbar() {
  const pathname = usePathname();
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setStuck(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav id="main-nav" className={stuck ? 'stuck' : ''}>
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 no-underline" style={{color:'var(--white)'}}>
        <span className="w-8 h-9 flex-shrink-0">
          <svg viewBox="0 0 40 44" fill="none" width="32" height="36">
            <path d="M20 2 C25 7 27 14 24 21 C21 27 15 30 11 33 C9 29 9 22 12 15 C15 8 20 2 20 2Z" fill="#F0A500"/>
            <path d="M20 7 C22 11 23 16 20 20 C18 16 17 11 20 7Z" fill="#1A3A8F"/>
            <circle cx="20" cy="16" r="3.2" fill="#1A3A8F"/>
            <circle cx="20" cy="16" r="1.7" fill="#2D5BE3"/>
            <circle cx="20" cy="16" r="0.7" fill="#fff"/>
            <path d="M10 33 C6 28 4 21 7 15" stroke="#1A3A8F" strokeWidth="1.4" strokeLinecap="round"/>
            <path d="M12 35 C7 30 6 23 9 18" stroke="#1A3A8F" strokeWidth="1.4" strokeLinecap="round"/>
            <path d="M11 33 C9 37 9 41 10 43" stroke="#F0A500" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
        </span>
        <span style={{fontFamily:'var(--font-playfair)',fontSize:'18px',fontWeight:700,letterSpacing:'-.01em'}}>Srishaan</span>
      </Link>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex items-center gap-1 list-none">
        {links.map(l => (
          <li key={l.href}>
            <Link href={l.href} style={{
              padding:'8px 14px',borderRadius:'6px',fontSize:'13.5px',fontWeight:500,
              color: isActive(l.href) ? 'var(--gold)' : 'var(--muted)',
              textDecoration:'none', transition:'color .2s',
            }}>{l.label}</Link>
          </li>
        ))}
      </ul>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* Partner badge */}
        <div className="hidden lg:flex items-center gap-2 pl-4 ml-1" style={{borderLeft:'1px solid var(--bdr)'}}>
          <span style={{fontSize:'9px',fontWeight:600,textTransform:'uppercase',letterSpacing:'.12em',color:'var(--dim)',whiteSpace:'nowrap'}}>Partner</span>
          <div className="flex items-center gap-1.5">
            <svg viewBox="0 0 26 24" width="24" height="22" fill="none">
              <path d="M2 22 L8.5 2 L13.5 2 L7 22 Z" fill="#F0A500"/>
              <path d="M12.5 2 L17.5 2 L24 22 L19.5 22 Z" fill="#F0A500"/>
              <path d="M9.5 2 L13.5 2 L10.2 12 L8 12 Z" fill="#1B5298"/>
            </svg>
            <span className="flex flex-col gap-0.5 leading-none">
              <span className="flex items-baseline" style={{gap:0}}>
                <span style={{fontSize:'13px',fontWeight:800,color:'#1B5298',fontFamily:'var(--font-inter)'}}>M</span>
                <span style={{fontSize:'9px',fontWeight:700,color:'#F0A500',fontFamily:'var(--font-inter)'}}>SYS</span>
              </span>
              <span style={{fontSize:'7px',fontWeight:700,color:'#1B5298',letterSpacing:'.2em',textTransform:'uppercase'}}>CONNECT</span>
            </span>
          </div>
        </div>

        <ThemeToggle />
        <Link href="/contact" className="btn-gold hidden sm:inline-flex" style={{padding:'9px 22px',fontSize:'13.5px',borderRadius:'6px'}}>Get Started</Link>

        {/* Hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={()=>setOpen(!open)} aria-label="Menu" style={{background:'none',border:'none',cursor:'pointer'}}>
          <span className="block w-5 h-0.5" style={{background:'var(--muted)'}}/>
          <span className="block w-5 h-0.5" style={{background:'var(--muted)'}}/>
          <span className="block w-5 h-0.5" style={{background:'var(--muted)'}}/>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 md:hidden flex flex-col py-4" style={{background:'rgba(4,9,26,.97)',borderTop:'1px solid var(--bdr)'}}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={()=>setOpen(false)} style={{padding:'12px 5%',fontSize:'15px',fontWeight:500,color:isActive(l.href)?'var(--gold)':'var(--muted)',textDecoration:'none'}}>
              {l.label}
            </Link>
          ))}
          <div className="px-[5%] pt-3">
            <Link href="/contact" className="btn-gold" onClick={()=>setOpen(false)}>Get Started</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
