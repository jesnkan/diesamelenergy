import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Zap, Fuel, Navigation, Sun } from 'lucide-react';
import { gsap } from 'gsap';

interface HeroProps {
  onExploreOperations: () => void;
  onContactDispatch: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreOperations, onContactDispatch }) => {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    if (heroRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          '.hero-line',
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power3.out', delay: 0.1 }
        );

        gsap.fromTo(
          '.hero-subtext',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.5 }
        );

        gsap.fromTo(
          '.hero-cta-group',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.65 }
        );

        gsap.fromTo(
          imageFrameRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.25 }
        );

        gsap.fromTo(
          '.hero-metric-item',
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power2.out', delay: 0.75 }
        );
      }, heroRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 120px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
        borderBottom: '1px solid #E2E8F0',
      }}
    >
      {/* Background Architectural Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(to right, rgba(15, 23, 42, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      {/* Main Hero Container */}
      <div
        className="de-container-wide"
        style={{
          position: 'relative',
          zIndex: 10,
          paddingTop: 'clamp(3rem, 6vw, 5.5rem)',
          paddingBottom: 'clamp(2.5rem, 5vw, 4.5rem)',
          maxWidth: '1440px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 'clamp(2.5rem, 5vw, 4.5rem)',
            alignItems: 'center',
          }}
        >
          {/* LEFT: Authentic Industrial Photography */}
          <div
            ref={imageFrameRef}
            style={{
              position: 'relative',
              width: '100%',
              margin: '0 auto',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: 'clamp(400px, 46vw, 520px)',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 20px 45px rgba(15, 23, 42, 0.10)',
                border: '1px solid #CBD5E1',
                backgroundColor: '#F1F5F9',
              }}
            >
              <img
                src="/images/hero%20image.jpg"
                alt="Diesamel Energy Ltd. commercial energy infrastructure: solar microgrids, wind power, and heavy bulk petroleum logistics"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 45%',
                  transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.025)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />

              {/* Bottom Caption Strip */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '1.25rem 1.6rem',
                  background: 'linear-gradient(180deg, transparent 0%, rgba(10, 15, 29, 0.92) 100%)',
                  color: '#FFFFFF',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.12em',
                      color: '#FED7AA',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                    }}
                  >
                    INTEGRATED ENERGY ASSETS
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, marginTop: '0.2rem', color: '#FFFFFF' }}>
                    Solar • Wind • Bulk Petroleum Haulage
                  </div>
                </div>

                <div
                  style={{
                    padding: '0.3rem 0.75rem',
                    backgroundColor: '#E05A1B',
                    borderRadius: '4px',
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    color: '#FFFFFF',
                  }}
                >
                  VOLTA BASIN
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Corporate Value Proposition */}
          <div style={{ maxWidth: '640px' }}>
            <div
              className="hero-subtext"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.76rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#E05A1B',
                marginBottom: '1.25rem',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#E05A1B',
                }}
              />
              VOLTA REGION BULK FUEL &amp; INDUSTRIAL POWER
            </div>

            {/* Display Headline */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h1
                style={{
                  fontSize: 'clamp(2.4rem, 4.4vw, 4.2rem)',
                  lineHeight: 1.08,
                  fontWeight: 800,
                  letterSpacing: '-0.035em',
                  color: '#0A0F1D',
                }}
              >
                <span className="hero-line" style={{ display: 'block' }}>
                  Continuous Energy to
                </span>
                <span className="hero-line" style={{ display: 'block', color: '#E05A1B' }}>
                  Fuel Heavy Operations.
                </span>
              </h1>
            </div>

            {/* Value Proposition Editorial Copy */}
            <p
              className="hero-subtext"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1.02rem, 1.25vw, 1.18rem)',
                lineHeight: 1.65,
                color: '#475569',
                maxWidth: '580px',
                marginBottom: '2.5rem',
              }}
            >
              Direct-to-site bulk diesel distribution, commercial solar installations, and heavy-duty industrial standby power based in Ho, Ghana. Powering agribusinesses, quarries, processing facilities, and regional institutions across Volta, Oti, and Greater Accra.
            </p>

            {/* Action Buttons */}
            <div
              className="hero-cta-group"
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1.1rem',
                marginBottom: '2.75rem',
              }}
            >
              <button
                onClick={onExploreOperations}
                className="btn-primary"
                style={{ fontSize: '0.94rem', padding: '0.95rem 2.2rem' }}
              >
                <span>EXPLORE OPERATIONS</span>
                <ArrowUpRight size={17} />
              </button>

              <button
                onClick={onContactDispatch}
                className="btn-secondary"
                style={{ fontSize: '0.94rem', padding: '0.95rem 2rem' }}
              >
                <span>CORPORATE DIRECTORY</span>
                <ArrowUpRight size={16} style={{ color: '#0A0F1D' }} />
              </button>
            </div>

            {/* Corporate Location */}
            <div
              className="hero-subtext"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 600,
                color: '#64748B',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              <span>DIESAMELENERGY.COM</span>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#CBD5E1' }} />
              <span>COMMERCIAL LIGHT INDUSTRIAL ZONE, HO</span>
            </div>
          </div>
        </div>
      </div>

      {/* Operational Standards Strip */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          borderTop: '1px solid #E2E8F0',
          backgroundColor: '#F8FAFC',
          padding: '1.5rem 0',
        }}
      >
        <div className="de-container-wide">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem',
              alignItems: 'center',
            }}
          >
            {/* Spec 1: Base */}
            <div className="hero-metric-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
              <div
                style={{
                  padding: '0.6rem',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '4px',
                  color: '#0A0F1D',
                  border: '1px solid #CBD5E1',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
                }}
              >
                <Navigation size={18} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: '#64748B',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 600,
                  }}
                >
                  OPERATIONAL HUB
                </div>
                <div style={{ fontSize: '0.94rem', fontWeight: 700, color: '#0A0F1D', marginTop: '0.15rem' }}>
                  Commercial Industrial Zone, Ho Hub
                </div>
              </div>
            </div>

            {/* Spec 2: Solar & Wind */}
            <div className="hero-metric-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
              <div
                style={{
                  padding: '0.6rem',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '4px',
                  color: '#0A0F1D',
                  border: '1px solid #CBD5E1',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
                }}
              >
                <Sun size={18} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: '#64748B',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 600,
                  }}
                >
                  SOLAR &amp; RENEWABLES
                </div>
                <div style={{ fontSize: '0.94rem', fontWeight: 700, color: '#0A0F1D', marginTop: '0.15rem' }}>
                  Commercial PV &amp; Microgrid Arrays
                </div>
              </div>
            </div>

            {/* Spec 3: Petroleum Logistics */}
            <div className="hero-metric-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
              <div
                style={{
                  padding: '0.6rem',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '4px',
                  color: '#0A0F1D',
                  border: '1px solid #CBD5E1',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
                }}
              >
                <Fuel size={18} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: '#64748B',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 600,
                  }}
                >
                  BULK FLEET CAPACITY
                </div>
                <div style={{ fontSize: '0.94rem', fontWeight: 700, color: '#0A0F1D', marginTop: '0.15rem' }}>
                  13,500L – 45,000L Articulated Tankers
                </div>
              </div>
            </div>

            {/* Spec 4: Heavy Standby Power */}
            <div className="hero-metric-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
              <div
                style={{
                  padding: '0.6rem',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '4px',
                  color: '#0A0F1D',
                  border: '1px solid #CBD5E1',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
                }}
              >
                <Zap size={18} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: '#64748B',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 600,
                  }}
                >
                  STANDBY &amp; PRIME POWER
                </div>
                <div style={{ fontSize: '0.94rem', fontWeight: 700, color: '#0A0F1D', marginTop: '0.15rem' }}>
                  20 kVA to 1,500 kVA Synchronized Sets
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
