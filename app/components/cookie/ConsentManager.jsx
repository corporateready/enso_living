"use client";

import { useState, useEffect, useCallback } from "react";
import {
  loadConsent,
  saveConsent,
  updateGTMConsent,
  pushConsentEvent,
  syncPostHog,
} from "../../../lib/consent";

const DEFAULT_PREFS = { analytics: false, marketing: false };
import { useMediaQuery } from "react-responsive";

export default function ConsentManager() {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const [bannerVisible, setBannerVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [prefs, setPrefs] = useState(DEFAULT_PREFS);

  useEffect(() => {
    if (!loadConsent()) {
      setBannerVisible(true);
    }

    const handleOpenModal = () => {
      setBannerVisible(true);
      setModalOpen(true);
    };
    window.addEventListener("open-consent-manager", handleOpenModal);
    return () =>
      window.removeEventListener("open-consent-manager", handleOpenModal);
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
    applyConsent({ analytics: true, marketing: true }, "consent_accepted_all");

  const handleRejectAll = () =>
    applyConsent(
      { analytics: false, marketing: false },
      "consent_rejected_all",
    );

  const handleSavePrefs = () => applyConsent(prefs, "consent_saved_custom");

  if (!bannerVisible) return null;

  return (
    <>
      {!modalOpen && (
        <div
          role="region"
          aria-label="Cookie consent"
          className="fixed bottom-1/2 left-1/2 z-[9999] h-dvh w-dvw -translate-x-1/2 translate-y-1/2 border-t border-white/[0.07] bg-[rgba(12,12,12,0.1)] backdrop-blur-[10px]"
        >
          <div
            className="absolute left-1/2 top-1/2 mx-auto flex h-[640rem] w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-[20rem] bg-white pt-[60rem] pb-[30rem] sm:top-1/2 sm:h-[380rem] sm:w-[1280rem] sm:gap-0 rounded-[0rem] border-none px-0 "
          >
            <p className="text-black text-[18rem] m-0 flex-[1_1_280rem] font-[Inter,sans-serif] font-400 px-100 border-t border-black/[0.1] pt-[20rem]">
              <b>This website uses cookies</b>
              <span className="inline-flex mt-40 leading-[150%]">
                We use cookies to personalise content and ads, to provide social
                media features and to analyse our traffic. We also share
                information about your use of our site with our social media,
                advertising and analytics partners who may combine it with other
                information that you’ve provided to them or that they’ve
                collected from your use of their services.
              </span>
            </p>

            <div className="flex sm:w-full w-full shrink-0 flex-col sm:flex-row items-center gap-40 w-1120 border-t border-black/[0.1] pt-[20rem] px-[20rem] sm:px-100">
              <BannerButton onClick={handleRejectAll} variant="ghost">
                Deny
              </BannerButton>
              <BannerButton onClick={() => setModalOpen(true)} variant="ghost">
                Customize
              </BannerButton>
              <BannerButton onClick={handleAcceptAll} variant="ghost">
                Allow all
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
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[rgba(12,12,12,0.1)] p-[16rem] backdrop-blur-[10px]
          "
        >
          <div
            className="
              w-full sm:w-1840 rounded-[10rem] border-[1rem] border-none bg-white p-[32rem] font-['Inter',sans-serif] text-black/65"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "28px",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: "17px",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                }}
              >
                Preferințe cookie-uri
              </h2>
              <button
                aria-label="Închide"
                onClick={() => setModalOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  color: "rgba(0,0,0,0.95)",
                  cursor: "pointer",
                  fontSize: "18rem",
                  lineHeight: 1,
                  padding: "4rem 6rem",
                  borderRadius: "4rem",
                }}
              >
                ✕
              </button>
            </div>

            <ConsentRow
              label="Essentials"
              description="Required for the website's operation: call tracking and phone number substitution."
              alwaysOn
            />

            <ConsentRow
              label="Analytics and Performance"
              description="Helps us understand how the website is used. (Google Analytics, PostHog)."
              checked={prefs.analytics}
              onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
            />

            <ConsentRow
              label="Marketing and Advertising"
              description="Enable the display of relevant advertisements .(Meta Pixel, LinkedIn Ads, Google Ads)."
              checked={prefs.marketing}
              onChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))}
              last
            />

            <div className="mt-112 flex justify-center gap-32">
              <ModalButton onClick={handleRejectAll} variant="ghost">
                Deny
              </ModalButton>
              <ModalButton onClick={handleSavePrefs} variant="ghost">
                Allow all
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
        paddingBottom: last ? 0 : "20px",
        marginBottom: last ? 0 : "20px",
        borderBottom: last ? "none" : "1px solid rgba(255,255,255,0.06)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "16px",
      }}
    >
      <div style={{ flex: 1 }}>
        <p style={{ margin: 0, fontSize: "14px", fontWeight: 500 }}>{label}</p>
        <p
          style={{
            margin: "5px 0 0",
            fontSize: "12px",
            color: "black",
            lineHeight: "1.5",
          }}
        >
          {description}
        </p>
      </div>
      {alwaysOn ? (
        <span
          style={{
            fontSize: "11px",
            color: "black",
            whiteSpace: "nowrap",
            marginTop: "3px",
            flexShrink: 0,
          }}
        >
          Always active
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
        width: "42rem",
        height: "24rem",
        borderRadius: "12rem",
        border: "1rem solid rgba(0,0,0,0.18)",
        background: checked
          ? "rgba(0, 162, 255, 0.2)"
          : "rgba(0,0,0,0.1)",
        cursor: "pointer",
        position: "relative",
        flexShrink: 0,
        transition: "background 0.18s ease",
        outline: "none",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: "3rem",
          left: checked ? "21rem" : "3rem",
          width: "18rem",
          height: "18rem ",
          borderRadius: "50%",
          background: checked ? "rgb(0, 162, 255)" : "#0e0e0e",
          transition: "left 0.18s ease, background 0.18s ease",
        }}
      />
    </button>
  );
}

function BannerButton({ onClick, variant, children }) {
  const base = {
    cursor: "pointer",
    fontSize: "18rem",
    fontFamily: "Inter, sans-serif",
    fontWeight: 700,
    padding: "18rem 10rem",
    borderRadius: "4rem",
    whiteSpace: "nowrap",
    letterSpacing: "0.01em",
    transition: "opacity 0.15s",
    width: "100%",
  };
  const ghost = {
    background: "#00a2ff",
    fontWeight: 700,
  };
  const primary = {
    background: "rgba(255,255,255,0.94)",
    border: "none",
    color: "#000",
    fontWeight: 700,
  };
  return (
    <button
      onClick={onClick}
      style={{ ...base, ...(variant === "primary" ? primary : ghost) }}
      className="hover:opacity-90"
    >
      {children}
    </button>
  );
}

function ModalButton({ onClick, variant, children }) {
  const base = {
    cursor: "pointer",
    fontSize: "16rem",
    fontFamily: "Inter, sans-serif",
    fontWeight: 700,
    padding: "10rem 20rem",
    borderRadius: "5rem",
    letterSpacing: "0.01em",
  };
  const ghost = {
    background: "#00a2ff",
    border: "none",
    color: "black",
    width: "100%",
  };
  const primary = {
    background: "rgba(255,255,255,0.94)",
    border: "none",
    color: "#0e0e0e",
    fontWeight: 600,
  };
  return (
    <button
      onClick={onClick}
      style={{ ...base, ...(variant === "primary" ? primary : ghost) }}
      className="hover:opacity-90 transition-all duration-150"
    >
      {children}
    </button>
  );
}
