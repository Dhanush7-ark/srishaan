import SectionReveal from '@/components/ui/SectionReveal';

const strengths = [
  {
    title: 'Integrated Advisory',
    desc: 'Combining high-level financial advisory with on-ground execution capability.',
    icon: '📊'
  },
  {
    title: 'Partner Network',
    desc: 'Strong vendor and strategic partner network for global standards.',
    icon: '🔒'
  },
  {
    title: 'End-to-End Handling',
    desc: 'Ability to manage both financial structuring and technical implementation.',
    icon: '🌐'
  },
  {
    title: 'Project Ownership',
    desc: 'End-to-end ownership ensuring seamless delivery and accountability.',
    icon: '⚡'
  }
];

export default function WhySection() {
  return (
    <section id="why-srishaan" className="why-sec">
      <style dangerouslySetInnerHTML={{
        __html: `
        .why-sec {
          padding: 120px 8%;
          background: #F4F7FF;
          overflow: hidden;
        }
        body:not(.light) .why-sec {
          background: var(--navy-2);
        }
        .why-header {
          text-align: center;
          margin-bottom: 70px;
        }
        .why-subtitle {
          font-size: 11px;
          font-weight: 700;
          color: var(--gold);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 16px;
          display: inline-block;
        }
        .why-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 5vw, 3.8rem);
          font-weight: 700;
          color: #0B1740;
          letter-spacing: -0.02em;
        }
        body:not(.light) .why-title {
          color: var(--white);
        }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .strength-card {
          background: #FFFFFF;
          border-radius: 16px;
          padding: 32px 28px;
          position: relative;
          box-shadow: 0 10px 40px rgba(11, 23, 64, 0.04);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          border: 1px solid rgba(11, 23, 64, 0.03);
          height: 100%;
        }
        body:not(.light) .strength-card {
          background: var(--surf);
          border-color: var(--bdr);
          box-shadow: none;
        }
        .strength-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(11, 23, 64, 0.08);
        }
        body:not(.light) .strength-card:hover {
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
          border-color: rgba(240, 165, 0, 0.2);
        }
        .icon-box {
          width: 44px;
          height: 44px;
          background: #FFF5E6; /* Very light gold/orange */
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          margin-bottom: 24px;
        }
        body:not(.light) .icon-box {
          background: rgba(240, 165, 0, 0.1);
        }
        .strength-title {
          font-size: 17px;
          font-weight: 700;
          color: #0B1740;
          margin-bottom: 12px;
          line-height: 1.3;
        }
        body:not(.light) .strength-title {
          color: var(--white);
        }
        .strength-desc {
          font-size: 13.5px;
          color: #5A6582;
          line-height: 1.6;
          font-weight: 400;
        }
        body:not(.light) .strength-desc {
          color: var(--muted);
        }
        
        @media (max-width: 1024px) {
          .why-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }
        @media (max-width: 640px) {
          .why-grid {
            grid-template-columns: 1fr;
          }
        }
        `
      }} />

      <SectionReveal className="why-header">
        <span className="why-subtitle">Our Strengths</span>
        <h2 className="why-title">
          Our <em style={{ fontStyle: 'normal', color: 'var(--gold)' }}>Strength</em>
        </h2>
      </SectionReveal>

      <div className="why-grid">
        {strengths.map((s, i) => (
          <SectionReveal key={i} delay={i * 0.1} style={{ position: 'relative' }}>
            <div className="strength-card">
              <div className="icon-box">{s.icon}</div>
              
              <h3 className="strength-title">{s.title}</h3>
              <p className="strength-desc">{s.desc}</p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
