import SectionReveal from '@/components/ui/SectionReveal';
import TiltCard from '@/components/ui/TiltCard';
import ServicesHeroCanvas from '@/components/services/ServicesHeroCanvas';
import Link from 'next/link';
import ScrollHandler from '@/components/ui/ScrollHandler';
import ScrollSnapSetter from '@/components/ui/ScrollSnapSetter';


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

export const metadata = { title: 'Services | Srishaan Finance' };

const itAndItes = [
  { icon: '🖥', title: 'IT Infrastructure Support', desc: 'Complete lifecycle support for enterprise IT systems, hardware, and network availability.' },
  { icon: '🛠', title: 'Managed IT Services', desc: 'Proactive management and monitoring of your IT landscape to ensure zero downtime.' },
  { icon: '📊', title: 'IT-Enabled Services (ITES)', desc: 'Business process outsourcing and technology-enabled services for operational efficiency.' },
  { icon: '🔌', title: 'System Integration Support', desc: 'Seamlessly integrating disparate IT components into a unified, high-performance ecosystem.' },
];
const projectExecution = [
  { icon: '🚀', title: 'End-to-End Execution', desc: 'Complete project lifecycle management from initial planning to final handover.' },
  { icon: '🤝', title: 'Vendor Coordination', desc: 'Seamless management of multiple vendors and implementation partners on-site.' },
  { icon: '📍', title: 'On-Site Deployment', desc: 'Expert on-ground deployment and management of technology infrastructure.' },
  { icon: '🏗', title: 'Technology Rollout', desc: 'Structured rollout of infrastructure and technology solutions across multiple locations.' },
];
const supplyAndResale = [
  { icon: '📦', title: 'IT Hardware & Components', desc: 'Authorized supply of laptops, desktops, servers, and high-performance IT components.' },
  { icon: '🔌', title: 'Passive Network Components', desc: 'Complete range of copper/fiber cabling, patch panels, and connectivity products.' },
  { icon: '🏢', title: 'Authorized Resale', desc: 'Authorized partner-based resale including MSys Connect and other global platforms.' },
  { icon: '🚛', title: 'Procurement & Logistics', desc: 'End-to-end procurement support and logistics management for infrastructure projects.' },
];
const industries = [
  { icon: '🏗️', title: 'Infrastructure Projects' },
  { icon: '🏢', title: 'Corporate & Enterprise IT' },
  { icon: '👥', title: 'Facility Management' },
  { icon: '🏛️', title: 'Government & Institutions' }
];

