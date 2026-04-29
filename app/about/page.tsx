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
        <div className="orb orb-a" style={{ position: 'absolute', borderRadius: '50%', pointerEvents: 'none', filter: 'blur(80px)', width: '460px', height: '460px', right: '4%', top: '5%', background: 'radial-gradient(circle,rgba(26,58,143,.22),transparent 70%)' }}></div>
        <div className="orb orb-b" style={{ position: 'absolute', borderRadius: '50%', pointerEvents: 'none', filter: 'blur(80px)', width: '320px', height: '320px', left: '6%', bottom: '10%', background: 'radial-gradient(circle,rgba(240,165,0,.08),transparent 70%)' }}></div>
        <div className="hero-grid" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'radial-gradient(rgba(255,255,255,.055) 1px,transparent 1px)', backgroundSize: '36px 36px', maskImage: 'radial-gradient(ellipse 75% 75% at 50% 50%,black 20%,transparent 100%)' }}></div>

        <div className="hero-text" style={{ position: 'relative', zIndex: 2, padding: '0 6%', maxWidth: '720px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--dim)', marginBottom: '20px', animation: 'fadeUp .6s .1s cubic-bezier(.16,1,.3,1) both' }}>
            <Link href="/" style={{ color: 'var(--dim)', textDecoration: 'none' }}>Home</Link>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
            <span style={{ color: 'var(--muted)' }}>About Us</span>
          </div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(240,165,0,.08)', border: '1px solid rgba(240,165,0,.22)', color: 'var(--gold)', fontSize: '11.5px', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: '100px', marginBottom: '28px', animation: 'fadeUp .7s .2s cubic-bezier(.16,1,.3,1) both' }}>
            <span style={{ width: '5px', height: '5px', background: 'var(--gold)', borderRadius: '50%', animation: 'blink 2s ease-in-out infinite' }}></span>
            Incorporated 2025 · Hyderabad
          </div>

          <WordReveal
            className="mb-5"
            words={[
              <span key="1">Srishaan</span>,
              <span key="2">Tech &amp;</span>,
              <br key="br" />,
              <em key="3" style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Financial</em>,
              <span key="4">Services</span>
            ]}
          />
          <style dangerouslySetInnerHTML={{
            __html: `
            .word-reveal { font-family: 'Playfair Display', serif; font-size: clamp(2.8rem,5.5vw,4.8rem); font-weight: 700; line-height: 1.2; letter-spacing: -.03em; }
          `}} />

          <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.75, fontWeight: 300, maxWidth: '600px', animation: 'fadeUp .7s .85s cubic-bezier(.16,1,.3,1) both' }}>
            We are a strategic finance and business advisory firm delivering integrated solutions across financial management, funding, compliance, and business growth.
          </p>
        </div>

        <div style={{ position: 'absolute', bottom: '36px', left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', color: 'var(--dim)', fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase' }}>
          <span>Scroll</span>
          <div style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom,transparent,var(--dim))', animation: 'slideDown 1.6s ease-in-out infinite' }}></div>
        </div>
      </section>

      {/* Main Content Wrapper (Slides over Hero) */}
      <div style={{ position: 'relative', zIndex: 10, background: 'var(--navy-2)', boxShadow: '0 -20px 40px rgba(0,0,0,0.3)' }}>


      {/* COMPANY OVERVIEW */}
      <section id="overview" style={{ background: 'var(--navy-2)', padding: '96px 6%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'start' }}>
          <div>
            <SectionReveal className="mb-14">
              <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>Company Overview</span>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 600, lineHeight: 1.18, letterSpacing: '-.02em' }}>Who We <em style={{ fontStyle: 'normal', color: 'var(--gold)' }}>Are</em></h2>
            </SectionReveal>
            <div>
              <SectionReveal delay={0.1}><p style={{ color: 'var(--muted)', fontSize: '14.5px', lineHeight: 1.8, fontWeight: 300, marginBottom: '18px' }}>We partner with businesses to build strong financial systems, ensure regulatory compliance, improve profitability, and enable scalable growth.</p></SectionReveal>
              <SectionReveal delay={0.2}><p style={{ color: 'var(--muted)', fontSize: '14.5px', lineHeight: 1.8, fontWeight: 300, marginBottom: '18px' }}>Our approach goes beyond traditional advisory — we act as execution partners, delivering measurable and result-oriented outcomes.</p></SectionReveal>
              <SectionReveal delay={0.3}><p style={{ color: 'var(--muted)', fontSize: '14.5px', lineHeight: 1.8, fontWeight: 300 }}>The Company operates with a strong focus on professionalism, process orientation, and technology-driven execution — backed by leadership with 20–40 years of cross-industry experience.</p></SectionReveal>
            </div>
            <SectionReveal delay={0.4}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '28px' }}>
                {['Startup India', 'Make in India', 'Digital India', 'MSE Registered'].map(g => (
                  <span key={g} className="gbadge"><span style={{ width: '6px', height: '6px', background: 'var(--gold)', borderRadius: '50%' }}></span>{g}</span>
                ))}
              </div>
            </SectionReveal>
          </div>

          <div>
            <SectionReveal className="mb-14">
              <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>Strategic Foundation</span>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 600, lineHeight: 1.18, letterSpacing: '-.02em' }}>Vision & <em style={{ fontStyle: 'normal', color: 'var(--gold)' }}>Mission</em></h2>
            </SectionReveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
              <SectionReveal delay={0.1}>
                <div className="info-card" style={{ borderLeft: '3px solid var(--gold)' }}>
                  <div style={{ fontSize: '10.5px', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '10px' }}>Our Vision</div>
                  <div style={{ fontSize: '15px', fontWeight: 400, color: 'var(--white)', lineHeight: 1.6 }}>To be a trusted growth partner for businesses by providing structured financial, compliance, and strategic solutions that drive sustainable expansion.</div>
                </div>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <div className="info-card">
                  <div style={{ fontSize: '10.5px', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px' }}>Our Mission</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {[
                      'To provide actionable financial insights',
                      'To ensure seamless statutory compliance',
                      'To enable access to structured funding',
                      'To strengthen financial systems and controls',
                      'To drive long-term value creation'
                    ].map((m, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: 'var(--muted)', fontWeight: 300 }}>
                        <span style={{ width: '5px', height: '5px', background: 'var(--gold)', borderRadius: '50%' }}></span>
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

      {/* SERVICES — TWO VERTICALS */}
      <section id="services-split" style={{ background: 'var(--navy)', padding: '96px 6%' }}>
        <SectionReveal className="text-center mb-14">
          <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>Expertise Areas</span>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 600, lineHeight: 1.18, letterSpacing: '-.02em' }}>Core <em style={{ fontStyle: 'normal', color: 'var(--gold)' }}>Service Verticals</em></h2>
          <p style={{ color: 'var(--muted)', fontSize: '15px', fontWeight: 300, lineHeight: 1.75, maxWidth: '540px', margin: '14px auto 70px' }}>Strategic finance, structured funding, and end-to-end compliance solutions tailored for business excellence.</p>
        </SectionReveal>

        <ServiceCarousel>
          {/* 1. Virtual CFO */}
          <SectionReveal>
            <div className="svc-group" style={{ height: '100%' }}>
              <div className="svc-group-header fin">
                <div style={{ fontSize: '22px' }}>📊</div>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: 600 }}>Virtual CFO Services</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 300, marginTop: '2px' }}>Strategic Leadership · MIS · Planning</div>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
                {[
                  'Financial planning & analysis',
                  'Cash flow management',
                  'MIS reporting & dashboards',
                  'Profitability improvement',
                  'Budgeting & forecasting',
                  'Strategic decision support'
                ].map((s, i) => (
                  <div key={i} className="svc-item" style={{ padding: '12px 15px' }}>
                    <div style={{ fontSize: '12.5px', color: 'var(--white)', fontWeight: 500 }}>{s}</div>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* 2. Funding */}
          <SectionReveal delay={0.1}>
            <div className="svc-group" style={{ height: '100%' }}>
              <div className="svc-group-header it" style={{ background: 'rgba(240,165,0,.08)' }}>
                <div style={{ fontSize: '22px' }}>💰</div>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: 600 }}>Funding & Financial Structuring</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 300, marginTop: '2px' }}>Loans · Modeling · Bank Liaison</div>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
                {[
                  'CMA data preparation',
                  'Project reports & modeling',
                  'Working capital & term loans',
                  'Bank & NBFC liaison',
                  'End-to-end funding execution',
                  'Debt restructuring support'
                ].map((s, i) => (
                  <div key={i} className="svc-item" style={{ padding: '12px 15px' }}>
                    <div style={{ fontSize: '12.5px', color: 'var(--white)', fontWeight: 500 }}>{s}</div>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* 3. Business Advisory */}
          <SectionReveal delay={0.2}>
            <div className="svc-group" style={{ height: '100%' }}>
              <div className="svc-group-header fin">
                <div style={{ fontSize: '22px' }}>📈</div>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: 600 }}>Business Advisory</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 300, marginTop: '2px' }}>Growth · Optimization · Processes</div>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
                {[
                  'Cost optimization strategies',
                  'Business restructuring',
                  'Growth & expansion planning',
                  'Process improvement',
                  'Financial diagnostics',
                  'Performance review'
                ].map((s, i) => (
                  <div key={i} className="svc-item" style={{ padding: '12px 15px' }}>
                    <div style={{ fontSize: '12.5px', color: 'var(--white)', fontWeight: 500 }}>{s}</div>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* 4. Compliance */}
          <SectionReveal delay={0.3}>
            <div className="svc-group" style={{ height: '100%' }}>
              <div className="svc-group-header it" style={{ background: 'rgba(240,165,0,.08)' }}>
                <div style={{ fontSize: '22px' }}>⚖️</div>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: 600 }}>Compliance & Regulatory</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 300, marginTop: '2px' }}>GST · IT · ROC · Payroll</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  'GST compliance (returns, reconciliation)',
                  'Income Tax & TDS compliance',
                  'PF, ESI & payroll compliance',
                  'Professional Tax (PT) & ROC / MCA',
                  'Handling notices & representation',
                  'Regulatory documentation & filings'
                ].map((s, i) => (
                  <div key={i} className="svc-item" style={{ padding: '10px 15px' }}>
                    <div style={{ fontSize: '12.5px', color: 'var(--white)', fontWeight: 500 }}>{s}</div>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </ServiceCarousel>
      </section>

      {/* INDUSTRIES & WHY US */}
      <section id="industries-values" style={{ background: 'var(--navy-2)', padding: '96px 6%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px' }}>
          <div>
            <SectionReveal className="mb-10">
              <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>Market Focus</span>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem,3.5vw,2.8rem)', fontWeight: 600, lineHeight: 1.18, letterSpacing: '-.02em' }}>Industries We <em style={{ fontStyle: 'normal', color: 'var(--gold)' }}>Serve</em></h2>
            </SectionReveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[
                { icon: '🏗️', title: 'Infrastructure', desc: 'Contractors & Engineering firms' },
                { icon: '🏢', title: 'Real Estate', desc: 'Developers & Builders' },
                { icon: '👥', title: 'Manpower', desc: 'Facility Management services' },
                { icon: '🏢', title: 'SMEs', desc: 'Mid-sized Enterprises' }
              ].map((ind, i) => (
                <SectionReveal key={i} delay={i * 0.1}>
                  <div className="recog-card" style={{ padding: '24px', textAlign: 'left' }}>
                    <div style={{ fontSize: '28px', marginBottom: '12px' }}>{ind.icon}</div>
                    <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--white)', marginBottom: '4px' }}>{ind.title}</h4>
                    <p style={{ fontSize: '12px', color: 'var(--dim)', fontWeight: 300 }}>{ind.desc}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>

          <div>
            <SectionReveal className="mb-10">
              <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>The Advantage</span>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem,3.5vw,2.8rem)', fontWeight: 600, lineHeight: 1.18, letterSpacing: '-.02em' }}>Why Choose <em style={{ fontStyle: 'normal', color: 'var(--gold)' }}>Srishaan</em></h2>
            </SectionReveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { title: 'Integrated Expertise', desc: 'Finance, compliance & funding under one roof' },
                { title: 'Execution-Focused', desc: 'Active execution partners, not just advisors' },
                { title: 'Industry Depth', desc: 'Strong understanding of sector-specific challenges' },
                { title: 'Result-Oriented', desc: 'Focused on delivering measurable outcomes' },
                { title: 'Trusted Partner', desc: 'A commitment to long-term growth partnerships' }
              ].map((val, i) => (
                <SectionReveal key={i} delay={i * 0.1}>
                  <div className="svc-item" style={{ padding: '16px 20px' }}>
                    <div style={{ width: '6px', height: '6px', background: 'var(--gold)', borderRadius: '50%', marginTop: '6px' }}></div>
                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '2px' }}>{val.title}</h4>
                      <p style={{ fontSize: '12.5px', color: 'var(--dim)', fontWeight: 300 }}>{val.desc}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section id="leadership" style={{ background: 'var(--navy)', padding: '96px 6%' }}>
        <SectionReveal className="text-center mb-14">
          <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>Leadership Team</span>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 600, lineHeight: 1.18, letterSpacing: '-.02em' }}>Experienced <em style={{ fontStyle: 'normal', color: 'var(--gold)' }}>Promoters & Directors</em></h2>
          <p style={{ color: 'var(--muted)', fontSize: '15px', fontWeight: 300, lineHeight: 1.75, maxWidth: '540px', margin: '14px auto 0', marginBottom: '50px' }}>Over six decades of combined expertise across finance, manufacturing, technology, and public sector operations.</p>
        </SectionReveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>

          <SectionReveal>
            <div className="leader-card">
              <div className="leader-avatar avatar-vg">VP</div>
              <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '20px', fontWeight: 600, marginBottom: '4px' }}>Mr. Venu Gopal Pidugu</div>
              <div style={{ fontSize: '12px', fontWeight: 500, color: 'var(--gold)', letterSpacing: '.07em', textTransform: 'uppercase', marginBottom: '16px' }}>Promoter & Director</div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(240,165,0,.08)', border: '1px solid rgba(240,165,0,.18)', color: 'var(--gold)', fontSize: '11.5px', fontWeight: 600, padding: '4px 12px', borderRadius: '100px', marginBottom: '18px' }}>🎓 Chartered Accountant</span>
              <p style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: 1.75, fontWeight: 300, marginBottom: '20px' }}>
                A qualified Chartered Accountant with over 20 years of professional experience across diversified sectors including infrastructure, technology, and IT/ITES. Brings deep expertise in financial management, corporate finance, compliance, and strategic advisory — enabling structured governance and informed decision-making at scale.
              </p>
              <div style={{ fontSize: '11px', color: 'var(--dim)', textTransform: 'uppercase', letterSpacing: '.07em', fontWeight: 600, marginBottom: '8px' }}>Past Associations</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                <span className="org-tag">GVK</span>
                <span className="org-tag">Arabi Co. WLL</span>
                <span className="org-tag">VSoft Technologies</span>
              </div>
              <div style={{ marginTop: '18px', paddingTop: '18px', borderTop: '1px solid var(--bdr)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div><div style={{ fontFamily: 'var(--font-playfair)', fontSize: '28px', fontWeight: 700, color: 'var(--gold)', lineHeight: 1 }}>20+</div><div style={{ fontSize: '11px', color: 'var(--dim)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.06em' }}>Years Experience</div></div>
                <div style={{ textAlign: 'right' }}><div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 300 }}>Finance · Compliance<br />Strategic Advisory</div></div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="leader-card">
              <div className="leader-avatar avatar-jj">JC</div>
              <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '20px', fontWeight: 600, marginBottom: '4px' }}>Mr. John J. Campos</div>
              <div style={{ fontSize: '12px', fontWeight: 500, color: 'var(--gold)', letterSpacing: '.07em', textTransform: 'uppercase', marginBottom: '16px' }}>Promoter & Director</div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(240,165,0,.08)', border: '1px solid rgba(240,165,0,.18)', color: 'var(--gold)', fontSize: '11.5px', fontWeight: 600, padding: '4px 12px', borderRadius: '100px', marginBottom: '18px' }}>🎓 Mechanical Engineer · JNTU Hyderabad</span>
              <p style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: 1.75, fontWeight: 300, marginBottom: '20px' }}>
                A qualified Mechanical Engineer from JNTU, Hyderabad, with over 40 years of experience in manufacturing and production industries. Brings deep expertise in plant operations, process optimisation, and quality systems — providing operational discipline and execution rigour to Srishaan's delivery model.
              </p>
              <div style={{ fontSize: '11px', color: 'var(--dim)', textTransform: 'uppercase', letterSpacing: '.07em', fontWeight: 600, marginBottom: '8px' }}>Past Associations</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                <span className="org-tag">Procter & Gamble (P&G)</span>
                <span className="org-tag">Coffee Day</span>
              </div>
              <div style={{ marginTop: '18px', paddingTop: '18px', borderTop: '1px solid var(--bdr)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div><div style={{ fontFamily: 'var(--font-playfair)', fontSize: '28px', fontWeight: 700, color: 'var(--gold)', lineHeight: 1 }}>40+</div><div style={{ fontSize: '11px', color: 'var(--dim)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.06em' }}>Years Experience</div></div>
                <div style={{ textAlign: 'right' }}><div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 300 }}>Manufacturing · Operations<br />Quality Systems</div></div>
              </div>
            </div>
          </SectionReveal>

        </div>
      </section>

      {/* STATS */}
      <section id="stats" style={{ background: 'var(--navy-3)', borderTop: '1px solid var(--bdr)', borderBottom: '1px solid var(--bdr)', padding: '72px 6%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '40px' }}>
          {[
            { target: 60, suffix: '+ Yrs', label: 'Combined Leadership Experience' },
            { target: 2, suffix: ' Verticals', label: 'Integrated Business Streams' },
            { target: 8, suffix: ' Services', label: 'Core Service Offerings' },
            { target: 3, suffix: ' Initiatives', label: 'Govt. Programme Alignment' }
          ].map((s, i) => (
            <SectionReveal key={s.label} delay={i * 0.1}>
              <div className="stat">
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.4rem,4vw,3.6rem)', fontWeight: 700, color: 'var(--gold)', lineHeight: 1, marginBottom: '6px' }}>
                  <StatCounter target={s.target} suffix={s.suffix} />
                </div>
                <div style={{ fontSize: '12px', fontWeight: 500, color: 'var(--dim)', letterSpacing: '.07em', textTransform: 'uppercase' }}>{s.label}</div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" style={{ background: 'var(--navy-2)', padding: '96px 6%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <SectionReveal>
            <div style={{ position: 'relative', height: '420px', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--bdr)', background: 'var(--navy-3)' }}>
              <PhilosophyCanvas />
            </div>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>Our Methodology</span>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 600, lineHeight: 1.18, letterSpacing: '-.02em' }}>A Structured <em style={{ fontStyle: 'normal', color: 'var(--gold)' }}>Execution Model</em></h2>
            <p style={{ color: 'var(--muted)', fontSize: '15px', fontWeight: 300, lineHeight: 1.75, maxWidth: '540px', marginTop: '14px' }}>We follow a structured, execution-driven model that transforms advisory into measurable business outcomes.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '32px' }}>
              {[
                { title: 'Operational Audit', desc: 'Understand business operations & financial position' },
                { title: 'Risk Assessment', desc: 'Ensure compliance readiness and risk assessment' },
                { title: 'Gap Analysis', desc: 'Identify gaps and growth opportunities' },
                { title: 'System Implementation', desc: 'Implement financial systems and controls' },
                { title: 'Execution & Monitoring', desc: 'Execute strategies and continuously monitor performance' }
              ].map((v, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div className="value-dot" style={{ marginTop: '6px' }}></div>
                  <div>
                    <div style={{ fontSize: '14.5px', color: 'var(--white)', fontWeight: 600, marginBottom: '2px' }}>{v.title}</div>
                    <div style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300 }}>{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" style={{ top: 0, zIndex: 30, background: 'linear-gradient(135deg,#0D1635 0%,#112255 50%,#1A3A8F 100%)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', padding: '120px 6%' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 65% 65% at 50% 50%,rgba(240,165,0,.1) 0%,transparent 65%)' }}></div>
        <div className="cta-ring" style={{ width: '300px', height: '300px', animationDelay: '0s' }}></div>
        <div className="cta-ring" style={{ width: '520px', height: '520px', animationDelay: '.8s' }}></div>
        <div className="cta-ring" style={{ width: '740px', height: '740px', animationDelay: '1.6s' }}></div>

        <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <SectionReveal>
            <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>Value Proposition</span>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.2rem,4vw,3.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '24px' }}>
              Your Extended Finance & <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Compliance Arm</em>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
              {[
                'Maintain full statutory compliance',
                'Improve financial discipline and control',
                'Access funding efficiently',
                'Enhance profitability and cash flow',
                'Scale operations with clarity and confidence'
              ].map((v, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'rgba(255,255,255,.85)', fontWeight: 300 }}>
                  <span style={{ width: '6px', height: '6px', background: 'var(--gold)', borderRadius: '50%' }}></span>
                  {v}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-gold" style={{ padding: '14px 32px' }}>Book a Consultation</Link>
              <Link href="/contact" className="btn-ghost" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)', padding: '14px 32px' }}>Contact Us</Link>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="info-card" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', padding: '40px' }}>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '20px', fontWeight: 600, color: 'var(--gold)', marginBottom: '28px' }}>Contact Details</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <span style={{ fontSize: '20px' }}>📞</span>
                  <div>
                    <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '.1em', color: 'rgba(255,255,255,.5)', marginBottom: '4px' }}>Phone Number</div>
                    <div style={{ fontSize: '15px', color: '#fff' }}>[Phone Number]</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <span style={{ fontSize: '20px' }}>✉️</span>
                  <div>
                    <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '.1em', color: 'rgba(255,255,255,.5)', marginBottom: '4px' }}>Email ID</div>
                    <div style={{ fontSize: '15px', color: '#fff' }}>[Email ID]</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <span style={{ fontSize: '20px' }}>📍</span>
                  <div>
                    <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '.1em', color: 'rgba(255,255,255,.5)', marginBottom: '4px' }}>Office Address</div>
                    <div style={{ fontSize: '15px', color: '#fff', lineHeight: 1.5 }}>[Office Address]</div>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
      </div>
    </>
  );
}
