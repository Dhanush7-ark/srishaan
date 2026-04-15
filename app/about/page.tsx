import SectionReveal from '@/components/ui/SectionReveal';
import TiltCard from '@/components/ui/TiltCard';
import StatCounter from '@/components/ui/StatCounter';
import Link from 'next/link';
import CtaSection from '@/components/home/CtaSection';
import PhilosophyCanvas from '@/components/about/PhilosophyCanvas';

export const metadata = { title: 'About Us | Srishaan Finance' };

const leaders = [
  { initials:'RK', name:'Rajesh Kumar', title:'Managing Director', qual:'CA, MBA (Finance)', exp:'28+ Years', bio:'Former CFO of multiple PSU entities. Deep expertise in financial governance, statutory compliance, and strategic advisory across public sector undertakings.', tags:['PSU Finance','Statutory Compliance','Strategic Advisory'] },
  { initials:'AS', name:'Arun Sharma', title:'Director – IT Infrastructure', qual:'B.Tech, PMP Certified', exp:'22+ Years', bio:'Specialist in enterprise networking and data center infrastructure. Led IT procurement for large-scale government and enterprise projects across India.', tags:['Data Centers','Enterprise Networking','PSU Procurement'] },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{padding:'140px 0 80px',background:'var(--navy)',position:'relative',overflow:'hidden'}}>
        <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 6%'}}>
          <div style={{fontSize:'13px',color:'var(--dim)',marginBottom:'24px'}}>
            <Link href="/" style={{color:'var(--dim)',textDecoration:'none'}}>Home</Link>
            <span style={{margin:'0 10px',opacity:.4}}>/</span>
            <span style={{color:'var(--gold)'}}>About Us</span>
          </div>
          <div style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'rgba(240,165,0,.08)',border:'1px solid rgba(240,165,0,.2)',color:'var(--gold)',fontSize:'11px',fontWeight:600,letterSpacing:'.1em',textTransform:'uppercase',padding:'5px 14px',borderRadius:'100px',marginBottom:'28px'}}>
            <span style={{width:'6px',height:'6px',borderRadius:'50%',background:'var(--gold)',animation:'blink 2s ease-in-out infinite'}}/>
            SEBI Registered · Est. 2024
          </div>
          <h1 style={{fontFamily:'var(--font-playfair)',fontSize:'clamp(2.8rem,5vw,5rem)',fontWeight:700,lineHeight:1.06,letterSpacing:'-.03em',maxWidth:'700px'}}>
            Srishaan Tech &amp; <span className="gold-grad">Financial Services</span>
          </h1>
          <p style={{fontSize:'17px',color:'var(--muted)',lineHeight:1.8,maxWidth:'540px',marginTop:'24px'}}>A SEBI-registered private limited company delivering integrated financial and IT infrastructure solutions from Hyderabad.</p>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" style={{padding:'100px 0',background:'var(--navy-2)'}}>
        <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 6%',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'64px',alignItems:'start'}}>
          <SectionReveal>
            <h2 style={{fontFamily:'var(--font-playfair)',fontSize:'clamp(1.8rem,3vw,2.6rem)',fontWeight:700,lineHeight:1.2,letterSpacing:'-.02em',marginBottom:'24px'}}>Who We Are</h2>
            <p style={{fontSize:'15px',color:'var(--muted)',lineHeight:1.8,marginBottom:'16px'}}>Srishaan Tech & Financial Services Pvt. Ltd. is a dual-vertical organisation delivering both financial advisory services and IT infrastructure solutions, primarily to public sector undertakings and enterprises across India.</p>
            <p style={{fontSize:'15px',color:'var(--muted)',lineHeight:1.8,marginBottom:'32px'}}>Incorporated in February 2024 and recognised under Startup India, Make in India, and Digital India initiatives, we bring together decades of expertise in financial governance and enterprise technology.</p>
            <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
              {['Startup India','Make in India','Digital India'].map(g=>(
                <span key={g} style={{fontSize:'11px',fontWeight:700,padding:'6px 14px',borderRadius:'100px',border:'1px solid rgba(240,165,0,.3)',color:'var(--gold)',background:'rgba(240,165,0,.06)',letterSpacing:'.06em'}}>{g}</span>
              ))}
            </div>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <div style={{background:'var(--surf)',border:'1px solid var(--bdr)',borderRadius:'16px',padding:'28px',backdropFilter:'blur(20px)'}}>
              <h3 style={{fontSize:'12px',fontWeight:600,textTransform:'uppercase',letterSpacing:'.1em',color:'var(--dim)',marginBottom:'20px'}}>Statutory Profile</h3>
              {[
                ['CIN','U74999TG2024PTC176888'],
                ['Incorporated','20 February 2024'],
                ['Headquarters','Hyderabad, Telangana'],
                ['Classification','Private Limited'],
                ['GST','36AAQCS6755Q1ZH'],
                ['Startup Recognition','DPIIT Recognised'],
              ].map(([k,v])=>(
                <div key={k} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'12px 0',borderBottom:'1px solid var(--bdr)'}}>
                  <span style={{fontSize:'12px',color:'var(--dim)',fontWeight:500}}>{k}</span>
                  <span style={{fontSize:'12px',color:'var(--white)',fontWeight:600,textAlign:'right',maxWidth:'60%'}}>{v}</span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Services Split */}
      <section id="services-split" style={{padding:'100px 0',background:'var(--navy)'}}>
        <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 6%'}}>
          <SectionReveal className="mb-16"><h2 style={{fontFamily:'var(--font-playfair)',fontSize:'clamp(2rem,3.5vw,3rem)',fontWeight:700,letterSpacing:'-.02em'}}>Our Two Verticals</h2></SectionReveal>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'48px'}}>
            <SectionReveal>
              <h3 style={{fontSize:'14px',fontWeight:700,textTransform:'uppercase',letterSpacing:'.1em',color:'var(--gold)',marginBottom:'24px'}}>Financial & Compliance Services</h3>
              {['Outsourced CFO Services','Financial Planning & Budgeting','MIS Reporting & Strategic Advisory','Accounting & Statutory Compliance','Bid Management & Procurement Support'].map((s,i)=>(
                <div key={s} style={{display:'flex',gap:'16px',alignItems:'flex-start',marginBottom:'20px'}}>
                  <span style={{width:'26px',height:'26px',borderRadius:'50%',background:'rgba(240,165,0,.1)',border:'1px solid rgba(240,165,0,.3)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'11px',fontWeight:700,color:'var(--gold)',flexShrink:0}}>0{i+1}</span>
                  <span style={{fontSize:'14.5px',color:'var(--muted)',paddingTop:'3px'}}>{s}</span>
                </div>
              ))}
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <h3 style={{fontSize:'14px',fontWeight:700,textTransform:'uppercase',letterSpacing:'.1em',color:'var(--blue-b)',marginBottom:'24px'}}>IT Infrastructure & Networking</h3>
              {['IT Hardware & Infrastructure Supply','Passive Network Components','Data Center Infrastructure','FTTx & Enterprise Networks'].map((s,i)=>(
                <div key={s} style={{display:'flex',gap:'16px',alignItems:'flex-start',marginBottom:'20px'}}>
                  <span style={{width:'26px',height:'26px',borderRadius:'50%',background:'rgba(45,91,227,.1)',border:'1px solid rgba(45,91,227,.3)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'11px',fontWeight:700,color:'var(--blue-b)',flexShrink:0}}>0{i+1}</span>
                  <span style={{fontSize:'14.5px',color:'var(--muted)',paddingTop:'3px'}}>{s}</span>
                </div>
              ))}
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section id="recognition" style={{padding:'80px 0',background:'var(--navy-2)'}}>
        <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 6%'}}>
          <SectionReveal className="mb-12"><h2 style={{fontFamily:'var(--font-playfair)',fontSize:'clamp(1.8rem,3vw,2.6rem)',fontWeight:700,letterSpacing:'-.02em'}}>Government Recognitions</h2></SectionReveal>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'24px'}}>
            {[{name:'Startup India',icon:'🚀',desc:'Registered and recognised under DPIIT Startup India initiative'},{name:'Make in India',icon:'🇮🇳',desc:'Committed to sourcing and promoting Indian-manufactured products'},{name:'Digital India',icon:'💻',desc:'Aligned with the national digital transformation mission'}].map((r,i)=>(
              <SectionReveal key={r.name} delay={i*0.1}>
                <TiltCard className="glass-card" style={{padding:'32px 24px',borderRadius:'16px',textAlign:'center'}}>
                  <div style={{position:'relative',zIndex:2}}>
                    <div style={{fontSize:'40px',marginBottom:'16px'}}>{r.icon}</div>
                    <h3 style={{fontSize:'16px',fontWeight:700,marginBottom:'10px',color:'var(--white)'}}>{r.name}</h3>
                    <p style={{fontSize:'13px',color:'var(--muted)',lineHeight:1.7}}>{r.desc}</p>
                  </div>
                </TiltCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" style={{padding:'100px 0',background:'var(--navy)'}}>
        <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 6%'}}>
          <SectionReveal className="mb-16"><h2 style={{fontFamily:'var(--font-playfair)',fontSize:'clamp(2rem,3.5vw,3rem)',fontWeight:700,letterSpacing:'-.02em'}}>Leadership Team</h2></SectionReveal>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))',gap:'28px'}}>
            {leaders.map((l,i)=>(
              <SectionReveal key={l.name} delay={i*0.15}>
                <TiltCard className="glass-card" style={{padding:'32px',borderRadius:'20px'}}>
                  <div style={{position:'relative',zIndex:2}}>
                    <div style={{display:'flex',alignItems:'center',gap:'16px',marginBottom:'20px'}}>
                      <div style={{width:'56px',height:'56px',borderRadius:'50%',background:'linear-gradient(135deg,var(--blue),var(--blue-b))',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'18px',fontWeight:700,color:'#fff',flexShrink:0}}>{l.initials}</div>
                      <div>
                        <div style={{fontSize:'16px',fontWeight:700,color:'var(--white)',marginBottom:'2px'}}>{l.name}</div>
                        <div style={{fontSize:'12px',color:'var(--gold)',fontWeight:600}}>{l.title}</div>
                        <div style={{fontSize:'11px',color:'var(--dim)'}}>{l.qual}</div>
                      </div>
                    </div>
                    <p style={{fontSize:'13.5px',color:'var(--muted)',lineHeight:1.7,marginBottom:'16px'}}>{l.bio}</p>
                    <div style={{fontSize:'12px',color:'var(--gold)',fontWeight:600,marginBottom:'10px'}}>{l.exp} Experience</div>
                    <div style={{display:'flex',gap:'8px',flexWrap:'wrap'}}>
                      {l.tags.map(t=><span key={t} style={{fontSize:'10.5px',padding:'3px 10px',borderRadius:'100px',border:'1px solid var(--bdr)',color:'var(--dim)',background:'var(--surf)'}}>{t}</span>)}
                    </div>
                  </div>
                </TiltCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{padding:'80px 0',background:'var(--navy-3)'}}>
        <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 6%',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:'40px'}}>
          {[{target:60,suffix:'+ Yrs',label:'Combined Leadership'},{target:2,suffix:'',label:'Service Verticals'},{target:8,suffix:'',label:'Core Services'},{target:3,suffix:'',label:'Govt. Initiatives'}].map((s,i)=>(
            <SectionReveal key={s.label} delay={i*0.1} className="text-center">
              <div style={{fontFamily:'var(--font-playfair)',fontSize:'clamp(2rem,4vw,3rem)',fontWeight:700,color:'var(--gold)',lineHeight:1,marginBottom:'8px'}}><StatCounter target={s.target} suffix={s.suffix}/></div>
              <p style={{fontSize:'12.5px',color:'var(--muted)',letterSpacing:'.05em',textTransform:'uppercase'}}>{s.label}</p>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* ── Philosophy — 3D connected-nodes canvas ── */}
      <section id="philosophy" style={{padding:'100px 0',background:'var(--navy-2)'}}>
        <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 6%',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'64px',alignItems:'center'}}>
          {/* 3D Canvas */}
          <SectionReveal>
            <div style={{width:'100%',height:'440px',borderRadius:'20px',overflow:'hidden',background:'var(--navy-3)',border:'1px solid var(--bdr)'}}>
              <PhilosophyCanvas />
            </div>
          </SectionReveal>
          {/* Content */}
          <SectionReveal delay={0.18}>
            <p style={{fontSize:'11px',fontWeight:600,textTransform:'uppercase',letterSpacing:'.14em',color:'var(--gold)',marginBottom:'14px'}}>Our Standard</p>
            <h2 style={{fontFamily:'var(--font-playfair)',fontSize:'clamp(2rem,3.5vw,3rem)',fontWeight:700,lineHeight:1.15,letterSpacing:'-.02em',marginBottom:'20px'}}>The Srishaan Standard</h2>
            <p style={{fontSize:'15px',color:'var(--muted)',lineHeight:1.8,marginBottom:'32px'}}>Six interconnected principles that define how we operate, advise, and grow — for every client, every time.</p>
            <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
              {['Transparency in every transaction and recommendation','Compliance with all regulatory and statutory requirements','Client-centric approach with personalised strategies','Technology-backed insights for informed decisions','Long-term relationships over short-term gains','Continuous learning and professional development'].map((v,i)=>(
                <div key={i} style={{display:'flex',gap:'14px',alignItems:'flex-start'}}>
                  <span style={{width:'8px',height:'8px',borderRadius:'50%',background:'var(--gold)',marginTop:'6px',flexShrink:0,boxShadow:'0 0 8px rgba(240,165,0,.5)'}}/>
                  <span style={{fontSize:'14.5px',color:'var(--muted)',lineHeight:1.65}}>{v}</span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
