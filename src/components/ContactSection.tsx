import React from 'react';
import { Mail, MapPin, Clock, Phone, AlertCircle, ArrowUpRight } from 'lucide-react';

interface ContactSectionProps {
  onContactDispatch?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  return (
    <section id="contact" className="de-section" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
      <div className="de-container">
        
        {/* Conversion Banner with GSAP Reveal */}
        <div
          className="gsap-reveal"
          style={{
            backgroundColor: '#F8FAFC',
            border: '1px solid #E2E8F0',
            borderRadius: '4px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.03)',
            padding: 'clamp(3rem, 6vw, 5.5rem) clamp(2rem, 5vw, 4.5rem)',
            marginBottom: '4rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle grid pattern background */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'linear-gradient(to right, rgba(15, 23, 42, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.03) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: '820px' }}>
            <div className="technical-eyebrow technical-eyebrow-accent">
              SECURE INDUSTRIAL ENERGY PARTNERSHIP
            </div>

            <h2 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)', lineHeight: 1.08, marginBottom: '1.5rem', color: '#0A0F1D' }}>
              Keep your operations moving.
            </h2>

            <p style={{ color: '#475569', fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
              Talk to Diesamel Energy about bulk fuel supply, industrial power systems, and on-site refueling requirements across the Volta Basin and Greater Accra.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1.25rem' }}>
              <a
                href="mailto:dispatch@diesamelenergy.com"
                className="btn-primary"
                style={{ fontSize: '0.96rem', padding: '1rem 2.2rem' }}
              >
                <span>Contact Dispatch Desk</span>
                <ArrowUpRight size={18} />
              </a>

              <a
                href="mailto:commercial@diesamelenergy.com"
                className="btn-secondary"
                style={{ fontSize: '0.96rem', padding: '1rem 2rem' }}
              >
                <Mail size={16} />
                <span>Commercial Inquiries</span>
              </a>
            </div>
          </div>
        </div>

        {/* Operational Directory & Contact Coordinates */}
        <div
          className="reveal-stagger-parent"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1rem',
          }}
        >
          {/* Headquarters Location */}
          <div className="reveal-stagger-item card-hover-elevate" style={{ padding: '2.25rem', border: '1px solid #E2E8F0', borderRadius: '4px', backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
              <MapPin size={20} style={{ color: '#0A0F1D' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#64748B', letterSpacing: '0.1em', fontWeight: 700 }}>
                CORPORATE HEADQUARTERS
              </span>
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0A0F1D', marginBottom: '0.5rem' }}>
              Diesamel Energy Ltd.
            </div>
            <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.6 }}>
              Commercial Industrial Corridor, near UHAS Road / Kpando Junction, Ho, Volta Region, Ghana.
            </p>
          </div>

          {/* Electronic Communications */}
          <div className="reveal-stagger-item card-hover-elevate" style={{ padding: '2.25rem', border: '1px solid #E2E8F0', borderRadius: '4px', backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
              <Mail size={20} style={{ color: '#0A0F1D' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#64748B', letterSpacing: '0.1em', fontWeight: 700 }}>
                OFFICIAL CONTACT EMAILS
              </span>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#64748B', fontWeight: 600 }}>
                DISPATCH DESK (24/7)
              </div>
              <a href="mailto:dispatch@diesamelenergy.com" style={{ fontSize: '0.98rem', color: '#0A0F1D', textDecoration: 'none', fontWeight: 700 }}>
                dispatch@diesamelenergy.com
              </a>
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#64748B', fontWeight: 600 }}>
                COMMERCIAL CONTRACTS
              </div>
              <a href="mailto:commercial@diesamelenergy.com" style={{ fontSize: '0.98rem', color: '#0A0F1D', textDecoration: 'none', fontWeight: 700 }}>
                commercial@diesamelenergy.com
              </a>
            </div>
          </div>

          {/* Operational Hours */}
          <div className="reveal-stagger-item card-hover-elevate" style={{ padding: '2.25rem', border: '1px solid #E2E8F0', borderRadius: '4px', backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
              <Clock size={20} style={{ color: '#0A0F1D' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#64748B', letterSpacing: '0.1em', fontWeight: 700 }}>
                HOURS OF OPERATION
              </span>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#64748B', fontWeight: 600 }}>
                FLEET HAULING & DISPATCH
              </div>
              <div style={{ fontSize: '0.98rem', color: '#16a34a', fontWeight: 800 }}>
                24 Hours a Day, 365 Days a Year
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#64748B', fontWeight: 600 }}>
                ADMINISTRATIVE OFFICE
              </div>
              <div style={{ fontSize: '0.94rem', color: '#0A0F1D', fontWeight: 600 }}>
                Monday to Friday, 08:00 – 17:00 GMT
              </div>
            </div>
          </div>

          {/* Telephone Line Disclosures */}
          <div className="reveal-stagger-item card-hover-elevate" style={{ padding: '2.25rem', border: '1px solid #E2E8F0', borderRadius: '4px', backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
              <Phone size={20} style={{ color: '#0A0F1D' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#64748B', letterSpacing: '0.1em', fontWeight: 700 }}>
                DIRECT TELEPHONY &amp; DISPATCH
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.15rem' }}>
              <div>
                <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#64748B', fontWeight: 600 }}>
                  GENERAL CONTACT &amp; FLEET DISPATCH LINE
                </div>
                <a href="tel:+233262381017" style={{ fontSize: '1.15rem', color: '#0A0F1D', fontFamily: 'var(--font-mono)', fontWeight: 800, textDecoration: 'none' }}>
                  +233 26 238 1017
                </a>
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#64748B', fontWeight: 600 }}>
                  HEADQUARTERS LOCATION
                </div>
                <div style={{ fontSize: '0.92rem', color: '#475569', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                  Commercial Industrial Zone, Ho Hub, Volta Region
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', padding: '0.6rem 0.85rem', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '3px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#16a34a', display: 'inline-block' }} />
              <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#0F172A', fontWeight: 600 }}>
                Active official carrier line for regional inquiries &amp; commercial dispatch.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
