import SectionReveal from '@/components/ui/SectionReveal';
import TiltCard from '@/components/ui/TiltCard';
import StatCounter from '@/components/ui/StatCounter';
import Link from 'next/link';
import HeroCanvas from '@/components/about/HeroCanvas';
import PhilosophyCanvas from '@/components/about/PhilosophyCanvas';

export const metadata = { title: 'About Us | Srishaan Finance' };

function WordReveal({ words, className = '' }: { words: React.ReactNode[], className?: string }) {
  return (
    <SectionReveal className={`word-reveal ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="word">
          <span style={{ transitionDelay: `${i * 0.09}s` }}>{word}</span>
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
      <section id="about-hero" style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: '68px' }}>
        <HeroCanvas />
        <div className="orb orb-a" style={{ position: 'absolute', borderRadius: '50%', pointerEvents: 'none', filter: 'blur(80px)', width: '460px', height: '460px', right: '4%', top: '5%', background: 'radial-gradient(circle,rgba(26,58,143,.22),transparent 70%)' }}></div>
        <div className="orb orb-b" style={{ position: 'absolute', borderRadius: '50%', pointerEvents: 'none', filter: 'blur(80px)', width: '320px', height: '320px', left: '6%', bottom: '10%', background: 'radial-gradient(circle,rgba(240,165,0,.08),transparent 70%)' }}></div>
        <div className="hero-grid" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'radial-gradient(rgba(255,255,255,.055) 1px,transparent 1px)', backgroundSize: '36px 36px', maskImage: 'radial-gradient(ellipse 75% 75% at 50% 50%,black 20%,transparent 100%)' }}></div>
        
        <div className="hero-text" style={{ position: 'relative', zIndex: 2, padding: '0 6%', maxWidth: '720px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--dim)', marginBottom: '20px', animation: 'fadeUp .6s .1s cubic-bezier(.16,1,.3,1) both' }}>
            <Link href="/" style={{ color: 'var(--dim)', textDecoration: 'none' }}>Home</Link>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
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
              <br key="br"/>,
              <em key="3" style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Financial</em>,
              <span key="4">Services</span>
            ]}
          />
          <style dangerouslySetInnerHTML={{ __html: `
            .word-reveal { font-family: 'Playfair Display', serif; font-size: clamp(2.8rem,5.5vw,4.8rem); font-weight: 700; line-height: 1.06; letter-spacing: -.03em; }
          `}} />
          
          <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.75, fontWeight: 300, maxWidth: '600px', animation: 'fadeUp .7s .85s cubic-bezier(.16,1,.3,1) both' }}>
            A professionally managed organisation delivering integrated financial, compliance, and IT infrastructure solutions to corporates and public sector undertakings across India.
          </p>
        </div>
        
        <div style={{ position: 'absolute', bottom: '36px', left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', color: 'var(--dim)', fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase' }}>
          <span>Scroll</span>
          <div style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom,transparent,var(--dim))', animation: 'slideDown 1.6s ease-in-out infinite' }}></div>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section id="overview" style={{ background: 'var(--navy-2)', padding: '96px 6%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'start' }}>
          <div>
            <SectionReveal className="mb-14">
              <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>Company Overview</span>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 600, lineHeight: 1.18, letterSpacing: '-.02em' }}>Who We <em style={{ fontStyle: 'normal', color: 'var(--gold)' }}>Are</em></h2>
            </SectionReveal>
            <div>
              <SectionReveal delay={0.1}><p style={{ color: 'var(--muted)', fontSize: '14.5px', lineHeight: 1.8, fontWeight: 300, marginBottom: '18px' }}>Srishaan Tech & Financial Services Pvt. Ltd. is a professionally managed organisation incorporated in 2025, established with a vision to deliver integrated financial, compliance, and procurement solutions to corporates and PSUs across India.</p></SectionReveal>
              <SectionReveal delay={0.2}><p style={{ color: 'var(--muted)', fontSize: '14.5px', lineHeight: 1.8, fontWeight: 300, marginBottom: '18px' }}>Headquartered in Hyderabad, Srishaan combines deep financial expertise with IT supply capabilities, supporting organisations in achieving operational efficiency, regulatory compliance, and streamlined procurement.</p></SectionReveal>
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
              <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>Statutory Profile</span>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 600, lineHeight: 1.18, letterSpacing: '-.02em' }}>Our <em style={{ fontStyle: 'normal', color: 'var(--gold)' }}>Registration</em></h2>
            </SectionReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px', marginTop: '32px' }}>
              {[
                { label: 'CIN', value: 'U62020TS2025PTC205782', mono: true },
                { label: 'Incorporated', value: '2025 · Companies Act' },
                { label: 'Headquarters', value: 'Hyderabad, Telangana' },
                { label: 'Enterprise Classification', value: 'Micro & Small Enterprise (MSE)' },
                { label: 'GST Registration', value: 'Valid & Active' },
                { label: 'Startup Recognition', value: 'Govt. of India Framework' },
              ].map((info, i) => (
                <SectionReveal key={info.label} delay={i * 0.1}>
                  <div className="info-card">
                    <div style={{ fontSize: '10.5px', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: '6px' }}>{info.label}</div>
                    <div style={{ fontSize: info.mono ? '13px' : '15px', fontWeight: 500, color: info.mono ? 'var(--gold)' : 'var(--white)', lineHeight: 1.5, fontFamily: info.mono ? 'monospace' : 'inherit', letterSpacing: info.mono ? '.04em' : 'normal' }}>{info.value}</div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES — TWO VERTICALS */}
      <section id="services-split" style={{ background: 'var(--navy)', padding: '96px 6%' }}>
        <SectionReveal className="text-center mb-14">
          <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>Business Verticals</span>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 600, lineHeight: 1.18, letterSpacing: '-.02em' }}>Two Integrated <em style={{ fontStyle: 'normal', color: 'var(--gold)' }}>Service Streams</em></h2>
          <p style={{ color: 'var(--muted)', fontSize: '15px', fontWeight: 300, lineHeight: 1.75, maxWidth: '540px', margin: '14px auto 0' }}>Financial services depth meets IT infrastructure capability — under one professionally managed organisation.</p>
        </SectionReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {/* Financial vertical */}
          <SectionReveal>
            <div className="svc-group">
              <div className="svc-group-header fin">
                <div style={{ fontSize: '22px' }}>📊</div>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: 600 }}>Financial & Compliance Services</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 300, marginTop: '2px' }}>Advisory · Accounting · Compliance · CFO</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { title: 'Outsourced CFO Services', desc: 'Senior financial leadership on demand — strategy, planning, and oversight without the full-time overhead.' },
                  { title: 'Financial Planning & Budgeting', desc: 'Working capital management, forecasting, and budgeting frameworks aligned with your growth targets.' },
                  { title: 'MIS Reporting & Strategic Advisory', desc: 'Actionable management information systems and KPI dashboards for data-driven decision-making.' },
                  { title: 'Accounting & Statutory Compliance', desc: 'GST, Income Tax, and full regulatory compliance management via a structured, documentation-driven approach.' },
                  { title: 'Bid Management & Procurement Support', desc: 'Proposal preparation and coordination services enabling efficient participation in procurement processes across India.' }
                ].map((s, i) => (
                  <div key={i} className="svc-item">
                    <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '18px', fontWeight: 700, color: 'rgba(240,165,0,.22)', minWidth: '26px', lineHeight: 1.2 }}>0{i+1}</div>
                    <div>
                      <h4 style={{ fontSize: '13.5px', fontWeight: 600, marginBottom: '3px' }}>{s.title}</h4>
                      <p style={{ fontSize: '12.5px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.55 }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* IT Infrastructure vertical */}
          <SectionReveal delay={0.2}>
            <div className="svc-group">
              <div className="svc-group-header it">
                <div style={{ fontSize: '22px' }}>🖧</div>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: 600 }}>IT Infrastructure & Networking</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 300, marginTop: '2px' }}>Supply · Cabling · Data Centers · FTTx</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { title: 'IT Hardware & Infrastructure Supply', desc: 'Reliable sourcing with competitive pricing and complete documentation support aligned with PSU procurement standards.' },
                  { title: 'Passive Network Components', desc: 'In association with Msys Connect India Pvt. Ltd. — comprehensive structured cabling and connectivity solutions.' },
                  { title: 'Data Center Infrastructure', desc: 'Pre-terminated copper and fiber systems, high-density patch panels, and full data center build-out support.' },
                  { title: 'FTTx & Enterprise Networks', desc: 'Fiber-to-the-x last-mile connectivity, network racks, enclosures, cable management, and testing equipment.' }
                ].map((s, i) => (
                  <div key={i} className="svc-item">
                    <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '18px', fontWeight: 700, color: 'rgba(240,165,0,.22)', minWidth: '26px', lineHeight: 1.2 }}>0{i+1}</div>
                    <div>
                      <h4 style={{ fontSize: '13.5px', fontWeight: 600, marginBottom: '3px' }}>{s.title}</h4>
                      <p style={{ fontSize: '12.5px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.55 }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '18px' }}>
                <div style={{ fontSize: '11.5px', color: 'var(--dim)', letterSpacing: '.07em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '12px' }}>Product Portfolio</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '10px' }}>
                  {[
                    'Cat5e / Cat6 / Cat6A / Cat7',
                    'Optical Fiber OS2 / OM3 / OM4 / OM5',
                    'Shielded & Unshielded Copper',
                    'Pre-terminated Fiber Systems',
                    'High-Density Patch Panels',
                    'Network Racks & Enclosures',
                    'FTTx Last-Mile Solutions',
                    'Network Testing Equipment'
                  ].map(p => (
                    <div key={p} className="prod-tag">
                      <span style={{ width: '5px', height: '5px', background: 'var(--gold)', borderRadius: '50%', flexShrink: 0 }}></span>
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* STARTUP RECOGNITION */}
      <section id="recognition" style={{ background: 'var(--navy-2)', padding: '96px 6%' }}>
        <SectionReveal className="text-center mb-14">
          <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>Government Alignment</span>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 600, lineHeight: 1.18, letterSpacing: '-.02em' }}>Startup Recognition & <em style={{ fontStyle: 'normal', color: 'var(--gold)' }}>National Initiatives</em></h2>
          <p style={{ color: 'var(--muted)', fontSize: '15px', fontWeight: 300, lineHeight: 1.75, maxWidth: '540px', margin: '14px auto 0' }}>Srishaan operates in alignment with India's flagship government programmes, bringing agility, innovation, and cost efficiency to every engagement.</p>
        </SectionReveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          {[
            { icon: '🚀', title: 'Startup India', desc: 'Recognised startup under the Government of India framework — eligible for procurement benefits applicable to startups and MSEs in government and PSU processes.' },
            { icon: '🏭', title: 'Make in India', desc: 'Committed to domestic sourcing, local value addition, and supporting India\'s manufacturing and services ecosystem across all supply engagements.' },
            { icon: '💻', title: 'Digital India', desc: 'Technology-driven execution at the core — deploying digital processes, MIS systems, and IT infrastructure that align with India\'s digital transformation vision.' }
          ].map((r, i) => (
            <SectionReveal key={r.title} delay={i * 0.1}>
              <div className="recog-card">
                <span className="recog-icon" style={{ fontSize: '32px', marginBottom: '18px', display: 'block', transition: 'transform .3s cubic-bezier(.16,1,.3,1)' }}>{r.icon}</span>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '18px', fontWeight: 600, color: 'var(--gold)', marginBottom: '10px' }}>{r.title}</h3>
                <p style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: 1.7, fontWeight: 300 }}>{r.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* LEADERSHIP */}
      <section id="leadership" style={{ background: 'var(--navy)', padding: '96px 6%' }}>
        <SectionReveal className="text-center mb-14">
          <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>Leadership Team</span>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 600, lineHeight: 1.18, letterSpacing: '-.02em' }}>Experienced <em style={{ fontStyle: 'normal', color: 'var(--gold)' }}>Promoters & Directors</em></h2>
          <p style={{ color: 'var(--muted)', fontSize: '15px', fontWeight: 300, lineHeight: 1.75, maxWidth: '540px', margin: '14px auto 0' }}>Over six decades of combined expertise across finance, manufacturing, technology, and public sector operations.</p>
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
                <div style={{ textAlign: 'right' }}><div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 300 }}>Finance · Compliance<br/>Strategic Advisory</div></div>
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
                <div style={{ textAlign: 'right' }}><div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 300 }}>Manufacturing · Operations<br/>Quality Systems</div></div>
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

      {/* PHILOSOPHY */}
      <section id="philosophy" style={{ background: 'var(--navy-2)', padding: '96px 6%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <SectionReveal>
            <div style={{ position: 'relative', height: '380px', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--bdr)', background: 'var(--navy-3)' }}>
              <PhilosophyCanvas />
            </div>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>Our Commitment</span>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 600, lineHeight: 1.18, letterSpacing: '-.02em' }}>The <em style={{ fontStyle: 'normal', color: 'var(--gold)' }}>Srishaan</em> Standard</h2>
            <p style={{ color: 'var(--muted)', fontSize: '15px', fontWeight: 300, lineHeight: 1.75, maxWidth: '540px', marginTop: '14px' }}>Despite being a startup, Srishaan operates with structured processes, strong governance, and a clear commitment to quality — meeting the expectations of large corporates and PSUs.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '13px', marginTop: '28px' }}>
              {[
                'Timely execution and reliability of supply',
                'Complete documentation and compliance support',
                'Transparent, process-oriented engagement model',
                'Aligned with PSU and public procurement guidelines',
                'Responsiveness and single point of accountability',
                'MSE benefits applicable in government procurement'
              ].map((v, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: 'var(--muted)', fontWeight: 300 }}>
                  <span className="value-dot"></span>
                  {v}
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" style={{ background: 'linear-gradient(135deg,#0D1635 0%,#112255 50%,#1A3A8F 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden', padding: '96px 6%' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 65% 65% at 50% 50%,rgba(240,165,0,.1) 0%,transparent 65%)' }}></div>
        <div className="cta-ring" style={{ width: '300px', height: '300px', animationDelay: '0s' }}></div>
        <div className="cta-ring" style={{ width: '520px', height: '520px', animationDelay: '.8s' }}></div>
        <div className="cta-ring" style={{ width: '740px', height: '740px', animationDelay: '1.6s' }}></div>
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <SectionReveal>
            <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>Partner With Us</span>
            <WordReveal 
              className="mb-4"
              words={[
                <span key="1">Explore</span>,
                <span key="2">a</span>,
                <em key="3" style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Partnership</em>
              ]}
            />
            <p style={{ color: 'rgba(255,255,255,.9)', fontSize: '15px', fontWeight: 300, lineHeight: 1.75, maxWidth: '540px', margin: '0 auto 40px' }}>Srishaan Tech & Financial Services is keen to establish long-term professional associations with corporates and PSUs. We assure the highest standards of professionalism, compliance, and service excellence.</p>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-gold">Request Empanelment</Link>
              <Link href="/contact" className="btn-ghost" style={{ color: 'rgba(255,255,255,.88)', borderColor: 'rgba(255,255,255,.22)' }}>Download Company Profile</Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
