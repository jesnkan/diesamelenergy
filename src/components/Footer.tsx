import React from 'react';
import { ArrowUp, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0', color: '#475569' }}>
      {/* Upper Architectural Footer */}
      <div className="de-container" style={{ paddingTop: 'clamp(4.5rem, 6vw, 6.5rem)', paddingBottom: '3.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            marginBottom: '4rem',
          }}
        >
          {/* Brand Column */}
          <div style={{ maxWidth: '380px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.25rem' }}>
              <img
                src="/images/DIESAMEL-cropped.png"
                alt="Diesamel Energy Ltd."
                style={{
                  height: '56px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 700, color: '#0A0F1D', lineHeight: 1.4, marginBottom: '0.85rem' }}>
              Powering Industry. Fueling Growth across the Volta Basin.
            </p>

            <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6 }}>
              Downstream bulk petroleum logistics, certified commercial road hauling, on-site fuel reserves, and heavy industrial standby power solutions.
            </p>
          </div>

          {/* Core Services Navigation */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#0A0F1D', fontWeight: 800, letterSpacing: '0.12em', marginBottom: '1.25rem', textTransform: 'uppercase' }}>
              Core Infrastructure
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem' }}>
              <li><a href="#services" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#0A0F1D')} onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}>Bulk Fuel Hauling (AGO & PMS)</a></li>
              <li><a href="#services" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#0A0F1D')} onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}>Industrial Generators (20 - 1500 kVA)</a></li>
              <li><a href="#services" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#0A0F1D')} onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}>On-Site Tank Farms & Bunded Storage</a></li>
              <li><a href="#services" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#0A0F1D')} onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}>Emergency Mobile Refueling</a></li>
              <li><a href="#services" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#0A0F1D')} onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}>Solar & Wind Solutions</a></li>
              <li><a href="#services" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#0A0F1D')} onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}>Explore Operations</a></li>
            </ul>
          </div>

          {/* Regional Corridors */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#0A0F1D', fontWeight: 800, letterSpacing: '0.12em', marginBottom: '1.25rem', textTransform: 'uppercase' }}>
              Regional Corridors
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem' }}>
              <li><a href="#regional-coverage" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#0A0F1D')} onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}>Ho Headquarters Hub</a></li>
              <li><a href="#regional-coverage" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#0A0F1D')} onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}>Central Volta (Kpando & Hohoe)</a></li>
              <li><a href="#regional-coverage" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#0A0F1D')} onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}>Southern Volta & Aflao Border</a></li>
              <li><a href="#regional-coverage" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#0A0F1D')} onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}>Oti Agricultural Hinterland</a></li>
              <li><a href="#regional-coverage" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#0A0F1D')} onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}>Tema Coastal Terminal Inflow</a></li>
            </ul>
          </div>

          {/* Operations & Dispatch */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#0A0F1D', fontWeight: 800, letterSpacing: '0.12em', marginBottom: '1.25rem', textTransform: 'uppercase' }}>
              Operational Contact
            </div>
            <div style={{ fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div>
                <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#64748B', fontWeight: 600 }}>
                  HEADQUARTERS
                </span>
                <div style={{ color: '#0A0F1D', marginTop: '0.15rem', fontWeight: 600 }}>
                  Commercial Industrial Corridor, near UHAS Road / Kpando Junction, Ho, Volta Region, Ghana
                </div>
              </div>

              <div>
                <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#64748B', fontWeight: 600 }}>
                  TELEPHONE CONTACT
                </span>
                <div style={{ color: '#0A0F1D', marginTop: '0.15rem', fontWeight: 700 }}>
                  <a href="tel:+233262381017" style={{ color: '#0A0F1D', textDecoration: 'none' }}>+233 26 238 1017</a>
                </div>
              </div>

              <div>
                <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#64748B', fontWeight: 600 }}>
                  DISPATCH DESK (24/7/365)
                </span>
                <div style={{ color: '#0A0F1D', marginTop: '0.15rem', fontWeight: 700 }}>
                  dispatch@diesamelenergy.com
                </div>
              </div>

              <div>
                <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#64748B', fontWeight: 600 }}>
                  COMMERCIAL ENQUIRIES
                </span>
                <div style={{ color: '#0A0F1D', marginTop: '0.15rem', fontWeight: 700 }}>
                  commercial@diesamelenergy.com
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hairline Divider */}
        <hr className="de-hairline" style={{ marginBottom: '2.5rem' }} />

        {/* Lower Legal & Compliance Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span>© {new Date().getFullYear()} Diesamel Energy Ltd. All rights reserved.</span>
            <span style={{ color: '#CBD5E1' }}>|</span>
            <span>Downstream Petroleum Logistics • Ho, Ghana</span>
            <span style={{ color: '#CBD5E1' }}>|</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#E05A1B', fontWeight: 600 }}>
              <ShieldCheck size={15} />
              NPA Transport & Environmental Standards
            </span>
          </div>

          <button
            onClick={scrollToTop}
            style={{
              background: '#FFFFFF',
              border: '1px solid #CBD5E1',
              borderRadius: '3px',
              padding: '0.55rem 0.95rem',
              color: '#0A0F1D',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.76rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#0A0F1D';
              e.currentTarget.style.backgroundColor = '#F8FAFC';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#CBD5E1';
              e.currentTarget.style.backgroundColor = '#FFFFFF';
            }}
          >
            <span>Back to Top</span>
            <ArrowUp size={13} />
          </button>
        </div>

      </div>
    </footer>
  );
};
