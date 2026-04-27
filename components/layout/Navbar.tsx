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
    { href: '/contact', label: 'CONTACT US' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav id="main-nav" className={stuck ? 'stuck' : ''} style={{
      background: 'var(--navy)',
      borderBottom: '1px solid var(--bdr)',
      transition: 'all 0.3s ease',
      height: '76px',
      padding: '0 5%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000
    }}>
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3.5 no-underline">
        <div className="relative w-9 h-11 flex items-center justify-center">
          <svg viewBox="0 0 40 44" fill="none" width="32" height="36">
            <path d="M20 2 C25 7 27 14 24 21 C21 27 15 30 11 33 C9 29 9 22 12 15 C15 8 20 2 20 2Z" fill="var(--gold)" />
            <path d="M20 7 C22 11 23 16 20 20 C18 16 17 11 20 7Z" fill="var(--blue)" />
            <circle cx="20" cy="16" r="3.2" fill="var(--blue)" />
            <circle cx="20" cy="16" r="1.7" fill="var(--blue-b)" />
            <circle cx="20" cy="16" r="0.7" fill="#fff" />
            <path d="M10 33 C6 28 4 21 7 15" stroke="var(--blue)" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M12 35 C7 30 6 23 9 18" stroke="var(--blue)" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M11 33 C9 37 9 41 10 43" stroke="var(--gold)" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </div>
        <span style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: '24px',
          fontWeight: 700,
          color: 'var(--white)',
          letterSpacing: '-0.01em'
        }}>Srishaan</span>
      </Link>

      {/* Desktop Nav Links */}
      <ul className="hidden lg:flex items-center gap-10 list-none m-0 p-0">
        {links.map(l => {
          const active = isActive(l.href);
          return (
            <li key={l.href}>
              <Link href={l.href} style={{
                position: 'relative',
                padding: '8px 0',
                fontSize: '14.5px',
                fontWeight: active ? 700 : 500,
                color: active ? 'var(--white)' : 'var(--muted)',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                display: 'block'
              }}>
                {l.label}
                {active && (
                  <span style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    height: '2px',
                    background: 'var(--gold)',
                    borderRadius: '2px'
                  }} />
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Right side */}
      <div className="flex items-center gap-6">
        {/* Partner badge */}
        <div className="hidden xl:flex items-center gap-4 ml-4" style={{ borderLeft: '1.5px solid var(--bdr)', height: '32px', paddingLeft: '32px' }}>
          <span style={{
            fontSize: '10px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--dim)',
            whiteSpace: 'nowrap'
          }}>Partner</span>
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 26 24" width="24" height="22" fill="none">
              <path d="M2 22 L8.5 2 L13.5 2 L7 22 Z" fill="var(--gold)" />
              <path d="M12.5 2 L17.5 2 L24 22 L19.5 22 Z" fill="var(--gold)" />
              <path d="M9.5 2 L13.5 2 L10.2 12 L8 12 Z" fill="var(--blue)" />
            </svg>
            <div className="flex flex-col leading-none">
              <div className="flex items-baseline gap-0.5">
                <span style={{ fontSize: '14px', fontWeight: 900, color: 'var(--blue)', fontFamily: 'var(--font-inter)' }}>M</span>
                <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--gold)', fontFamily: 'var(--font-inter)' }}>SYS</span>
              </div>
              <span style={{ fontSize: '7.5px', fontWeight: 800, color: 'var(--blue)', letterSpacing: '.18em', textTransform: 'uppercase' }}>CONNECT</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/contact" className="btn-gold hidden sm:inline-flex" style={{
            padding: '11px 24px',
            fontSize: '14.5px',
            borderRadius: '10px',
            fontWeight: 600,
            color: '#fff' // Ensure white text on gold button
          }}>Get Started</Link>

          {/* Hamburger */}
          <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(!open)} aria-label="Menu" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <span className="block w-6 h-0.5" style={{ background: 'var(--white)' }} />
            <span className="block w-6 h-0.5" style={{ background: 'var(--white)' }} />
            <span className="block w-6 h-0.5" style={{ background: 'var(--white)' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 lg:hidden flex flex-col py-6 px-[5%] gap-4" style={{
          background: 'var(--navy)',
          borderTop: '1px solid var(--bdr)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              fontSize: '17px',
              fontWeight: 500,
              color: isActive(l.href) ? 'var(--gold)' : 'var(--white)',
              textDecoration: 'none',
              padding: '10px 0'
            }}>
              {l.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link href="/contact" className="btn-gold w-full justify-center" onClick={() => setOpen(false)} style={{ color: '#fff' }}>Get Started</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
