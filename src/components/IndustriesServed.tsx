import React, { useState } from 'react';
import { ArrowRight, Factory, HardHat, Mountain, Building2, ShieldCheck, Gauge, CheckCircle2 } from 'lucide-react';

interface Industry {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  dutyCycle: string;
  fuelDemandProfile: string;
  powerRequirement: string;
  criticalFactor: string;
  slaGuarantee: string;
  icon: React.ElementType;
}

const industries: Industry[] = [
  {
    id: 'agribusiness',
    name: 'Agribusiness & Processing',
    category: 'COMMERCIAL CROPS & MILLS',
    tagline: 'Continuous thermal and electrical supply for uninterrupted harvests.',
    description:
      'Commercial cassava processing facilities, rice milling complexes, and oil palm processing plants along the Volta Basin cannot afford thermal or electrical shut-downs during seasonal harvest peaks. Diesamel supplies scheduled bulk AGO deliveries and heavy prime power setups.',
    dutyCycle: '24/7 High-Load Harvest Surge Cycles (Continuous Operation)',
    fuelDemandProfile: '10,000L – 40,000L weekly bulk supply cycles during harvest peaks.',
    powerRequirement: '250 kVA to 800 kVA synchronized industrial generator systems.',
    criticalFactor: 'Zero crop spoilage from sudden utility electrical dropouts.',
    slaGuarantee: 'Guaranteed 24h emergency fuel replenishment top-off SLA.',
    icon: Factory,
  },
  {
    id: 'civil',
    name: 'Civil Engineering & Infrastructure',
    category: 'HIGHWAYS & STRUCTURAL WORKS',
    tagline: 'Direct mobile refueling for machines operating far from retail stations.',
    description:
      'Contractors executing road paving, bridge construction, drainage conduits, and regional infrastructure projects require dependable fuel deliveries delivered directly into heavy machinery tanks along active alignment corridors.',
    dutyCycle: '12-16 Hour Daily Active Alignment Construction Cycles',
    fuelDemandProfile: 'Daily direct-to-tank mobile dispenser refueling for earthmoving fleets.',
    powerRequirement: '50 kVA to 200 kVA towable and stationary base camp generators.',
    criticalFactor: 'Zero downtime for heavy asphalt plants, graders, and rollers.',
    slaGuarantee: '< 4 Hour direct jobsite mobile dispenser turnaround.',
    icon: HardHat,
  },
  {
    id: 'quarries',
    name: 'Quarries & Heavy Mining',
    category: 'EXTRACTION & AGGREGATES',
    tagline: 'High-torque generation and high-volume diesel for crushing operations.',
    description:
      'Aggregates, granite quarries, and commercial sand winners run high-vibration rock crushers, screens, excavators, and rigid dump trucks. Diesamel supplies heavy-duty self-bunded storage depots on site and continuous fuel delivery.',
    dutyCycle: 'Continuous High-Torque Mechanical Crushing Cycles',
    fuelDemandProfile: '15,000L – 50,000L static double-walled on-site reserve tanks.',
    powerRequirement: '500 kVA to 1,500 kVA heavy industrial generator installations.',
    criticalFactor: 'Maintaining peak torque throughput for multi-stage cone crushers.',
    slaGuarantee: 'Scheduled replenishment triggered automatically at 30% reserve threshold.',
    icon: Mountain,
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Regional Hospitality',
    category: 'INSTITUTIONS & COLD-STORAGE',
    tagline: 'Absolute power assurance where lives and perishable inventories depend on it.',
    description:
      'Hospitals, specialized health centers, tertiary university campuses, hotels, and cold-storage operations require seamless standby transition. We implement ATS switchgear paired with guaranteed automatic fuel replenishment contracts.',
    dutyCycle: 'Instantaneous Automated Standby Duty (Zero Tolerance)',
    fuelDemandProfile: 'Priority replenishment triggered automatically by reserve tank benchmarks.',
    powerRequirement: '100 kVA to 650 kVA standby generators with < 10 second ATS cutover.',
    criticalFactor: 'Preservation of surgical suites, laboratory blood banks, and cold food chains.',
    slaGuarantee: 'Priority 1 Emergency Dispatch SLA with 24/7 dedicated telephone desk.',
    icon: Building2,
  },
];

