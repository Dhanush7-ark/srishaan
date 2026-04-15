import SectionReveal from '@/components/ui/SectionReveal';
import StatCounter from '@/components/ui/StatCounter';
const stats = [
  { target:2500, prefix:'₹', suffix:' Cr+', label:'Assets Under Management' },
  { target:15000, suffix:'+', label:'Families Served' },
  { target:18, suffix:'.4%', label:'Avg Annual Returns' },
  { target:60, suffix:'+ Yrs', label:'Combined Leadership' },
];
export default function StatsSection() {
  return (
    <section id="stats" style={{padding:'100px 0',background:'var(--navy-3)'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 6%'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'40px'}}>
          {stats.map((s,i)=>(
            <SectionReveal key={s.label} delay={i*0.1} className="text-center">
              <div style={{fontFamily:'var(--font-playfair)',fontSize:'clamp(2.2rem,4vw,3.4rem)',fontWeight:700,color:'var(--gold)',lineHeight:1,marginBottom:'10px'}}>
                <StatCounter target={s.target} prefix={s.prefix} suffix={s.suffix}/>
              </div>
              <p style={{fontSize:'13px',fontWeight:500,color:'var(--muted)',letterSpacing:'.04em',textTransform:'uppercase'}}>{s.label}</p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
