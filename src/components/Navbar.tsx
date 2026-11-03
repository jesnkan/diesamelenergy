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
        <div
          className="de-container-wide navbar-inner"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '92px',
          }}
        >
          {/* Brand Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img
              src="/images/DIESAMEL.png"
              alt="Diesamel Energy Ltd."
              className="navbar-logo"
              style={{
                height: '80px',
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
            {/* Desktop Only CTA: Hidden on mobile to avoid clutter */}
            <button
              onClick={onExploreOperations}
              className="btn-primary desktop-cta-btn"
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
                background: '#F8FAFC',
                border: '1px solid #CBD5E1',
                borderRadius: '6px',
                padding: '0.6rem',
                color: '#0A0F1D',
                cursor: 'pointer',
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
                        borderBottom: '1px solid #F1F5F9',
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onExploreOperations();
              }}
              className="btn-primary"
              style={{ width: '100%', textAlign: 'center', justifyContent: 'center', padding: '0.9rem', fontSize: '0.9rem' }}
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
          .desktop-cta-btn {
            display: inline-flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 991px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-cta-btn {
            display: none !important;
          }
          .mobile-menu-btn {
            display: inline-flex !important;
          }
          .navbar-inner {
            height: 76px !important;
          }
          .navbar-logo {
            height: 60px !important;
          }
        }
      `}</style>
    </>
  );
};
