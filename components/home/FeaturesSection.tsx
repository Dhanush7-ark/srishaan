import SectionReveal from '@/components/ui/SectionReveal';
import TiltCard from '@/components/ui/TiltCard';

const features = [
  { icon:'🛡', title:'SEBI Registered',      desc:'Full regulatory compliance and transparent operations under SEBI guidelines.' },
  { icon:'👥', title:'Expert Team',           desc:'60+ years of combined financial leadership guiding every decision.' },
  { icon:'🎯', title:'Holistic Approach',     desc:'Equity, debt, and alternative assets expertly managed under one roof.' },
  { icon:'💡', title:'Technology Driven',     desc:'Real-time dashboards and MIS reporting for complete portfolio visibility.' },
  { icon:'🤝', title:'Client First',          desc:'Dedicated relationship manager for every portfolio, every client.' },
  { icon:'📈', title:'Proven Track Record',   desc:'Consistent above-benchmark returns since inception.' },
];

export default function FeaturesSection() {
  return (
    <section id="features" style={{ padding: '100px 0', background: 'var(--navy-2)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 6%' }}>
        <SectionReveal className="text-center mb-16">
          <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.14em', color: 'var(--gold)', marginBottom: '14px' }}>Why Srishaan</p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem,3.8vw,3.4rem)', fontWeight: 700, lineHeight: 1.12, letterSpacing: '-.02em' }}>The Srishaan Advantage</h2>
        </SectionReveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '24px' }}>
          {features.map((f, i) => (
            <SectionReveal key={f.title} delay={i * 0.08}>
              <TiltCard className="glass-card" style={{ padding: '32px 28px', borderRadius: '16px', background: 'var(--surf)', border: '1px solid var(--bdr)', height: '100%' }}>
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{ fontSize: '32px', marginBottom: '16px' }}>{f.icon}</div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '10px', color: 'var(--white)' }}>{f.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7 }}>{f.desc}</p>
                </div>
              </TiltCard>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
