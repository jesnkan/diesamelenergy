import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Zap, Fuel, ShieldCheck, Gauge, Clock, Radio, CheckCircle2 } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ServicesProps {
  onContactDispatch?: (serviceType?: string) => void;
}

export const ServicesShowcase: React.FC<ServicesProps> = ({ onContactDispatch }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        const blocks = document.querySelectorAll('.service-block');
        blocks.forEach((block) => {
          gsap.fromTo(
            block,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.95,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: block,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        });
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section ref={sectionRef} id="services" className="de-section anim-reveal" style={{ backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
      <div className="de-container">
        
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '4.5rem' }}>
          <div className="technical-eyebrow">CORE CAPABILITIES & INFRASTRUCTURE</div>
          <h2 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.8rem)', lineHeight: 1.1, marginBottom: '1.5rem', color: '#0A0F1D' }}>
            Energy infrastructure for operations that cannot stop.
          </h2>
          <p style={{ color: '#475569', fontSize: '1.15rem', lineHeight: 1.65 }}>
            Diesamel Energy delivers engineered continuity across the Volta Basin through dedicated downstream bulk petroleum logistics, certified on-site storage, and synchronized industrial generator systems.
          </p>
        </div>

        {/* Bespoke Editorial Alternating Layout */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(3.5rem, 6vw, 6rem)' }}>
          
          {/* SERVICE 01: Bulk Fuel Hauling & Distribution (Visual Anchor: Authentic Scania Road Tanker) */}
          <div
            className="service-block"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: 'clamp(2rem, 4vw, 4.5rem)',
              alignItems: 'center',
              borderBottom: '1px solid #E2E8F0',
              paddingBottom: 'clamp(2.5rem, 4vw, 4.5rem)',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                <span className="editorial-num">CAPABILITY 01</span>
                <span style={{ height: '1px', width: '32px', backgroundColor: '#CBD5E1' }}></span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 600 }}>
                  Petroleum Logistics
                </span>
              </div>

              <h3 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.5rem)', marginBottom: '1.25rem', color: '#0A0F1D' }}>
                Bulk Fuel Hauling & Distribution
              </h3>

              <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                Dedicated multi-compartment cylindrical road tanker transport of Automotive Gas Oil (AGO) and Premium Motor Spirit (PMS) under strict custody-transfer protocols. Cylindrical road tankers prevent liquid slosh, vapor pressure imbalances, and contamination from terminal uplift to destination dip-metering.
              </p>

              {/* Technical Specifications Matrix */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ padding: '1rem', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '3px', boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 600 }}>
                    Route Security
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0A0F1D', marginTop: '0.2rem' }}>
                    Dual-Band GPS Tracking
                  </div>
                </div>
                <div style={{ padding: '1rem', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '3px', boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 600 }}>
                    Custody Security
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0A0F1D', marginTop: '0.2rem' }}>
                    Serialized Tamper Seals
                  </div>
                </div>
                <div style={{ padding: '1rem', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '3px', boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 600 }}>
                    Tanker Configuration
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0A0F1D', marginTop: '0.2rem' }}>
                    Articulated Petroleum Bowsers
                  </div>
                </div>
                <div style={{ padding: '1rem', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '3px', boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 600 }}>
                    Regulatory Standard
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0A0F1D', marginTop: '0.2rem' }}>
                    National Petroleum Authority (NPA)
                  </div>
                </div>
              </div>

              <button
                onClick={() => onContactDispatch?.('bulk-fuel')}
                className="btn-outline-platinum"
              >
                <span>Inquire on Bulk Fuel Logistics</span>
                <ArrowUpRight size={15} />
              </button>
            </div>

            {/* Photographic Feature: Authentic Cylindrical Petroleum Road Tanker */}
            <div className="cinematic-reveal-wrap" style={{ borderRadius: '4px', height: '100%', minHeight: '380px', border: '1px solid #CBD5E1', boxShadow: '0 8px 30px rgba(0,0,0,0.06)' }}>
              <img
                src="/images/real-fuel-tanker.jpg"
                alt="Diesamel Bulk Fuel Hauling Tanker Trailer on Highway"
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '1.25rem',
                background: 'linear-gradient(0deg, rgba(10, 15, 29, 0.9) 0%, transparent 100%)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: '#FFFFFF',
              }}>
                PRIMARY FLEET: ARTICULATED BULK PETROLEUM FUEL TANKER // VOLTA CORRIDOR
              </div>
            </div>
          </div>

          {/* SERVICE 02: Industrial & Standby Generator Power (Architectural Switchgear Blueprint) */}
          <div
            className="service-block"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: 'clamp(2rem, 4vw, 4.5rem)',
              alignItems: 'center',
              borderBottom: '1px solid #E2E8F0',
              paddingBottom: 'clamp(2.5rem, 4vw, 4.5rem)',
            }}
          >
            {/* Technical Specification Panel */}
            <div
              className="card-hover-elevate"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '4px',
                padding: '2.5rem',
                border: '1px solid #E2E8F0',
                boxShadow: '0 8px 30px rgba(0,0,0,0.05)',
                order: 2,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#64748B', fontWeight: 700 }}>
                  POWER ARCHITECTURE SPECIFICATION
                </span>
                <span style={{ padding: '0.2rem 0.6rem', backgroundColor: '#FFF7ED', border: '1px solid #FFEDD5', borderRadius: '3px', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#E05A1B', fontWeight: 700 }}>
                  ATS TRANSFER &lt; 10s
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ padding: '1rem', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '3px' }}>
                  <div style={{ fontSize: '0.72rem', color: '#64748B', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>CAPACITY ENVELOPE</div>
                  <div style={{ fontSize: '0.96rem', fontWeight: 700, color: '#0A0F1D', marginTop: '0.2rem' }}>20 kVA to 1,500 kVA continuous prime & standby ratings</div>
                </div>

                <div style={{ padding: '1rem', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '3px' }}>
                  <div style={{ fontSize: '0.72rem', color: '#64748B', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>BUSBAR SYNCHRONIZATION</div>
                  <div style={{ fontSize: '0.96rem', fontWeight: 700, color: '#0A0F1D', marginTop: '0.2rem' }}>Automated switchgear transfer with zero critical circuit drop</div>
                </div>

                <div style={{ padding: '1rem', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '3px' }}>
                  <div style={{ fontSize: '0.72rem', color: '#64748B', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>MAINTENANCE REGIME</div>
                  <div style={{ fontSize: '0.96rem', fontWeight: 700, color: '#0A0F1D', marginTop: '0.2rem' }}>250-hour scheduled preventive servicing and load testing</div>
                </div>
              </div>
            </div>

            <div style={{ order: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                <span className="editorial-num">CAPABILITY 02</span>
                <span style={{ height: '1px', width: '32px', backgroundColor: '#CBD5E1' }}></span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 600 }}>
                  Standby Power Systems
                </span>
              </div>

              <h3 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.5rem)', marginBottom: '1.25rem', color: '#0A0F1D' }}>
                Industrial & Standby Generator Power
              </h3>

              <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                Heavy-duty prime and standby generator solutions engineered for severe continuous duty. We provide equipment leasing, turnkey civil and electrical installation, Automatic Transfer Switch (ATS) integration, and strict preventive maintenance schedules.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ padding: '1rem', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '3px', boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 600 }}>
                    Output Spectrum
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0A0F1D', marginTop: '0.2rem' }}>
                    20 kVA to 1,500 kVA
                  </div>
                </div>
                <div style={{ padding: '1rem', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '3px', boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 600 }}>
                    Grid Isolation
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0A0F1D', marginTop: '0.2rem' }}>
                    Synchronized ATS Panels
                  </div>
                </div>
              </div>

              <button
                onClick={() => onContactDispatch?.('generator-power')}
                className="btn-outline-platinum"
              >
                <span>Inquire on Power Systems & ATS Specs</span>
                <ArrowUpRight size={15} />
              </button>
            </div>
          </div>

          {/* SERVICE 03: On-Site Fuel Infrastructure & Storage (Technical Double-Wall Blueprint) */}
          <div
            className="service-block"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: 'clamp(2rem, 4vw, 4.5rem)',
              alignItems: 'center',
              borderBottom: '1px solid #E2E8F0',
              paddingBottom: 'clamp(2.5rem, 4vw, 4.5rem)',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                <span className="editorial-num">CAPABILITY 03</span>
                <span style={{ height: '1px', width: '32px', backgroundColor: '#CBD5E1' }}></span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 600 }}>
                  Storage Infrastructure
                </span>
              </div>

              <h3 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.5rem)', marginBottom: '1.25rem', color: '#0A0F1D' }}>
                On-Site Fuel Infrastructure & Storage
              </h3>

              <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                Engineering and installation of above-ground, self-bunded double-walled steel fuel storage units. These self-contained units eliminate civil bunding requirements, provide 110% environmental containment, and incorporate high-flow digital dispensing pumps.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ padding: '1rem', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '3px', boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 600 }}>
                    Tank Design
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0A0F1D', marginTop: '0.2rem' }}>
                    Self-Bunded / Double-Wall
                  </div>
                </div>
                <div style={{ padding: '1rem', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '3px', boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 600 }}>
                    Regulatory Conformance
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0A0F1D', marginTop: '0.2rem' }}>
                    EPA & NPA Engineering Codes
                  </div>
                </div>
              </div>

              <button
                onClick={() => onContactDispatch?.('storage-infrastructure')}
                className="btn-outline-platinum"
              >
                <span>Inquire on Storage & Tank Infrastructure</span>
                <ArrowUpRight size={15} />
              </button>
            </div>

            {/* Technical Blueprint Panel (Replaces Image) */}
            <div
              className="card-hover-elevate"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '4px',
                padding: '2.5rem',
                border: '1px solid #E2E8F0',
                boxShadow: '0 8px 30px rgba(0,0,0,0.05)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#64748B', fontWeight: 700 }}>
                  STORAGE ARCHITECTURE SPECIFICATION
                </span>
                <span style={{ padding: '0.2rem 0.6rem', backgroundColor: '#FFF7ED', border: '1px solid #FFEDD5', borderRadius: '3px', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#E05A1B', fontWeight: 700 }}>
                  110% OVERFILL CONTAINMENT
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ padding: '1rem', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '3px' }}>
                  <div style={{ fontSize: '0.72rem', color: '#64748B', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>CONTAINMENT GEOMETRY</div>
                  <div style={{ fontSize: '0.96rem', fontWeight: 700, color: '#0A0F1D', marginTop: '0.2rem' }}>Heavy-gauge dual-layer cylindrical steel hull</div>
                </div>

                <div style={{ padding: '1rem', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '3px' }}>
                  <div style={{ fontSize: '0.72rem', color: '#64748B', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>HIGH-SPEED DISPENSE</div>
                  <div style={{ fontSize: '0.96rem', fontWeight: 700, color: '#0A0F1D', marginTop: '0.2rem' }}>Up to 300 Litres/min calibrated fuel pump manifold</div>
                </div>

                <div style={{ padding: '1rem', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '3px' }}>
                  <div style={{ fontSize: '0.72rem', color: '#64748B', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>INVENTORY GAUGING</div>
                  <div style={{ fontSize: '0.96rem', fontWeight: 700, color: '#0A0F1D', marginTop: '0.2rem' }}>Continuous automated tank gauge (ATG) with leak alerts</div>
                </div>
              </div>
            </div>
          </div>

          {/* SERVICE 04: Emergency Fuel Dispatch & Mobile Refueling */}
          <div
            className="service-block"
            style={{
              padding: 'clamp(2rem, 3.5vw, 3.5rem)',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '4px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                <span className="editorial-num">CAPABILITY 04</span>
                <span style={{ height: '1px', width: '32px', backgroundColor: '#CBD5E1' }}></span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 600 }}>
                  Critical Logistics
                </span>
              </div>

              <h3 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.5rem)', marginBottom: '1.25rem', color: '#0A0F1D' }}>
                Emergency Fuel Dispatch & Mobile Refueling
              </h3>

              <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '850px' }}>
                Rapid-response delivery directly into machinery, generator day-tanks, and equipment fleets operating at remote job sites, civil road contracts, or processing facilities. All-terrain mobile tankers eliminate downtime caused by remote logistics constraints.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ padding: '1rem', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '3px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 600 }}>
                    Emergency SLA
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0A0F1D', marginTop: '0.2rem' }}>
                    &lt; 4 Hours (Core Radius)
                  </div>
                </div>

                <div style={{ padding: '1rem', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '3px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 600 }}>
                    Dispense Method
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0A0F1D', marginTop: '0.2rem' }}>
                    Metered Direct-to-Machine
                  </div>
                </div>

                <div style={{ padding: '1rem', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '3px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 600 }}>
                    Dispatch Fleet
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0A0F1D', marginTop: '0.2rem' }}>
                    All-Terrain 4x4 Mobile Bowsers
                  </div>
                </div>

                <div style={{ padding: '1rem', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '3px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 600 }}>
                    Operational Base
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0A0F1D', marginTop: '0.2rem' }}>
                    Commercial Industrial Zone, Ho Hub
                  </div>
                </div>
              </div>

              <button
                onClick={() => onContactDispatch?.('emergency-dispatch')}
                className="btn-outline-platinum"
              >
                <span>View Emergency Dispatch Protocols</span>
                <ArrowUpRight size={15} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
