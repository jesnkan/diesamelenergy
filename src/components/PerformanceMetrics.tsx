import React, { useEffect, useRef } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const PerformanceMetrics: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const m1Ref = useRef<HTMLDivElement>(null);
  const m2Ref = useRef<HTMLDivElement>(null);
  const m3Ref = useRef<HTMLDivElement>(null);
  const m4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        // Stagger entrance of the metrics cards
        gsap.fromTo(
          '.metric-card',
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Counter 1: 99.8%
        const c1 = { val: 0 };
        gsap.to(c1, {
          val: 99.8,
          duration: 2.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 88%',
          },
          onUpdate: () => {
            if (m1Ref.current) m1Ref.current.innerText = `${c1.val.toFixed(1)}%`;
          },
        });

        // Counter 2: 2.5M+ L
        const c2 = { val: 0 };
        gsap.to(c2, {
          val: 2.5,
          duration: 2.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 88%',
          },
          onUpdate: () => {
            if (m2Ref.current) m2Ref.current.innerText = `${c2.val.toFixed(1)}M+ L`;
          },
        });

        // Counter 3: < 4 hrs
        const c3 = { val: 12 };
        gsap.to(c3, {
          val: 4,
          duration: 2.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 88%',
          },
          onUpdate: () => {
            if (m3Ref.current) m3Ref.current.innerText = `< ${Math.round(c3.val)} hrs`;
          },
        });

        // Counter 4: 100%
        const c4 = { val: 0 };
        gsap.to(c4, {
          val: 100,
          duration: 2.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 88%',
          },
          onUpdate: () => {
            if (m4Ref.current) m4Ref.current.innerText = `${Math.round(c4.val)}%`;
          },
        });
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  const metrics = [
    {
      ref: m1Ref,
      initial: '99.8%',
      label: 'Power Uptime Reliability',
      subtext: 'Engineered standby generator synchronization and automated transfer switchgear (ATS) integration for continuous industrial processes.',
      verificationNote: 'Operational baseline target; subject to final site service agreement verification.',
    },
    {
      ref: m2Ref,
      initial: '2.5M+ L',
      label: 'Monthly Fuel Throughput',
      subtext: 'Bulk hauling capacity supplying Automotive Gas Oil (AGO) and Premium Motor Spirit (PMS) to regional fleets and industrial consumers.',
      verificationNote: 'Combined regional road tanker logistics throughput capacity.',
    },
    {
      ref: m3Ref,
      initial: '< 4 hrs',
      label: 'Emergency Dispatch SLA',
      subtext: 'Guaranteed rapid response mobile refueling dispatch protocol for critical processing plants and civil earthmoving sites.',
      verificationNote: 'Applicable within core Volta Basin operational radius from Ho hub.',
    },
    {
      ref: m4Ref,
      initial: '100%',
      label: 'Regulatory Compliance',
      subtext: 'Full adherence to National Petroleum Authority (NPA) bulk transportation standards, metered flow verification, and safety protocols.',
      verificationNote: 'Subject to formal certification audit documentation before public launch.',
    },
  ];

  return (
    <section ref={sectionRef} id="rigor" style={{ backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
      <div className="de-container" style={{ paddingTop: 'clamp(4.5rem, 6vw, 7rem)', paddingBottom: 'clamp(4.5rem, 6vw, 7rem)' }}>
        
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <div>
            <div className="technical-eyebrow">OPERATIONAL RIGOR & AUDITED PERFORMANCE</div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.4vw, 3rem)', maxWidth: '640px', color: '#0A0F1D' }}>
              Precision Benchmarks for Heavy Industry
            </h2>
          </div>
          <div style={{ maxWidth: '420px' }}>
            <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.6 }}>
              Diesamel Energy measures logistics by unyielding operational availability, metered volume integrity, and strict regional dispatch commitments.
            </p>
          </div>
        </div>

        {/* Tabular Architectural Grid with GSAP Entrance & Counting Numbers */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 0,
            borderTop: '1px solid #E2E8F0',
            borderLeft: '1px solid #E2E8F0',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
        >
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="metric-card"
              style={{
                padding: 'clamp(2.2rem, 3vw, 3.2rem) clamp(1.75rem, 2.5vw, 2.5rem)',
                borderRight: '1px solid #E2E8F0',
                borderBottom: '1px solid #E2E8F0',
                backgroundColor: '#FFFFFF',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#64748B', fontWeight: 600, marginBottom: '1.25rem' }}>
                  BENCHMARK 0{idx + 1}
                </div>
                
                {/* Metric Large Value with Live GSAP Counter */}
                <div
                  ref={item.ref}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(2.6rem, 4.2vw, 4rem)',
                    fontWeight: 800,
                    color: '#0A0F1D',
                    lineHeight: 1,
                    letterSpacing: '-0.035em',
                    marginBottom: '0.85rem',
                  }}
                >
                  {item.initial}
                </div>

                {/* Metric Label */}
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#0A0F1D',
                    marginBottom: '0.75rem',
                  }}
                >
                  {item.label}
                </div>

                {/* Subtext description */}
                <p
                  style={{
                    color: '#475569',
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                    marginBottom: '1.75rem',
                  }}
                >
                  {item.subtext}
                </p>
              </div>

              {/* Integrity & Verification Flag */}
              <div
                style={{
                  paddingTop: '1.1rem',
                  borderTop: '1px dashed #E2E8F0',
                  fontSize: '0.74rem',
                  color: '#64748B',
                  fontFamily: 'var(--font-mono)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                }}
              >
                <AlertCircle size={13} style={{ flexShrink: 0, color: '#475569' }} />
                <span>{item.verificationNote}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote on verified metrics */}
        <div style={{ marginTop: '1.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#64748B' }}>
            * Metric benchmarks are logged against active fleet GPS logs and commercial contract parameters.
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: '#0F172A', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
            <CheckCircle2 size={15} style={{ color: '#E05A1B' }} />
            <span>NPA Transport Standards Reference</span>
          </div>
        </div>

      </div>
    </section>
  );
};
