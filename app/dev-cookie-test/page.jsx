'use client';

import { useState, useEffect, useCallback } from 'react';
import { loadConsent, saveConsent, clearConsent, updateGTMConsent, pushConsentEvent } from '../../lib/consent';
import { applyAnalyticsConsent } from '../../lib/analytics';

// ─── helpers ────────────────────────────────────────────────────────────────

function ts() {
  return new Date().toLocaleTimeString('ro-RO', { hour12: false });
}

// ─── styles ─────────────────────────────────────────────────────────────────

const S = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#0a0a0a',
    color: '#e8e8e8',
    fontFamily: 'Inter, monospace, sans-serif',
    padding: '32px 24px',
    boxSizing: 'border-box',
  },
  badge: (ok) => ({
    display: 'inline-block',
    padding: '2px 8px',
    borderRadius: '4px',
    fontSize: '11px',
    fontWeight: 600,
    background: ok ? 'rgba(52,211,153,0.15)' : 'rgba(248,113,113,0.15)',
    color: ok ? '#34d399' : '#f87171',
    border: `1px solid ${ok ? 'rgba(52,211,153,0.35)' : 'rgba(248,113,113,0.35)'}`,
  }),
  card: {
    background: '#111',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: '10px',
    padding: '20px 24px',
    marginBottom: '16px',
  },
  sectionTitle: {
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.35)',
    marginBottom: '14px',
    marginTop: 0,
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 0',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
  },
  label: {
    fontSize: '13px',
    color: 'rgba(255,255,255,0.6)',
  },
  val: {
    fontSize: '13px',
    fontFamily: 'monospace',
    color: '#e8e8e8',
  },
  btn: (variant = 'ghost') => {
    const base = {
      cursor: 'pointer',
      fontSize: '12px',
      fontWeight: 500,
      padding: '8px 16px',
      borderRadius: '6px',
      transition: 'opacity 0.15s',
      fontFamily: 'Inter, sans-serif',
      letterSpacing: '0.02em',
    };
    if (variant === 'primary')   return { ...base, background: '#fff', color: '#0a0a0a', border: 'none', fontWeight: 700 };
    if (variant === 'danger')    return { ...base, background: 'rgba(239,68,68,0.18)', color: '#f87171', border: '1px solid rgba(239,68,68,0.35)' };
    if (variant === 'success')   return { ...base, background: 'rgba(52,211,153,0.12)', color: '#34d399', border: '1px solid rgba(52,211,153,0.3)' };
    if (variant === 'warning')   return { ...base, background: 'rgba(251,191,36,0.12)', color: '#fbbf24', border: '1px solid rgba(251,191,36,0.3)' };
    return { ...base, background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.65)' };
  },
  logLine: (type) => {
    const col = { pass: '#34d399', fail: '#f87171', info: '#60a5fa', warn: '#fbbf24', evt: '#a78bfa' }[type] || '#e8e8e8';
    return { fontSize: '12px', fontFamily: 'monospace', color: col, padding: '3px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' };
  },
  pre: {
    background: '#0d0d0d',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: '6px',
    padding: '12px',
    fontSize: '11px',
    fontFamily: 'monospace',
    color: '#a5f3fc',
    overflowX: 'auto',
    margin: 0,
    maxHeight: '240px',
    overflowY: 'auto',
  },
};

// ─── component ───────────────────────────────────────────────────────────────

