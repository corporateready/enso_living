"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Cookie, X } from "lucide-react";
import {
  loadConsent,
  pushConsentEvent,
  saveConsent,
  subscribeToConsent,
  updateGTMConsent,
} from "../../../lib/consent";
import {
  applyAnalyticsConsent,
  initializeConsentMode,
} from "../../../lib/analytics";
import {
  CONSENT_TRANSLATIONS,
  getConsentLocale,
} from "./consent-translations";
import styles from "./consent.module.scss";

const DEFAULT_PREFS = { analytics: false, marketing: false };

function getConsentSnapshot() {
  return Boolean(loadConsent());
}

function getServerConsentSnapshot() {
  return true;
}

export default function ConsentManager() {
  const pathname = usePathname();
  const routeLocale = getConsentLocale(pathname);
  const [locale, setLocale] = useState(routeLocale);
  const copy = CONSENT_TRANSLATIONS[locale];
  const hasConsent = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    getServerConsentSnapshot,
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [prefs, setPrefs] = useState(DEFAULT_PREFS);
  const [consentReady, setConsentReady] = useState(false);
  const previousFocusRef = useRef(null);
  const dialogRef = useRef(null);
  const bannerVisible = consentReady && !hasConsent;
  const ctaMounted = consentReady && hasConsent;

  useEffect(() => {
    setLocale(routeLocale);
  }, [routeLocale]);

  useEffect(() => {
    initializeConsentMode();
    const consent = loadConsent();

    if (consent) updateGTMConsent(consent);
    void applyAnalyticsConsent(consent?.analytics === true);
    setConsentReady(true);
  }, []);

  const openSettings = useCallback(() => {
    const consent = loadConsent();
    previousFocusRef.current = document.activeElement;
    setPrefs(
      consent
        ? {
            analytics: consent.analytics,
            marketing: consent.marketing,
          }
        : DEFAULT_PREFS,
    );
    setModalOpen(true);
  }, []);

  const closeSettings = useCallback(() => {
    setModalOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener("open-consent-manager", openSettings);
    return () =>
      window.removeEventListener("open-consent-manager", openSettings);
  }, [openSettings]);

  useEffect(() => {
    if (!modalOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeSettings();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    window.requestAnimationFrame(() => dialogRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus?.();
    };
  }, [closeSettings, modalOpen]);

  const applyConsent = useCallback((newPrefs, eventName) => {
    saveConsent(newPrefs);
    updateGTMConsent(newPrefs);
    if (newPrefs.analytics) pushConsentEvent(eventName, newPrefs);
    void applyAnalyticsConsent(newPrefs.analytics);
    setModalOpen(false);
  }, []);

  const handleAcceptAll = () =>
    applyConsent({ analytics: true, marketing: true }, "consent_accepted_all");

  const handleRejectAll = () =>
    applyConsent(
      { analytics: false, marketing: false },
      "consent_rejected_all",
    );

  const handleSavePrefs = () =>
    applyConsent(prefs, "consent_saved_custom");

  return (
    <>
      {bannerVisible && !modalOpen && (
        <div
          role="region"
          aria-label={copy.regionLabel}
          lang={locale}
          className={styles.bannerBackdrop}
        >
          <section className={styles.banner}>
            <header className={styles.bannerHeader}>
              <Image
                src="/enso-dark-logo.png"
                alt="ENSŌ Living"
                width={128}
                height={95}
                priority
                className={styles.logo}
              />

              <div
                role="group"
                aria-label={copy.languageSelectorLabel}
                className={styles.localeSwitcher}
              >
                <button
                  type="button"
                  lang="ro"
                  aria-pressed={locale === "ro"}
                  className={locale === "ro" ? styles.localeActive : undefined}
                  onClick={() => setLocale("ro")}
                >
                  RO
                </button>
                <span aria-hidden="true" />
                <button
                  type="button"
                  lang="en"
                  aria-pressed={locale === "en"}
                  className={locale === "en" ? styles.localeActive : undefined}
                  onClick={() => setLocale("en")}
                >
                  EN
                </button>
              </div>
            </header>

            <div className={styles.bannerCopy}>
              <h2>{copy.bannerTitle}</h2>
              <p>{copy.bannerDescription}</p>
            </div>

            <div className={styles.bannerActions}>
              <Button onClick={handleRejectAll}>
                {copy.deny}
              </Button>
              <Button onClick={openSettings}>
                {copy.customize}
              </Button>
              <Button onClick={handleAcceptAll}>
                {copy.allowAll}
              </Button>
            </div>
          </section>
        </div>
      )}

      {ctaMounted && (
        <CookieCTA
          label={copy.preferencesTitle}
          onClick={openSettings}
          hidden={modalOpen}
        />
      )}

      {modalOpen && (
        <div
          className={styles.modalBackdrop}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeSettings();
          }}
        >
          <section
            ref={dialogRef}
            id="cookie-settings-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-settings-title"
            lang={locale}
            tabIndex={-1}
            className={styles.modal}
          >
            <header className={styles.modalHeader}>
              <div className={styles.modalTitle}>
                <span className={styles.cookieMark}>
                  <Cookie aria-hidden="true" strokeWidth={1.7} />
                </span>
                <h2 id="cookie-settings-title">{copy.preferencesTitle}</h2>
              </div>
              <button
                type="button"
                aria-label={copy.close}
                onClick={closeSettings}
                className={styles.closeButton}
              >
                <X aria-hidden="true" />
              </button>
            </header>

            <div className={styles.preferenceList}>
              <ConsentRow
                label={copy.essentials}
                description={copy.essentialsDescription}
                alwaysActiveLabel={copy.alwaysActive}
                alwaysOn
              />
              <ConsentRow
                label={copy.analytics}
                description={copy.analyticsDescription}
                checked={prefs.analytics}
                onChange={(value) =>
                  setPrefs((current) => ({
                    ...current,
                    analytics: value,
                  }))
                }
              />
              <ConsentRow
                label={copy.marketing}
                description={copy.marketingDescription}
                checked={prefs.marketing}
                onChange={(value) =>
                  setPrefs((current) => ({
                    ...current,
                    marketing: value,
                  }))
                }
                last
              />
            </div>

            <div className={styles.modalActions}>
              <Button onClick={handleRejectAll} variant="outline">
                {copy.deny}
              </Button>
              <Button onClick={handleSavePrefs} variant="secondary">
                {copy.savePreferences}
              </Button>
              <Button onClick={handleAcceptAll} variant="primary">
                {copy.allowAll}
              </Button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

function ConsentRow({
  label,
  description,
  checked,
  onChange,
  alwaysOn,
  alwaysActiveLabel,
  last = false,
}) {
  return (
    <div className={`${styles.preferenceRow} ${last ? styles.lastRow : ""}`}>
      <div>
        <h3>{label}</h3>
        <p>{description}</p>
      </div>
      {alwaysOn ? (
        <span className={styles.alwaysActive}>{alwaysActiveLabel}</span>
      ) : (
        <Toggle ariaLabel={label} checked={checked} onChange={onChange} />
      )}
    </div>
  );
}

function Toggle({ ariaLabel, checked, onChange }) {
  return (
    <button
      type="button"
      role="switch"
      aria-label={ariaLabel}
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`${styles.toggle} ${checked ? styles.toggleChecked : ""}`}
    >
      <span />
    </button>
  );
}

function Button({ onClick, variant, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.button}`}
    >
      {children}
    </button>
  );
}

function CookieCTA({ label, onClick, hidden }) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-hidden={hidden}
      aria-haspopup="dialog"
      aria-controls="cookie-settings-dialog"
      title={label}
      onClick={onClick}
      tabIndex={hidden ? -1 : 0}
      className={`${styles.cookieCta} ${
        hidden ? styles.cookieCtaHidden : ""
      }`}
    >
      <Cookie aria-hidden="true" strokeWidth={1.7} />
    </button>
  );
}
