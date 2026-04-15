import SectionReveal from '@/components/ui/SectionReveal';
import TiltCard from '@/components/ui/TiltCard';
import Link from 'next/link';

const services = [
  { icon:'📊', title:'Mutual Funds',        desc:'Curated mutual fund portfolios aligned to your risk profile and timeline.' },
  { icon:'📈', title:'Equity Advisory',      desc:'Data-driven equity recommendations with complete research backing.' },
  { icon:'💎', title:'Wealth Management',    desc:'Comprehensive wealth strategies for HNI and family offices.' },
  { icon:'🏖', title:'Retirement Planning',  desc:'Systematic retirement corpus building with tax-efficient instruments.' },
  { icon:'🧾', title:'Tax Optimisation',     desc:'Legal tax-saving strategies integrated into your investment plan.' },
  { icon:'🛡', title:'Life Insurance',        desc:'Protection solutions to safeguard your family and portfolio.' },
];

export default function ServicesSection() {
  return (
    <section id="services" style={{ padding: '100px 0', background: 'var(--navy-2)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 6%' }}>
        <SectionReveal className="mb-16">
          <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.14em', color: 'var(--gold)', marginBottom: '14px' }}>What We Offer</p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem,3.8vw,3.4rem)', fontWeight: 700, lineHeight: 1.12, letterSpacing: '-.02em', maxWidth: '520px' }}>Financial Services Tailored to You</h2>
        </SectionReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '20px', marginBottom: '48px' }}>
          {services.map((s, i) => (
            <SectionReveal key={s.title} delay={i * 0.07}>
              <TiltCard className="glass-card" style={{ padding: '28px 24px', borderRadius: '14px', height: '100%' }}>
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{ fontSize: '28px', marginBottom: '14px' }}>{s.icon}</div>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px', color: 'var(--white)' }}>{s.title}</h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </TiltCard>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="text-center">
          <Link href="/services" className="btn-ghost">View All Services</Link>
        </SectionReveal>
      </div>
    </section>
  );
}
