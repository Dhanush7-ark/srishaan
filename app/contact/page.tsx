'use client';
import Link from 'next/link';
import { useState } from 'react';
import SectionReveal from '@/components/ui/SectionReveal';
import TiltCard from '@/components/ui/TiltCard';
import ContactHeroCanvas from '@/components/contact/ContactHeroCanvas';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending,   setSending]   = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSubmitted(true); }, 1200);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '13px 16px',
    background: 'rgba(255,255,255,.04)', border: '1px solid var(--bdr)',
    borderRadius: '8px', color: 'var(--white)', fontSize: '14px',
    outline: 'none', transition: 'border-color .25s', fontFamily: 'inherit',
  };

  return (
    <>
      {/* ── Hero with 3D Icosahedron ── */}
      <section style={{ padding: '140px 0 80px', background: 'var(--navy)', position: 'relative', overflow: 'hidden', minHeight: '520px', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', right: '3%', top: '50%', transform: 'translateY(-50%)', width: '460px', height: '460px', opacity: 0.85, pointerEvents: 'none' }}>
          <ContactHeroCanvas />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, var(--navy) 38%, transparent 72%)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', margin: '0 auto', padding: '0 6%' }}>
          <div style={{ fontSize: '13px', color: 'var(--dim)', marginBottom: '24px' }}>
            <Link href="/" style={{ color: 'var(--dim)', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 10px', opacity: .4 }}>/</span>
            <span style={{ color: 'var(--gold)' }}>Contact Us</span>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(240,165,0,.08)', border: '1px solid rgba(240,165,0,.2)', color: 'var(--gold)', fontSize: '11px', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: '100px', marginBottom: '28px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)', animation: 'blink 2s ease-in-out infinite' }} />
            Hyderabad, Telangana
          </div>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.8rem,5vw,5rem)', fontWeight: 700, lineHeight: 1.06, letterSpacing: '-.03em', maxWidth: '600px' }}>
            Let&apos;s <span className="gold-grad">Connect</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--muted)', lineHeight: 1.8, maxWidth: '480px', marginTop: '24px' }}>
            Ready to start your wealth journey? Our team is here to guide you every step of the way.
          </p>
        </div>
      </section>

      {/* ── Contact Main ── */}
      <section id="contact-main" style={{ padding: '100px 0', background: 'var(--navy-2)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 6%', display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '64px', alignItems: 'start' }}>

          <SectionReveal>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 700, letterSpacing: '-.02em', marginBottom: '32px' }}>Get in Touch</h2>
            {[
              { icon:'📍', label:'Address', val:'Hyderabad, Telangana, India' },
              { icon:'📞', label:'Phone',   val:'+91 (Enquire via form)' },
              { icon:'✉️', label:'Email',   val:'info@srishaan.in' },
              { icon:'🕐', label:'Hours',   val:'Mon–Sat, 9:00 AM – 6:00 PM IST' },
            ].map(c => (
              <div key={c.label} style={{ display: 'flex', gap: '16px', marginBottom: '24px', alignItems: 'flex-start' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--surf)', border: '1px solid var(--bdr)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>{c.icon}</div>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--dim)', marginBottom: '4px' }}>{c.label}</div>
                  <div style={{ fontSize: '14px', color: 'var(--white)' }}>{c.val}</div>
                </div>
              </div>
            ))}
            <TiltCard className="glass-card" style={{ borderRadius: '14px', padding: '24px', marginTop: '32px' }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--dim)', marginBottom: '16px' }}>Statutory Details</div>
                {[
                  ['Company',     'Srishaan Tech & Financial Services Pvt. Ltd.'],
                  ['CIN',         'U74999TG2024PTC176888'],
                  ['GST',         '36AAQCS6755Q1ZH'],
                  ['Incorporated','20 February 2024'],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--bdr)', fontSize: '12.5px' }}>
                    <span style={{ color: 'var(--dim)' }}>{k}</span>
                    <span style={{ color: 'var(--muted)', textAlign: 'right', maxWidth: '60%' }}>{v}</span>
                  </div>
                ))}
              </div>
            </TiltCard>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <TiltCard className="glass-card" style={{ borderRadius: '20px', padding: '40px' }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                {!submitted ? (
                  <>
                    <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '22px', fontWeight: 700, marginBottom: '28px', color: 'var(--white)' }}>Send Us a Message</h3>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }} noValidate>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--dim)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '.06em' }}>Full Name *</label>
                          <input required style={inputStyle} type="text" placeholder="Your full name" />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--dim)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '.06em' }}>Company *</label>
                          <input required style={inputStyle} type="text" placeholder="Organisation name" />
                        </div>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--dim)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '.06em' }}>Email *</label>
                          <input required style={inputStyle} type="email" placeholder="you@company.com" />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--dim)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '.06em' }}>Phone</label>
                          <input style={inputStyle} type="tel" placeholder="+91 00000 00000" />
                        </div>
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--dim)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '.06em' }}>Area of Interest *</label>
                        <select required style={{ ...inputStyle, cursor: 'pointer' }}>
                          <option value="">Select a service</option>
                          {['Outsourced CFO Services','Financial Planning & Budgeting','MIS Reporting & Performance Analysis','Accounting & Statutory Compliance','Bid Management & Procurement Support','IT Infrastructure Supply','Passive Network Components','Vendor Empanelment','General Enquiry'].map(o => (
                            <option key={o} value={o}>{o}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--dim)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '.06em' }}>Message *</label>
                        <textarea required style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }} placeholder="Tell us about your requirements..." />
                      </div>
                      <button type="submit" disabled={sending} className="btn-gold" style={{ width: '100%', justifyContent: 'center', padding: '15px', fontSize: '15px', opacity: sending ? .7 : 1 }}>
                        {sending ? 'Sending…' : 'Send Message →'}
                      </button>
                    </form>
                  </>
                ) : (
                  <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                    <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(34,197,94,.12)', border: '2px solid #4ADE80', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: '28px' }}>✓</div>
                    <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '22px', fontWeight: 700, color: 'var(--white)', marginBottom: '12px' }}>Message Sent Successfully</h3>
                    <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7 }}>Thank you for reaching out. Our team will get back to you within 1 business day.</p>
                  </div>
                )}
              </div>
            </TiltCard>
          </SectionReveal>
        </div>
      </section>

      {/* ── Location ── */}
      <section id="location" style={{ padding: '80px 0', background: 'var(--navy)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 6%' }}>
          <SectionReveal className="mb-10">
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 700, letterSpacing: '-.02em' }}>Our Location</h2>
          </SectionReveal>
          <SectionReveal>
            <TiltCard className="glass-card" style={{ borderRadius: '20px', padding: '60px', textAlign: 'center' }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>📍</div>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '22px', fontWeight: 700, color: 'var(--white)', marginBottom: '12px' }}>Hyderabad, Telangana</h3>
                <p style={{ fontSize: '14px', color: 'var(--muted)' }}>Srishaan Tech &amp; Financial Services Pvt. Ltd.<br />Hyderabad, Telangana – India</p>
              </div>
            </TiltCard>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
