import SectionReveal from '@/components/ui/SectionReveal';
import TiltCard from '@/components/ui/TiltCard';

const features = [
  { icon: '📊', title: 'Data-Driven Strategies', desc: 'Our recommendations are backed by deep market analysis and quantitative models — never guesswork.' },
  { icon: '🔒', title: 'Transparent & Fee-Only', desc: 'No hidden commissions. We operate on a transparent, fee-only advisory model aligned with your interests.' },
  { icon: '🌐', title: 'SEBI Registered', desc: 'Fully regulated, certified advisors you can trust. Your money is in expert, compliant hands at all times.' },
  { icon: '⚡', title: 'Real-Time Portfolio View', desc: 'Track every asset, monitor performance, and get actionable insights — all from one clean dashboard.' },
];

function WordReveal({ words, className = '' }: { words: React.ReactNode[], className?: string }) {
  return (
    <div className={`word-reveal ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="word" style={{ marginRight: '0.25em' }}>
          <span style={{ transitionDelay: `${i * 0.09}s` }}>{word}</span>
        </span>
      ))}
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" style={{ padding: '96px 6%', background: 'var(--navy-2)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <SectionReveal className="sec-head" style={{ marginBottom: '56px' }}>
          <span className="tag" style={{ display: 'inline-block', fontSize: '11px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>
            Why Srishaan
          </span>
          <WordReveal
            words={[
              <span key="1">Built</span>,
              <span key="2">for</span>,
              <em key="3" style={{ fontStyle: 'normal', color: 'var(--gold)' }}>Serious</em>,
              <span key="4">Wealth</span>,
              <span key="5">Builders</span>
            ]}
          />
          <style dangerouslySetInnerHTML={{
            __html: `
            .word-reveal { font-family: 'Playfair Display', serif; font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 600; line-height: 1.18; letter-spacing: -.02em; }
            .word-reveal .word { display: inline-block; overflow: hidden; vertical-align: bottom; }
            .word-reveal .word > span { display: inline-block; transform: translateY(105%); transition: transform .7s cubic-bezier(.16,1,.3,1); }
            #features.in .word-reveal .word > span, .in .word-reveal .word > span { transform: none; }
          `}} />
          <p className="sub" style={{ color: 'var(--muted)', fontSize: '15px', fontWeight: 300, lineHeight: 1.75, maxWidth: '500px', marginTop: '14px' }}>
            Every feature is designed around one goal: helping you make better financial decisions, faster.
          </p>
        </SectionReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '22px' }}>
          {features.map((f, i) => (
            <SectionReveal key={f.title} delay={i * 0.08}>
              <TiltCard className="glass-card feat-card tilt-card" style={{ padding: '32px 28px', borderRadius: '14px', background: 'var(--surf)', border: '1px solid var(--bdr)', height: '100%' }}>
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div className="feat-icon" style={{ width: '46px', height: '46px', borderRadius: '10px', background: 'rgba(240,165,0,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', marginBottom: '20px', transition: 'transform .3s cubic-bezier(.16,1,.3,1)' }}>
                    {f.icon}
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '10px', letterSpacing: '-.01em', color: 'var(--white)' }}>{f.title}</h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: 1.7, fontWeight: 300 }}>{f.desc}</p>
                </div>
              </TiltCard>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
