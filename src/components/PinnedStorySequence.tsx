import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Zap, Fuel, Building2, Truck, Award } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Stage {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  standards: { title: string; desc: string }[];
  specs: { label: string; value: string }[];
}

const stages: Stage[] = [
  {
    id: 'hauling',
    number: '01',
    title: 'Bulk Fuel Hauling & Distribution',
    subtitle: 'Primary Terminal to Destination Site Logistics',
    description:
      'High-capacity articulated road tankers transport certified Automotive Gas Oil (AGO) and Premium Motor Spirit (PMS) under strict custody-transfer protocols. Cylindrical multi-compartment fuel trailers ensure zero vapor loss, liquid stability during transit, and verified batch delivery directly to commercial depots and industrial facilities.',
    tag: 'LOGISTICS INFRASTRUCTURE',
    standards: [
      { title: 'Tanker Fleet', desc: 'Heavy articulated cylindrical liquid petroleum road tankers' },
      { title: 'Custody Transfer', desc: 'Serialized tamper-evident bolt seals verified at discharge' },
      { title: 'Product Purity', desc: 'AGO Low-Sulfur (<50 ppm) verified by NPA laboratory benchmarks' },
      { title: 'Corridor Routing', desc: 'Scheduled transport connecting coastal terminals to Volta & Oti hubs' },
    ],
    specs: [
      { label: 'Trailer Capacity', value: '13,500L – 45,000L' },
      { label: 'Product Delivered', value: 'AGO (Diesel) & PMS (Petrol)' },
      { label: 'Discharge Meters', value: 'Calibrated Weights & Measures' },
      { label: 'Regulatory Code', value: 'National Petroleum Authority (NPA)' },
    ],
  },
  {
    id: 'storage',
    number: '02',
    title: 'On-Site Storage & Tank Farms',
    subtitle: 'Zero-Spill Double-Walled Fuel Reserves',
    description:
      'Turnkey engineering, civil pad installation, and commissioning of above-ground self-bunded double-walled steel storage systems. These self-contained modular tanks provide 110% environmental containment, eliminate civil bund wall requirements, and incorporate high-flow digital dispensing pumps.',
    tag: 'ASSET INTEGRITY',
    standards: [
      { title: 'Hull Engineering', desc: 'Heavy-gauge double-walled steel containment' },
      { title: 'Overfill Protection', desc: 'Automated 95% high-level shutoff float valves' },
      { title: 'Dispense Velocity', desc: 'Up to 300 L/min high-throughput calibrated pumps' },
      { title: 'Environmental Code', desc: '110% total bund containment meeting EPA standards' },
    ],
    specs: [
      { label: 'Tank Architecture', value: 'Self-Bunded Double-Walled Steel' },
      { label: 'Modular Volumes', value: '10,000L – 60,000L Units' },
      { label: 'Dispense Flow Rate', value: 'Up to 300 L/min' },
      { label: 'Environmental Conformance', value: 'EPA Ghana & NPA Compliant' },
    ],
  },
  {
    id: 'power',
    number: '03',
    title: 'Industrial & Standby Generator Power',
    subtitle: 'Synchronized Prime & Standby Systems (20 - 1500 kVA)',
    description:
      'Heavy-duty industrial generator sets paired with microprocessor Automatic Transfer Switchgear (ATS). Seamlessly steps into prime power or standby duty cycles within seconds of an electrical grid failure, backed by guaranteed fuel replenishment SLAs to eliminate facility shut-downs.',
    tag: 'POWER CONTINUITY',
    standards: [
      { title: 'Capacity Spectrum', desc: '20 kVA to 1,500 kVA prime-rated generator systems' },
      { title: 'Automatic Transfer', desc: '< 10 Seconds automated grid-to-generator switchover' },
      { title: 'Fuel Top-Off SLA', desc: 'Scheduled tank replenishment tied to running hour duty cycles' },
      { title: 'Maintenance Service', desc: '250-hour scheduled preventive lube, filter, and mechanical checks' },
    ],
    specs: [
      { label: 'Power Envelope', value: '20 kVA to 1,500 kVA' },
      { label: 'Switchover Speed', value: '< 10 Seconds (ATS)' },
      { label: 'Engine Standards', value: 'Heavy Industrial Prime Rating' },
      { label: 'Maintenance Interval', value: '250h Preventive Service' },
    ],
  },
  {
    id: 'emergency',
    number: '04',
    title: 'Emergency Dispatch & Mobile Refueling',
    subtitle: 'Direct-to-Machine Refueling on Remote Corridors',
    description:
      'Purpose-built all-terrain mobile tanker bowsers deliver calibrated, metered fuel directly into excavators, crushers, haul trucks, and quarry machinery stationed far from retail stations, preventing unproductive machine dead-heading and project bottlenecks.',
    tag: 'RAPID SITE RESPONSE',
    standards: [
      { title: 'Response SLA', desc: '< 4 Hours dispatch turnaround within Volta Hub radius' },
      { title: 'Direct Refueling', desc: 'Metered fuel pumped directly into plant & equipment fuel tanks' },
      { title: 'Off-Road Fleet', desc: 'High-clearance all-terrain 4x4 and medium-rigid service tankers' },
      { title: 'Dispense Receipts', desc: 'Weights & Measures calibrated digital flow registration' },
    ],
    specs: [
      { label: 'Dispatch Radius', value: '< 4 Hours (Core Corridor)' },
      { label: 'Dispense Precision', value: 'Weights & Measures Class' },
      { label: 'Equipment Supported', value: 'CAT / Komatsu / Heavy Plant' },
      { label: 'Service Coverage', value: 'Quarries, Roads & Plant Sites' },
    ],
  },
];

