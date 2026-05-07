import SectionReveal from '@/components/ui/SectionReveal';
import StatCounter from '@/components/ui/StatCounter';

const stats = [
  { target: 2500, suffix: 'Cr+', label: 'Assets Under Management' },
  { target: 15, suffix: 'K+', label: 'Happy Clients' },
  { target: 14, suffix: '+ Yrs', label: 'Years of Excellence' },
  { target: 18, suffix: '%', label: 'Avg. Annual Returns' },
];

export default function StatsSection() {
  return (
    <section id="stats" className="stats-section">
      <style dangerouslySetInnerHTML={{
        __html: `
        .stats-section {
          background: var(--navy-3);
          border-top: 1px solid var(--bdr);
          border-bottom: 1px solid var(--bdr);
          padding: 72px 8%;
          position: relative;
          overflow: hidden;
        }
        .stats-section::before {
          content: '';
          position: absolute; inset: 0;
          background-image: repeating-linear-gradient(90deg, rgba(0, 0, 0, 0.03) 0, rgba(0, 0, 0, 0.03) 1px, transparent 0, transparent 50%);
          background-size: 80px 100%;
        }
        body.light .stats-section::before {
          background-image: repeating-linear-gradient(90deg, rgba(15,40,130,.04) 0, rgba(15,40,130,.04) 1px, transparent 0, transparent 50%);
        }
        .stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          position: relative;
          z-index: 1;
        }
        .stat-item {
          text-align: center;
          position: relative;
        }
        .stat-item::after {
          content: '';
          position: absolute; right: 0; top: 10%; bottom: 10%;
          width: 1px; background: var(--bdr);
        }
        .stat-item:last-child::after {
          display: none;
        }
        body.light .stat-item::after {
          background: rgba(15,40,130,.1);
        }
        @media (max-width: 900px) {
          .stats-row { grid-template-columns: repeat(2, 1fr); gap: 40px 20px; }
          .stat-item:nth-child(2)::after { display: none; } /* hide right border on 2nd item in 2-col layout */
        }
        @media (max-width: 640px) {
          .stats-row { grid-template-columns: 1fr; }
          .stat-item::after { display: none; }
        }
      `}} />
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div className="stats-row">
          {stats.map((s, i) => (
            <SectionReveal key={s.label} delay={i * 0.1} className="stat-item">
              <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.4rem, 4vw, 3.6rem)', fontWeight: 700, color: 'var(--gold)', lineHeight: 1, marginBottom: '6px' }}>
                <StatCounter target={s.target} suffix={s.suffix} />
              </div>
              <p style={{ fontSize: '12px', fontWeight: 500, color: 'var(--dim)', letterSpacing: '.07em', textTransform: 'uppercase' }}>{s.label}</p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
