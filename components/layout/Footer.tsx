import Link from 'next/link';
import Image from 'next/image';
export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy-2)', borderTop: '1px solid var(--bdr)', paddingTop: '60px', paddingBottom: '32px' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 8%' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <img
                src="/images/Srishaan_Logo-removebg-preview.png"
                alt="Srishaan"
                style={{ height: '40px', width: 'auto' }}
                loading="lazy"
              />
            </Link>
            <p style={{ fontSize: '13px', color: 'var(--dim)', lineHeight: 1.7, maxWidth: '240px' }}>Empowering Financial Growth through precision-driven investment strategies and IT infrastructure solutions.</p>
          </div>
          {/* Services */}
          <div>
            <h4 style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--dim)', marginBottom: '16px' }}>Services</h4>
            {[
              { l: 'Financial Services', h: '/services#services-split' },
              { l: 'IT & ITES Services', h: '/services#it-ites' },
              { l: 'Project Execution', h: '/services#project-execution' },
              { l: 'Supply & Resale', h: '/services#supply-resale' }
            ].map(s => (
              <Link key={s.l} href={s.h} style={{ display: 'block', fontSize: '13.5px', color: 'var(--muted)', textDecoration: 'none', marginBottom: '10px', transition: 'color .2s' }}>{s.l}</Link>
            ))}
          </div>
          {/* Company */}
          <div>
            <h4 style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--dim)', marginBottom: '16px' }}>Company</h4>
            {[
              ['Home', '/'],
              ['About Us', '/about'],
              ['Services', '/services'],
              ['Contact Us', '/contact']
            ].map(([l, h]) => (
              <Link key={h} href={h} style={{ display: 'block', fontSize: '13.5px', color: 'var(--muted)', textDecoration: 'none', marginBottom: '10px', transition: 'color .2s' }}>{l}</Link>
            ))}
          </div>
          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--dim)', marginBottom: '16px' }}>Contact</h4>
            <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '10px' }}>Hyderabad, Telangana</p>
            <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '10px' }}>info@srishaan.in</p>
            <p style={{ fontSize: '13px', color: 'var(--muted)' }}>Mon–Sat, 9am–6pm IST</p>
          </div>
        </div>
        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid var(--bdr)', paddingTop: '24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
          <p style={{ fontSize: '12px', color: 'var(--dim)' }}>© 2025 Srishaan Tech & Financial Services Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
