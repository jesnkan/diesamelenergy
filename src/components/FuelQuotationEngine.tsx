import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck, Info, Check, Copy, Send } from 'lucide-react';

interface FuelQuotationProps {
  initialService?: string;
}

export const FuelQuotationEngine: React.FC<FuelQuotationProps> = () => {
  const [fuelType, setFuelType] = useState<'AGO' | 'PMS'>('AGO');
  const [volume, setVolume] = useState<number>(15000);
  const [deliveryRegion, setDeliveryRegion] = useState<string>('ho-central');
  const [supplySchedule, setSupplySchedule] = useState<'recurring' | 'spot' | 'emergency'>('recurring');
  const [includeGenerator, setIncludeGenerator] = useState<boolean>(false);
  const [generatorCapacity, setGeneratorCapacity] = useState<string>('250kVA');
  const [companyName, setCompanyName] = useState<string>('');
  const [contactName, setContactName] = useState<string>('');
  const [contactEmail, setContactEmail] = useState<string>('');
  const [contactPhone, setContactPhone] = useState<string>('');
  const [siteLocationDetails, setSiteLocationDetails] = useState<string>('');
  const [additionalNotes] = useState<string>('');

  // Submission / Review states
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [rfqReference, setRfqReference] = useState<string>('');

  // Determine tanker logistics bracket
  const getLogisticsBracket = (litres: number) => {
    if (litres < 5000) return { bracket: 'Mobile Refueler Unit (Direct-to-Machine)', eta: 'Immediate / < 4 hrs' };
    if (litres <= 14000) return { bracket: 'Medium Rigid Road Tanker', eta: 'Standard Scheduled' };
    if (litres <= 30000) return { bracket: 'Heavy Articulated Petroleum Hauler', eta: 'Bulk Corridor Haul' };
    return { bracket: 'Multi-Compartment Bulk Tanker Fleet (45,000L+)', eta: 'Dedicated Continuous Inflow' };
  };

  const currentBracket = getLogisticsBracket(volume);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName.trim() || !contactName.trim() || !contactEmail.trim()) {
      setValidationError('Please complete company name, contact person, and official email.');
      return;
    }
    setValidationError(null);
    const ref = `RFQ-DE-${Math.floor(100000 + Math.random() * 900000)}`;
    setRfqReference(ref);
    setIsSubmitted(true);
  };

  const getSummaryText = () => {
    return `DIESAMEL ENERGY LTD. — REQUEST FOR QUOTATION
Reference: ${rfqReference}
Fuel Type: ${fuelType === 'AGO' ? 'Automotive Gas Oil (Diesel)' : 'Premium Motor Spirit (Petrol)'}
Requested Volume: ${volume.toLocaleString()} Litres
Logistics Class: ${currentBracket.bracket}
Delivery Region: ${deliveryRegion}
Supply Frequency: ${supplySchedule.toUpperCase()}
Generator Integration: ${includeGenerator ? `Yes (${generatorCapacity})` : 'No'}
Company: ${companyName}
Contact: ${contactName}
Email: ${contactEmail}
Phone: ${contactPhone || 'Not provided'}
Site Location: ${siteLocationDetails || 'Standard regional corridor'}
Notes: ${additionalNotes || 'None'}`;
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(getSummaryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDirectEmail = () => {
    const subject = encodeURIComponent(`Fuel RFQ [${rfqReference}] — ${companyName}`);
    const body = encodeURIComponent(getSummaryText());
    window.location.href = `mailto:dispatch@diesamelenergy.com?cc=commercial@diesamelenergy.com&subject=${subject}&body=${body}`;
  };

  return (
    <section id="quote-engine" className="de-section" style={{ backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
      <div className="de-container">
        
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
          <div className="technical-eyebrow">COMMERCIAL DISPATCH CONFIGURATOR</div>
          <h2 style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.4rem)', lineHeight: 1.15, marginBottom: '1.25rem', color: '#0A0F1D' }}>
            Request a Verified Bulk Fuel & Power Quotation
          </h2>
          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.65 }}>
            Configure volume specifications, logistics brackets, and site delivery parameters. Formal commercial quotations are calculated directly from verified National Petroleum Authority (NPA) bi-weekly benchmarks and certified transport tariffs.
          </p>
        </div>

        {/* Configurator Container */}
        <div
          className="gsap-reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 0,
            border: '1px solid #E2E8F0',
            borderRadius: '4px',
            backgroundColor: '#FFFFFF',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)',
            overflow: 'hidden',
          }}
        >
          {/* Left Column: Form Configuration */}
          <div style={{ padding: 'clamp(2rem, 3.5vw, 3.5rem)', borderRight: '1px solid #E2E8F0', backgroundColor: '#FFFFFF' }}>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                
                {/* 1. Fuel Type */}
                <div>
                  <label className="de-label">01 // SELECT PETROLEUM PRODUCT</label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <button
                      type="button"
                      onClick={() => setFuelType('AGO')}
                      style={{
                        padding: '1.1rem',
                        textAlign: 'left',
                        backgroundColor: fuelType === 'AGO' ? '#0A0F1D' : '#F8FAFC',
                        border: fuelType === 'AGO' ? '1px solid #0A0F1D' : '1px solid #E2E8F0',
                        color: fuelType === 'AGO' ? '#FFFFFF' : '#0A0F1D',
                        cursor: 'pointer',
                        borderRadius: '3px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: fuelType === 'AGO' ? '#38bdf8' : '#64748B', fontWeight: 600 }}>
                        PRIMARY INDUSTRIAL
                      </div>
                      <div style={{ fontSize: '1.15rem', fontWeight: 800, marginTop: '0.25rem' }}>
                        AGO (Diesel)
                      </div>
                      <div style={{ fontSize: '0.75rem', color: fuelType === 'AGO' ? '#CBD5E1' : '#64748B', marginTop: '0.25rem' }}>
                        Automotive Gas Oil • Low Sulfur
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFuelType('PMS')}
                      style={{
                        padding: '1.1rem',
                        textAlign: 'left',
                        backgroundColor: fuelType === 'PMS' ? '#0A0F1D' : '#F8FAFC',
                        border: fuelType === 'PMS' ? '1px solid #0A0F1D' : '1px solid #E2E8F0',
                        color: fuelType === 'PMS' ? '#FFFFFF' : '#0A0F1D',
                        cursor: 'pointer',
                        borderRadius: '3px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: fuelType === 'PMS' ? '#38bdf8' : '#64748B', fontWeight: 600 }}>
                        COMMERCIAL FLEET
                      </div>
                      <div style={{ fontSize: '1.15rem', fontWeight: 800, marginTop: '0.25rem' }}>
                        PMS (Petrol)
                      </div>
                      <div style={{ fontSize: '0.75rem', color: fuelType === 'PMS' ? '#CBD5E1' : '#64748B', marginTop: '0.25rem' }}>
                        Premium Motor Spirit • High Octane
                      </div>
                    </button>
                  </div>
                </div>

                {/* 2. Volume Slider & Manual Numeric Input */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <label className="de-label" style={{ marginBottom: 0 }}>02 // REQUESTED DELIVERY VOLUME</label>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.35rem', fontWeight: 800, color: '#0A0F1D' }}>
                      {volume.toLocaleString()} <span style={{ fontSize: '0.88rem', color: '#64748B', fontWeight: 600 }}>LITRES</span>
                    </span>
                  </div>

                  <input
                    type="range"
                    min="1000"
                    max="60000"
                    step="1000"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    style={{ margin: '0.85rem 0' }}
                  />

                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#64748B', fontWeight: 600 }}>
                    <span>1,000L (Site Dispense)</span>
                    <span>13,500L (Rigid)</span>
                    <span>30,000L (Hauler)</span>
                    <span>60,000L+ (Multi-Drop)</span>
                  </div>
                </div>

                {/* 3. Delivery Region */}
                <div>
                  <label className="de-label">03 // DESTINATION LOGISTICS CORRIDOR</label>
                  <select
                    className="de-input"
                    value={deliveryRegion}
                    onChange={(e) => setDeliveryRegion(e.target.value)}
                  >
                    <option value="ho-central">Ho Industrial Corridor / Central Hub</option>
                    <option value="kpando-hohoe">Central Volta (Kpando, Hohoe, Golokwati)</option>
                    <option value="south-volta">Southern Volta (Sogakope, Juapong, Aflao)</option>
                    <option value="oti-dambai">Oti Region Corridor (Dambai, Nkwanta, Jasikan)</option>
                    <option value="greater-accra">Greater Accra / Tema Industrial Axis</option>
                    <option value="remote-site">Other Specialized Jobsite (Specify in Details)</option>
                  </select>
                </div>

                {/* 4. Supply Schedule */}
                <div>
                  <label className="de-label">04 // DISPATCH FREQUENCY & URGENCY</label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.65rem' }}>
                    {[
                      { key: 'recurring', label: 'Recurring SLA', note: 'Weekly/Monthly' },
                      { key: 'spot', label: 'Single Bulk Drop', note: 'One-time Haul' },
                      { key: 'emergency', label: 'Priority SLA', note: '< 4h Emergency' },
                    ].map((item) => (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => setSupplySchedule(item.key as any)}
                        style={{
                          padding: '0.85rem 0.6rem',
                          textAlign: 'center',
                          backgroundColor: supplySchedule === item.key ? '#0A0F1D' : '#F8FAFC',
                          border: supplySchedule === item.key ? '1px solid #0A0F1D' : '1px solid #E2E8F0',
                          color: supplySchedule === item.key ? '#FFFFFF' : '#0A0F1D',
                          cursor: 'pointer',
                          borderRadius: '3px',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>{item.label}</div>
                        <div style={{ fontSize: '0.7rem', color: supplySchedule === item.key ? '#CBD5E1' : '#64748B', marginTop: '0.2rem', fontFamily: 'var(--font-mono)' }}>
                          {item.note}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 5. Standby Generator Option */}
                <div style={{ padding: '1.25rem', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '3px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={includeGenerator}
                      onChange={(e) => setIncludeGenerator(e.target.checked)}
                      style={{ width: '19px', height: '19px', accentColor: '#0A0F1D' }}
                    />
                    <div>
                      <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0A0F1D' }}>
                        Include Standby Generator Consultation (20 to 1,500 kVA)
                      </span>
                      <p style={{ fontSize: '0.78rem', color: '#64748B', margin: 0, marginTop: '0.15rem' }}>
                        Pair bulk fuel supply with equipment leasing, ATS switchgear, and scheduled maintenance.
                      </p>
                    </div>
                  </label>

                  {includeGenerator && (
                    <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #E2E8F0' }}>
                      <label className="de-label">Estimated Generator Capacity Requirement</label>
                      <select
                        className="de-input"
                        value={generatorCapacity}
                        onChange={(e) => setGeneratorCapacity(e.target.value)}
                      >
                        <option value="20-50kVA">20 kVA – 50 kVA (Small Commercial / Clinics)</option>
                        <option value="100-250kVA">100 kVA – 250 kVA (Agribusiness / Hotels)</option>
                        <option value="500kVA">500 kVA (Processing Mills / Hospitals)</option>
                        <option value="1000-1500kVA">1,000 kVA – 1,500 kVA (Quarries / Heavy Industrial Plants)</option>
                      </select>
                    </div>
                  )}
                </div>

                {/* 6. Company & Contact Details */}
                <div>
                  <label className="de-label">05 // COMMERCIAL APPLICANT CREDENTIALS</label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                    <div>
                      <input
                        type="text"
                        placeholder="Company / Facility Name *"
                        className="de-input"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Contact Person *"
                        className="de-input"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Official Corporate Email *"
                        className="de-input"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number (e.g. +233...)"
                        className="de-input"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Site location details */}
                <div>
                  <textarea
                    placeholder="Specific site address, access restrictions, or on-site storage specifications (optional)..."
                    className="de-input"
                    rows={2}
                    value={siteLocationDetails}
                    onChange={(e) => setSiteLocationDetails(e.target.value)}
                  />
                </div>

                {validationError && (
                  <div style={{ padding: '0.85rem', backgroundColor: '#FEE2E2', border: '1px solid #FCA5A5', color: '#991B1B', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', borderRadius: '3px' }}>
                    {validationError}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', padding: '1.15rem', fontSize: '1rem', justifyContent: 'center' }}
                >
                  <span>Generate Quotation Specification</span>
                  <ArrowRight size={18} />
                </button>
              </form>
            ) : (
              /* Review / Generated RFQ State */
              <div style={{ animation: 'fadeIn 0.3s ease-out' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.5rem', color: '#16a34a' }}>
                  <ShieldCheck size={32} />
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>
                      SPECIFICATION GENERATED
                    </div>
                    <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0A0F1D' }}>
                      Reference: {rfqReference}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    borderRadius: '3px',
                    padding: '1.5rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    color: '#0A0F1D',
                    lineHeight: 1.65,
                    whiteSpace: 'pre-wrap',
                    marginBottom: '1.5rem',
                    maxHeight: '340px',
                    overflowY: 'auto',
                  }}
                >
                  {getSummaryText()}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <button
                    onClick={handleDirectEmail}
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <Send size={16} />
                    <span>Transmit RFQ to Commercial Dispatch</span>
                  </button>

                  <button
                    onClick={handleCopySummary}
                    className="btn-secondary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    {copied ? <Check size={16} style={{ color: '#16a34a' }} /> : <Copy size={16} />}
                    <span>{copied ? 'Copied Specification to Clipboard' : 'Copy Full RFQ Specification'}</span>
                  </button>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#64748B',
                      cursor: 'pointer',
                      fontSize: '0.82rem',
                      fontFamily: 'var(--font-mono)',
                      marginTop: '0.5rem',
                      fontWeight: 600,
                    }}
                  >
                    ← Modify Configuration Parameters
                  </button>
                </div>

                {/* Clear Integration Disclosure */}
                <div style={{ marginTop: '1.75rem', padding: '1rem', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '3px', fontSize: '0.76rem', color: '#475569', fontFamily: 'var(--font-mono)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0A0F1D', fontWeight: 700, marginBottom: '0.25rem' }}>
                    <Info size={15} style={{ color: '#E05A1B' }} />
                    <span>DISPATCH INTEGRATION PROTOCOL</span>
                  </div>
                  Your RFQ generates a structured commercial spec formatted for immediate processing by the Diesamel Energy dispatch desk at dispatch@diesamelenergy.com.
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Dynamic Real-Time Logistics Summary */}
          <div
            style={{
              padding: 'clamp(2rem, 3.5vw, 3.5rem)',
              backgroundColor: '#F8FAFC',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#64748B', letterSpacing: '0.1em', fontWeight: 700, marginBottom: '1.5rem' }}>
                LOGISTICS MATRIX & COMMERCIAL TERMS
              </div>

              {/* Logistics Allocation Summary */}
              <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '3px', padding: '1.75rem', marginBottom: '2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#64748B', textTransform: 'uppercase', fontWeight: 600 }}>
                  ALLOCATED FLEET ASSET
                </div>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0A0F1D', marginTop: '0.3rem', marginBottom: '1.25rem' }}>
                  {currentBracket.bracket}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', borderTop: '1px solid #E2E8F0', paddingTop: '1rem' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#64748B', fontWeight: 600 }}>
                      PRODUCT
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', fontWeight: 800, color: '#0A0F1D' }}>
                      {fuelType === 'AGO' ? 'AGO Diesel' : 'PMS Petrol'}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#64748B', fontWeight: 600 }}>
                      SLA WINDOW
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', fontWeight: 800, color: '#0A0F1D' }}>
                      {currentBracket.eta}
                    </div>
                  </div>
                </div>
              </div>

              {/* Strict Commercial Pricing Disclosure */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                  <ShieldCheck size={20} style={{ color: '#E05A1B', flexShrink: 0, marginTop: '2px' }} />
                  <div style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.55 }}>
                    <strong style={{ color: '#0A0F1D' }}>Transparent Pricing Policy:</strong> Bulk fuel rates are indexed to authorized National Petroleum Authority (NPA) bi-weekly windows + verified logistics distance. We never publish speculative rates.
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                  <Calculator size={20} style={{ color: '#E05A1B', flexShrink: 0, marginTop: '2px' }} />
                  <div style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.55 }}>
                    <strong style={{ color: '#0A0F1D' }}>Metered Custody Transfer:</strong> Invoices match digital flow meters calibrated under Ghana Standards Authority benchmarks.
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Commercial Helpline */}
            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid #E2E8F0' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: '#64748B', marginBottom: '0.4rem', fontWeight: 600 }}>
                Direct Commercial Inquiries:
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0A0F1D' }}>
                commercial@diesamelenergy.com
              </div>
              <div style={{ fontSize: '0.82rem', color: '#64748B', marginTop: '0.2rem' }}>
                Administration: Monday to Friday 08:00–17:00
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
