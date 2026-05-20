'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  loadConsent,
  saveConsent,
  updateGTMConsent,
  pushConsentEvent,
  syncPostHog,
} from '../../../lib/consent';

const DEFAULT_PREFS = { analytics: false, marketing: false };

export default function ConsentManager() {
  const [bannerVisible, setBannerVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [prefs, setPrefs] = useState(DEFAULT_PREFS);

  useEffect(() => {
    if (!loadConsent()) {
      setBannerVisible(true);
    }

    // Allow external trigger: window.dispatchEvent(new Event('open-consent-manager'))
    const handleOpenModal = () => {
      setBannerVisible(true);
      setModalOpen(true);
    };
    window.addEventListener('open-consent-manager', handleOpenModal);
    return () => window.removeEventListener('open-consent-manager', handleOpenModal);
  }, []);

  const applyConsent = useCallback((newPrefs, eventName) => {
    saveConsent(newPrefs);
    updateGTMConsent(newPrefs);
    pushConsentEvent(eventName, newPrefs);
    syncPostHog(newPrefs.analytics);
    setBannerVisible(false);
    setModalOpen(false);
  }, []);

  const handleAcceptAll = () =>
    applyConsent({ analytics: true, marketing: true }, 'consent_accepted_all');

  const handleRejectAll = () =>
    applyConsent({ analytics: false, marketing: false }, 'consent_rejected_all');

  const handleSavePrefs = () =>
    applyConsent(prefs, 'consent_saved_custom');

  if (!bannerVisible) return null;

  return (
    <>
      {!modalOpen && (
        <div
          role="region"
          aria-label="Cookie consent"
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(12, 12, 12, 0.97)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <div
            style={{
              maxWidth: '1280px',
              margin: '0 auto',
              padding: '18px 24px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '14px',
              justifyContent: 'space-between',
            }}
          >
            <p
              style={{
                color: 'rgba(255,255,255,0.72)',
                fontSize: '13px',
                lineHeight: '1.55',
                margin: 0,
                flex: '1 1 280px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
              }}
            >
              Utilizăm cookie-uri pentru a îmbunătăți experiența pe site și a analiza traficul.{' '}
              <a
                href="/privacy-policy"
                style={{
                  color: 'rgba(255,255,255,0.42)',
                  textDecoration: 'underline',
                  textUnderlineOffset: '2px',
                  fontSize: '13px',
                }}
              >
                Politica de confidențialitate
              </a>
            </p>

            <div
              style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                alignItems: 'center',
                flexShrink: 0,
              }}
            >
              <BannerButton onClick={() => setModalOpen(true)} variant="ghost">
                Gestionează
              </BannerButton>
              <BannerButton onClick={handleRejectAll} variant="ghost">
                Respinge
              </BannerButton>
              <BannerButton onClick={handleAcceptAll} variant="primary">
                Accept toate
              </BannerButton>
            </div>
          </div>
        </div>
      )}

      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Preferințe cookie-uri"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            backgroundColor: 'rgba(0,0,0,0.65)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
          }}
        >
          <div
            style={{
              backgroundColor: '#0e0e0e',
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: '10px',
              padding: '32px',
              maxWidth: '460px',
              width: '100%',
              fontFamily: 'Inter, sans-serif',
              color: '#fff',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '28px',
              }}
            >
              <h2 style={{ margin: 0, fontSize: '17px', fontWeight: 600, letterSpacing: '-0.01em' }}>
                Preferințe cookie-uri
              </h2>
              <button
                aria-label="Închide"
                onClick={() => setModalOpen(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'rgba(255,255,255,0.35)',
                  cursor: 'pointer',
                  fontSize: '18px',
                  lineHeight: 1,
                  padding: '4px 6px',
                  borderRadius: '4px',
                }}
              >
                ✕
              </button>
            </div>

            <ConsentRow
              label="Esențiale"
              description="Necesare pentru funcționarea site-ului: call tracking și substituție număr de telefon. Mereu active."
              alwaysOn
            />

            <ConsentRow
              label="Analiză și performanță"
              description="Ne ajută să înțelegem cum este utilizat site-ul (Google Analytics, PostHog)."
              checked={prefs.analytics}
              onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
            />

            <ConsentRow
              label="Marketing și publicitate"
              description="Permit afișarea de anunțuri relevante (Meta Pixel, LinkedIn Ads, Google Ads)."
              checked={prefs.marketing}
              onChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))}
              last
            />

            <div
              style={{
                display: 'flex',
                gap: '8px',
                justifyContent: 'flex-end',
                marginTop: '28px',
              }}
            >
              <ModalButton onClick={handleRejectAll} variant="ghost">
                Respinge toate
              </ModalButton>
              <ModalButton onClick={handleSavePrefs} variant="primary">
                Salvează preferințele
              </ModalButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ConsentRow({ label, description, checked, onChange, alwaysOn, last }) {
  return (
    <div
      style={{
        paddingBottom: last ? 0 : '20px',
        marginBottom: last ? 0 : '20px',
        borderBottom: last ? 'none' : '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: '16px',
      }}
    >
      <div style={{ flex: 1 }}>
        <p style={{ margin: 0, fontSize: '14px', fontWeight: 500 }}>{label}</p>
        <p
          style={{
            margin: '5px 0 0',
            fontSize: '12px',
            color: 'rgba(255,255,255,0.42)',
            lineHeight: '1.5',
          }}
        >
          {description}
        </p>
      </div>
      {alwaysOn ? (
        <span
          style={{
            fontSize: '11px',
            color: 'rgba(255,255,255,0.28)',
            whiteSpace: 'nowrap',
            marginTop: '3px',
            flexShrink: 0,
          }}
        >
          Mereu activ
        </span>
      ) : (
        <Toggle checked={checked} onChange={onChange} />
      )}
    </div>
  );
}

