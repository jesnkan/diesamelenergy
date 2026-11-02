import React, { useState, useEffect, useRef } from 'react';
import { Navigation } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const RegionalMapSection: React.FC = () => {
  const [activeZone, setActiveZone] = useState<'ho' | 'volta' | 'oti' | 'accra'>('ho');
  const mapSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapSectionRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          '.corridor-line',
          { strokeDasharray: 200, strokeDashoffset: 200, opacity: 0 },
          {
            strokeDashoffset: 0,
            opacity: 1,
            duration: 1.8,
            stagger: 0.25,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: mapSectionRef.current,
              start: 'top 75%',
            },
          }
        );
      }, mapSectionRef);

      return () => ctx.revert();
    }
  }, []);

  const zoneDetails = {
    ho: {
      name: 'Headquarters & Operational Base — Ho',
      status: 'PRIMARY DISPATCH HUB',
      location: 'Commercial Industrial Corridor, near UHAS Road / Kpando Junction, Ho, Volta Region',
      dispatchRadius: 'Immediate Rapid Response Zone (< 1.5 Hours)',
      capabilities: 'Central fleet depot, metered bulk tanker staging, emergency mobile refuelers, generator technical maintenance hub.',
      coordinates: '6°36\'40.1"N, 0°28\'12.4"E',
    },
    volta: {
      name: 'Central & Southern Volta Corridor',
      status: 'CORE LOGISTICS SERVICE CORRIDOR',
      location: 'Covering Kpando, Hohoe, Juapong, Sogakope, and Aflao trade axes',
      dispatchRadius: 'Standard Delivery: 2 to 4 Hours',
      capabilities: 'Scheduled bulk AGO delivery to agribusiness processors, civil infrastructure road contractors, and local institutions.',
      coordinates: 'Volta Basin Regional Grid',
    },
    oti: {
      name: 'Oti Region Extension Corridor',
      status: 'NORTHERN RESOURCE LOGISTICS CORRIDOR',
      location: 'Covering Dambai, Nkwanta, Jasikan, and agricultural hinterlands',
      dispatchRadius: 'Dedicated Scheduled Hauls & Project Contracts',
      capabilities: 'Heavy generator deployments for remote agribusiness, timber processing, and gravel quarry extraction facilities.',
      coordinates: 'Oti Regional Corridor',
    },
    accra: {
      name: 'Greater Accra & Coastal Terminals Axis',
      status: 'TERMINAL INFLOW & COMMERCIAL EXPANSION',
      location: 'Primary Tema Petroleum Storage Depot links connecting to Accra industrial centers',
      dispatchRadius: 'High-Volume Dedicated Road Haulage',
      capabilities: 'Direct bulk uplift from licensed coastal terminals with certified custody transfer seals and digital flow-metering.',
      coordinates: 'Tema–Accra Logistics Axis',
    },
  };

  const current = zoneDetails[activeZone];

  return (
    <section ref={mapSectionRef} id="regional-coverage" className="de-section" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
      <div className="de-container">
        
        {/* Header */}
        <div style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
          <div className="technical-eyebrow">REGIONAL JURISDICTION & LOGISTICS NETWORK</div>
          <h2 style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.4rem)', lineHeight: 1.15, marginBottom: '1.25rem', color: '#0A0F1D' }}>
            Rooted in Ho. Fueling the Volta Basin.
          </h2>
          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.65 }}>
            Headquartered in the commercial industrial corridor of Ho, Diesamel Energy eliminates the logistical disconnect between coastal petroleum terminals and the expanding industrial footprint of eastern Ghana.
          </p>
        </div>

        {/* Map & Corridor Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 0,
            border: '1px solid #E2E8F0',
            borderRadius: '4px',
            backgroundColor: '#FFFFFF',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
            overflow: 'hidden',
          }}
        >
          {/* Custom Architectural Map Canvas (Light Blueprint Scheme) */}
          <div
            style={{
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              backgroundColor: '#F8FAFC',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '480px',
              borderRight: '1px solid #E2E8F0',
            }}
          >
            {/* Top Legend */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: '#64748B', letterSpacing: '0.1em', fontWeight: 600 }}>
                CARTOGRAPHIC LOGISTICS GRID // GHANA EASTERN QUADRANT
              </div>
              <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#94A3B8' }}>
                LAT 6°36'N / LON 0°28'E
              </span>
            </div>

            {/* SVG Cartographic Illustration of Volta, Oti, Accra Corridor */}
            <div style={{ width: '100%', height: '360px', position: 'relative' }}>
              <svg viewBox="0 0 500 420" width="100%" height="100%" style={{ overflow: 'visible' }}>
                <defs>
                  <pattern id="cartoGridLight2" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E2E8F0" strokeWidth="1" />
                  </pattern>
                </defs>

                <rect width="500" height="420" fill="url(#cartoGridLight2)" />

                {/* Lake Volta Stylized Waterbody Contour */}
                <path
                  d="M160,40 Q170,100 180,160 Q170,220 200,280 Q210,310 190,350 L170,360 Q150,310 140,240 Q130,150 145,50 Z"
                  fill="#E2E8F0"
                  stroke="#CBD5E1"
                  strokeWidth="1.2"
                />
                <text x="145" y="190" fill="#94A3B8" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="0.2em" transform="rotate(-65 145 190)">
                  LAKE VOLTA
                </text>

                {/* Regional Outlines */}
                <path
                  d="M170,40 L340,30 L350,140 L270,160 L180,140 Z"
                  fill={activeZone === 'oti' ? 'rgba(2, 132, 199, 0.08)' : '#FFFFFF'}
                  stroke="#94A3B8"
                  strokeWidth="1.2"
                  strokeDasharray="4 3"
                />

                <path
                  d="M180,140 L270,160 L350,140 L380,260 L360,360 L240,380 L190,350 Q210,310 200,280 Q170,220 180,140 Z"
                  fill={activeZone === 'volta' || activeZone === 'ho' ? 'rgba(2, 132, 199, 0.05)' : '#FFFFFF'}
                  stroke="#64748B"
                  strokeWidth="1.5"
                />

                <path
                  d="M190,350 L240,380 L220,410 L130,410 L150,370 Z"
                  fill={activeZone === 'accra' ? 'rgba(2, 132, 199, 0.08)' : '#FFFFFF'}
                  stroke="#94A3B8"
                  strokeWidth="1.2"
                />

                {/* Animated Corridor Lines with GSAP */}
                <line className="corridor-line" x1="170" y1="390" x2="280" y2="280" stroke="#0F172A" strokeWidth="2.2" strokeDasharray="4 4" />
                <line className="corridor-line" x1="280" y1="280" x2="260" y2="200" stroke="#0F172A" strokeWidth="2" />
                <line className="corridor-line" x1="280" y1="280" x2="240" y2="90" stroke="#0F172A" strokeWidth="1.8" strokeDasharray="4 4" />
                <line className="corridor-line" x1="280" y1="280" x2="350" y2="350" stroke="#0F172A" strokeWidth="1.8" />

                {/* NODE: Dambai / Nkwanta (Oti) */}
                <circle cx="240" cy="90" r="4.5" fill="#0A0F1D" />
                <text x="250" y="93" fill="#0A0F1D" fontSize="10" fontFamily="var(--font-mono)" fontWeight="bold">
                  Dambai (Oti)
                </text>

                {/* NODE: Hohoe */}
                <circle cx="260" cy="200" r="4.5" fill="#0A0F1D" />
                <text x="270" y="203" fill="#0A0F1D" fontSize="10" fontFamily="var(--font-mono)" fontWeight="bold">
                  Hohoe / Kpando
                </text>

                {/* NODE: Tema Industrial Harbour & Depot */}
                <circle cx="170" cy="390" r="5" fill="#0A0F1D" />
                <text x="75" y="394" fill="#0A0F1D" fontSize="10" fontFamily="var(--font-mono)" fontWeight="bold">
                  Tema Port / Storage
                </text>

                {/* NODE: Aflao Cross-Border */}
                <circle cx="350" cy="350" r="4.5" fill="#0A0F1D" />
                <text x="360" y="354" fill="#0A0F1D" fontSize="10" fontFamily="var(--font-mono)" fontWeight="bold">
                  Aflao Border
                </text>

                {/* PRIMARY HEADQUARTERS PIN: HO WITH ANIMATED PULSE */}
                <g transform="translate(280, 280)">
                  <circle cx="0" cy="0" r="26" fill="none" stroke="rgba(2, 132, 199, 0.25)" strokeWidth="1.5">
                    <animate attributeName="r" values="16;32;16" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8;0;0.8" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="0" cy="0" r="14" fill="none" stroke="#E05A1B" strokeWidth="2" />
                  <circle cx="0" cy="0" r="6" fill="#0A0F1D" />
                  <circle cx="0" cy="0" r="2" fill="#FFFFFF" />

                  {/* Marker label */}
                  <rect x="14" y="-18" width="140" height="34" rx="3" fill="#FFFFFF" stroke="#0A0F1D" strokeWidth="1.5" filter="drop-shadow(0 2px 5px rgba(0,0,0,0.1))" />
                  <text x="22" y="-3" fill="#0A0F1D" fontSize="10" fontWeight="bold" fontFamily="var(--font-sans)">
                    HO HEADQUARTERS
                  </text>
                  <text x="22" y="10" fill="#64748B" fontSize="8" fontFamily="var(--font-mono)" fontWeight="bold">
                    DIESAMEL BASE OF OPS
                  </text>
                </g>
              </svg>
            </div>

            {/* Map Footnote */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', borderTop: '1px solid #E2E8F0', paddingTop: '0.85rem' }}>
              <Navigation size={15} style={{ color: '#E05A1B' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: '#64748B' }}>
                Live fleet GPS tracking & dispatch coordination enabled on all corridors.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Regional Corridor Selection */}
          <div style={{ padding: 'clamp(2rem, 3.5vw, 3rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#FFFFFF' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#64748B', letterSpacing: '0.1em', fontWeight: 700, marginBottom: '1rem' }}>
                SELECT OPERATIONAL CORRIDOR
              </div>

              {/* Corridor Selector Buttons */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2rem' }}>
                <button
                  onClick={() => setActiveZone('ho')}
                  style={{
                    padding: '0.85rem 1rem',
                    textAlign: 'left',
                    backgroundColor: activeZone === 'ho' ? '#0A0F1D' : '#F8FAFC',
                    border: activeZone === 'ho' ? '1px solid #0A0F1D' : '1px solid #E2E8F0',
                    color: activeZone === 'ho' ? '#FFFFFF' : '#0A0F1D',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    borderRadius: '3px',
                    transition: 'all 0.2s ease',
                  }}
                >
                  01. Ho Headquarters
                </button>

                <button
                  onClick={() => setActiveZone('volta')}
                  style={{
                    padding: '0.85rem 1rem',
                    textAlign: 'left',
                    backgroundColor: activeZone === 'volta' ? '#0A0F1D' : '#F8FAFC',
                    border: activeZone === 'volta' ? '1px solid #0A0F1D' : '1px solid #E2E8F0',
                    color: activeZone === 'volta' ? '#FFFFFF' : '#0A0F1D',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    borderRadius: '3px',
                    transition: 'all 0.2s ease',
                  }}
                >
                  02. Central Volta Axis
                </button>

                <button
                  onClick={() => setActiveZone('oti')}
                  style={{
                    padding: '0.85rem 1rem',
                    textAlign: 'left',
                    backgroundColor: activeZone === 'oti' ? '#0A0F1D' : '#F8FAFC',
                    border: activeZone === 'oti' ? '1px solid #0A0F1D' : '1px solid #E2E8F0',
                    color: activeZone === 'oti' ? '#FFFFFF' : '#0A0F1D',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    borderRadius: '3px',
                    transition: 'all 0.2s ease',
                  }}
                >
                  03. Oti Region Corridor
                </button>

                <button
                  onClick={() => setActiveZone('accra')}
                  style={{
                    padding: '0.85rem 1rem',
                    textAlign: 'left',
                    backgroundColor: activeZone === 'accra' ? '#0A0F1D' : '#F8FAFC',
                    border: activeZone === 'accra' ? '1px solid #0A0F1D' : '1px solid #E2E8F0',
                    color: activeZone === 'accra' ? '#FFFFFF' : '#0A0F1D',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    borderRadius: '3px',
                    transition: 'all 0.2s ease',
                  }}
                >
                  04. Tema/Accra Inflow
                </button>
              </div>

              {/* Active Zone Detail Card */}
              <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '3px', padding: '1.75rem', marginBottom: '2rem' }}>
                <div style={{ display: 'inline-block', padding: '0.25rem 0.65rem', backgroundColor: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: '2px', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#E05A1B', fontWeight: 700, marginBottom: '0.85rem' }}>
                  {current.status}
                </div>

                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.65rem', color: '#0A0F1D' }}>
                  {current.name}
                </h3>

                <div style={{ fontSize: '0.92rem', color: '#475569', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                  {current.location}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', borderTop: '1px solid #E2E8F0', paddingTop: '1.25rem' }}>
                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 600 }}>
                      Dispatch Latency / Coverage
                    </span>
                    <div style={{ fontSize: '0.95rem', color: '#0A0F1D', fontWeight: 700 }}>
                      {current.dispatchRadius}
                    </div>
                  </div>

                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 600 }}>
                      Logistical Scope
                    </span>
                    <div style={{ fontSize: '0.92rem', color: '#334155', lineHeight: 1.5, marginTop: '0.2rem' }}>
                      {current.capabilities}
                    </div>
                  </div>

                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 600 }}>
                      Geographic Anchor
                    </span>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#0A0F1D', fontWeight: 600 }}>
                      {current.coordinates}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Verification Disclaimer */}
            <div style={{ padding: '0.9rem 1.1rem', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '3px', fontSize: '0.76rem', color: '#64748B', fontFamily: 'var(--font-mono)' }}>
              Note: Regional coverage represents active road transport delivery corridors. Physical headquarters and fleet staging depot are centralized in Ho, Volta Region.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
