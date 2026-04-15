import SectionReveal from '@/components/ui/SectionReveal';
const steps = [
  { n:'01', title:'Discovery Consultation', desc:'A focused 30-minute session to understand your financial goals, risk tolerance, and timeline.' },
  { n:'02', title:'Risk Profiling', desc:'We assess your investment personality and create a personalised risk profile.' },
  { n:'03', title:'Portfolio Construction', desc:'Our experts build a diversified portfolio optimised for your goals and risk profile.' },
  { n:'04', title:'Ongoing Management', desc:'Regular reviews, rebalancing, and reporting keep your portfolio on track.' },
];
export default function HowSection() {
  return (
    <section id="how" style={{padding:'100px 0',background:'var(--navy)'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 6%'}}>
        <SectionReveal className="mb-16">
          <p style={{fontSize:'11px',fontWeight:600,textTransform:'uppercase',letterSpacing:'.14em',color:'var(--gold)',marginBottom:'14px'}}>Our Process</p>
          <h2 style={{fontFamily:'var(--font-playfair)',fontSize:'clamp(2rem,3.8vw,3.4rem)',fontWeight:700,lineHeight:1.12,letterSpacing:'-.02em'}}>How We Work</h2>
        </SectionReveal>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'40px',position:'relative'}}>
          {steps.map((s,i)=>(
            <SectionReveal key={s.n} delay={i*0.12}>
              <div style={{width:'52px',height:'52px',borderRadius:'50%',border:'2px solid var(--gold)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'20px'}}>
                <span style={{fontFamily:'var(--font-playfair)',fontSize:'18px',fontWeight:700,color:'var(--gold)'}}>{s.n}</span>
              </div>
              <h3 style={{fontSize:'16px',fontWeight:700,marginBottom:'10px',color:'var(--white)'}}>{s.title}</h3>
              <p style={{fontSize:'13.5px',color:'var(--muted)',lineHeight:1.7}}>{s.desc}</p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
