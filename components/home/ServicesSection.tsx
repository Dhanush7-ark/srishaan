import SectionReveal from '@/components/ui/SectionReveal';
import TiltCard from '@/components/ui/TiltCard';
import Link from 'next/link';

const services = [
  { icon: '📈', title: 'Investment Advisory', desc: 'Tailored portfolio strategies built on your risk profile, timeline, and long-term wealth goals.' },
  { icon: '🏦', title: 'Wealth Management', desc: 'Holistic planning that aligns your assets, liabilities, and aspirations into one unified roadmap.' },
  { icon: '💼', title: 'Tax Optimisation', desc: 'Legal, strategic tax planning that keeps more of your returns working for you each year.' },
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

export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <style dangerouslySetInnerHTML={{
        __html: `
        .services-section { padding: 96px 8%; background: var(--navy-2); }
        @media (max-width: 768px) { .services-section { padding: 70px 8%; } }
        .services-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        @media (max-width: 800px) { .services-grid { grid-template-columns: 1fr; } }
        .svc-card {
          display: flex; gap: 24px;
          padding: 36px 32px; border-radius: 14px;
          background: var(--surf); border: 1px solid var(--bdr);
          height: 100%;
        }
        @media (max-width: 500px) { .svc-card { flex-direction: column; gap: 16px; padding: 28px 24px; } }
        .svc-icon {
          width: 50px; height: 50px; border-radius: 12px;
          background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.05);
          display: flex; align-items: center; justify-content: center;
          font-size: 20px; flex-shrink: 0;
        }
        body.light .svc-icon { background: rgba(15,40,130,.04); border-color: rgba(15,40,130,.06); }
        .svc-body h3 { font-size: 17px; font-weight: 600; margin-bottom: 12px; color: var(--white); }
        .svc-body p { color: var(--muted); font-size: 14px; line-height: 1.6; margin-bottom: 20px; font-weight: 300; }
        .svc-link { font-size: 13px; font-weight: 600; color: var(--gold); transition: opacity .2s; }
        .svc-link:hover { text-decoration: underline; opacity: 0.8; }
        .word-reveal { font-family: 'Playfair Display', serif; font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 600; line-height: 1.18; letter-spacing: -.02em; }
        .word-reveal .word { display: inline-block; overflow: hidden; vertical-align: bottom; }
        .word-reveal .word > span { display: inline-block; transform: translateY(105%); transition: transform .7s cubic-bezier(.16,1,.3,1); }
        #services.in .word-reveal .word > span, .in .word-reveal .word > span { transform: none; }
      `}} />
    </section>
  );
}