function Toggle({ checked, onChange }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      style={{
        width: '42px',
        height: '24px',
        borderRadius: '12px',
        border: 'none',
        background: checked ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.13)',
        cursor: 'pointer',
        position: 'relative',
        flexShrink: 0,
        transition: 'background 0.18s ease',
        outline: 'none',
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: '3px',
          left: checked ? '21px' : '3px',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          background: checked ? '#0e0e0e' : 'rgba(255,255,255,0.55)',
          transition: 'left 0.18s ease, background 0.18s ease',
        }}
      />
    </button>
  );
}

function BannerButton({ onClick, variant, children }) {
  const base = {
    cursor: 'pointer',
    fontSize: '12px',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    padding: '8px 18px',
    borderRadius: '5px',
    whiteSpace: 'nowrap',
    letterSpacing: '0.01em',
    transition: 'opacity 0.15s',
  };
  const ghost = {
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.2)',
    color: 'rgba(255,255,255,0.58)',
  };
  const primary = {
    background: 'rgba(255,255,255,0.94)',
    border: 'none',
    color: '#0e0e0e',
    fontWeight: 600,
  };
  return (
    <button onClick={onClick} style={{ ...base, ...(variant === 'primary' ? primary : ghost) }}>
      {children}
    </button>
  );
}

function ModalButton({ onClick, variant, children }) {
  const base = {
    cursor: 'pointer',
    fontSize: '13px',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    padding: '10px 20px',
    borderRadius: '5px',
    letterSpacing: '0.01em',
  };
  const ghost = {
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.18)',
    color: 'rgba(255,255,255,0.52)',
  };
  const primary = {
    background: 'rgba(255,255,255,0.94)',
    border: 'none',
    color: '#0e0e0e',
    fontWeight: 600,
  };
  return (
    <button onClick={onClick} style={{ ...base, ...(variant === 'primary' ? primary : ghost) }}>
      {children}
    </button>
  );
}
