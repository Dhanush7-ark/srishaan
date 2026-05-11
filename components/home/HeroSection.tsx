'use client';
import Link from 'next/link';
import { useEffect, useRef, Fragment } from 'react';
import FinanceCanvas from './FinanceCanvas';

export default function HeroSection() {
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const inner = innerRef.current;
    let sy = 0, cur = 0;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));
    const onScroll = () => { sy = window.scrollY; };
    window.addEventListener('scroll', onScroll, { passive: true });
    let raf: number;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      cur = lerp(cur, sy, 0.09);
      if (inner) { inner.style.transform = `translateY(${cur * .18}px)`; inner.style.opacity = String(clamp(1 - cur / 600, 0, 1)); }
    };
    tick();
    // word reveal for hero heading
    const heading = document.querySelector('.hero-h1') as HTMLElement;
    if (heading) { heading.classList.add('in'); }
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section id="hero" className="hero-section">
      <style dangerouslySetInnerHTML={{
        __html: `
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #04091A;
          transition: background .4s ease;
        }
        .hero-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background: url('/images/image copy.png') no-repeat center center;
          background-size: cover;
          transform: scale(1.1);
          z-index: 1;
          transition: background .4s ease;
        }
        body.light .hero-section::before {
          background: url('/images/image.png') no-repeat center center;
          background-size: cover;
        }
        .hero-container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 120px 8% 80px;
          display: grid;
          grid-template-columns: 1fr 1.08fr;
          gap: 48px;
          align-items: center;
          min-height: 100vh;
        }
        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            padding: 100px 8% 60px;
            text-align: center;
            gap: 60px;
          }
          .hero-content {
            align-items: center;
          }
          .hero-viz {
            height: 400px !important;
          }
          .hero-card-1 { right: 0% !important; top: 0% !important; }
          .hero-card-2 { left: 0% !important; bottom: 0% !important; }
        }
        @media (max-width: 640px) {
          .hero-container { padding-top: 90px; }
          .hero-viz { height: 320px !important; }
          .hero-stats { flex-direction: column; gap: 20px !important; }
          .hero-stats > div { width: 100%; }
          .hero-stats-divider { display: none !important; }
          .hero-badge { 
            font-size: 10px !important; 
            gap: 6px !important; 
            padding: 5px 10px !important;
            width: 100%;
            justify-content: center;
            flex-wrap: wrap;
          }
          .hero-btns {
            flex-direction: column;
            width: 100%;
          }
          .hero-btns > a {
            width: 100%;
            justify-content: center;
          }
        }
        @keyframes heroCardIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes floatY2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .hero-stat-link {
          text-decoration: none;
          transition: transform 0.3s ease, opacity 0.3s ease;
          display: block;
        }
        .hero-stat-link:hover {
          transform: translateY(-4px);
        }
        .hero-stat-link:hover .stat-title {
          color: var(--gold) !important;
        }
        .hero-stat-link:hover .stat-dot {
          opacity: 1 !important;
          transform: scale(1.2);
        }
      `}} />

      <div ref={innerRef} className="hero-container">
        {/* LEFT: Content */}
        <div className="hero-content" style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>

          {/* Heading */}
          <h1 className="word-reveal hero-h1" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.4rem, 4.8vw, 4.9rem)', fontWeight: 700, lineHeight: 1.06, letterSpacing: '-.03em' }}>
            <span className="word" style={{ marginRight: '0.25em' }}><span>Structured</span></span>
            <span className="word" style={{ marginRight: '0.25em' }}><span></span></span><br className="hidden md:block" />
            <span className="word" style={{ marginRight: '0.25em' }}><span>Execution-</span></span><br className="hidden md:block" />
            <span className="word" style={{ marginRight: '0.25em' }}><span className="gold-grad">Driven Model</span></span><br className="hidden md:block" />
            <span className="word" style={{ marginRight: '0.25em' }}><span className="gold-grad">&amp; Confidence.</span></span>
          </h1>

          {/* Description */}
          <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.78, fontWeight: 300, maxWidth: '460px', opacity: 0, animation: 'fadeUp .7s .6s cubic-bezier(.16,1,.3,1) forwards' }}>
            We follow a structured, execution-driven model designed to bridge the gap between strategic vision and operational reality.
          </p>

          {/* CTAs */}
          <div className="hero-btns" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'inherit', opacity: 0, animation: 'fadeUp .7s .75s cubic-bezier(.16,1,.3,1) forwards' }}>
            <Link href="/services" className="btn-gold">
              Explore Services
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>

          {/* Microcopy */}
          {/* <div style={{ display: 'flex', alignItems: 'center', gap: '7px', color: 'var(--dim)', fontSize: '12px', opacity: 0, animation: 'fadeUp .7s .88s cubic-bezier(.16,1,.3,1) forwards' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            No hidden fees &nbsp;·&nbsp; SEBI registered &nbsp;·&nbsp; ISO 27001 secured
          </div> */}

          {/* Stats row */}
          <div className="hero-stats" style={{ display: 'flex', gap: '32px', alignItems: 'center', paddingTop: '10px', opacity: 0, animation: 'fadeUp .7s 1.0s cubic-bezier(.16,1,.3,1) forwards' }}>
            {[
              { v: 'IT & ITES Services', h: '/services#it-ites' },
              { v: 'Project Execution', h: '/services#project-execution' },
              { v: 'Supply & Resale', h: '/services#supply-resale' }
            ].map((item, i) => (
              <Fragment key={item.v}>
                {i > 0 && <div className="hero-stats-divider" style={{ width: '1px', height: '30px', background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />}
                <Link href={item.h} className="hero-stat-link">
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', position: 'relative' }}>
                    <div className="stat-dot" style={{ 
                      width: '6px', 
                      height: '6px', 
                      borderRadius: '50%', 
                      background: 'var(--gold)', 
                      opacity: 0, 
                      transform: 'translateY(10px)',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      position: 'absolute',
                      top: '-16px'
                      }} />
                    <div className="stat-title" style={{ 
                      fontFamily: 'var(--font-playfair)', 
                      fontSize: '16px', 
                      fontWeight: 600, 
                      color: 'var(--white)', 
                      lineHeight: 1, 
                      transition: 'all 0.3s ease',
                      letterSpacing: '0.01em'
                    }}>{item.v}</div>
                  </div>
                </Link>
              </Fragment>
            ))}
          </div>
        </div>

        {/* RIGHT: Visualization Spacer */}
        <div className="hero-viz" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '560px', opacity: 0, animation: 'fadeUp .9s .28s cubic-bezier(.16,1,.3,1) forwards' }}>
          {/* Visualization replaced by full-section background image */}
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{ position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)', zIndex: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', color: 'var(--dim)', fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', opacity: 0, animation: 'fadeUp .7s 1.5s cubic-bezier(.16,1,.3,1) forwards' }}>
        <span>Scroll</span>
        <div style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom,transparent,var(--dim))', animation: 'slideDown 1.6s ease-in-out infinite' }} />
      </div>
    </section>
  );
}
