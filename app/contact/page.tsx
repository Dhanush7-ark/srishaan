'use client';
import Link from 'next/link';
import { useState } from 'react';
import SectionReveal from '@/components/ui/SectionReveal';
import TiltCard from '@/components/ui/TiltCard';
import ContactHeroCanvas from '@/components/contact/ContactHeroCanvas';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    phone: ''
  });

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const digitsOnly = value.replace(/[^0-9]/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, [name]: digitsOnly }));
      if (digitsOnly.length > 0 && digitsOnly.length < 10) {
        setErrors(prev => ({ ...prev, phone: 'Phone number must be exactly 10 digits' }));
      } else {
        setErrors(prev => ({ ...prev, phone: '' }));
      }
    } else if (name === 'email') {
      setFormData(prev => ({ ...prev, [name]: value }));
      if (value && !validateEmail(value)) {
        setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
      } else {
        setErrors(prev => ({ ...prev, email: '' }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final validation
    if (!validateEmail(formData.email)) {
      setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
      return;
    }
    if (formData.phone.length > 0 && formData.phone.length < 10) {
      setErrors(prev => ({ ...prev, phone: 'Phone number must be exactly 10 digits' }));
      return;
    }

    setSending(true);
    setTimeout(() => { setSending(false); setSubmitted(true); }, 1200);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '13px 16px',
    background: 'rgba(255,255,255,.04)', border: '1px solid var(--bdr)',
    borderRadius: '8px', color: 'var(--white)', fontSize: '14px',
    outline: 'none', transition: 'all .25s', fontFamily: 'inherit',
  };

  return (
    <main style={{ background: 'var(--navy)', color: 'var(--white)', minHeight: '100vh' }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .contact-split-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
          .hero-canvas-wrap { right: -10% !important; width: 400px !important; height: 400px !important; opacity: 0.4 !important; }
        }
        @media (max-width: 768px) {
          .contact-hero-sec { padding: 120px 0 60px !important; }
          .hero-canvas-wrap { display: none !important; }
          .contact-form-card { padding: 32px 24px !important; }
          .form-inner-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
          .form-inner-grid > div { grid-column: span 1 !important; }
          .location-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .contact-details-list { margin-bottom: 32px !important; }
        }
      `}} />

      {/* ── Hero Section ── */}
      <section className="contact-hero-sec" style={{ padding: '160px 0 100px', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-canvas-wrap" style={{ position: 'absolute', right: '5%', top: '45%', width: '500px', height: '500px', opacity: 0.7, pointerEvents: 'none' }}>
          <ContactHeroCanvas />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, transparent 100%)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1440px', margin: '0 auto', padding: '0 8%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--dim)', marginBottom: '32px' }}>
            <Link href="/" style={{ color: 'var(--dim)', textDecoration: 'none' }}>Home</Link>
            <span style={{ opacity: 0.4 }}>›</span>
            <span style={{ color: 'var(--gold)', fontWeight: 500 }}>CONTACT US</span>
          </div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(240,165,0,.08)', border: '1px solid rgba(240,165,0,.15)', color: 'var(--gold)', fontSize: '11px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', padding: '6px 18px', borderRadius: '100px', marginBottom: '32px' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--gold)', boxShadow: '0 0 10px var(--gold)' }} />
            Hyderabad, Telangana
          </div>

          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 700, lineHeight: 1, letterSpacing: '-.03em', maxWidth: '800px' }}>
            Let&apos;s <i className="gold-grad" style={{ fontStyle: 'italic', fontWeight: 400 }}>Connect</i>
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '520px', marginTop: '28px' }}>
            Whether you&apos;re looking to manage your finances, explore empanelment, or simply have a question — we&apos;re here and responsive.
          </p>
        </div>
      </section>

      {/* ── "What Are You Looking For?" Section ── */}
      <section style={{ padding: '100px 0', background: 'var(--navy-2)' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 8%' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '.15em', marginBottom: '16px' }}>How Can We Help</div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-.02em' }}>
              What Are You <span className="gold-grad">Looking For?</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {[
              { icon: '📊', title: 'Financial & Compliance Services', desc: 'CFO services, MIS reporting, statutory compliance, financial planning, and strategic advisory for your organization.' },
              { icon: '📱', title: 'IT Infrastructure Supply', desc: 'Laptops, desktops, server lines, data center solutions, network racks — PSU compliant supply with full documentation.' },
              { icon: '🏛️', title: 'Vendor Empanelment', desc: 'We are open to be empanelled with PSUs and large corporates. Reach out to initiate the registration process.' }
            ].map((item, idx) => (
              <SectionReveal key={idx} delay={idx * 0.1}>
                <TiltCard className="glass-card" style={{ padding: '40px', height: '100%', border: '1px solid var(--bdr)' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '24px' }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '20px', fontWeight: 700, marginBottom: '16px' }}>{item.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6 }}>{item.desc}</p>
                </TiltCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Get In Touch Section ── */}
      <section style={{ padding: '120px 0', background: 'var(--navy)' }}>
        <div className="contact-split-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 8%', display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '80px', alignItems: 'start' }}>

          {/* Left: Contact Details */}
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '.15em', marginBottom: '16px' }}>Get In Touch</div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', fontWeight: 700, letterSpacing: '-.02em', marginBottom: '24px' }}>
              Contact <span className="gold-grad">Details</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '48px' }}>
              Reach us directly or fill the form and we&apos;ll respond within one business day.
            </p>

            <div className="contact-details-list" style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '48px' }}>
              {[
                { icon: '📍', label: 'Registered Office', val: 'Hyderabad, Telangana, India' },
                { icon: '📞', label: 'Phone', val: '+91 96765 63210' },
                { icon: '✉️', label: 'Email', val: 'hello@srishaan.com' },
                { icon: '🕒', label: 'Business Hours', val: 'Mon – Sat, 9:00 AM – 6:00 PM IST' }
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '20px', padding: '24px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--bdr)', borderRadius: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(240,165,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--dim)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '4px' }}>{item.label}</div>
                    <div style={{ fontSize: '15px', fontWeight: 600 }}>{item.val}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ padding: '32px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--bdr)', borderRadius: '20px' }}>
              <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '20px' }}>Statutory Details</div>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', minWidth: '300px' }}>
                  <tbody>
                    {[
                      ['Company', 'Srishaan Tech & Financial Services Pvt. Ltd.'],
                      ['CIN', 'U74999TG2024PTC176888'],
                      ['Incorporated', '2024 — Companies Act'],
                      ['GST', 'Registered & Active'],
                      ['Classification', 'MSME / Startup India']
                    ].map(([k, v], idx) => (
                      <tr key={idx} style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 0', color: 'var(--dim)', fontWeight: 500 }}>{k}</td>
                        <td style={{ padding: '12px 0', color: 'var(--muted)', textAlign: 'right' }}>{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right: Message Form */}
          <SectionReveal delay={0.2}>
            <TiltCard className="contact-form-card" style={{ background: '#fff', borderRadius: '24px', padding: '48px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', fontWeight: 700, color: '#04091A', marginBottom: '12px' }}>Send Us a Message</h3>
              <p style={{ fontSize: '14px', color: '#4E5A74', marginBottom: '32px' }}>Fill in your details and we&apos;ll get back to you promptly with the right information.</p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="form-inner-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div style={{ gridColumn: 'span 1' }}>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#04091A', marginBottom: '8px' }}>Full Name *</label>
                    <input required name="fullName" value={formData.fullName} onChange={handleChange} style={{ ...inputStyle, background: '#F8FAFF', color: '#04091A' }} type="text" placeholder="Your full name" />

                  </div>
                  <div style={{ gridColumn: 'span 1' }}>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#04091A', marginBottom: '8px' }}>Company / Organisation *</label>
                    <input required name="company" value={formData.company} onChange={handleChange} style={{ ...inputStyle, background: '#F8FAFF', color: '#04091A' }} type="text" placeholder="Your company name" />

                  </div>
                  <div style={{ gridColumn: 'span 1' }}>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#04091A', marginBottom: '8px' }}>Email Address *</label>
                    <input required name="email" value={formData.email} onChange={handleChange} style={{ ...inputStyle, background: '#F8FAFF', color: '#04091A', borderColor: errors.email ? '#dc2626' : 'var(--bdr)' }} type="email" placeholder="your@email.com" />
                    {errors.email && <div style={{ color: '#dc2626', fontSize: '11px', marginTop: '6px', fontWeight: 500 }}>{errors.email}</div>}

                  </div>
                  <div style={{ gridColumn: 'span 1' }}>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#04091A', marginBottom: '8px' }}>Phone Number</label>
                    <input name="phone" value={formData.phone} onChange={handleChange} style={{ ...inputStyle, background: '#F8FAFF', color: '#04091A', borderColor: errors.phone ? '#dc2626' : 'var(--bdr)' }} type="tel" placeholder="10-digit mobile number" />
                    {errors.phone && <div style={{ color: '#dc2626', fontSize: '11px', marginTop: '6px', fontWeight: 500 }}>{errors.phone}</div>}

                  </div>
                  <div style={{ gridColumn: 'span 2' }}>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#04091A', marginBottom: '8px' }}>Area of Interest *</label>
                    <select required name="interest" value={formData.interest} onChange={handleChange} style={{ ...inputStyle, background: '#F8FAFF', color: '#04091A', cursor: 'pointer' }}>
                      <option value="">Select a service area</option>
                      {['Outsourced CFO Services', 'Financial Planning', 'IT Infrastructure Supply', 'Vendor Empanelment', 'Other Enquiry'].map(o => <option key={o} value={o}>{o}</option>)}
                    </select>

                  </div>
                  <div style={{ gridColumn: 'span 2' }}>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#04091A', marginBottom: '8px' }}>Message *</label>
                    <textarea required name="message" value={formData.message} onChange={handleChange} style={{ ...inputStyle, background: '#F8FAFF', color: '#04091A', minHeight: '120px', resize: 'vertical' }} placeholder="Briefly describe your requirement or enquiry..." />

                  </div>
                  <div style={{ gridColumn: 'span 2' }}>
                    <button type="submit" disabled={sending} className="btn-gold" style={{ width: '100%', justifyContent: 'center', padding: '16px', borderRadius: '12px', fontSize: '15px' }}>
                      {sending ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(34,197,94,.1)', border: '2px solid #22C55E', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '24px' }}>✓</div>
                  <h4 style={{ color: '#04091A', fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>Message Received!</h4>
                  <p style={{ color: '#4E5A74', fontSize: '14px' }}>We&apos;ll get back to you shortly.</p>
                </div>
              )}
            </TiltCard>
          </SectionReveal>
        </div>
      </section>

      {/* ── Location Section ── */}
      <section style={{ padding: '100px 0 140px', background: 'var(--navy-2)' }}>
        <div className="location-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 8%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '.15em', marginBottom: '16px' }}>Our Location</div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 700, letterSpacing: '-.02em', marginBottom: '24px' }}>
              Based in <span className="gold-grad">Hyderabad</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '32px' }}>
              Srishaan Tech & Financial Services Pvt. Ltd. is headquartered in Hyderabad, Telangana — strategically positioned to serve clients across India.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Serving corporates and PSUs across India',
                'On-site engagement available pan-India',
                'Remote advisory and delivery capability',
                'Sales and support across all major cities'
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: 'var(--muted)' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ position: 'relative' }}>
            <TiltCard className="glass-card" style={{ padding: '60px', borderRadius: '32px', textAlign: 'center', border: '1px solid var(--bdr)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(240,165,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <span style={{ fontSize: '20px' }}>📍</span>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>Hyderabad, Telangana</h3>
              <p style={{ fontSize: '13px', color: 'var(--dim)', marginBottom: '24px' }}>India — 500 0XX</p>
              <div style={{ display: 'inline-block', padding: '8px 20px', borderRadius: '100px', background: 'rgba(240,165,0,0.08)', border: '1px solid rgba(240,165,0,0.2)', color: 'var(--gold)', fontSize: '11px', fontWeight: 700 }}>
                Registered Office
              </div>
            </TiltCard>
            {/* Subtle background glow for map visual */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120%', height: '120%', background: 'radial-gradient(circle, rgba(45,91,227,0.05) 0%, transparent 70%)', zIndex: -1 }} />
          </div>
        </div>
      </section>
    </main>
  );
}