export const IndustriesServed: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);

  return (
    <section id="industries" className="de-section anim-reveal" style={{ backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
      <div className="de-container">
        
        {/* Header */}
        <div style={{ maxWidth: '820px', marginBottom: '4rem' }}>
          <div className="technical-eyebrow">SECTOR-SPECIFIC ENERGY OPERATIONS</div>
          <h2 style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.4rem)', lineHeight: 1.15, marginBottom: '1.25rem', color: '#0A0F1D' }}>
            Engineered Fuel & Power for Critical Industries
          </h2>
          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.65 }}>
            Different industrial duty cycles demand tailored delivery cadences, reserve tank capacities, and generation envelopes. Explore how Diesamel Energy sustains mission-critical operations across the Volta Basin.
          </p>
        </div>

        {/* Sector Dashboard Layout (Clean Architectural Architecture Without Stock Clutter) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '4px',
            overflow: 'hidden',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
          }}
        >
          {/* Left Column: Sector Selector List */}
          <div style={{ borderRight: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column' }}>
            {industries.map((ind, idx) => {
              const isSelected = ind.id === selectedIndustry.id;
              const Icon = ind.icon;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind)}
                  style={{
                    backgroundColor: isSelected ? '#FFFFFF' : '#F8FAFC',
                    padding: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                    border: 'none',
                    borderBottom: idx !== industries.length - 1 ? '1px solid #E2E8F0' : 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.25rem',
                    transition: 'all 0.25s ease',
                    position: 'relative',
                  }}
                >
                  {/* Active Indicator Bar */}
                  {isSelected && (
                    <div
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: '4px',
                        backgroundColor: '#E05A1B',
                        boxShadow: '0 0 10px rgba(2, 132, 199, 0.6)',
                      }}
                    />
                  )}

                  <div
                    style={{
                      padding: '0.65rem',
                      borderRadius: '3px',
                      backgroundColor: isSelected ? '#0A0F1D' : '#FFFFFF',
                      border: '1px solid #CBD5E1',
                      color: isSelected ? '#FFFFFF' : '#0A0F1D',
                      flexShrink: 0,
                      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <Icon size={20} />
                  </div>

                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: isSelected ? '#E05A1B' : '#64748B', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem', fontWeight: 600 }}>
                      {ind.category}
                    </div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.18rem', fontWeight: 700, color: '#0A0F1D', marginBottom: '0.35rem' }}>
                      {ind.name}
                    </div>
                    <div style={{ color: '#475569', fontSize: '0.88rem', lineHeight: 1.45 }}>
                      {ind.tagline}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Industrial Technical Specification Dashboard */}
          <div
            style={{
              padding: 'clamp(2.5rem, 4vw, 3.5rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundColor: '#FFFFFF',
            }}
          >
            <div>
              {/* Header Badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '1rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: '#64748B', fontWeight: 600 }}>
                  OPERATIONAL REQUIREMENT SPECIFICATION
                </div>
                <div style={{ padding: '0.25rem 0.65rem', backgroundColor: '#F1F5F9', border: '1px solid #CBD5E1', borderRadius: '3px', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#0A0F1D', fontWeight: 700 }}>
                  {selectedIndustry.category}
                </div>
              </div>

              <h3 style={{ fontSize: '1.85rem', color: '#0A0F1D', marginBottom: '1rem' }}>
                {selectedIndustry.name}
              </h3>

              <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                {selectedIndustry.description}
              </p>

              {/* Technical Specifications Matrix */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                
                {/* Duty Cycle Card */}
                <div style={{ padding: '1.2rem', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '3px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 700 }}>
                    <Gauge size={14} style={{ color: '#E05A1B' }} />
                    <span>Duty Cycle Profile</span>
                  </div>
                  <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#0A0F1D', marginTop: '0.35rem' }}>
                    {selectedIndustry.dutyCycle}
                  </div>
                </div>

                {/* Fuel & Power Matrix */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div style={{ padding: '1.2rem', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '3px' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 700 }}>
                      Bulk Fuel Allocation
                    </div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#0A0F1D', marginTop: '0.35rem', lineHeight: 1.5 }}>
                      {selectedIndustry.fuelDemandProfile}
                    </div>
                  </div>

                  <div style={{ padding: '1.2rem', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '3px' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 700 }}>
                      Standby Generation Envelope
                    </div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#0A0F1D', marginTop: '0.35rem', lineHeight: 1.5 }}>
                      {selectedIndustry.powerRequirement}
                    </div>
                  </div>
                </div>

                {/* Critical Contingency Guarantee */}
                <div style={{ padding: '1.2rem', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '3px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 700 }}>
                    <CheckCircle2 size={14} style={{ color: '#16a34a' }} />
                    <span>Service Level Agreement (SLA)</span>
                  </div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#16a34a', marginTop: '0.35rem' }}>
                    {selectedIndustry.slaGuarantee}
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Actions */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #E2E8F0', paddingTop: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#64748B' }}>
                <ShieldCheck size={16} style={{ color: '#E05A1B' }} />
                <span>Custom Site Storage & Metering Available</span>
              </div>

              <button
                onClick={() => {
                  const el = document.getElementById('quote-engine');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary"
                style={{ fontSize: '0.88rem', padding: '0.7rem 1.4rem' }}
              >
                <span>Request {selectedIndustry.name} Quote</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
