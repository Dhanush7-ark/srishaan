import SectionReveal from '@/components/ui/SectionReveal';
import TiltCard from '@/components/ui/TiltCard';
import ServicesHeroCanvas from '@/components/services/ServicesHeroCanvas';
import Link from 'next/link';

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

export const metadata = { title: 'Services | Srishaan Finance' };

const financialServices = [
  { icon:'📋', title:'Outsourced CFO Services',            desc:'Strategic financial leadership without the full-time cost. We serve as your CFO for planning, reporting, and governance.' },
  { icon:'📊', title:'Financial Planning & Budgeting',      desc:'Annual operating plans, budget preparation, and variance analysis for structured financial management.' },
  { icon:'📈', title:'MIS Reporting & Strategic Advisory',  desc:'Management information systems, KPI dashboards, and data-driven strategic recommendations.' },
  { icon:'🏛', title:'Accounting & Statutory Compliance',   desc:'Complete accounting management, tax filings, GST compliance, and regulatory adherence.' },
  { icon:'🤝', title:'Bid Management & Procurement Support',desc:'End-to-end tender management, bid documentation, and procurement support for PSU contracts.' },
];
const itServices = [
  { icon:'🖥', title:'IT Hardware & Infrastructure Supply', desc:'Procurement and supply of certified IT hardware for enterprise and government projects.' },
  { icon:'🔌', title:'Passive Network Components',          desc:'Complete range of copper and fiber cabling, patch panels, and connectivity solutions.' },
  { icon:'🏢', title:'Data Center Infrastructure',          desc:'Structured cabling, power management, and cooling solutions for data centers.' },
  { icon:'🌐', title:'FTTx & Enterprise Networks',          desc:'Fiber-to-the-premises and enterprise-grade network deployments.' },
  { icon:'🔧', title:'Network Racks & Management',          desc:'Cable management systems, network racks, and complete installation services.' },
];
const products = ['Cat5e UTP','Cat6 UTP','Cat6A FTP','Cat7 SFTP','OS2 Singlemode Fiber','OM3 Multimode Fiber','OM4 Multimode Fiber','OM5 Wideband Fiber','Pre-terminated Systems','Patch Panels','FTTx Components','Cable Management','Tools & Testing','Network Racks','SFP Modules','Media Converters'];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero with 3D Octahedron ── */}
      <section style={{ padding: '140px 0 80px', background: 'var(--navy)', position: 'relative', overflow: 'hidden', minHeight: '520px', display: 'flex', alignItems: 'center' }}>
        {/* 3D Canvas — decorative bottom-left background */}
        <div style={{ position: 'absolute', left: '-60px', bottom: '-60px', width: '540px', height: '540px', opacity: 0.9, pointerEvents: 'none' }}>
          <ServicesHeroCanvas />
        </div>
        {/* Fade overlay so canvas blends into background */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, transparent 25%, var(--navy) 65%)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', margin: '0 auto', padding: '0 6%' }}>
          <div style={{ fontSize: '13px', color: 'var(--dim)', marginBottom: '24px' }}>
            <Link href="/" style={{ color: 'var(--dim)', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 10px', opacity: .4 }}>/</span>
            <span style={{ color: 'var(--gold)' }}>Services</span>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(240,165,0,.08)', border: '1px solid rgba(240,165,0,.2)', color: 'var(--gold)', fontSize: '11px', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: '100px', marginBottom: '28px' }}>
            Two Integrated Service Verticals
          </div>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.8rem,5vw,5rem)', fontWeight: 700, lineHeight: 1.06, letterSpacing: '-.03em', maxWidth: '620px' }}>
            What We <span className="gold-grad">Deliver</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--muted)', lineHeight: 1.8, maxWidth: '500px', marginTop: '24px' }}>
            Two integrated verticals — financial advisory and IT infrastructure — working together to serve your business needs.
          </p>
        </div>
      </section>

      {/* ── Financial Services ── */}
      <section id="financial" style={{ padding: '100px 0', background: 'var(--navy-2)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 6%', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '64px', alignItems: 'start' }}>
          <div>
            <SectionReveal>
              <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.14em', color: 'var(--gold)', marginBottom: '14px' }}>Financial Vertical</p>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-.02em', marginBottom: '40px' }}>Financial &amp; Compliance Services</h2>
            </SectionReveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {financialServices.map((s, i) => (
                <SectionReveal key={s.title} delay={i * 0.08}>
                  <TiltCard className="glass-card" style={{ padding: '22px 24px', borderRadius: '14px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ position: 'relative', zIndex: 2, display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                      <div style={{ fontSize: '24px', flexShrink: 0, marginTop: '2px' }}>{s.icon}</div>
                      <div>
                        <div style={{ fontSize: '14.5px', fontWeight: 700, color: 'var(--white)', marginBottom: '6px' }}>{s.title}</div>
                        <div style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.65 }}>{s.desc}</div>
                      </div>
                    </div>
                  </TiltCard>
                </SectionReveal>
              ))}
            </div>
          </div>
          <SectionReveal delay={0.2}>
            <div style={{ background: 'linear-gradient(135deg,rgba(26,58,143,.25),rgba(45,91,227,.12))', border: '1px solid rgba(45,91,227,.2)', borderRadius: '20px', padding: '40px 32px', position: 'sticky', top: '100px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--white)', marginBottom: '8px' }}>Financial Expertise at Scale</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '28px' }}>Serving PSUs, enterprises, and growing companies with full-spectrum financial support.</p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {['GST Compliance','Income Tax','Working Capital','PSU Procurement','Strategic Advisory','Financial Governance'].map(t => (
                  <span key={t} style={{ fontSize: '11.5px', padding: '5px 12px', borderRadius: '100px', border: '1px solid rgba(240,165,0,.3)', color: 'var(--gold)', background: 'rgba(240,165,0,.06)' }}>{t}</span>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── IT Services ── */}
      <section id="it" style={{ padding: '100px 0', background: 'var(--navy)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 6%', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '64px', alignItems: 'start' }}>
          <SectionReveal delay={0.2}>
            <div style={{ background: 'linear-gradient(135deg,rgba(26,58,143,.25),rgba(45,91,227,.12))', border: '1px solid rgba(45,91,227,.2)', borderRadius: '20px', padding: '40px 32px', position: 'sticky', top: '100px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--white)', marginBottom: '8px' }}>IT Infrastructure Supply</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '28px' }}>Certified products and end-to-end project execution for enterprise and government networks.</p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {['Copper Cabling','Optical Fiber','Data Centers','FTTx','Network Racks','PSU Compliant'].map(t => (
                  <span key={t} style={{ fontSize: '11.5px', padding: '5px 12px', borderRadius: '100px', border: '1px solid rgba(45,91,227,.3)', color: 'var(--blue-b)', background: 'rgba(45,91,227,.06)' }}>{t}</span>
                ))}
              </div>
            </div>
          </SectionReveal>
          <div>
            <SectionReveal>
              <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.14em', color: 'var(--blue-b)', marginBottom: '14px' }}>IT Vertical</p>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-.02em', marginBottom: '40px' }}>IT Infrastructure &amp; Networking</h2>
            </SectionReveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {itServices.map((s, i) => (
                <SectionReveal key={s.title} delay={i * 0.08}>
                  <TiltCard className="glass-card" style={{ padding: '22px 24px', borderRadius: '14px' }}>
                    <div style={{ position: 'relative', zIndex: 2, display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                      <div style={{ fontSize: '24px', flexShrink: 0, marginTop: '2px' }}>{s.icon}</div>
                      <div>
                        <div style={{ fontSize: '14.5px', fontWeight: 700, color: 'var(--white)', marginBottom: '6px' }}>{s.title}</div>
                        <div style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.65 }}>{s.desc}</div>
                      </div>
                    </div>
                  </TiltCard>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section id="products" style={{ padding: '100px 0', background: 'var(--navy-2)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 6%' }}>
          <SectionReveal className="mb-12">
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.14em', color: 'var(--gold)', marginBottom: '14px' }}>Product Portfolio</p>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 700, letterSpacing: '-.02em' }}>Cabling &amp; Connectivity Products</h2>
          </SectionReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(170px,1fr))', gap: '12px' }}>
            {products.map((p, i) => (
              <SectionReveal key={p} delay={i * 0.03}>
                <TiltCard className="glass-card" style={{ padding: '16px 18px', borderRadius: '10px', textAlign: 'center' }}>
                  <span style={{ position: 'relative', zIndex: 2, fontSize: '13.5px', color: 'var(--muted)', fontWeight: 500 }}>{p}</span>
                </TiltCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Approach ── */}
      <section id="approach" style={{ padding: '100px 0', background: 'var(--navy)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 6%' }}>
          <SectionReveal className="mb-16">
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 700, letterSpacing: '-.02em' }}>Our Approach</h2>
          </SectionReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '32px' }}>
            {[
              { n:'01', t:'Understand', d:'We begin with a thorough needs assessment — understanding your infrastructure goals, compliance requirements, and budget.' },
              { n:'02', t:'Propose',    d:'A tailored solution proposal with product specifications, timelines, and transparent pricing.' },
              { n:'03', t:'Execute',    d:'Certified installation teams deploy your infrastructure on time, with full documentation.' },
              { n:'04', t:'Support',    d:'Post-installation support, warranty management, and ongoing maintenance services.' },
            ].map((s, i) => (
              <SectionReveal key={s.n} delay={i * 0.12}>
                <TiltCard className="glass-card" style={{ padding: '32px 24px', borderRadius: '16px' }}>
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '36px', fontWeight: 700, color: 'rgba(240,165,0,.22)', lineHeight: 1, marginBottom: '16px' }}>{s.n}</div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--white)', marginBottom: '10px' }}>{s.t}</h3>
                    <p style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: 1.7 }}>{s.d}</p>
                  </div>
                </TiltCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partner ── */}
      <section id="partner" style={{ padding: '80px 0', background: 'var(--navy-2)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 6%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <SectionReveal>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.14em', color: 'var(--dim)', marginBottom: '14px' }}>Reselling Partner</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <svg viewBox="0 0 52 48" width="52" height="48" fill="none">
                <path d="M4 44 L17 4 L27 4 L14 44 Z" fill="#F0A500"/>
                <path d="M25 4 L35 4 L48 44 L39 44 Z" fill="#F0A500"/>
                <path d="M19 4 L27 4 L20.4 24 L16 24 Z" fill="#1B5298"/>
              </svg>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                <span><span style={{ fontSize: '26px', fontWeight: 800, color: '#1B5298' }}>M</span><span style={{ fontSize: '18px', fontWeight: 700, color: '#F0A500' }}>SYS</span></span>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#1B5298', letterSpacing: '.2em' }}>CONNECT</span>
              </div>
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-.02em', marginBottom: '16px' }}>Official Reselling Partner</h2>
            <p style={{ fontSize: '14.5px', color: 'var(--muted)', lineHeight: 1.8 }}>Msys Connect is our strategic technology partner for structured cabling, passive networking components, and enterprise connectivity solutions.</p>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {['Access to certified Msys Connect product range','Competitive pricing on bulk procurement','Technical support and product training','Warranty and after-sales service'].map(v => (
                <div key={v} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)', marginTop: '7px', flexShrink: 0 }} />
                  <span style={{ fontSize: '14.5px', color: 'var(--muted)', lineHeight: 1.6 }}>{v}</span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="cta" style={{ background: 'linear-gradient(135deg,#0D1635 0%,#112255 50%,#1A3A8F 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden', padding: '96px 6%' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 65% 65% at 50% 50%,rgba(240,165,0,.1) 0%,transparent 65%)' }}></div>
        <div className="cta-ring" style={{ width: '300px', height: '300px', animationDelay: '0s' }}></div>
        <div className="cta-ring" style={{ width: '520px', height: '520px', animationDelay: '.8s' }}></div>
        <div className="cta-ring" style={{ width: '740px', height: '740px', animationDelay: '1.6s' }}></div>
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <SectionReveal>
            <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>Get in Touch</span>
            <WordReveal 
              className="mb-4"
              words={[
                <span key="1">Ready</span>,
                <span key="2">to</span>,
                <em key="3" style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Engage?</em>
              ]}
            />
            <style dangerouslySetInnerHTML={{ __html: `
              .word-reveal { font-family: 'Playfair Display', serif; font-size: clamp(2.8rem,5.5vw,4.8rem); font-weight: 700; line-height: 1.06; letter-spacing: -.03em; }
            `}} />
            <p style={{ color: 'rgba(255,255,255,.9)', fontSize: '15px', fontWeight: 300, lineHeight: 1.75, maxWidth: '540px', margin: '0 auto 40px' }}>Reach out to discuss your requirements — whether financial advisory, compliance management, or IT infrastructure supply. We respond promptly.</p>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-gold">Contact Us Today</Link>
              <Link href="/about" className="btn-ghost" style={{ color: 'rgba(255,255,255,.88)', borderColor: 'rgba(255,255,255,.22)' }}>About Srishaan</Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