function FinanceParticles() {
  const symbols = ['$', '₹', '📈', '📊', '₿', '€', '£', '¥'];
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {[...Array(12)].map((_, i) => {
        const symbol = symbols[i % symbols.length];
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const duration = 15 + Math.random() * 20;
        const delay = Math.random() * -20;
        const size = 12 + Math.random() * 16;
        return (
          <div key={i} style={{
            position: 'absolute',
            left: `${left}%`,
            top: `${top}%`,
            fontSize: `${size}px`,
            color: 'var(--gold)',
            opacity: 0.15,
            animation: `float-diag ${duration}s linear infinite`,
            animationDelay: `${delay}s`,
            fontWeight: 700,
            filter: 'blur(0.5px)'
          }}>
            {symbol}
          </div>
        );
      })}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float-diag {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.15; }
          90% { opacity: 0.15; }
          100% { transform: translate(300px, -300px) rotate(360deg); opacity: 0; }
        }
      `}} />
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <ScrollHandler />
      <ScrollSnapSetter />
      {/* ── Hero Section ── */}


      <section style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        height: '100vh',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--navy)',
        scrollSnapAlign: 'start'
      }}>



        {/* Background Grid Design */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />

        {/* Finance Particles */}
        <FinanceParticles />

        {/* Decorative Glowing Orbs */}
        <div style={{ position: 'absolute', left: '-5%', top: '20%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(240,165,0,0.1) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: '5%', bottom: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(26,58,143,0.15) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

        {/* 3D Canvas — decorative background */}
        <div className="hero-viz-container" style={{ position: 'absolute', right: '-120px', top: '50%', transform: 'translateY(-50%)', width: '700px', height: '700px', opacity: 1, pointerEvents: 'none' }}>
          <ServicesHeroCanvas />
        </div>

        {/* Vertical Brand Line */}
        <div className="hero-brand-line" style={{ position: 'absolute', left: '4%', top: '20%', bottom: '20%', width: '1px', background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)', opacity: 0.4 }} />

        <div className="hero-inner-container" style={{ position: 'relative', zIndex: 2, maxWidth: '1440px', width: '100%', margin: '0 auto', padding: '0 8%' }}>
          <style dangerouslySetInnerHTML={{
            __html: `
            @media (max-width: 1024px) {
              .hero-viz-container { right: -250px !important; opacity: 0.6 !important; width: 600px !important; height: 600px !important; }
              .hero-inner-container { padding: 0 6% !important; }
            }
            @media (max-width: 768px) {
              .hero-viz-container { right: -150px !important; top: 60% !important; width: 450px !important; height: 450px !important; opacity: 0.4 !important; }
              .hero-brand-line { display: none; }
              .word-reveal { font-size: clamp(2.5rem, 8vw, 3.8rem) !important; }
            }
          `}} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ fontSize: '13px', color: 'var(--dim)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', animation: 'fadeUp .6s .1s cubic-bezier(.16,1,.3,1) both' }}>
              <span style={{ width: '20px', height: '1px', background: 'var(--gold)' }} />
              <span>
                <Link href="/" style={{ color: 'var(--dim)', textDecoration: 'none' }}>Home</Link>
                <span style={{ margin: '0 10px', opacity: .4 }}>/</span>
                <span style={{ color: 'var(--gold)' }}>Services</span>
              </span>
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(240,165,0,.08)', border: '1px solid rgba(240,165,0,.2)', color: 'var(--gold)', fontSize: '11px', fontWeight: 600, letterSpacing: '.15em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '4px', marginBottom: '24px', animation: 'fadeUp .7s .2s cubic-bezier(.16,1,.3,1) both' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }} />
              Operational Excellence
            </div>

            <WordReveal
              className="mb-8"
              words={[
                <span key="1">Specialized</span>,
                <span key="2" className="gold-grad">Business Solutions</span>
              ]}
            />
            <style dangerouslySetInnerHTML={{
              __html: `
              .word-reveal { font-family: var(--font-playfair); font-size: clamp(3rem,6vw,5.5rem); font-weight: 700; line-height: 1.1; letter-spacing: -.04em; }
            `}} />

            <div style={{ maxWidth: '800px', position: 'relative' }}>
              {/* Decorative Side Tag */}
              <div className="overview-tag" style={{ position: 'absolute', left: '-40px', top: '10px', writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontSize: '10px', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '.2em', opacity: 0.6, fontWeight: 700 }}>Overview</div>
              <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 1200px) { .overview-tag { display: none; } }
              `}} />

              <p style={{ fontSize: '18px', color: 'var(--white)', fontWeight: 500, lineHeight: 1.6, marginBottom: '20px', opacity: 0.95, animation: 'fadeUp .7s .8s cubic-bezier(.16,1,.3,1) both' }}>
                Our organization operates through specialized business solutions to deliver focused and execution-driven services:
              </p>

              <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '16px', animation: 'fadeUp .7s .9s cubic-bezier(.16,1,.3,1) both' }}>
                Delivering technology-driven solutions and execution capabilities across IT infrastructure, IT-enabled services, and project-based assignments.
              </p>

              <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.8, animation: 'fadeUp .7s 1s cubic-bezier(.16,1,.3,1) both' }}>
                We combine technical expertise with execution strength to support businesses in implementing scalable and reliable systems.
              </p>
            </div>

            <div className="hero-cta-row" style={{ marginTop: '40px', display: 'flex', gap: '20px', alignItems: 'center', animation: 'fadeUp .7s 1.1s cubic-bezier(.16,1,.3,1) both' }}>
              <Link href="#services-grid" className="btn-gold" style={{ padding: '16px 36px', fontSize: '14px', fontWeight: 600 }}>Explore Solutions</Link>
              <div className="scroll-hint-hero" style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--dim)', fontSize: '13px' }}>
                <div style={{ width: '40px', height: '1px', background: 'var(--bdr)' }} />
                <span style={{ fontStyle: 'italic' }}>Scroll to dive deeper</span>
              </div>
              <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 640px) {
                  .scroll-hint-hero { display: none !important; }
                  .hero-cta-row { justify-content: center; width: 100%; }
                  .hero-cta-row > a { width: 100%; text-align: center; }
                }
              `}} />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={{ position: 'absolute', bottom: '36px', left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', color: 'var(--dim)', fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase' }}>
          <span>Scroll</span>
          <div style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom,transparent,var(--dim))', animation: 'slideDown 1.6s ease-in-out infinite' }}></div>
        </div>

        {/* Floating Geometric Shapes (Design Elements) */}
        <div style={{ position: 'absolute', left: '10%', bottom: '15%', width: '12px', height: '12px', border: '1px solid var(--gold)', opacity: 0.3, transform: 'rotate(45deg)' }} />
        <div style={{ position: 'absolute', left: '15%', top: '30%', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--gold)', opacity: 0.2 }} />
      </section>

      {/* Main Content Wrapper (Slides over Hero) */}
      <div style={{ position: 'relative', zIndex: 10, background: 'var(--navy-2)', boxShadow: '0 -20px 40px rgba(0,0,0,0.3)' }}>

        {/* ── Services Offered ── */}
        <section id="services-grid" style={{ position: 'relative', padding: '100px 0', background: 'var(--navy-2)', minHeight: '100vh', scrollSnapAlign: 'start' }}>
          <style dangerouslySetInnerHTML={{
            __html: `
            @media (max-width: 768px) {
              #services-grid { padding: 60px 0 !important; }
            }
          `}} />
          <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 6%' }}>
            <SectionReveal className="mb-14" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.14em', color: 'var(--gold)', marginBottom: '14px' }}>Expertise & Delivery</p>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 700, letterSpacing: '-.02em', marginBottom: "50px" }}>Services <span className="gold-grad">Offered</span></h2>
            </SectionReveal>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
              {/* IT & ITES */}
              <SectionReveal>
                <div style={{ background: 'var(--surf)', border: '1px solid var(--bdr)', borderRadius: '24px', padding: '36px', height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(240,165,0,.1)', border: '1px solid rgba(240,165,0,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>🖥️</div>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--white)' }}>IT & ITES Services</h3>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {itAndItes.map((s, i) => (
                      <div key={i} className="svc-item" style={{ padding: '16px 18px', background: 'rgba(255,255,255,0.02)' }}>
                        <div style={{ fontSize: '20px', flexShrink: 0 }}>{s.icon}</div>
                        <div>
                          <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--white)', marginBottom: '4px' }}>{s.title}</div>
                          <div style={{ fontSize: '12.5px', color: 'var(--dim)', lineHeight: 1.5 }}>{s.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>

              {/* Project Execution */}
              <SectionReveal delay={0.1}>
                <div style={{ background: 'var(--surf)', border: '1px solid var(--bdr)', borderRadius: '24px', padding: '36px', height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(240,165,0,.1)', border: '1px solid rgba(240,165,0,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>🚀</div>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--white)' }}>Project Execution</h3>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {projectExecution.map((s, i) => (
                      <div key={i} className="svc-item" style={{ padding: '16px 18px', background: 'rgba(255,255,255,0.02)' }}>
                        <div style={{ fontSize: '20px', flexShrink: 0 }}>{s.icon}</div>
                        <div>
                          <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--white)', marginBottom: '4px' }}>{s.title}</div>
                          <div style={{ fontSize: '12.5px', color: 'var(--dim)', lineHeight: 1.5 }}>{s.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>

              {/* Supply & Resale */}
              <SectionReveal delay={0.2}>
                <div style={{ background: 'var(--surf)', border: '1px solid var(--bdr)', borderRadius: '24px', padding: '36px', height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(240,165,0,.1)', border: '1px solid rgba(240,165,0,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>📦</div>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--white)' }}>Supply & Resale</h3>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {supplyAndResale.map((s, i) => (
                      <div key={i} className="svc-item" style={{ padding: '16px 18px', background: 'rgba(255,255,255,0.02)' }}>
                        <div style={{ fontSize: '20px', flexShrink: 0 }}>{s.icon}</div>
                        <div>
                          <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--white)', marginBottom: '4px' }}>{s.title}</div>
                          <div style={{ fontSize: '12.5px', color: 'var(--dim)', lineHeight: 1.5 }}>{s.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>


        {/* ── Industry Application ── */}
        <section id="industries" style={{ padding: '100px 0', background: 'var(--navy)', scrollSnapAlign: 'start' }}>
          <style dangerouslySetInnerHTML={{
            __html: `
            @media (max-width: 768px) { #industries { padding: 60px 0 !important; } }
          `}} />

          <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 8%' }}>
            <SectionReveal className="mb-14" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.14em', color: 'var(--gold)', marginBottom: '14px' }}>Market Focus</p>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 700, letterSpacing: '-.02em', marginBottom: 60 }}>Industry <span className="gold-grad">Application</span></h2>
            </SectionReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
              {industries.map((ind, i) => (
                <SectionReveal key={i} delay={i * 0.05}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--bdr)', borderRadius: '16px', padding: '28px', textAlign: 'center' }}>
                    <div style={{ fontSize: '32px', marginBottom: '16px' }}>{ind.icon}</div>
                    <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--white)' }}>{ind.title}</div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our Strength ── */}
        <section id="strengths" style={{ position: 'sticky', top: 0, padding: '120px 0', background: 'var(--navy-2)', scrollSnapAlign: 'start' }}>
          <style dangerouslySetInnerHTML={{
            __html: `
            @media (max-width: 768px) { #strengths { padding: 80px 0 !important; } }
          `}} />

          <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 6%' }}>
            <SectionReveal className="mb-10" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.14em', color: 'var(--gold)', marginBottom: '14px' }}>Our Strengths</p>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 700, letterSpacing: '-.02em', marginBottom: 30 }}>Our <span className="gold-grad">Strength</span></h2>
            </SectionReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
              {[
                { t: 'Integrated Advisory', d: 'Combining high-level financial advisory with on-ground execution capability.' },
                { t: 'Partner Network', d: 'Strong vendor and strategic partner network for global standards.' },
                { t: 'End-to-End Handling', d: 'Ability to manage both financial structuring and technical implementation.' },
                { t: 'Project Ownership', d: 'End-to-end ownership ensuring seamless delivery and accountability.' }
              ].map((s, i) => (
                <SectionReveal key={i} delay={i * 0.1}>
                  <div style={{ position: 'relative', padding: '32px', background: 'var(--surf)', borderRadius: '20px', border: '1px solid var(--bdr)' }}>
                    <div style={{ width: '4px', height: '24px', background: 'var(--gold)', position: 'absolute', left: 0, top: '32px', borderRadius: '0 4px 4px 0' }} />
                    <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--white)', marginBottom: '12px' }}>{s.t}</h3>
                    <p style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.6 }}>{s.d}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Second Parallax Wrapper (Slides over Strengths) */}
        <div style={{ position: 'relative', zIndex: 20, boxShadow: '0 -20px 40px rgba(0,0,0,0.4)' }}>
          {/* ── Value Proposition (Wooden Theme) ── */}
          <section id="value-prop" style={{
            position: 'sticky',
            top: 0,
            zIndex: 20,
            padding: '120px 0',
            backgroundImage: 'url(/images/wooden_bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            textAlign: 'center',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            color: '#0D1635', // Dark charcoal/navy for contrast on wood
            scrollSnapAlign: 'start'
          }}>
            <style dangerouslySetInnerHTML={{
              __html: `
              @media (max-width: 768px) {
                #value-prop { padding: 80px 0 !important; }
                .wooden-h2 { font-size: clamp(2rem, 10vw, 2.8rem) !important; margin-bottom: 32px !important; }
              }
            `}} />

            <div style={{ maxWidth: '1100px', width: '100%', margin: '0 auto', padding: '0 6%' }}>
              <SectionReveal>
                <p style={{ fontSize: '16px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.4em', color: 'rgba(13,22,53,0.6)', marginBottom: '48px' }}>Value Proposition</p>

                <div style={{ position: 'relative', display: 'inline-block' }}>
                  <h2 className="wooden-h2" style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: 'clamp(2.5rem,5.5vw,4.5rem)',
                    fontWeight: 800,
                    lineHeight: 1.1,
                    color: '#0D1635',
                    marginBottom: '64px',
                    letterSpacing: '-.03em',
                    maxWidth: '1000px'
                  }}>
                    By combining financial expertise with execution capability, we provide clients with a <span style={{ color: '#fec008ff', opacity: 0.9 }}>seamless experience</span>
                  </h2>

                  {/* Decorative Dot Element from Screenshot */}
                  <div style={{
                    position: 'absolute',
                    right: '-20px',
                    bottom: '80px',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    border: '1px solid rgba(13,22,53,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{ width: '4px', height: '4px', background: '#0D1635', borderRadius: '50%' }} />
                  </div>
                </div>

                <p style={{
                  fontSize: '16px',
                  color: 'rgba(13,22,53,0.7)',
                  lineHeight: 1.6,
                  fontWeight: 600,
                  maxWidth: '600px',
                  margin: '0 auto',
                  letterSpacing: '-.01em'
                }}>
                  From planning and funding to implementation and delivery, we act as your dedicated execution partners to ensure measurable and result-oriented outcomes.
                </p>
              </SectionReveal>
            </div>
          </section>

          {/* ── CTA ── */}
          <section id="cta" style={{ zIndex: 30, background: 'linear-gradient(135deg,#0D1635 0%,#112255 50%,#1A3A8F 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden', padding: '120px 6%', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 -20px 40px rgba(0,0,0,0.4)', scrollSnapAlign: 'start' }}>
            <style dangerouslySetInnerHTML={{
              __html: `
              @media (max-width: 640px) {
                #cta { padding: 80px 6% !important; }
                .cta-btns { flex-direction: column; width: 100%; }
                .cta-btns > a { width: 100%; justify-content: center; }
                .cta-ring { width: 260px !important; height: 260px !important; }
                .cta-ring:nth-of-type(2) { width: 420px !important; height: 420px !important; }
                .cta-ring:nth-of-type(3) { width: 580px !important; height: 580px !important; }
              }
            `}} />

            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 65% 65% at 50% 50%,rgba(240,165,0,.1) 0%,transparent 65%)' }}></div>
            <div className="cta-ring" style={{ width: '300px', height: '300px', animationDelay: '0s' }}></div>
            <div className="cta-ring" style={{ width: '520px', height: '520px', animationDelay: '.8s' }}></div>
            <div className="cta-ring" style={{ width: '740px', height: '740px', animationDelay: '1.6s' }}></div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <SectionReveal>
                <span style={{ display: 'inline-block', fontSize: '17px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>Get in Touch</span>
                <WordReveal
                  className="mb-4"
                  words={[
                    <span key="1" style={{ color: '#fff' }}>Ready</span>,
                    <span key="2" style={{ color: '#fff' }}>to</span>,
                    <em key="3" style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Engage?</em>
                  ]}
                />
                <style dangerouslySetInnerHTML={{
                  __html: `
              .word-reveal { font-family: 'Playfair Display', serif; font-size: clamp(2.8rem,5.5vw,4.8rem); font-weight: 700; line-height: 1.2; letter-spacing: -.03em; }
            `}} />
                <p style={{ color: 'rgba(255,255,255,.9)', fontSize: '16px', fontWeight: 300, lineHeight: 1.8, maxWidth: '640px', margin: '0 auto 48px' }}>By combining financial expertise with execution capability, we provide clients with a seamless experience — from planning and funding to implementation and delivery.</p>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <div className="cta-btns" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/contact" className="btn-gold" style={{ padding: '14px 32px' }}>Contact Us Today</Link>
                  <Link href="/about" className="btn-ghost" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)', padding: '14px 32px' }}>About Srishaan</Link>
                </div>
              </SectionReveal>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
