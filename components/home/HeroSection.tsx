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
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'var(--navy)' }}>
      {/* Background elements */}
      <div style={{ position: 'absolute', width: '560px', height: '560px', background: 'radial-gradient(circle,rgba(26,58,143,.2),transparent 70%)', borderRadius: '50%', filter: 'blur(80px)', right: '4%', top: '6%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', width: '380px', height: '380px', background: 'radial-gradient(circle,rgba(240,165,0,.08),transparent 70%)', borderRadius: '50%', filter: 'blur(80px)', left: '6%', bottom: '18%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.055) 1px,transparent 1px)', backgroundSize: '38px 38px', maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%,black 20%,transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%,black 20%,transparent 100%)', pointerEvents: 'none' }} />

      <div ref={innerRef} style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '68px 6% 40px', display: 'grid', gridTemplateColumns: '1fr 1.08fr', gap: '48px', alignItems: 'center', minHeight: '100vh' }}>

        {/* LEFT: Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
          {/* Trust badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(240,165,0,.08)', border: '1px solid rgba(240,165,0,.22)', color: 'var(--gold)', fontSize: '11.5px', fontWeight: 600, letterSpacing: '.09em', textTransform: 'uppercase', padding: '6px 14px', borderRadius: '100px', width: 'fit-content', opacity: 0, animation: 'fadeUp .7s .1s cubic-bezier(.16,1,.3,1) forwards' }}>
            <span style={{ display: 'flex' }}>
              {['A', 'S', 'R', 'V'].map((l, i) => (
                <span key={l} style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid rgba(255,255,255,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '7px', fontWeight: 700, marginLeft: i === 0 ? 0 : '-4px', background: ['#2D5BE3', '#1A3A8F', '#F0A500', '#16A34A'][i], color: i === 2 ? '#0B1740' : '#fff' }}>{l}</span>
              ))}
            </span>
            <span style={{ width: '1px', height: '12px', background: 'rgba(240,165,0,.3)' }} />
            Trusted by 15,000+ Families
            <span style={{ width: '1px', height: '12px', background: 'rgba(240,165,0,.3)' }} />
            <span style={{ fontSize: '10px', fontWeight: 700, background: 'rgba(240,165,0,.15)', padding: '2px 7px', borderRadius: '4px', letterSpacing: '.05em' }}>SEBI ✓</span>
          </div>

          {/* Heading */}
          <h1 className="word-reveal hero-h1" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.6rem,4.8vw,4.9rem)', fontWeight: 700, lineHeight: 1.06, letterSpacing: '-.03em' }}>
            <span className="word" style={{ marginRight: '0.25em' }}><span>Grow</span></span>
            <span className="word" style={{ marginRight: '0.25em' }}><span>Your</span></span><br />
            <span className="word" style={{ marginRight: '0.25em' }}><span>Wealth</span></span><br />
            <span className="word" style={{ marginRight: '0.25em' }}><span className="gold-grad">With Precision</span></span><br />
            <span className="word" style={{ marginRight: '0.25em' }}><span className="gold-grad">&amp; Confidence.</span></span>
          </h1>

          {/* Description */}
          <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.78, fontWeight: 300, maxWidth: '460px', opacity: 0, animation: 'fadeUp .7s .6s cubic-bezier(.16,1,.3,1) forwards' }}>
            Expert-led investment strategies tailored to your life goals — equity, debt, and alternative assets managed with precision and full transparency.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', opacity: 0, animation: 'fadeUp .7s .75s cubic-bezier(.16,1,.3,1) forwards' }}>
            <Link href="/contact" className="btn-gold">
              Start Investing
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <Link href="/services" className="btn-ghost">Explore Services</Link>
          </div>

          {/* Microcopy */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px', color: 'var(--dim)', fontSize: '12px', opacity: 0, animation: 'fadeUp .7s .88s cubic-bezier(.16,1,.3,1) forwards' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            No hidden fees &nbsp;·&nbsp; SEBI registered &nbsp;·&nbsp; ISO 27001 secured
          </div>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: '28px', alignItems: 'center', paddingTop: '4px', opacity: 0, animation: 'fadeUp .7s 1.0s cubic-bezier(.16,1,.3,1) forwards' }}>
            {[['₹2,500 Cr+', 'AUM'], ['15,000+', 'Families'], ['18.4%', 'Avg Return']].map(([v, l], i) => (
              <Fragment key={v}>
                {i > 0 && <div key={`d${i}`} style={{ width: '1px', height: '34px', background: 'var(--bdr)', flexShrink: 0 }} />}
                <div key={v}>
                  <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '21px', fontWeight: 700, color: 'var(--white)', lineHeight: 1, marginBottom: '4px' }}>{v}</div>
                  <div style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.1em', color: 'rgba(255,255,255,0.5)' }}>{l}</div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>

        {/* RIGHT: Finance Story Visualization */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '560px', opacity: 0, animation: 'fadeUp .9s .28s cubic-bezier(.16,1,.3,1) forwards' }}>
          <FinanceCanvas />
          {/* Floating cards */}
          <div style={{ position: 'absolute', top: '5%', right: '-2%', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', borderRadius: '16px', padding: '18px 22px', minWidth: '192px', background: 'rgba(255,255,255,.10)', border: '1px solid rgba(255,255,255,.14)', boxShadow: '0 8px 32px rgba(0,0,0,.2)', animation: 'heroCardIn .8s 1.1s cubic-bezier(.16,1,.3,1) both, floatY 5.5s 2s ease-in-out infinite' }}>
            <div style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.1em', color: 'rgba(0, 0, 0, 0.5)', marginBottom: '5px' }}>Avg Annual Returns</div>
            <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', fontWeight: 700, color: 'var(--white)', lineHeight: 1, marginBottom: '8px' }}>+18.4%</div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: 'rgba(34,197,94,.12)', color: '#4ADE80', fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '100px' }}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 7L5 3L8 7" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              vs 11.8% benchmark
            </span>
          </div>
          <div style={{ position: 'absolute', bottom: '8%', left: '-2%', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', borderRadius: '16px', padding: '18px 22px', minWidth: '192px', background: 'rgba(255,255,255,.09)', border: '1px solid rgba(255,255,255,.12)', boxShadow: '0 8px 32px rgba(0,0,0,.18)', animation: 'heroCardIn .8s 1.3s cubic-bezier(.16,1,.3,1) both, floatY2 6.5s 2.4s ease-in-out infinite' }}>
            <div style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.1em', color: 'rgba(255,255,255,0.5)', marginBottom: '5px' }}>Assets Managed</div>
            <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '21px', fontWeight: 700, color: 'var(--white)', lineHeight: 1, marginBottom: '8px' }}>₹2,500 Cr+</div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: 'rgba(45,91,227,.12)', color: '#6B9FFF', fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '100px' }}>Active &amp; Growing</span>
          </div>
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
