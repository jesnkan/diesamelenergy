import React from 'react';
import { MapPin, Sliders, Radio, CheckCircle2, FileCheck } from 'lucide-react';

export const WhyDiesamel: React.FC = () => {
  const pillars = [
    {
      title: 'Strategic Ho Foothold',
      subtitle: 'Regional Base of Operations',
      body: 'Stationed in the Commercial Light Industrial Zone of Ho, near the UHAS Road / Kpando Junction corridor. This geographic position eliminates long transit delays from coastal terminals, allowing our fleet to respond swiftly across Volta, Oti, and Greater Accra.',
      highlight: 'Proximity to Central Logistics Corridors',
      icon: MapPin,
    },
    {
      title: 'Certified Product Specifications',
      subtitle: 'Rigorous Verification Protocols',
      body: 'Every tanker payload of Automotive Gas Oil (AGO) and Premium Motor Spirit (PMS) conforms to National Petroleum Authority (NPA) sulfur thresholds and density benchmarks. Deliveries are protected by tamper-evident seals and digital flow-meter certification.',
      highlight: 'Zero-Contamination Custody Transfer',
      icon: FileCheck,
    },
    {
      title: 'Turnkey Plant & Fuel Integration',
      subtitle: 'Unified Hardware & Logistics Chain',
      body: 'Rather than dealing with detached generator rental companies and third-party fuel distributors, Diesamel unites heavy generation assets (20 to 1,500 kVA) with dedicated replenishment SLAs. One accountable partner for continuous power.',
      highlight: 'Single-Source Operational Accountability',
      icon: Sliders,
    },
    {
      title: 'Dedicated Account Management',
      subtitle: 'Guaranteed Product & Tank Security',
      body: 'Every corporate client is assigned a designated regional logistics manager, receiving scheduled delivery dispatch confirmations, batch quality test certificates, and volume meter reconciliation sheets to maintain uninterrupted facility operations.',
      highlight: 'Direct Account Accountability',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="de-section" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
      <div className="de-container">
        
        {/* Header */}
        <div style={{ maxWidth: '840px', marginBottom: '4rem' }}>
          <div className="technical-eyebrow">OPERATIONAL ADVANTAGE</div>
          <h2 style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.4rem)', lineHeight: 1.15, marginBottom: '1.25rem', color: '#0A0F1D' }}>
            Built for Industrial Certainty in the Volta Basin
          </h2>
          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.65 }}>
            Downstream fuel procurement and industrial standby power often fail when fragmented across unverified middle-tier haulers. Diesamel Energy provides an integrated, verifiable operational framework.
          </p>
        </div>

        {/* 2x2 Architectural Grid with Refined Linework & Staggered Scroll Entrance */}
        <div
          className="reveal-stagger-parent"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="reveal-stagger-item card-hover-elevate"
                style={{
                  padding: 'clamp(2.25rem, 3.5vw, 3rem) clamp(1.75rem, 2.5vw, 2.25rem)',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '4px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'default',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem' }}>
                    <div style={{ padding: '0.65rem', backgroundColor: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: '3px', color: '#0A0F1D', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                      <Icon size={22} />
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>
                      PILLAR // 0{idx + 1}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.45rem', marginBottom: '0.45rem', color: '#0A0F1D' }}>
                    {pillar.title}
                  </h3>

                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.25rem', fontWeight: 600 }}>
                    {pillar.subtitle}
                  </div>

                  <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                    {pillar.body}
                  </p>
                </div>

                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                  <CheckCircle2 size={16} style={{ color: '#E05A1B', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: '#0A0F1D', fontWeight: 700 }}>
                    {pillar.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
