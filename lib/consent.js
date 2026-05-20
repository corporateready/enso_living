import Cookies from 'js-cookie';

const COOKIE_NAME = 'enso_consent';
const COOKIE_VERSION = 1;
const COOKIE_OPTIONS = { expires: 365, sameSite: 'Lax', secure: true, path: '/' };

/**
 * Roistat is classified as an essential script in this project because it powers
 * dynamic phone substitution and call tracking, which are required for the core
 * lead-generation functionality.
 *
 * Roistat is loaded via GTM as an essential tag and must not be gated by
 * analytics/marketing/ad consent unless the legal/compliance policy changes.
 */

export function loadConsent() {
  try {
    const raw = Cookies.get(COOKIE_NAME);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (data.version !== COOKIE_VERSION) return null;
    return data;
  } catch {
    return null;
  }
}

export function saveConsent({ analytics, marketing }) {
  const state = {
    version: COOKIE_VERSION,
    analytics: !!analytics,
    marketing: !!marketing,
    updatedAt: new Date().toISOString(),
  };
  Cookies.set(COOKIE_NAME, JSON.stringify(state), COOKIE_OPTIONS);
  return state;
}

export function clearConsent() {
  Cookies.remove(COOKIE_NAME, { path: '/' });
}

export function updateGTMConsent({ analytics, marketing }) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];

  const grant = (val) => (val ? 'granted' : 'denied');

  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: grant(analytics),
      ad_storage: grant(marketing),
      ad_user_data: grant(marketing),
      ad_personalization: grant(marketing),
      personalization_storage: grant(analytics),
    });
  }

  window.dataLayer.push({
    event: 'consent_update',
    consent_analytics: grant(analytics),
    consent_marketing: grant(marketing),
  });
}

export function pushConsentEvent(eventName, { analytics, marketing }) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  const grant = (val) => (val ? 'granted' : 'denied');
  window.dataLayer.push({
    event: eventName,
    consent_analytics: grant(analytics),
    consent_marketing: grant(marketing),
  });
}

export function syncPostHog(analytics) {
  if (typeof window === 'undefined') return;
  const ph = window.posthog;
  if (!ph) return;
  if (analytics) {
    ph.opt_in_capturing();
  } else {
    ph.opt_out_capturing();
  }
}
