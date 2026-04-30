import SectionReveal from '@/components/ui/SectionReveal';
import TiltCard from '@/components/ui/TiltCard';
import StatCounter from '@/components/ui/StatCounter';
import Link from 'next/link';
import HeroCanvas from '@/components/about/HeroCanvas';
import PhilosophyCanvas from '@/components/about/PhilosophyCanvas';
import ServiceCarousel from '@/components/about/ServiceCarousel';

export const metadata = { title: 'About Us | Srishaan Finance' };

function WordReveal({ words, className = '' }: { words: React.ReactNode[], className?: string }) {
  return (
    <SectionReveal className={`word-reveal ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="word" style={{ padding: '0.05em 0' }}>
          <span style={{
            transitionDelay: `${i * 0.09}s`,
            padding: '0.05em 0.15em 0.05em 0', // Padding for italic/descender clipping
            display: 'inline-block'
          }}>{word}</span>
          {' '}
        </span>
      ))}
    </SectionReveal>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section id="about-hero" style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--navy)'
      }}>
        <HeroCanvas />

        {/* Ambient Orbs */}
        <div style={{ position: 'absolute', borderRadius: '50%', pointerEvents: 'none', filter: 'blur(100px)', width: '500px', height: '500px', right: '10%', top: '5%', background: 'radial-gradient(circle,rgba(26,58,143,.18),transparent 70%)' }} />
        <div style={{ position: 'absolute', borderRadius: '50%', pointerEvents: 'none', filter: 'blur(90px)', width: '350px', height: '350px', left: '5%', bottom: '15%', background: 'radial-gradient(circle,rgba(200,155,60,.06),transparent 70%)' }} />

        {/* Subtle Grid */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.06, backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Vertical Brand Line */}
        <div style={{ position: 'absolute', left: '5%', top: '18%', bottom: '18%', width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(200,155,60,.35), transparent)', zIndex: 2 }} />

        {/* Main Hero Content */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1440px', width: '100%', margin: '0 auto', padding: '0 8%' }}>
          <div style={{ maxWidth: '640px' }}>
            {/* Breadcrumb */}
            <div style={{ fontSize: '13px', color: 'var(--dim)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', animation: 'fadeUp .6s .1s cubic-bezier(.16,1,.3,1) both' }}>
              <span style={{ width: '20px', height: '1px', background: 'var(--gold)' }} />
              <span>
                <Link href="/" style={{ color: 'var(--dim)', textDecoration: 'none' }}>Home</Link>
                <span style={{ margin: '0 10px', opacity: .4 }}>/</span>
                <span style={{ color: 'var(--gold)' }}>About Us</span>
              </span>
            </div>

            {/* Status Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(200,155,60,.06)', border: '1px solid rgba(200,155,60,.15)', color: 'var(--gold)', fontSize: '11px', fontWeight: 600, letterSpacing: '.15em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '4px', marginBottom: '28px', animation: 'fadeUp .7s .2s cubic-bezier(.16,1,.3,1) both' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)', display: 'inline-block', animation: 'blink 2s ease-in-out infinite' }} />
              Incorporated 2025 · Hyderabad
            </div>

            {/* Heading */}
            <WordReveal
              className="mb-5"
              words={[
                <span key="1">Financial</span>,
                <span key="2">Services</span>,
                <br key="br" />,
                <span key="3">That</span>,
                <span key="4" className="gold-grad">Scale With</span>,
                <em key="5" style={{ fontStyle: 'italic', color: 'var(--gold)' }}>You</em>
              ]}
            />
            <style dangerouslySetInnerHTML={{
              __html: `
              .word-reveal { font-family: 'Playfair Display', serif; font-size: clamp(2.6rem,5vw,4.2rem); font-weight: 700; line-height: 1.15; letter-spacing: -.03em; }
            `}} />

            {/* Subheading */}
            <p style={{ fontSize: '17px', color: 'var(--muted)', lineHeight: 1.75, fontWeight: 300, maxWidth: '520px', marginTop: '32px', animation: 'fadeUp .7s .85s cubic-bezier(.16,1,.3,1) both' }}>
              Helping businesses grow with smarter financial strategy, faster funding, and seamless compliance — backed by 60+ years of combined leadership experience.
            </p>

            {/* CTA Buttons */}
            <div style={{ marginTop: '36px', display: 'flex', gap: '16px', alignItems: 'center', animation: 'fadeUp .7s 1s cubic-bezier(.16,1,.3,1) both' }}>
              <Link href="/contact" className="btn-gold" style={{ padding: '15px 34px', fontSize: '14px', fontWeight: 600 }}>Get Started</Link>
              <Link href="/contact" className="btn-ghost" style={{ padding: '14px 30px', fontSize: '14px' }}>Book Consultation</Link>
            </div>

            {/* Trust Signal */}
            <div style={{ marginTop: '48px', animation: 'fadeUp .7s 1.15s cubic-bezier(.16,1,.3,1) both' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ display: 'flex' }}>
                  {[0, 1, 2, 3].map(i => (
                    <div key={i} style={{ width: '28px', height: '28px', borderRadius: '50%', background: `linear-gradient(135deg, ${['rgba(200,155,60,.3)', 'rgba(26,58,143,.5)', 'rgba(45,91,227,.4)', 'rgba(200,155,60,.25)'][i]}, ${['rgba(200,155,60,.15)', 'rgba(26,58,143,.25)', 'rgba(45,91,227,.2)', 'rgba(200,155,60,.1)'][i]})`, border: '2px solid var(--navy)', marginLeft: i > 0 ? '-8px' : '0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,.7)' }}>
                      {['S', 'R', 'A', 'V'][i]}
                    </div>
                  ))}
                </div>
                <span style={{ fontSize: '13px', color: 'var(--dim)', fontWeight: 400 }}>Trusted by <span style={{ color: 'var(--gold)', fontWeight: 600 }}>growing businesses</span> across India</span>
              </div>

              {/* Client Initiatives */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['Startup India', 'Make in India', 'Digital India', 'MSE Registered'].map(g => (
                  <span key={g} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)', color: 'var(--dim)', fontSize: '11px', fontWeight: 500, padding: '5px 12px', borderRadius: '4px', letterSpacing: '.02em' }}>
                    <span style={{ width: '4px', height: '4px', background: 'var(--gold)', borderRadius: '50%', opacity: 0.6 }} />
                    {g}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={{ position: 'absolute', bottom: '36px', left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', color: 'var(--dim)', fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase' }}>
          <span>Scroll</span>
          <div style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom,transparent,var(--dim))', animation: 'slideDown 1.6s ease-in-out infinite' }} />
        </div>

        {/* Decorative Geometric Elements */}
        <div style={{ position: 'absolute', left: '12%', bottom: '14%', width: '10px', height: '10px', border: '1px solid var(--gold)', opacity: 0.2, transform: 'rotate(45deg)' }} />
        <div style={{ position: 'absolute', left: '8%', top: '35%', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)', opacity: 0.15 }} />
      </section>

      {/* ── SECTION 2: SLIDE OVER HERO (Overview, Verticals, Industries) ── */}
      <div style={{ position: 'relative', zIndex: 10, background: 'var(--navy-2)', boxShadow: '0 -20px 40px rgba(0,0,0,0.4)' }}>

        {/* COMPANY OVERVIEW */}
        <section id="overview" style={{ background: 'var(--navy-2)', padding: '120px 8%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px', alignItems: 'start' }}>
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

        {/* CORE SERVICES VERTICALS */}
        <section id="services-split" style={{ background: 'var(--navy)', padding: '120px 8%' }}>
          <SectionReveal className="text-center mb-16">
            <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>Expertise Areas</span>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.4rem,4.5vw,3.5rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-.02em' }}>Core <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Service Verticals</em></h2>
            <p style={{ color: 'var(--muted)', fontSize: '16px', fontWeight: 300, lineHeight: 1.8, maxWidth: '600px', margin: '20px auto 0' }}>Strategic finance, structured funding, and end-to-end compliance solutions tailored for business excellence.</p>
          </SectionReveal>

          <ServiceCarousel>
            {/* 1. Virtual CFO */}
            <SectionReveal>
              <div className="svc-group" style={{ height: '100%' }}>
                <div className="svc-group-header fin" style={{ background: 'rgba(26,58,143,.12)', padding: '24px', borderRadius: '12px', border: '1px solid rgba(26,58,143,.2)', display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                  <div style={{ fontSize: '28px' }}>📊</div>
                  <div>
                    <div style={{ fontSize: '18px', fontWeight: 700 }}>Virtual CFO Services</div>
                    <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 400, marginTop: '2px' }}>Strategic Leadership · MIS · Planning</div>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
                  {[
                    'Financial planning & analysis',
                    'Cash flow management',
                    'MIS reporting & dashboards',
                    'Profitability improvement',
                    'Budgeting & forecasting',
                    'Strategic decision support'
                  ].map((s, i) => (
                    <div key={i} className="svc-item" style={{ padding: '14px 18px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ fontSize: '13px', color: 'var(--white)', fontWeight: 500 }}>{s}</div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>

            {/* 2. Funding */}
            <SectionReveal delay={0.1}>
              <div className="svc-group" style={{ height: '100%' }}>
                <div className="svc-group-header it" style={{ background: 'rgba(200,155,60,.06)', padding: '24px', borderRadius: '12px', border: '1px solid rgba(200,155,60,.15)', display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                  <div style={{ fontSize: '28px' }}>💰</div>
                  <div>
                    <div style={{ fontSize: '18px', fontWeight: 700 }}>Funding & Financial Structuring</div>
                    <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 400, marginTop: '2px' }}>Loans · Reports · Liaison</div>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
                  {[
                    'CMA data preparation',
                    'Project reports & financial modeling',
                    'Working capital & term loan structuring',
                    'Bank & NBFC liaison',
                    'End-to-end funding execution',
                    'Debt restructuring support'
                  ].map((s, i) => (
                    <div key={i} className="svc-item" style={{ padding: '14px 18px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ fontSize: '13px', color: 'var(--white)', fontWeight: 500 }}>{s}</div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>

            {/* 3. Business Advisory */}
            <SectionReveal delay={0.2}>
              <div className="svc-group" style={{ height: '100%' }}>
                <div className="svc-group-header fin" style={{ background: 'rgba(26,58,143,.12)', padding: '24px', borderRadius: '12px', border: '1px solid rgba(26,58,143,.2)', display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                  <div style={{ fontSize: '28px' }}>📈</div>
                  <div>
                    <div style={{ fontSize: '18px', fontWeight: 700 }}>Business Advisory</div>
                    <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 400, marginTop: '2px' }}>Growth · Optimization · Processes</div>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
                  {[
                    'Cost optimization strategies',
                    'Business restructuring',
                    'Growth & expansion planning',
                    'Process improvement',
                    'Financial diagnostics',
                    'Performance review'
                  ].map((s, i) => (
                    <div key={i} className="svc-item" style={{ padding: '14px 18px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ fontSize: '13px', color: 'var(--white)', fontWeight: 500 }}>{s}</div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>

            {/* 4. Compliance */}
            <SectionReveal delay={0.3}>
              <div className="svc-group" style={{ height: '100%' }}>
                <div className="svc-group-header it" style={{ background: 'rgba(200,155,60,.06)', padding: '24px', borderRadius: '12px', border: '1px solid rgba(200,155,60,.15)', display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                  <div style={{ fontSize: '28px' }}>⚖️</div>
                  <div>
                    <div style={{ fontSize: '18px', fontWeight: 700 }}>Compliance & Regulatory</div>
                    <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 400, marginTop: '2px' }}>GST · IT · ROC · Payroll</div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ fontSize: '12.5px', color: 'var(--dim)', marginBottom: '8px', lineHeight: 1.5, fontWeight: 300 }}>We provide end-to-end statutory and regulatory compliance support to ensure businesses remain risk-free.</div>
                  {[
                    'GST compliance (returns, reconciliation, advisory)',
                    'Income Tax & TDS compliance',
                    'PF, ESI & payroll compliance',
                    'Professional Tax (PT)',
                    'ROC / MCA compliance support',
                    'Handling notices & representation',
                    'Regulatory documentation & filings'
                  ].map((s, i) => (
                    <div key={i} className="svc-item" style={{ padding: '14px 18px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ fontSize: '13px', color: 'var(--white)', fontWeight: 500 }}>{s}</div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </ServiceCarousel>
        </section>

        {/* INDUSTRIES & WHY US */}
        <section id="industries-values" style={{ background: 'var(--navy-2)', padding: '120px 8%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))', gap: '80px' }}>
            <div>
              <SectionReveal style={{ marginBottom: '44px' }}>
                <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>Market Focus</span>
                <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.2rem,4vw,3rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-.02em' }}>Industries We <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Serve</em></h2>
              </SectionReveal>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                {[
                  { icon: '🏗️', title: 'Infrastructure & Contractors', desc: 'Strategic advisory for engineering firms' },
                  { icon: '🏢', title: 'Real Estate & Developers', desc: 'Financial structuring for builders' },
                  { icon: '👥', title: 'Manpower & Facility Management', desc: 'Compliance & payroll solutions' },
                  { icon: '🏭', title: 'SMEs & Mid-sized Enterprises', desc: 'Growth & funding strategies' }
                ].map((ind, i) => (
                  <SectionReveal key={ind.title} delay={i * 0.1}>
                    <div className="recog-card" style={{ padding: '32px 24px', textAlign: 'left', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', height: '100%' }}>
                      <div style={{ fontSize: '32px', marginBottom: '16px' }}>{ind.icon}</div>
                      <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--white)', marginBottom: '6px' }}>{ind.title}</h4>
                      <p style={{ fontSize: '12.5px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.5 }}>{ind.desc}</p>
                    </div>
                  </SectionReveal>
                ))}

                {/* Balancing Card for the left column */}
                <SectionReveal delay={0.4} style={{ gridColumn: 'span 2' }}>
                  <div style={{ padding: '24px 30px', background: 'linear-gradient(90deg, rgba(255,255,255,0.03), transparent)', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div style={{ fontSize: '24px', opacity: 0.6 }}>⚙️</div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--white)' }}>Custom Sector Solutions</div>
                      <div style={{ fontSize: '11px', color: 'var(--dim)', textTransform: 'uppercase', letterSpacing: '.1em', marginTop: '2px' }}>Strategic Advisory · Compliance · Growth</div>
                    </div>
                  </div>
                </SectionReveal>
              </div>
            </div>

            <div>
              <SectionReveal style={{ marginBottom: '44px' }}>
                <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>The Advantage</span>
                <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.2rem,4vw,3rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-.02em' }}>Why Choose <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Srishaan</em></h2>
              </SectionReveal>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { title: 'Integrated Expertise', desc: 'Finance, compliance & funding under one roof' },
                  { title: 'Execution-Focused', desc: 'Execution partners (not just advisory)' },
                  { title: 'Industry Depth', desc: 'Strong industry understanding & sector knowledge' },
                  { title: 'Result-Oriented', desc: 'Focused on delivering measurable outcomes' },
                  { title: 'Trusted Partner', desc: 'Long-term growth partnership approach' }
                ].map((val, i) => (
                  <SectionReveal key={i} delay={i * 0.1}>
                    <div className="svc-item" style={{ padding: '20px 24px', display: 'flex', gap: '20px', alignItems: 'flex-start', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ width: '8px', height: '8px', background: 'var(--gold)', borderRadius: '50%', marginTop: '6px', flexShrink: 0, boxShadow: '0 0 10px var(--gold)' }}></div>
                      <div>
                        <h4 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '4px' }}>{val.title}</h4>
                        <p style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.6 }}>{val.desc}</p>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── SECTION 3: STICKY LEADERSHIP ── */}
      <section id="leadership" style={{ position: 'sticky', top: 0, zIndex: 5, background: 'var(--navy)', padding: '120px 8%', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <SectionReveal className="text-center mb-16">
          <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>Leadership Team</span>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.4rem,4.5vw,3.5rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-.02em' }}>Experienced <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Promoters & Directors</em></h2>
          <p style={{ color: 'var(--muted)', fontSize: '16px', fontWeight: 300, lineHeight: 1.8, maxWidth: '640px', margin: '20px auto 0' }}>Over six decades of combined expertise across finance, manufacturing, technology, and public sector operations.</p>
        </SectionReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))', gap: '32px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <SectionReveal>
            <div className="leader-card" style={{ padding: '40px', background: 'rgba(255,255,255,0.03)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="leader-avatar avatar-vg" style={{ width: '72px', height: '72px', fontSize: '28px', marginBottom: '24px', background: 'linear-gradient(135deg, var(--blue), var(--blue-b))', color: '#fff', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>VP</div>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', fontWeight: 700, marginBottom: '6px' }}>Mr. Venu Gopal Pidugu</h3>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--gold)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '20px' }}>Promoter & Director</div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(200,155,60,.12)', border: '1px solid rgba(200,155,60,.25)', color: 'var(--gold)', fontSize: '12px', fontWeight: 700, padding: '6px 16px', borderRadius: '100px', marginBottom: '24px' }}>🎓 Chartered Accountant</span>
              <p style={{ fontSize: '14.5px', color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300, marginBottom: '24px' }}>
                A qualified CA with over 20 years of experience across infrastructure, technology, and ITES. Brings deep expertise in financial management, corporate finance, and strategic advisory — enabling structured governance and informed decision-making.
              </p>
              <div style={{ fontSize: '11px', color: 'var(--dim)', textTransform: 'uppercase', letterSpacing: '.1em', fontWeight: 700, marginBottom: '12px' }}>Strategic Associations</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {['GVK Group', 'Arabi Co. WLL', 'VSoft Tech'].map(o => <span key={o} className="org-tag" style={{ background: 'rgba(255,255,255,.05)', padding: '6px 14px', borderRadius: '6px', fontSize: '12px' }}>{o}</span>)}
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="leader-card" style={{ padding: '40px', background: 'rgba(255,255,255,0.03)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="leader-avatar avatar-jj" style={{ width: '72px', height: '72px', fontSize: '28px', marginBottom: '24px', background: 'linear-gradient(135deg, var(--gold), var(--gold-l))', color: 'var(--navy)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>JC</div>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', fontWeight: 700, marginBottom: '6px' }}>Mr. John J. Campos</h3>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--gold)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '20px' }}>Promoter & Director</div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(200,155,60,.12)', border: '1px solid rgba(200,155,60,.25)', color: 'var(--gold)', fontSize: '12px', fontWeight: 700, padding: '6px 16px', borderRadius: '100px', marginBottom: '24px' }}>🎓 Mechanical Engineer · JNTU</span>
              <p style={{ fontSize: '14.5px', color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300, marginBottom: '24px' }}>
                Over 40 years of experience in manufacturing and production. Brings deep expertise in plant operations, process optimization, and quality systems — providing operational discipline and execution rigour to Srishaan’s delivery model.
              </p>
              <div style={{ fontSize: '11px', color: 'var(--dim)', textTransform: 'uppercase', letterSpacing: '.1em', fontWeight: 700, marginBottom: '12px' }}>Industrial Tenure</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {['Procter & Gamble', 'Coffee Day Global'].map(o => <span key={o} className="org-tag" style={{ background: 'rgba(255,255,255,.05)', padding: '6px 14px', borderRadius: '6px', fontSize: '12px' }}>{o}</span>)}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── SECTION 4: SLIDE OVER LEADERSHIP (Stats, Approach) ── */}
      <div style={{ position: 'relative', zIndex: 20, background: 'var(--navy-2)', boxShadow: '0 -20px 40px rgba(0,0,0,0.4)' }}>

        {/* STATS COUNTER */}
        <section id="stats" style={{ background: 'var(--navy-3)', borderTop: '1px solid var(--bdr)', borderBottom: '1px solid var(--bdr)', padding: '80px 8%' }}>
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
        </section>

        {/* APPROACH / METHODOLOGY */}
        <section id="approach" style={{ background: 'var(--navy-2)', padding: '120px 8%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '100px', alignItems: 'center', maxWidth: '1440px', margin: '0 auto' }}>
            <SectionReveal>
              <div style={{ position: 'relative', height: '480px', borderRadius: '32px', overflow: 'hidden', border: '1px solid var(--bdr)', background: 'var(--navy-3)', boxShadow: '0 40px 100px rgba(0,0,0,0.3)' }}>
                <PhilosophyCanvas />
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, transparent 30%, rgba(4,9,26,0.4) 100%)', pointerEvents: 'none' }}></div>
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
      <section id="cta" style={{ position: 'sticky', top: 0, zIndex: 30, background: 'linear-gradient(135deg,#04091A 0%,#0D1635 100%)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '120px 8%' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(240,165,0,0.08) 0%, transparent 70%)', pointerEvents: 'none' }}></div>

        {/* Animated Rings */}
        <div className="cta-ring" style={{ width: '400px', height: '400px', border: '1px solid rgba(240,165,0,0.1)', position: 'absolute', borderRadius: '50%', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}></div>
        <div className="cta-ring" style={{ width: '700px', height: '700px', border: '1px solid rgba(240,165,0,0.05)', position: 'absolute', borderRadius: '50%', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}></div>

        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '800px' }}>
          <SectionReveal>
            <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 600, letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '24px' }}>Ready to Scale?</span>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.8rem,6vw,4.8rem)', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: '32px', letterSpacing: '-.03em' }}>
              Our <span className="gold-grad">Value Proposition</span>
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
                { label: 'Call Us', val: '[Phone Number]' },
                { label: 'Email Us', val: '[Email ID]' },
                { label: 'Visit Us', val: '[Office Address]' }
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
