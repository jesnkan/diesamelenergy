import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ShieldCheck, Zap, Fuel, Navigation, Sun, Wind } from 'lucide-react';
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
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.16, ease: 'power3.out', delay: 0.15 }
        );

        gsap.fromTo(
          '.hero-subtext',
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85, ease: 'power2.out', delay: 0.6 }
        );

        gsap.fromTo(
          '.hero-cta-group',
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.75 }
        );

        gsap.fromTo(
          imageFrameRef.current,
          { scale: 0.95, opacity: 0, x: -30 },
          { scale: 1, opacity: 1, x: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 }
        );

        gsap.fromTo(
          '.hero-accent-shape',
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.5)', delay: 0.65 }
        );

        gsap.fromTo(
          '.hero-metric-item',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power2.out', delay: 0.85 }
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
        backgroundColor: '#F8FAFC',
        overflow: 'hidden',
        borderBottom: '1px solid #E2E8F0',
      }}
    >
      {/* Background Architectural Subtle Light Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(to right, rgba(15, 23, 42, 0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.035) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          pointerEvents: 'none',
        }}
      />

      {/* Floating Decorative Cross Elements in Ambient Canvas */}
      <div
        style={{
          position: 'absolute',
          top: '12%',
          right: '8%',
          color: '#E05A1B',
          fontSize: '1.2rem',
          fontWeight: 700,
          userSelect: 'none',
          pointerEvents: 'none',
          opacity: 0.75,
        }}
      >
        ✕
      </div>
      <div
        style={{
          position: 'absolute',
          top: '38%',
          right: '18%',
          color: '#475569',
          fontSize: '1rem',
          fontWeight: 700,
          userSelect: 'none',
          pointerEvents: 'none',
          opacity: 0.6,
        }}
      >
        ✕
      </div>

      {/* Main Hero Container */}
      <div
        className="de-container-wide"
        style={{
          position: 'relative',
          zIndex: 10,
          paddingTop: 'clamp(2.5rem, 5vw, 4.5rem)',
          paddingBottom: 'clamp(2.5rem, 4.5vw, 4rem)',
          maxWidth: '1540px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 'clamp(2.5rem, 5vw, 5rem)',
            alignItems: 'center',
          }}
        >
          {/* LEFT COLUMN: Organic Shaped Frame with Solar, Wind & Fuel Photography */}
          <div
            ref={imageFrameRef}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            {/* Top Dot Grid Matrix */}
            <div
              className="hero-accent-shape"
              style={{
                position: 'absolute',
                top: '-20px',
                right: '40px',
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 7px)',
                gap: '10px',
                zIndex: 1,
              }}
            >
              {[...Array(20)].map((_, i) => (
                <span
                  key={i}
                  style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    backgroundColor: i < 10 ? '#E05A1B' : '#94A3B8',
                    opacity: 0.85,
                    display: 'inline-block',
                  }}
                />
              ))}
            </div>

            {/* Energetic Orange Curved Accent Ribbon */}
            <div
              className="hero-accent-shape"
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '10%',
                width: 'clamp(180px, 24vw, 280px)',
                height: 'clamp(60px, 8vw, 86px)',
                borderRadius: '9999px',
                backgroundColor: '#E05A1B',
                transform: 'rotate(-16deg)',
                zIndex: 1,
                boxShadow: '0 16px 36px rgba(224, 90, 27, 0.32)',
              }}
            />

            {/* Dashed Concentric Circle Detail */}
            <div
              className="hero-accent-shape"
              style={{
                position: 'absolute',
                bottom: '15px',
                right: '20%',
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                border: '2px dashed rgba(224, 90, 27, 0.6)',
                zIndex: 4,
                pointerEvents: 'none',
              }}
            />

            {/* The Main Organic Masked Image Container */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: 'clamp(400px, 48vw, 540px)',
                borderRadius: '32px 160px 48px 180px',
                overflow: 'hidden',
                boxShadow: '0 24px 60px rgba(15, 23, 42, 0.14), 0 2px 8px rgba(15, 23, 42, 0.08)',
                border: '2px solid #FFFFFF',
                backgroundColor: '#F1F5F9',
                zIndex: 2,
              }}
            >
              {/* CUSTOM HERO IMAGE */}
              <img
                src="/images/hero%20image.jpg"
                alt="Diesamel multi-source energy infrastructure: commercial solar panels, industrial wind turbines, and bulk fuel tanker logistics"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 45%',
                  transition: 'transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />

              {/* Top-Left Verification Tag (Away from bottom-left organic curve) */}
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '24px',
                  padding: '0.45rem 1rem',
                  backgroundColor: 'rgba(10, 15, 29, 0.82)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  zIndex: 4,
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25)',
                }}
              >
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: '#E05A1B',
                    boxShadow: '0 0 8px rgba(224, 90, 27, 0.8)',
                  }}
                />
                <span
                  style={{
                    color: '#FFFFFF',
                    fontSize: '0.74rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                  }}
                >
                  SOLAR • WIND • FUEL LOGISTICS
                </span>
              </div>

              {/* Bottom Infrastructure Card - Offset to clear the 180px bottom-left curve completely */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: 'clamp(5.5rem, 9vw, 9.5rem)',
                  right: '20px',
                  padding: '0.9rem 1.35rem',
                  background: 'rgba(10, 15, 29, 0.90)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '14px',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#FFFFFF',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '0.65rem',
                  zIndex: 3,
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.35)',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      letterSpacing: '0.12em',
                      color: '#FED7AA',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                    }}
                  >
                    TRI-ENERGY INFRASTRUCTURE
                  </div>
                  <div
                    style={{
                      fontSize: 'clamp(0.88rem, 1.1vw, 1.02rem)',
                      fontWeight: 800,
                      marginTop: '0.15rem',
                      color: '#FFFFFF',
                    }}
                  >
                    Solar • Wind • Bulk Petroleum Logistics
                  </div>
                </div>

                <div
                  style={{
                    padding: '0.3rem 0.75rem',
                    backgroundColor: '#E05A1B',
                    borderRadius: '9999px',
                    fontSize: '0.68rem',
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

            {/* Overlapping Deep Terracotta Circle Accent */}
            <div
              className="hero-accent-shape"
              style={{
                position: 'absolute',
                right: '-32px',
                top: '44%',
                transform: 'translateY(-50%)',
                width: 'clamp(130px, 15vw, 190px)',
                height: 'clamp(130px, 15vw, 190px)',
                borderRadius: '50%',
                backgroundColor: '#A13812',
                zIndex: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 16px 36px rgba(161, 56, 18, 0.35)',
              }}
            >
              {/* Row of 6 small outline rings matching design */}
              <div style={{ display: 'flex', gap: '7px' }}>
                {[...Array(6)].map((_, i) => (
                  <span
                    key={i}
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      border: '1.8px solid rgba(255, 255, 255, 0.75)',
                      display: 'inline-block',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Editorial Typography & Conversion CTAs */}
          <div style={{ maxWidth: '640px' }}>
            {/* Brand Eyebrow */}
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
                  boxShadow: '0 0 10px rgba(224, 90, 27, 0.6)',
                }}
              />
              VOLTA REGION SOLAR, WIND & INDUSTRIAL FUEL
            </div>

            {/* Display Headline in Warm Terracotta Orange */}
            <div style={{ marginBottom: '1.85rem' }}>
              <h1
                style={{
                  fontSize: 'clamp(2.7rem, 4.8vw, 4.8rem)',
                  lineHeight: 1.05,
                  fontWeight: 800,
                  letterSpacing: '-0.035em',
                  color: '#D9531E',
                }}
              >
                <span className="hero-line" style={{ display: 'block' }}>
                  Solar, Wind & Fuel.
                </span>
                <span className="hero-line" style={{ display: 'block' }}>
                  The power that’s
                </span>
                <span className="hero-line" style={{ display: 'block' }}>
                  always there.
                </span>
              </h1>
            </div>

            {/* Value Proposition Editorial Copy */}
            <p
              className="hero-subtext"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1.05rem, 1.3vw, 1.25rem)',
                lineHeight: 1.65,
                color: '#475569',
                maxWidth: '580px',
                marginBottom: '2.5rem',
                fontWeight: 400,
              }}
            >
              Direct-to-site bulk diesel distribution, commercial solar arrays, and heavy-duty industrial standby power based in Ho, Ghana. Powering agribusinesses, quarries, processing facilities, and regional institutions across Volta, Oti, and Greater Accra.
            </p>

            {/* Action Buttons */}
            <div
              className="hero-cta-group"
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1.25rem',
                marginBottom: '3rem',
              }}
            >
              <button
                onClick={onExploreOperations}
                className="btn-pill-orange"
                style={{ fontSize: '0.96rem', padding: '1.05rem 2.6rem' }}
              >
                <span>EXPLORE OPERATIONS</span>
                <ArrowUpRight size={18} />
              </button>

              <button
                onClick={onContactDispatch}
                className="btn-secondary"
                style={{ fontSize: '0.96rem', padding: '1.05rem 2.2rem' }}
              >
                <span>CORPORATE DIRECTORY</span>
                <ArrowUpRight size={17} style={{ color: '#E05A1B' }} />
              </button>
            </div>

            {/* Corporate Domain Reference */}
            <div
              className="hero-subtext"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                fontWeight: 700,
                color: '#64748B',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              <span>WWW.DIESAMELENERGY.COM</span>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#E05A1B' }} />
              <span>COMMERCIAL LIGHT INDUSTRIAL ZONE • HO</span>
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
          backgroundColor: '#FFFFFF',
          padding: '1.75rem 0',
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
                  padding: '0.65rem',
                  backgroundColor: '#FFF7ED',
                  borderRadius: '9999px',
                  color: '#E05A1B',
                  border: '1px solid #FFEDD5',
                  boxShadow: '0 1px 3px rgba(224, 90, 27, 0.12)',
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
                  STRATEGIC BASE
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
                  padding: '0.65rem',
                  backgroundColor: '#FFF7ED',
                  borderRadius: '9999px',
                  color: '#E05A1B',
                  border: '1px solid #FFEDD5',
                  boxShadow: '0 1px 3px rgba(224, 90, 27, 0.12)',
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
                  SOLAR &amp; WIND SOLUTIONS
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
                  padding: '0.65rem',
                  backgroundColor: '#FFF7ED',
                  borderRadius: '9999px',
                  color: '#E05A1B',
                  border: '1px solid #FFEDD5',
                  boxShadow: '0 1px 3px rgba(224, 90, 27, 0.12)',
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
                  BULK PETROLEUM FLEET
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
                  padding: '0.65rem',
                  backgroundColor: '#FFF7ED',
                  borderRadius: '9999px',
                  color: '#E05A1B',
                  border: '1px solid #FFEDD5',
                  boxShadow: '0 1px 3px rgba(224, 90, 27, 0.12)',
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
                  HEAVY STANDBY POWER
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
