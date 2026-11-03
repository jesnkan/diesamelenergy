import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onExploreOperations: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onExploreOperations }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#', active: true },
    { name: 'ABOUT', href: '#about' },
    { name: 'SOLAR & WIND', href: '#services' },
    { name: 'SERVICES', href: '#services' },
    { name: 'REGIONAL HUB', href: '#regional-coverage' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      {/* Top micro-ticker for operations */}
      <div style={{
        backgroundColor: '#F8FAFC',
        borderBottom: '1px solid #E2E8F0',
        fontSize: '0.74rem',
        padding: '0.4rem 0',
        color: '#475569',
        fontFamily: 'var(--font-mono)'
      }}>
        <div className="de-container-wide" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: '#0F172A', fontWeight: 600 }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#16a34a', display: 'inline-block' }}></span>
              FLEET DISPATCH: 24/7/365 ACTIVE
            </span>
            <span style={{ display: 'none', color: '#64748B' }} className="desktop-indicator">
              HQ: Commercial Industrial Corridor, Ho, Volta Region
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <span style={{ color: '#475569' }}>
              General Contact Line: <a href="tel:+233262381017" style={{ color: '#0F172A', fontWeight: 700, textDecoration: 'none' }}>+233 26 238 1017</a>
            </span>
            <span style={{ fontSize: '0.68rem', padding: '0.15rem 0.6rem', backgroundColor: '#FFF7ED', border: '1px solid #FFEDD5', borderRadius: '9999px', color: '#E05A1B', fontWeight: 700 }}>
              OFFICIAL LINE
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 90,
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : '#FFFFFF',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid #E2E8F0',
          boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.05)' : 'none',
        }}
      >
        <div className="de-container-wide" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '88px' }}>
          
          {/* Brand Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img
              src="/images/DIESAMEL.png"
              alt="Diesamel Energy Ltd."
              style={{
                height: '74px',
                maxHeight: '74px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </a>

          {/* Desktop Navigation Links (Floating Dark Charcoal Pill matching inspiration) */}
          <nav style={{ display: 'none' }} className="desktop-nav">
            <div
              style={{
                backgroundColor: '#242D35',
                borderRadius: '9999px',
                padding: '0.45rem 1.6rem',
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 4px 18px rgba(0, 0, 0, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
              }}
            >
              <ul style={{ display: 'flex', alignItems: 'center', gap: '1.6rem', listStyle: 'none', margin: 0, padding: 0 }}>
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.8rem',
                        fontWeight: link.active ? 800 : 600,
                        letterSpacing: '0.06em',
                        color: link.active ? '#E05A1B' : '#E2E8F0',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                        position: 'relative',
                        padding: '0.35rem 0.4rem',
                        display: 'inline-block',
                      }}
                      onMouseEnter={(e) => {
                        if (!link.active) e.currentTarget.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e) => {
                        if (!link.active) e.currentTarget.style.color = '#E2E8F0';
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={onExploreOperations}
              className="btn-primary"
              style={{
                padding: '0.62rem 1.45rem',
                fontSize: '0.82rem',
                letterSpacing: '0.04em',
                borderRadius: '9999px',
              }}
            >
              <span>EXPLORE OPERATIONS</span>
              <ArrowUpRight size={15} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              aria-label="Toggle navigation menu"
              style={{
                display: 'none',
                background: '#FFFFFF',
                border: '1px solid #CBD5E1',
                borderRadius: '3px',
                padding: '0.55rem',
                color: '#0A0F1D',
                cursor: 'pointer'
              }}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Responsive Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderBottom: '1px solid #CBD5E1',
              padding: '1.5rem 1.25rem 2rem 1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
            }}
          >
            <nav>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0 }}>
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        color: '#0A0F1D',
                        textDecoration: 'none',
                        display: 'block',
                        padding: '0.5rem 0',
                        borderBottom: '1px solid #F1F5F9'
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div style={{
              marginTop: '0.5rem',
              padding: '1.1rem',
              backgroundColor: '#F8FAFC',
              borderRadius: '3px',
              border: '1px solid #E2E8F0',
              fontSize: '0.82rem',
              color: '#475569'
            }}>
              <div style={{ fontWeight: 700, color: '#0A0F1D', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                DISPATCH COORDINATION
              </div>
              <div>Ho Industrial Corridor • Near UHAS Road Junction</div>
              <div style={{ marginTop: '0.4rem', color: '#0A0F1D', fontWeight: 600 }}>dispatch@diesamelenergy.com</div>
              <div style={{ marginTop: '0.2rem', color: '#0A0F1D', fontWeight: 700 }}>Tel: +233 26 238 1017</div>
              <div style={{ marginTop: '0.2rem' }}>Fleet Ops: 24/7/365 active</div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onExploreOperations();
              }}
              className="btn-primary"
              style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}
            >
              EXPLORE OPERATIONS
            </button>
          </div>
        )}
      </header>

      {/* Responsive media helper CSS */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: block !important;
          }
          .desktop-indicator {
            display: inline-block !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 991px) {
          .mobile-menu-btn {
            display: inline-flex !important;
          }
        }
      `}</style>
    </>
  );
};