export const PinnedStorySequence: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = stages[activeStageIndex];
  const sectionRef = useRef<HTMLDivElement>(null);

  // Auto progression ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % stages.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [activeStageIndex]);

  return (
    <section
      ref={sectionRef}
      id="continuity"
      className="de-section anim-reveal"
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
        overflow: 'hidden',
      }}
    >
      <div className="de-container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="technical-eyebrow">ENGINEERED CONTINUITY SEQUENCE</div>
          <h2 style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.4rem)', maxWidth: '850px', color: '#0A0F1D' }}>
            Four Connected Stages of Industrial Reliability
          </h2>
          <p style={{ color: '#475569', fontSize: '1.08rem', marginTop: '1rem', maxWidth: '640px' }}>
            How Diesamel Energy unifies bulk terminal uplift, petroleum road tanker logistics, static on-site reserves, and synchronized standby power into a continuous operational chain.
          </p>
        </div>

        {/* Story Progression Navigation Tabs */}
        <div
          className="anim-stagger-parent"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1px',
            backgroundColor: '#CBD5E1',
            border: '1px solid #CBD5E1',
            borderRadius: '4px',
            overflow: 'hidden',
            marginBottom: '2.5rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
          }}
        >
          {stages.map((stage, idx) => {
            const isActive = idx === activeStageIndex;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageIndex(idx)}
                className="anim-stagger-child"
                style={{
                  background: isActive ? '#FFFFFF' : '#F8FAFC',
                  padding: '1.5rem 1.35rem',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.25s ease',
                }}
              >
                {/* Active Indicator Top Line */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    backgroundColor: isActive ? '#E05A1B' : 'transparent',
                    boxShadow: isActive ? '0 0 8px rgba(2, 132, 199, 0.6)' : 'none',
                    transition: 'all 0.3s ease',
                  }}
                />

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: isActive ? '#E05A1B' : '#64748B', fontWeight: 700 }}>
                    STAGE {stage.number}
                  </span>
                  <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#94A3B8' }}>
                    0{idx + 1}/04
                  </span>
                </div>

                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.98rem',
                  fontWeight: 700,
                  color: isActive ? '#0A0F1D' : '#475569',
                  lineHeight: 1.3,
                }}>
                  {stage.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Executive Operational Console */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '4px',
            boxShadow: '0 12px 36px rgba(10, 15, 29, 0.05)',
            overflow: 'hidden',
          }}
        >
          {/* Left Column: Operational Standards & Quality Framework */}
          <div
            style={{
              padding: 'clamp(2rem, 3.5vw, 3rem)',
              backgroundColor: '#F8FAFC',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderRight: '1px solid #E2E8F0',
            }}
          >
            <div>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0', paddingBottom: '1.25rem', marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <Award size={18} style={{ color: '#E05A1B' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', letterSpacing: '0.08em', color: '#0A0F1D', fontWeight: 700 }}>
                    STAGE {activeStage.number} OPERATIONAL BENCHMARKS
                  </span>
                </div>
                <div style={{ padding: '0.25rem 0.65rem', backgroundColor: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: '3px', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#0A0F1D', fontWeight: 700 }}>
                  {activeStage.tag}
                </div>
              </div>

              {/* Operational Standards Checklist */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {activeStage.standards.map((std, sidx) => (
                  <div
                    key={sidx}
                    style={{
                      padding: '1.2rem',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                      borderRadius: '4px',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                      <CheckCircle2 size={16} style={{ color: '#16a34a', flexShrink: 0 }} />
                      <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0A0F1D' }}>
                        {std.title}
                      </div>
                    </div>
                    <div style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.5, paddingLeft: '1.5rem' }}>
                      {std.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid #E2E8F0', marginTop: '1.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748B', fontFamily: 'var(--font-mono)' }}>
              <span>FIELD EXECUTION // HO HQ</span>
              <span style={{ color: '#16a34a', fontWeight: 700 }}>VERIFIED COMPLIANCE</span>
            </div>
          </div>

          {/* Right Column: Technical Specification & Commercial Terms */}
          <div
            style={{
              padding: 'clamp(2.5rem, 4.5vw, 4rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundColor: '#FFFFFF',
            }}
          >
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#64748B', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
                STAGE {activeStage.number} LOGISTICS FRAMEWORK
              </div>

              <h3 style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.3rem)', color: '#0A0F1D', marginBottom: '1.25rem' }}>
                {activeStage.title}
              </h3>

              <div style={{ color: '#E05A1B', fontWeight: 600, fontSize: '1rem', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
                {activeStage.subtitle}
              </div>

              <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.75, marginBottom: '2.5rem' }}>
                {activeStage.description}
              </p>

              {/* Technical Specifications Matrix */}
              <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '1.75rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem', fontWeight: 700 }}>
                  ENGINEERED COMPLIANCE SPECIFICATIONS
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  {activeStage.specs.map((spec, sidx) => (
                    <div
                      key={sidx}
                      className="card-hover-elevate"
                      style={{
                        padding: '1rem',
                        backgroundColor: '#F8FAFC',
                        border: '1px solid #E2E8F0',
                        borderRadius: '3px',
                      }}
                    >
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748B' }}>
                        {spec.label}
                      </div>
                      <div style={{ fontSize: '0.94rem', fontWeight: 700, color: '#0A0F1D', marginTop: '0.2rem' }}>
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #E2E8F0', paddingTop: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#0A0F1D', fontWeight: 600 }}>
                <ShieldCheck size={18} style={{ color: '#E05A1B' }} />
                <span>NPA Regulated Downstream Standard</span>
              </div>

              <button
                onClick={() => {
                  const el = document.getElementById('quote-engine');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-outline-platinum"
                style={{ padding: '0.6rem 1.1rem', fontSize: '0.85rem' }}
              >
                <span>Request Quotation</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
