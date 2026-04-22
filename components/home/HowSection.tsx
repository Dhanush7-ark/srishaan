import SectionReveal from '@/components/ui/SectionReveal';

const steps = [
  { n:'01', title:'Discover',   desc:'We conduct a thorough assessment of your financial situation, goals, and risk tolerance.' },
  { n:'02', title:'Strategise', desc:'Our certified planners craft a bespoke wealth strategy tailored precisely to your life timeline.' },
  { n:'03', title:'Grow',       desc:'We implement, monitor, and continuously optimise your portfolio — keeping you informed every step.' },
];

export default function HowSection() {
  return (
    <section id="how" className="how-section" style={{ padding: '110px 6%', background: 'var(--navy)', overflow: 'hidden' }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .sec-head.center { text-align: center; display: flex; flex-direction: column; align-items: center; }
        .steps {
          display: flex; justify-content: space-between;
          max-width: 900px; margin: 60px auto 0; position: relative;
        }
        #steps-svg {
          position: absolute; top: 38px; left: 10%; width: 80%;
          height: 4px; pointer-events: none; z-index: 1;
        }
        .line-draw { stroke-dasharray: 1000; stroke-dashoffset: 1000; transition: stroke-dashoffset 2s ease-out; }
        .in .line-draw, #how.in .line-draw { stroke-dashoffset: 0; }
        
        .step {
          width: 28%; text-align: center; position: relative; z-index: 2;
        }
        .step-num {
          width: 76px; height: 76px; margin: 0 auto 24px;
          border-radius: 50%; background: var(--surf); border: 1px solid rgba(240,165,0,.3);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 700; color: var(--gold);
          box-shadow: 0 0 0 6px var(--navy);
          transition: transform .4s, box-shadow .4s;
        }
        .step:hover .step-num { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(240,165,0,.15); }
        body.light .step-num { box-shadow: 0 0 0 6px var(--bg); border-color: rgba(15,40,130,.2); }

        .step h3 { font-size: 18px; font-weight: 600; margin-bottom: 12px; color: var(--white); }
        .step p { color: var(--muted); font-size: 14px; line-height: 1.6; font-weight: 300; }
        
        @media (max-width: 768px) {
          .steps { flex-direction: column; gap: 50px; align-items: center; }
          #steps-svg { display: none; }
          .step { width: 100%; max-width: 300px; }
        }
      `}} />

      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <SectionReveal className="sec-head center" style={{ marginBottom: '56px' }}>
          <span className="tag" style={{ display: 'inline-block', fontSize: '11px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>
            The Process
          </span>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.4rem, 4vw, 3.8rem)', fontWeight: 700, lineHeight: 1.12, letterSpacing: '-.02em', color: 'var(--white)' }}>
            Simple. <em style={{ fontStyle: 'normal', color: 'var(--gold)' }}>Transparent.</em> Effective.
          </h2>
          <p className="sub" style={{ color: 'var(--muted)', fontSize: '15px', fontWeight: 300, lineHeight: 1.75, maxWidth: '500px', marginTop: '14px' }}>
            Three clear steps to take control of your financial future with Srishaan.
          </p>
        </SectionReveal>

        <div className="steps" id="steps-container">
          <SectionReveal style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            <svg id="steps-svg" viewBox="0 0 1000 4" preserveAspectRatio="none">
              <line id="steps-line" className="line-draw" x1="0" y1="2" x2="1000" y2="2" stroke="rgba(240,165,0,.3)" strokeWidth="1" strokeDasharray="8 6"/>
            </svg>
          </SectionReveal>
          
          {steps.map((s, i) => (
            <SectionReveal key={s.n} delay={i * 0.15} className="step">
              <div className="step-num">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