export default function DevCookieTest() {
  const [consent, setConsent]           = useState(null);
  const [gtmState, setGtmState]         = useState(null);
  const [posthogState, setPosthogState] = useState('unknown');
  const [logs, setLogs]                 = useState([]);
  const [dataLayerSnap, setDataLayerSnap] = useState([]);
  const [dlWatchCount, setDlWatchCount] = useState(0);
  const [bannerVisible, setBannerVisible] = useState(false);

  // ── log helper ──────────────────────────────────────────────────────────
  const log = useCallback((type, msg) => {
    setLogs(prev => [{ type, msg, time: ts() }, ...prev].slice(0, 120));
  }, []);

  // ── read current state ──────────────────────────────────────────────────
  const refresh = useCallback(() => {
    const c = loadConsent();
    setConsent(c);

    // GTM consent fields via gtag (read from dataLayer where possible)
    if (typeof window !== 'undefined') {
      const dl = window.dataLayer || [];
      const consentUpdates = dl.filter(e => e[0] === 'consent' || e.event === 'consent_update');
      setDataLayerSnap([...dl].slice(-30).reverse());
      setDlWatchCount(dl.length);

      const ph = window.posthog;
      if (ph) {
        const optedOut = ph.has_opted_out_capturing?.();
        setPosthogState(optedOut === true ? 'opted-out' : optedOut === false ? 'opted-in' : 'unknown');
      } else {
        setPosthogState('not-loaded');
      }
    }
  }, []);

  // ── mount / watch dataLayer ─────────────────────────────────────────────
  useEffect(() => {
    refresh();

    // Watch for banner state via the open-consent-manager event
    const checkBanner = () => {
      const banner = document.querySelector('[aria-label="Cookie consent"]');
      setBannerVisible(!!banner);
    };
    checkBanner();
    const obs = new MutationObserver(checkBanner);
    obs.observe(document.body, { childList: true, subtree: true });

    // Poll dataLayer length for live updates
    const timer = setInterval(() => {
      const newLen = (window.dataLayer || []).length;
      if (newLen !== dlWatchCount) refresh();
    }, 800);

    log('info', `🔍 Dev Cookie Test loaded — consent cookie: ${loadConsent() ? 'FOUND' : 'NOT SET'}`);

    return () => { obs.disconnect(); clearInterval(timer); };
  }, []);

  // ─── test actions ────────────────────────────────────────────────────────

  const doAcceptAll = () => {
    log('info', '▶ TEST: Accept All clicked');
    saveConsent({ analytics: true, marketing: true });
    updateGTMConsent({ analytics: true, marketing: true });
    pushConsentEvent('consent_accepted_all', { analytics: true, marketing: true });
    void applyAnalyticsConsent(true);
    log('pass', '✔ saveConsent({analytics:true, marketing:true})');
    log('pass', '✔ updateGTMConsent fired');
    log('pass', '✔ pushConsentEvent("consent_accepted_all") pushed to dataLayer');
    log('pass', '✔ applyAnalyticsConsent(true) called');
    refresh();
  };

  const doRejectAll = () => {
    log('info', '▶ TEST: Reject All clicked');
    saveConsent({ analytics: false, marketing: false });
    updateGTMConsent({ analytics: false, marketing: false });
    pushConsentEvent('consent_rejected_all', { analytics: false, marketing: false });
    void applyAnalyticsConsent(false);
    log('pass', '✔ saveConsent({analytics:false, marketing:false})');
    log('pass', '✔ updateGTMConsent fired');
    log('pass', '✔ pushConsentEvent("consent_rejected_all") pushed to dataLayer');
    log('pass', '✔ applyAnalyticsConsent(false) called');
    refresh();
  };

  const doSaveCustom = (analytics, marketing) => {
    log('info', `▶ TEST: Save custom prefs analytics=${analytics} marketing=${marketing}`);
    saveConsent({ analytics, marketing });
    updateGTMConsent({ analytics, marketing });
    pushConsentEvent('consent_saved_custom', { analytics, marketing });
    void applyAnalyticsConsent(analytics);
    log('pass', `✔ saveConsent({analytics:${analytics}, marketing:${marketing}})`);
    log('pass', '✔ pushConsentEvent("consent_saved_custom") pushed to dataLayer');
    refresh();
  };

  const doReset = () => {
    log('warn', '⚠ Clearing enso_consent cookie — banner should reappear on next page visit');
    clearConsent();
    refresh();
    log('info', '→ Reload the page to see the banner again (or click "Show Banner Now")');
  };

  const doShowBanner = () => {
    log('info', '▶ Dispatching open-consent-manager event');
    window.dispatchEvent(new CustomEvent('open-consent-manager'));
    setTimeout(refresh, 300);
  };

  const doVerifyCookie = () => {
    const c = loadConsent();
    if (!c) {
      log('fail', '✘ enso_consent cookie is NOT SET');
      return;
    }
    const versionOk = c.version === 1;
    const hasTimestamp = !!c.updatedAt;
    log(versionOk ? 'pass' : 'fail', `${versionOk ? '✔' : '✘'} Cookie version: ${c.version} (expected 1)`);
    log(hasTimestamp ? 'pass' : 'warn', `${hasTimestamp ? '✔' : '?'} updatedAt: ${c.updatedAt}`);
    log('pass', `✔ analytics: ${c.analytics}`);
    log('pass', `✔ marketing: ${c.marketing}`);
    log('info', `📦 Raw: ${JSON.stringify(c)}`);
  };

  const doCheckGTM = () => {
    const dl = window.dataLayer || [];
    const consentEvts = dl.filter(e => e.event === 'consent_update' || e.event === 'consent_accepted_all' || e.event === 'consent_rejected_all' || e.event === 'consent_saved_custom');
    if (consentEvts.length === 0) {
      log('warn', '? No consent events found in dataLayer yet — run a consent action first');
    } else {
      log('pass', `✔ Found ${consentEvts.length} consent event(s) in dataLayer`);
      consentEvts.slice(-3).forEach(e => log('evt', `  → event="${e.event}" analytics=${e.consent_analytics} marketing=${e.consent_marketing}`));
    }
    const hasGtag = typeof window.gtag === 'function';
    log(hasGtag ? 'pass' : 'warn', `${hasGtag ? '✔' : '?'} window.gtag: ${hasGtag ? 'present' : 'NOT FOUND (GTM may inject it later)'}`);
    refresh();
  };

  const doCheckPostHog = () => {
    const ph = window.posthog;
    if (!ph) { log('warn', '? PostHog not loaded yet'); return; }
    const optedOut = ph.has_opted_out_capturing?.();
    log('pass', `✔ PostHog loaded — opted-out: ${optedOut}`);
    log('info', `  distinct_id: ${ph.get_distinct_id?.() || 'n/a'}`);
    refresh();
  };

  const doRunAll = () => {
    log('info', '═══════ FULL TEST SUITE ═══════');
    // 1. verify no stale cookie first
    doReset();
    setTimeout(() => {
      log('info', '── Step 1: Accept All');
      doAcceptAll();
      doVerifyCookie();
      doCheckGTM();

      setTimeout(() => {
        log('info', '── Step 2: Reject All');
        doRejectAll();
        doVerifyCookie();
        doCheckGTM();

        setTimeout(() => {
          log('info', '── Step 3: Custom (analytics=true, marketing=false)');
          doSaveCustom(true, false);
          doVerifyCookie();
          doCheckGTM();
          doCheckPostHog();
          log('info', '═══════ TEST SUITE DONE ═══════');
        }, 300);
      }, 300);
    }, 300);
  };

  // ─── render ──────────────────────────────────────────────────────────────

  const c = consent;

  return (
    <div style={S.page}>
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <p style={{ margin: '0 0 4px', fontSize: '11px', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Developer Tool
        </p>
        <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em' }}>
          Cookie Consent — Test Suite
        </h1>
        <p style={{ margin: '6px 0 0', fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
          Testează comportamentul bannerului, cookie-ului <code style={{ color: '#a5f3fc' }}>enso_consent</code>, GTM Consent Mode și PostHog.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>

        {/* ── Current State ── */}
        <div style={S.card}>
          <p style={S.sectionTitle}>Stare curentă</p>

          <div style={S.row}>
            <span style={S.label}>Cookie <code>enso_consent</code></span>
            <span style={S.badge(!!c)}>{c ? 'SET' : 'NOT SET'}</span>
          </div>
          <div style={S.row}>
            <span style={S.label}>analytics</span>
            <span style={S.badge(c?.analytics)}>{c ? String(c.analytics) : '—'}</span>
          </div>
          <div style={S.row}>
            <span style={S.label}>marketing</span>
            <span style={S.badge(c?.marketing)}>{c ? String(c.marketing) : '—'}</span>
          </div>
          <div style={{ ...S.row, borderBottom: 'none' }}>
            <span style={S.label}>updatedAt</span>
            <span style={S.val}>{c?.updatedAt ? new Date(c.updatedAt).toLocaleString('ro-RO') : '—'}</span>
          </div>

          <div style={{ marginTop: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button style={S.btn()} onClick={refresh}>↻ Refresh</button>
            <button style={S.btn('warning')} onClick={doShowBanner}>📢 Show Banner</button>
          </div>
        </div>

        {/* ── PostHog ── */}
        <div style={S.card}>
          <p style={S.sectionTitle}>PostHog</p>
          <div style={S.row}>
            <span style={S.label}>window.posthog</span>
            <span style={S.badge(posthogState !== 'not-loaded')}>
              {posthogState === 'not-loaded' ? 'NOT LOADED' : 'loaded'}
            </span>
          </div>
          <div style={{ ...S.row, borderBottom: 'none' }}>
            <span style={S.label}>capture status</span>
            <span style={S.badge(posthogState === 'opted-in')}>
              {posthogState === 'opted-out' ? 'opted-out' : posthogState === 'opted-in' ? 'opted-in' : posthogState}
            </span>
          </div>
          <div style={{ marginTop: '16px' }}>
            <button style={S.btn()} onClick={doCheckPostHog}>🔍 Check PostHog</button>
          </div>
        </div>

        {/* ── GTM dataLayer ── */}
        <div style={S.card}>
          <p style={S.sectionTitle}>GTM / dataLayer</p>
          <div style={S.row}>
            <span style={S.label}>window.gtag</span>
            <span style={S.badge(typeof window !== 'undefined' && typeof window.gtag === 'function')}>
              {typeof window !== 'undefined' && typeof window.gtag === 'function' ? 'present' : 'absent'}
            </span>
          </div>
          <div style={{ ...S.row, borderBottom: 'none' }}>
            <span style={S.label}>dataLayer entries</span>
            <span style={S.val}>{dlWatchCount}</span>
          </div>
          <div style={{ marginTop: '16px' }}>
            <button style={S.btn()} onClick={doCheckGTM}>🔍 Inspect GTM</button>
          </div>
        </div>

        {/* ── Banner status ── */}
        <div style={S.card}>
          <p style={S.sectionTitle}>Banner visibility</p>
          <div style={{ ...S.row, borderBottom: 'none' }}>
            <span style={S.label}>Banner in DOM</span>
            <span style={S.badge(bannerVisible)}>{bannerVisible ? 'VISIBLE' : 'HIDDEN'}</span>
          </div>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '10px', marginBottom: 0, lineHeight: 1.5 }}>
            Bannerul apare dacă cookie-ul <code>enso_consent</code> nu este setat.
            Șterge cookie-ul și reîncarcă pagina pentru a-l vedea din nou.
          </p>
        </div>
      </div>

      {/* ── Action Panel ── */}
      <div style={{ ...S.card, marginTop: 0 }}>
        <p style={S.sectionTitle}>Acțiuni de test</p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button style={S.btn('success')} onClick={doAcceptAll}>✔ Accept All</button>
          <button style={S.btn('danger')} onClick={doRejectAll}>✘ Reject All</button>
          <button style={S.btn()} onClick={() => doSaveCustom(true, false)}>Analytics Only</button>
          <button style={S.btn()} onClick={() => doSaveCustom(false, true)}>Marketing Only</button>
          <button style={S.btn('warning')} onClick={doReset}>🗑 Reset Cookie</button>
          <button style={S.btn()} onClick={doVerifyCookie}>🔎 Verify Cookie</button>
          <button style={S.btn()} onClick={doCheckGTM}>🏷 Check GTM</button>
          <button style={S.btn()} onClick={doCheckPostHog}>📊 Check PostHog</button>
        </div>
        <div style={{ marginTop: '12px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px' }}>
          <button
            style={{ ...S.btn('primary'), fontSize: '13px', padding: '10px 24px' }}
            onClick={doRunAll}
          >
            ▶ Run Full Test Suite
          </button>
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginLeft: '12px' }}>
            Reset → Accept All → Reject All → Custom
          </span>
        </div>
      </div>

      {/* ── Log Panel ── */}
      <div style={S.card}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <p style={{ ...S.sectionTitle, marginBottom: 0 }}>Log ({logs.length})</p>
          <button style={{ ...S.btn(), fontSize: '11px', padding: '4px 10px' }} onClick={() => setLogs([])}>Clear</button>
        </div>
        <div style={{ maxHeight: '260px', overflowY: 'auto' }}>
          {logs.length === 0 && (
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)', margin: 0 }}>
              Apasă un buton de test pentru a vedea logurile...
            </p>
          )}
          {logs.map((l, i) => (
            <div key={i} style={S.logLine(l.type)}>
              <span style={{ color: 'rgba(255,255,255,0.22)', marginRight: '8px' }}>{l.time}</span>
              {l.msg}
            </div>
          ))}
        </div>
      </div>

      {/* ── dataLayer Snapshot ── */}
      <div style={S.card}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <p style={{ ...S.sectionTitle, marginBottom: 0 }}>dataLayer (last 30 entries)</p>
          <button style={{ ...S.btn(), fontSize: '11px', padding: '4px 10px' }} onClick={refresh}>↻ Refresh</button>
        </div>
        <pre style={S.pre}>
          {JSON.stringify(dataLayerSnap, null, 2)}
        </pre>
      </div>

      {/* ── How it works ── */}
      <div style={{ ...S.card, borderColor: 'rgba(96,165,250,0.18)' }}>
        <p style={S.sectionTitle}>Cum funcționează Consent Mode</p>
        <ol style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: 2 }}>
          <li><strong style={{ color: 'rgba(255,255,255,0.7)' }}>Default deny</strong> — setat inline în <code style={{ color: '#a5f3fc' }}>layout.jsx</code> înainte de GTM</li>
          <li><strong style={{ color: 'rgba(255,255,255,0.7)' }}>Cookie read</strong> — dacă <code style={{ color: '#a5f3fc' }}>enso_consent</code> există, GTM consent e restaurat imediat</li>
          <li><strong style={{ color: 'rgba(255,255,255,0.7)' }}>Banner</strong> — <code style={{ color: '#a5f3fc' }}>ConsentManager.jsx</code> afișează bannerul dacă cookie-ul lipsește</li>
          <li><strong style={{ color: 'rgba(255,255,255,0.7)' }}>Accept/Reject</strong> — <code style={{ color: '#a5f3fc' }}>saveConsent</code> + <code style={{ color: '#a5f3fc' }}>updateGTMConsent</code> + <code style={{ color: '#a5f3fc' }}>pushConsentEvent</code> + <code style={{ color: '#a5f3fc' }}>applyAnalyticsConsent</code></li>
          <li><strong style={{ color: 'rgba(255,255,255,0.7)' }}>Cookie expires</strong> — 365 zile, SameSite=Lax, Secure</li>
        </ol>
      </div>

      <p style={{ textAlign: 'center', fontSize: '11px', color: 'rgba(255,255,255,0.12)', marginTop: '32px' }}>
        🔒 Această pagină este exclusiv pentru uz intern de development — nu se indexează și nu apare în navigare.
      </p>
    </div>
  );
}
