# PostHog `/flags` request after analytics rejection

## Symptom

Clicking the consent manager's reject action caused a POST request to
`/flags/?v=2&compression=base64`, which returned HTTP 400 through the
production PostHog proxy.

## Root cause

`handleRejectAll` called `applyAnalyticsConsent(false)`, which cleared the
loaded PostHog instance. That cleanup called `posthog.reset(true)`.

In the installed `posthog-js@1.374.2`, `reset()` always calls
`reloadFeatureFlags()` for the new anonymous identity. That creates the
unexpected `/flags` request even though analytics consent has just been
rejected. `opt_out_capturing()` can also reset the SDK in PostHog's cookieless
mode, so guarding only the explicit reset is insufficient.

The working tree also contained three adjacent integration regressions:

- `syncPostHog` was still imported after its export had been removed.
- `saveConsent` no longer dispatched the event observed by
  `useSyncExternalStore`, leaving the banner visible.
- The cookie name had drifted from `enso_consent` to `artima_consent`, while
  the inline consent bootstrap and tests still read `enso_consent`.

## Fix

- Set `advanced_disable_feature_flags: true` before PostHog opt-out/reset and
  restore it to `false` when analytics is enabled again.
- Removed stale `syncPostHog` imports and migrated the development consent
  page to `applyAnalyticsConsent`.
- Restored the consent change event and the project cookie name.

## Evidence

- Regression test: `tests/consent.spec.ts` verifies that rejecting analytics
  produces no `/flags` request.
- Chromium consent suite: 4 tests passed.
- Production build: passed.
- ESLint passed for the changed production consent and analytics files.

## Status

DONE. The original request path is prevented and covered by a browser
regression test. The development-only cookie test page retains a pre-existing
`react-hooks/set-state-in-effect` lint finding unrelated to this fix.
