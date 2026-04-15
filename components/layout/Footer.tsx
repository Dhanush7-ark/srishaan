import Link from 'next/link';
export default function Footer() {
  return (
    <footer style={{background:'var(--navy-2)',borderTop:'1px solid var(--bdr)',paddingTop:'60px',paddingBottom:'32px'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 6%'}}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg viewBox="0 0 40 44" fill="none" width="28" height="32">
                <path d="M20 2 C25 7 27 14 24 21 C21 27 15 30 11 33 C9 29 9 22 12 15 C15 8 20 2 20 2Z" fill="#F0A500"/>
                <path d="M20 7 C22 11 23 16 20 20 C18 16 17 11 20 7Z" fill="#1A3A8F"/>
                <circle cx="20" cy="16" r="3.2" fill="#1A3A8F"/><circle cx="20" cy="16" r="1.7" fill="#2D5BE3"/><circle cx="20" cy="16" r="0.7" fill="#fff"/>
              </svg>
              <span style={{fontFamily:'var(--font-playfair)',fontSize:'17px',fontWeight:700,color:'var(--white)'}}>Srishaan</span>
            </div>
            <p style={{fontSize:'13px',color:'var(--dim)',lineHeight:1.7,maxWidth:'220px'}}>Empowering Financial Growth through precision-driven investment strategies and IT infrastructure solutions.</p>
          </div>
          {/* Services */}
          <div>
            <h4 style={{fontSize:'11px',fontWeight:600,textTransform:'uppercase',letterSpacing:'.1em',color:'var(--dim)',marginBottom:'16px'}}>Services</h4>
            {['Mutual Funds','Equity Advisory','Wealth Management','Retirement Planning','Tax Optimisation'].map(s=>(
              <Link key={s} href="/services" style={{display:'block',fontSize:'13.5px',color:'var(--muted)',textDecoration:'none',marginBottom:'10px',transition:'color .2s'}}>{s}</Link>
            ))}
          </div>
          {/* Company */}
          <div>
            <h4 style={{fontSize:'11px',fontWeight:600,textTransform:'uppercase',letterSpacing:'.1em',color:'var(--dim)',marginBottom:'16px'}}>Company</h4>
            {[['About Us','/about'],['Services','/services'],['Contact Us','/contact']].map(([l,h])=>(
              <Link key={h} href={h} style={{display:'block',fontSize:'13.5px',color:'var(--muted)',textDecoration:'none',marginBottom:'10px',transition:'color .2s'}}>{l}</Link>
            ))}
          </div>
          {/* Contact */}
          <div>
            <h4 style={{fontSize:'11px',fontWeight:600,textTransform:'uppercase',letterSpacing:'.1em',color:'var(--dim)',marginBottom:'16px'}}>Contact</h4>
            <p style={{fontSize:'13px',color:'var(--muted)',marginBottom:'10px'}}>Hyderabad, Telangana</p>
            <p style={{fontSize:'13px',color:'var(--muted)',marginBottom:'10px'}}>info@srishaan.in</p>
            <p style={{fontSize:'13px',color:'var(--muted)'}}>Mon–Sat, 9am–6pm IST</p>
          </div>
        </div>
        {/* Bottom bar */}
        <div style={{borderTop:'1px solid var(--bdr)',paddingTop:'24px',display:'flex',flexWrap:'wrap',justifyContent:'space-between',alignItems:'center',gap:'12px'}}>
          <p style={{fontSize:'12px',color:'var(--dim)'}}>© 2025 Srishaan Tech & Financial Services Pvt. Ltd. All rights reserved.</p>
          <p style={{fontSize:'12px',color:'var(--dim)'}}>SEBI Registered &nbsp;·&nbsp; ISO 27001 Secured</p>
        </div>
      </div>
    </footer>
  );
}
