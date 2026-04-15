import SectionReveal from '@/components/ui/SectionReveal';
import Link from 'next/link';
export default function CtaSection() {
  return (
    <section id="cta" style={{padding:'120px 0',background:'linear-gradient(135deg,#04091A,#070E26)',position:'relative',overflow:'hidden',textAlign:'center'}}>
      {[1,2,3].map(i=>(
        <div key={i} style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:`${180+i*160}px`,height:`${180+i*160}px`,borderRadius:'50%',border:'1px solid rgba(240,165,0,.08)',animation:`ringPulse ${3+i}s ${i*.8}s ease-out infinite`}}/>
      ))}
      <div style={{position:'relative',zIndex:2,maxWidth:'640px',margin:'0 auto',padding:'0 6%'}}>
        <SectionReveal>
          <p style={{fontSize:'11px',fontWeight:600,textTransform:'uppercase',letterSpacing:'.14em',color:'var(--gold)',marginBottom:'20px'}}>Get Started Today</p>
          <h2 style={{fontFamily:'var(--font-playfair)',fontSize:'clamp(2.2rem,4.5vw,3.8rem)',fontWeight:700,lineHeight:1.1,letterSpacing:'-.025em',marginBottom:'24px'}}>Start Your Wealth Journey Today</h2>
          <p style={{fontSize:'16px',color:'var(--muted)',lineHeight:1.7,marginBottom:'36px'}}>Join 15,000+ families who trust Srishaan to grow and protect their wealth.</p>
          <div style={{display:'flex',gap:'14px',justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/contact" className="btn-gold">Book Free Consultation</Link>
            <Link href="/about" className="btn-ghost">Learn About Us</Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
