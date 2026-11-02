import React, { useState } from 'react';
import { X, Send, ShieldCheck, ArrowRight } from 'lucide-react';

interface FuelQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceFocus?: string;
}

export const FuelQuoteModal: React.FC<FuelQuoteModalProps> = ({ isOpen, onClose }) => {
  const [product, setProduct] = useState<'AGO' | 'PMS'>('AGO');
  const [volume, setVolume] = useState<number>(10000);
  const [company, setCompany] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [corridor, setCorridor] = useState('Ho / Central Volta');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!company.trim() || !contactName.trim() || !email.trim()) {
      setError('Please provide company name, contact person, and official email.');
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent(`URGENT FUEL QUOTE REQUEST — ${company}`);
    const body = encodeURIComponent(
      `DIESAMEL ENERGY LTD. — QUICK QUOTE ENQUIRY\n` +
      `Product: ${product === 'AGO' ? 'AGO Diesel' : 'PMS Petrol'}\n` +
      `Volume: ${volume.toLocaleString()} Litres\n` +
      `Corridor: ${corridor}\n` +
      `Company: ${company}\n` +
      `Contact: ${contactName}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Site Notes: ${notes || 'Standard Delivery'}\n`
    );
    window.location.href = `mailto:dispatch@diesamelenergy.com?cc=commercial@diesamelenergy.com&subject=${subject}&body=${body}`;
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(10, 15, 29, 0.65)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
        animation: 'fadeIn 0.2s ease-out',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '680px',
          backgroundColor: '#FFFFFF',
          border: '1px solid #CBD5E1',
          borderRadius: '4px',
          boxShadow: '0 25px 60px rgba(10, 15, 29, 0.25)',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '1.5rem 2rem',
            backgroundColor: '#F8FAFC',
            borderBottom: '1px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div className="technical-eyebrow technical-eyebrow-accent" style={{ marginBottom: '0.25rem' }}>
              COMMERCIAL INQUIRY DESK
            </div>
            <h3 style={{ fontSize: '1.35rem', color: '#0A0F1D' }}>
              Request Commercial Fuel Quotation
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#64748B',
              cursor: 'pointer',
              padding: '0.4rem',
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '2rem', maxHeight: '75vh', overflowY: 'auto' }}>
          {!submitted ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              {/* Product & Volume Row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label className="de-label">Product Type</label>
                  <select
                    className="de-input"
                    value={product}
                    onChange={(e) => setProduct(e.target.value as any)}
                  >
                    <option value="AGO">AGO (Automotive Gas Oil / Diesel)</option>
                    <option value="PMS">PMS (Premium Motor Spirit / Petrol)</option>
                  </select>
                </div>
                <div>
                  <label className="de-label">Estimated Volume</label>
                  <select
                    className="de-input"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                  >
                    <option value={1500}>1,500L (Emergency Site Dispense)</option>
                    <option value={5000}>5,000L (Small Static Tank)</option>
                    <option value={10000}>10,000L (Commercial Fleet)</option>
                    <option value={20000}>20,000L (Processing Plant / Mill)</option>
                    <option value={45000}>45,000L+ (Articulated Bulk Haul)</option>
                  </select>
                </div>
              </div>

              {/* Delivery Corridor */}
              <div>
                <label className="de-label">Delivery Corridor</label>
                <select
                  className="de-input"
                  value={corridor}
                  onChange={(e) => setCorridor(e.target.value)}
                >
                  <option value="Ho / Central Volta">Ho Commercial Industrial Hub</option>
                  <option value="Kpando / Hohoe">Kpando & Hohoe Corridor</option>
                  <option value="Southern Volta / Aflao">Southern Volta (Juapong, Sogakope, Aflao)</option>
                  <option value="Oti Region">Oti Region (Dambai, Nkwanta, Jasikan)</option>
                  <option value="Greater Accra">Greater Accra / Tema Industrial Axis</option>
                </select>
              </div>

              {/* Company & Contact */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label className="de-label">Company / Entity Name *</label>
                  <input
                    type="text"
                    className="de-input"
                    placeholder="e.g. Volta Mills Ltd"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="de-label">Contact Person *</label>
                  <input
                    type="text"
                    className="de-input"
                    placeholder="e.g. Samuel Mensah"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label className="de-label">Official Email *</label>
                  <input
                    type="email"
                    className="de-input"
                    placeholder="procurement@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="de-label">Phone Contact</label>
                  <input
                    type="tel"
                    className="de-input"
                    placeholder="+233..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="de-label">Specific Site Details or Generator Requirements</label>
                <textarea
                  className="de-input"
                  rows={2}
                  placeholder="Include details on storage tanks, generator kVA requirements, or delivery schedule..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              {error && (
                <div style={{ padding: '0.75rem', backgroundColor: '#FEE2E2', border: '1px solid #FCA5A5', color: '#991B1B', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', borderRadius: '3px' }}>
                  {error}
                </div>
              )}

              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  <span>Submit Fuel Specification</span>
                  <ArrowRight size={16} />
                </button>
              </div>

            </form>
          ) : (
            <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: '#DCFCE7',
                color: '#16a34a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem auto',
              }}>
                <ShieldCheck size={32} />
              </div>

              <h4 style={{ fontSize: '1.4rem', color: '#0A0F1D', marginBottom: '0.5rem', fontWeight: 800 }}>
                Fuel Specification Prepared
              </h4>
              <p style={{ color: '#475569', fontSize: '0.94rem', maxWidth: '440px', margin: '0 auto 1.75rem auto', lineHeight: 1.6 }}>
                Your request for <strong>{volume.toLocaleString()}L of {product}</strong> is ready for instant transmission to the Diesamel Energy dispatch desk in Ho.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '380px', margin: '0 auto' }}>
                <button
                  onClick={handleSendEmail}
                  className="btn-primary"
                  style={{ justifyContent: 'center' }}
                >
                  <Send size={16} />
                  <span>Transmit to dispatch@diesamelenergy.com</span>
                </button>

                <button
                  onClick={onClose}
                  className="btn-secondary"
                  style={{ justifyContent: 'center' }}
                >
                  Done / Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
