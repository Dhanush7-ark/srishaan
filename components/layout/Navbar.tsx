'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import Image from 'next/image';

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
    <nav id="main-nav" className={stuck ? 'stuck' : ''} style={{
      background: 'var(--navy)',
      borderBottom: '1px solid var(--bdr)',
      transition: 'all 0.3s ease',
      height: 'var(--nav-h, 76px)',
      padding: '0 8%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000
    }}>
      <style dangerouslySetInnerHTML={{
        __html: `
        :root { --nav-h: 76px; }
        @media (max-width: 768px) {
          :root { --nav-h: 64px; }
          .nav-logo { height: 42px !important; }
          #main-nav { padding: 0 8% !important; }
          .nav-btn-desktop { display: none !important; }
        }
        @media (min-width: 1024px) {
          .nav-btn-desktop { display: inline-flex !important; }
        }
        .startup-india-logo {
          height: 48px;
          width: auto;
          object-fit: contain;
          transition: all 0.3s ease;
          display: block;
        }
        body:not(.light) .startup-india-logo {
          filter: invert(1) brightness(1.2);
        }
      `}} />
      {/* Logo */}
      <Link href="/" className="flex items-center no-underline">
        <Image
          src="/images/Srishaan_Logo-removebg-preview.png"
          alt="Srishaan"
          width={200}
          height={56}
          priority
          className="object-contain nav-logo"
          style={{ height: '56px', width: 'auto' }}
        />
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
      <div className="flex items-center gap-3 sm:gap-6">
        {/* Startup India Logo */}
        <div className="hidden lg:flex items-center ml-2">
          <img 
            src="/images/startup-india-transparent.png" 
            alt="DPIIT Startup India" 
            className="startup-india-logo"
          />
        </div>

        {/* Partner badge */}
        <div className="hidden md:flex items-center gap-4 ml-4" style={{ borderLeft: '1.5px solid var(--bdr)', height: '36px', paddingLeft: '24px' }}>
          <span style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--dim)', whiteSpace: 'nowrap' }}>Partner</span>
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 26 24" width="25" height="23" fill="none">
              <path d="M2 22 L8.5 2 L13.5 2 L7 22 Z" fill="var(--gold)" />
              <path d="M12.5 2 L17.5 2 L24 22 L19.5 22 Z" fill="var(--gold)" />
              <path d="M9.5 2 L13.5 2 L10.2 12 L8 12 Z" fill="var(--blue)" />
            </svg>
            <div className="flex flex-col leading-none">
              <div className="flex items-baseline gap-0.5">
                <span style={{ fontSize: '15px', fontWeight: 900, color: 'var(--blue)' }}>M</span>
                <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--gold)' }}>SYS</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <ThemeToggle />
          <Link href="/contact" className="btn-gold nav-btn-desktop" style={{ padding: '10px 20px', fontSize: '13px', borderRadius: '8px', fontWeight: 600, color: '#fff' }}>Get Started</Link>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <div className="relative w-5 h-4">
              <span className={`absolute left-0 block w-full h-0.5 transition-all duration-300 ${open ? 'top-2 rotate-45' : 'top-0'}`} style={{ background: 'var(--white)' }} />
              <span className={`absolute left-0 top-1.5 block w-full h-0.5 transition-opacity duration-200 ${open ? 'opacity-0' : 'opacity-100'}`} style={{ background: 'var(--white)' }} />
              <span className={`absolute left-0 block w-full h-0.5 transition-all duration-300 ${open ? 'top-2 -rotate-45' : 'top-3'}`} style={{ background: 'var(--white)' }} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu Overlay */}
      <div className={`fixed inset-0 top-[var(--nav-h)] z-[999] lg:hidden transition-all duration-500 ease-in-out ${open ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}>
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-md"
          onClick={() => setOpen(false)}
        />
        <div className={`relative bg-navy border-b border-bdr px-[8%] py-10 flex flex-col gap-6 transform transition-transform duration-500 ease-out ${open ? 'translate-y-0' : '-translate-y-full'}`} style={{ background: 'var(--navy)' }}>
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: '22px',
                fontFamily: 'var(--font-playfair)',
                fontWeight: isActive(l.href) ? 700 : 500,
                color: isActive(l.href) ? 'var(--gold)' : 'var(--white)',
                textDecoration: 'none',
                opacity: open ? 1 : 0,
                transform: open ? 'translateX(0)' : 'translateX(-20px)',
                transition: `all 0.4s ease-out ${0.1 + i * 0.05}s`
              }}
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-bdr" style={{ opacity: open ? 1 : 0, transition: 'all 0.4s ease-out 0.35s' }}>
            <Link href="/contact" className="btn-gold w-full justify-center py-4 text-base" onClick={() => setOpen(false)} style={{ color: '#fff' }}>Get Started</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
