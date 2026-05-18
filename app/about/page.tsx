import SectionReveal from '@/components/ui/SectionReveal';
import TiltCard from '@/components/ui/TiltCard';
import StatCounter from '@/components/ui/StatCounter';
import Link from 'next/link';
import HeroCanvas from '@/components/about/HeroCanvas';
import PhilosophyCanvas from '@/components/about/PhilosophyCanvas';
import ScrollHandler from '@/components/ui/ScrollHandler';
import ScrollSnapSetter from '@/components/ui/ScrollSnapSetter';


export const metadata = { title: 'About Us | Srishaan Finance' };

function WordReveal({ words, className = '' }: { words: React.ReactNode[], className?: string }) {
  return (
    <SectionReveal className={`word-reveal ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="word" style={{ marginRight: '0.25em' }}>
          <span style={{
            transitionDelay: `${i * 0.09}s`,
            display: 'inline-block'
          }}>{word}</span>
        </span>
      ))}
    </SectionReveal>
  );
}

export default function AboutPage() {
  return (
    <>
      <ScrollHandler />
      <ScrollSnapSetter />
      {/* HERO */}

      <section id="about-hero" style={{
        position: 'relative',
        zIndex: 1,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '140px 8% 100px',
        overflow: 'hidden',
        background: 'var(--navy)',
        scrollSnapAlign: 'start'
      }}>

        <HeroCanvas />

        {/* Dynamic Shade Gradients (Premium Depth) */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(240,165,0,0.05), transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1
        }} />

        {/* Subtle Grid */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.04, backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

        {/* Main Hero Content (Northwind Style - Centered) */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', width: '100%', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          {/* Label Above */}
          <div style={{
            fontSize: '11px',
            fontWeight: 600,
            color: 'var(--gold)',
            letterSpacing: '.4em',
            textTransform: 'uppercase',
            marginBottom: '40px',
            opacity: 0.8,
            animation: 'fadeUp .6s .1s cubic-bezier(.16,1,.3,1) both'
          }}>
            — ABOUT SRISHAAN —
          </div>

          {/* Heading */}
          <div style={{ maxWidth: '1000px', marginBottom: '40px' }}>
            <WordReveal
              className="northwind-heading"
              words={[
                <span key="1">Financial</span>,
                <span key="2">Services</span>,
                <span key="3">That</span>,
                <span key="4" className="gold-grad">Scale With</span>,
                <em key="5" style={{ fontStyle: 'italic', color: 'var(--gold)' }}>You</em>
              ]}
            />
          </div>
          <style dangerouslySetInnerHTML={{
            __html: `
            .northwind-heading { 
              font-family: 'Playfair Display', serif; 
              font-size: clamp(3.2rem, 8.5vw, 6rem); 
              font-weight: 500; 
              line-height: 1.05; 
              letter-spacing: -.03em;
              text-align: center;
              color: var(--white);
            }
            .northwind-heading .word { margin: 0 0.15em !important; }
          `}} />

          {/* Subheading */}
          <p style={{
            fontSize: 'clamp(16px, 2vw, 19px)',
            color: 'var(--muted)',
            lineHeight: 1.7,
            fontWeight: 300,
            maxWidth: '680px',
            margin: '0 auto 64px',
            animation: 'fadeUp .7s .85s cubic-bezier(.16,1,.3,1) both'
          }}>
            Helping businesses grow with smarter financial strategy, faster funding, and seamless compliance — backed by 60+ years of combined leadership experience.
          </p>

          {/* Featured Image Block (Northwind Style) */}
          {/* <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1100px',
            aspectRatio: '16/9',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 40px 100px rgba(0,0,0,0.6)',
            border: '1px solid rgba(255,255,255,0.1)',
            animation: 'fadeUp 1s 1.2s cubic-bezier(.16,1,.3,1) both'
          }}>
            <img
              src="/images/about_team_v5.png"
              alt="Srishaan Leadership Team"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            /> */}
            {/* Overlays to eliminate emptiness */}
            {/* <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(4,9,26,0.6) 0%, transparent 40%, transparent 70%, rgba(4,9,26,0.2) 100%)' }} /> */}

            {/* Top Right Strategic Info */}
            {/* <div style={{
              position: 'absolute',
              top: '32px',
              right: '32px',
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '14px',
              padding: '20px 24px',
              textAlign: 'right',
              animation: 'fadeUp .8s 1.5s cubic-bezier(.16,1,.3,1) both'
            }}>
              <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--gold)', fontFamily: 'var(--font-playfair)', lineHeight: 1 }}>12+</div>
              <div style={{ fontSize: '9px', textTransform: 'uppercase', color: 'var(--dim)', letterSpacing: '.12em', fontWeight: 600, marginTop: '4px' }}>Expert Verticals</div>

              <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '12px 0' }} />

              <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--gold)', fontFamily: 'var(--font-playfair)', lineHeight: 1 }}>20+</div>
              <div style={{ fontSize: '9px', textTransform: 'uppercase', color: 'var(--dim)', letterSpacing: '.12em', fontWeight: 600, marginTop: '4px' }}>Years Expertise</div>
            </div> */}

            {/* Image Tag / Caption */}
            {/* <div style={{
              position: 'absolute',
              bottom: '32px',
              left: '32px',
              background: 'rgba(255,255,255,0.98)',
              color: '#000',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              padding: '8px 20px',
              borderRadius: '2px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
              animation: 'fadeUp .8s 1.4s cubic-bezier(.16,1,.3,1) both'
            }}>
              [ THE CORE TEAM — STRATEGIC PLANNING 2025 ]
            </div>
          </div> */}

          {/* CTA Buttons */}
          <div style={{ marginTop: '-20px', marginBottom: '60px', display: 'flex', gap: '24px', justifyContent: 'center', animation: 'fadeUp .7s 1s cubic-bezier(.16,1,.3,1) both' }}>
            <Link href="/contact" style={{ color: 'var(--gold)', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.15em', textDecoration: 'none', borderBottom: '1px solid var(--gold)', paddingBottom: '4px' }}>Get Started</Link>
            {/* <Link href="/contact" style={{ color: 'var(--white)', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.15em', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '4px' }}>Book Consultation</Link> */}
          </div>
        </div>

        {/* Floating Badge */}
        {/* <div style={{
          position: 'absolute',
          right: '4%',
          bottom: '10%',
          zIndex: 3,
          opacity: 0.6,
          animation: 'fadeUp .8s 1.5s cubic-bezier(.16,1,.3,1) both',
          pointerEvents: 'none'
        }}>
          <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--gold)', fontFamily: 'var(--font-playfair)', textAlign: 'right' }}>60+ Yrs</div>
          <div style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '.12em', color: 'var(--dim)', fontWeight: 600 }}>Leadership</div>
        </div> */}

        {/* Scroll Indicator */}
        <div style={{ position: 'absolute', bottom: '36px', left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', color: 'var(--dim)', fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase' }}>
          <div style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom,transparent,var(--dim))', animation: 'slideDown 1.6s ease-in-out infinite' }} />
        </div>
      </section>

      {/* ── SECTION 2: SLIDE OVER HERO (Overview, Verticals, Industries) ── */}
      <div style={{ position: 'relative', zIndex: 10, background: 'var(--navy-2)', boxShadow: '0 -20px 40px rgba(0,0,0,0.4)' }}>

        {/* COMPANY OVERVIEW */}
        <section id="overview" style={{ background: 'var(--navy-2)', padding: '120px 8%', scrollSnapAlign: 'start' }}>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '80px', alignItems: 'start' }}>
            <div>
              <SectionReveal style={{ marginBottom: '40px' }}>
                <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>Company Overview</span>
                <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-.02em' }}>Who We <em style={{ fontStyle: 'normal', color: 'var(--gold)' }}>Are</em></h2>
              </SectionReveal>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                <SectionReveal delay={0.1}><p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.8, fontWeight: 300 }}>We are a strategic finance and business advisory firm delivering integrated solutions across financial management, funding, compliance, and business growth.</p></SectionReveal>
                <SectionReveal delay={0.2}><p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.8, fontWeight: 300 }}>We partner with businesses to build strong financial systems, ensure regulatory compliance, improve profitability, and enable scalable growth.</p></SectionReveal>
                <SectionReveal delay={0.3}><p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.8, fontWeight: 300 }}>Our approach goes beyond traditional advisory — we act as execution partners, delivering measurable and result-oriented outcomes.</p></SectionReveal>
              </div>

              {/* Filling the space at the bottom left */}
              <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { label: 'Strategic Depth', val: '20+ Yrs' },
                  { label: 'Market Presence', val: 'Hyderabad' }
                ].map((item, i) => (
                  <SectionReveal key={i} delay={0.4 + i * 0.1}>
                    <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--bdr)', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                      <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--gold)', marginBottom: '4px' }}>{item.val}</div>
                      <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--dim)', fontWeight: 600 }}>{item.label}</div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>

            <div>
              <SectionReveal style={{ marginBottom: '40px' }}>
                <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>Strategic Foundation</span>
                <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-.02em' }}>Vision & <em style={{ fontStyle: 'normal', color: 'var(--gold)' }}>Mission</em></h2>
              </SectionReveal>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
                <SectionReveal delay={0.1}>
                  <div className="info-card" style={{ borderLeft: '3px solid var(--gold)' }}>
                    <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '10px' }}>Our Vision</div>
                    <div style={{ fontSize: '15px', fontWeight: 400, color: 'var(--white)', lineHeight: 1.6 }}>To be a trusted growth partner for businesses by providing structured financial, compliance, and strategic solutions that drive sustainable expansion.</div>
                  </div>
                </SectionReveal>
                <SectionReveal delay={0.2}>
                  <div className="info-card">
                    <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px' }}>Our Mission</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {[
                        'To provide actionable financial insights',
                        'To ensure seamless statutory compliance',
                        'To enable access to structured funding',
                        'To strengthen financial systems and controls',
                        'To drive long-term value creation'
                      ].map((m, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: 'var(--muted)', fontWeight: 300 }}>
                          <span style={{ width: '6px', height: '1px', background: 'var(--gold)', opacity: 0.6 }}></span>
                          {m}
                        </div>
                      ))}
                    </div>
                  </div>
                </SectionReveal>
              </div>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section id="why-us" style={{ background: 'var(--navy-2)', padding: '120px 8%', scrollSnapAlign: 'start' }}>
          <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
            <SectionReveal className="text-center" style={{ marginBottom: '64px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>The Advantage</span>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.4rem,4.5vw,3.5rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-.02em' }}>Why Choose <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Srishaan</em></h2>
            </SectionReveal>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
              {[
                { title: 'Integrated Expertise', desc: 'Finance, compliance & funding under one roof' },
                { title: 'Execution-Focused', desc: 'Execution partners (not just advisory)' },
                { title: 'Industry Depth', desc: 'Strong industry understanding & sector knowledge' },
                { title: 'Result-Oriented', desc: 'Focused on delivering measurable outcomes' },
                { title: 'Trusted Partner', desc: 'Long-term growth partnership approach' }
              ].map((val, i) => (
                <SectionReveal key={i} delay={i * 0.1}>
                  <div className="svc-item" style={{ padding: '32px 28px', display: 'flex', gap: '20px', alignItems: 'flex-start', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', height: '100%' }}>
                    <div style={{ width: '8px', height: '8px', background: 'var(--gold)', borderRadius: '50%', marginTop: '6px', flexShrink: 0, boxShadow: '0 0 10px var(--gold)' }}></div>
                    <div>
                      <h4 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '8px', color: 'var(--white)' }}>{val.title}</h4>
                      <p style={{ fontSize: '14px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.6 }}>{val.desc}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── SECTION 3: LEADERSHIP ── */}
      <section id="leadership" style={{ position: 'relative', zIndex: 5, background: 'var(--navy)', padding: '120px 8%', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', scrollSnapAlign: 'start' }}>

        <SectionReveal className="text-center mb-16">
          <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>Leadership Team</span>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.4rem,4.5vw,3.5rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-.02em' }}>Experienced <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Promoters & Directors</em></h2>
          <p style={{ color: 'var(--muted)', fontSize: '16px', fontWeight: 300, lineHeight: 1.8, maxWidth: '640px', margin: '20px auto 40px' }}>Over six decades of combined expertise across finance, manufacturing, technology, and public sector operations.</p>
        </SectionReveal>

        <style dangerouslySetInnerHTML={{
          __html: `
          @media (max-width: 768px) {
            .leader-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
            .leader-card { padding: 32px 24px !important; }
            .leader-card h3 { font-size: 20px !important; }
          }
        `}} />
        <div className="leader-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <SectionReveal>
            <div className="leader-card" style={{ padding: '48px', background: 'var(--surf)', borderRadius: '24px', border: '1px solid var(--bdr)', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div className="leader-avatar avatar-vg" style={{ width: '80px', height: '80px', fontSize: '32px', marginBottom: '28px', background: 'linear-gradient(135deg, var(--blue), var(--blue-b))', color: '#fff', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, boxShadow: '0 10px 30px rgba(26,58,143,0.3)' }}>VP</div>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '26px', fontWeight: 700, marginBottom: '8px' }}>Mr. Venu Gopal Pidugu</h3>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--gold)', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '24px' }}>Promoter & Director</div>

              <div style={{ marginBottom: '28px' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(200,155,60,.12)', border: '1px solid rgba(200,155,60,.2)', color: 'var(--gold)', fontSize: '12px', fontWeight: 700, padding: '8px 18px', borderRadius: '100px' }}>
                  <span style={{ fontSize: '14px' }}>🎓</span> Chartered Accountant
                </span>
              </div>

              <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300, marginBottom: '0' }}>
                A qualified CA with over 20 years of experience across infrastructure, technology, and ITES. Brings deep expertise in financial management, corporate finance, and strategic advisory — enabling structured governance and informed decision-making.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="leader-card" style={{ padding: '48px', background: 'var(--surf)', borderRadius: '24px', border: '1px solid var(--bdr)', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div className="leader-avatar avatar-jj" style={{ width: '80px', height: '80px', fontSize: '32px', marginBottom: '28px', background: 'linear-gradient(135deg, var(--gold), var(--gold-l))', color: 'var(--navy)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, boxShadow: '0 10px 30px rgba(240,165,0,0.2)' }}>JC</div>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '26px', fontWeight: 700, marginBottom: '8px' }}>Mr. John J. Campos</h3>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--gold)', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '24px' }}>Promoter & Director</div>

              <div style={{ marginBottom: '28px' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(200,155,60,.12)', border: '1px solid rgba(200,155,60,.2)', color: 'var(--gold)', fontSize: '12px', fontWeight: 700, padding: '8px 18px', borderRadius: '100px' }}>
                  <span style={{ fontSize: '14px' }}>🎓</span> Mechanical Engineer · JNTU
                </span>
              </div>

              <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300, marginBottom: '0' }}>
                Over 40 years of experience in manufacturing and production. Brings deep expertise in plant operations, process optimization, and quality systems — providing operational discipline and execution rigour to Srishaan’s delivery model.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── SECTION 4: SLIDE OVER LEADERSHIP (Stats, Approach) ── */}
      <div style={{ position: 'relative', zIndex: 20, background: 'var(--navy-2)', boxShadow: '0 -20px 40px rgba(0,0,0,0.4)' }}>

        {/* STATS COUNTER */}
        {/* <section id="stats" style={{ background: 'var(--navy-3)', borderTop: '1px solid var(--bdr)', borderBottom: '1px solid var(--bdr)', padding: '80px 8%', scrollSnapAlign: 'start' }}>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', maxWidth: '1440px', margin: '0 auto' }}>
            {[
              { target: 60, symbol: '+', suffix: 'Years', label: 'Combined Experience' },
              { target: 2, symbol: '', suffix: 'Verticals', label: 'Strategic Streams' },
              { target: 12, symbol: '', suffix: 'Offerings', label: 'Core Services' },
              { target: 4, symbol: '', suffix: 'Initiatives', label: 'Programme Alignment' }
            ].map((s, i) => (
              <SectionReveal key={s.label} delay={i * 0.1}>
                <div className="stat" style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.8rem,5vw,3.8rem)', fontWeight: 700, color: 'var(--gold)', lineHeight: 1, marginBottom: '10px' }}>
                    <StatCounter target={s.target} suffix={s.suffix} symbol={s.symbol} />
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--dim)', letterSpacing: '.12em', textTransform: 'uppercase' }}>{s.label}</div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </section> */}

        {/* APPROACH / METHODOLOGY */}
        <section id="approach" style={{ background: 'var(--navy-2)', padding: '120px 8%', scrollSnapAlign: 'start' }}>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '100px', alignItems: 'center', maxWidth: '1440px', margin: '0 auto' }}>
            <SectionReveal>
              <div style={{ position: 'relative', height: '480px', borderRadius: '32px', overflow: 'hidden', border: '1px solid var(--bdr)', background: 'var(--navy-3)', boxShadow: '0 40px 100px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/Srishaan_Logo-removebg-preview.png" alt="Srishaan" style={{ width: '70%', maxWidth: '320px', objectFit: 'contain', position: 'relative', zIndex: 2 }} />
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 60%)', pointerEvents: 'none' }}></div>
              </div>
            </SectionReveal>

            <div>
              <SectionReveal style={{ marginBottom: '44px' }}>
                <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>Our Approach</span>
                <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.2rem,4vw,3.2rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-.02em' }}>Structured <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Execution-Driven Model</em></h2>
                <p style={{ color: 'var(--muted)', fontSize: '16px', fontWeight: 300, lineHeight: 1.8, marginTop: '24px' }}>We follow a structured, execution-driven model designed to bridge the gap between strategic vision and operational reality.</p>
              </SectionReveal>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                {[
                  'Understand business operations & financial position',
                  'Ensure compliance readiness and risk assessment',
                  'Identify gaps and growth opportunities',
                  'Implement financial systems and controls',
                  'Execute strategies and continuously monitor performance'
                ].map((text, i) => (
                  <SectionReveal key={i} delay={0.2 + i * 0.05}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                      <div className="value-dot" style={{ width: '6px', height: '6px', background: 'var(--gold)', borderRadius: '50%', flexShrink: 0, boxShadow: '0 0 10px var(--gold)' }}></div>
                      <div style={{ fontSize: '15px', color: 'var(--white)', fontWeight: 300, lineHeight: 1.4 }}>{text}</div>
                    </div>
                  </SectionReveal>
                ))}
              </div>

              <SectionReveal delay={0.6}>
                <p style={{ marginTop: '40px', color: 'var(--gold)', fontSize: '14px', fontWeight: 500, letterSpacing: '0.01em', opacity: 0.9 }}>
                  Our focus is on delivering practical, measurable, and sustainable outcomes.
                </p>
              </SectionReveal>
            </div>
          </div>
        </section>
      </div>

      {/* ── SECTION 5: STICKY CTA ── */}
      <section id="cta" style={{ position: 'sticky', top: 0, zIndex: 30, background: 'linear-gradient(135deg,#04091A 0%,#0D1635 100%)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '120px 8%', scrollSnapAlign: 'start' }}>

        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(240,165,0,0.08) 0%, transparent 70%)', pointerEvents: 'none' }}></div>

        {/* Animated Rings */}
        <div className="cta-ring" style={{ width: '400px', height: '400px', border: '1px solid rgba(240,165,0,0.1)', position: 'absolute', borderRadius: '50%', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}></div>
        <div className="cta-ring" style={{ width: '700px', height: '700px', border: '1px solid rgba(240,165,0,0.05)', position: 'absolute', borderRadius: '50%', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}></div>

        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '800px' }}>
          <SectionReveal>
            <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 600, letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '24px' }}>Ready to Scale?</span>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.8rem,6vw,4.8rem)', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: '32px', letterSpacing: '-.03em' }}>
              Our  <span className="gold-grad">Value Proposition</span>

            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', fontWeight: 300, lineHeight: 1.8, marginBottom: '48px', maxWidth: '700px', margin: '0 auto 48px' }}>
              We act as an extended finance and compliance arm, enabling you to maintain statutory compliance, improve financial discipline, access funding efficiently, and scale with confidence.
            </p>

            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-gold" style={{ padding: '16px 42px', fontSize: '15px' }}>Get Started Today</Link>
              <Link href="/contact" className="btn-ghost" style={{ padding: '15px 42px', fontSize: '15px', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>Contact Our Team</Link>
            </div>

            <div style={{ marginTop: '64px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '48px' }}>
              {[
                { label: 'Call Us', val: '[+91 7702224512]' },
                { label: 'Email Us', val: '[Info@srishaan.co.in]' },
                { label: 'Visit Us', val: '[F NO. 1304 & 1305A, BLK-1 METROPOLIS CLASSIC HOMES, Erragadda Hyderabad Telangana India 5000]' }
              ].map((c, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--gold)', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '8px' }}>{c.label}</div>
                  <div style={{ fontSize: '15px', color: '#fff', fontWeight: 300 }}>{c.val}</div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>

        {/* Brand Watermark */}
        <div style={{ position: 'absolute', bottom: '80px', left: '50%', transform: 'translateX(-50%)', opacity: 0.03, fontSize: '14vw', fontWeight: 900, pointerEvents: 'none', whiteSpace: 'nowrap', color: '#fff' }}>SRISHAAN</div>
      </section>
    </>
  );
}
