# PostHog form payload tracking IDs debug

Date: 2026-07-13

## Symptom

First form submission intermittently misses `external_id` and `pageview_event_id` in the form tracking payload. Re-submitting after the identifiers exist produces a complete payload.

## Root cause

The page components read `localStorage.pageview_event_id` and `localStorage.external_id` only once on mount. GTM/PostHog writes or registers those values asynchronously, so the initial React state can be empty and remain stale for the first submit.

There was also a second PostHog initialization path in the app: `PostHogProvider` initialized `posthog-js` from React while GTM also initializes the default PostHog instance. That can race over `window.posthog`, persistence, pageview behavior, and loaded callbacks.

## Fix

Added `lib/tracking-ids.js` to read the latest tracking IDs from `localStorage`, loaded PostHog super properties, and PostHog getter fallbacks. The submit handlers now wait briefly for both IDs and use those fresh local values in the Meta/PostHog payloads.

Removed `PostHogProvider` from `app/layout.jsx` so GTM is the single owner of the default PostHog instance.

Touched pages:
- `app/page.jsx`
- `app/living/page.jsx`
- `app/en/page.jsx`
- `app/living-en/page.jsx`

## Verification

Targeted ESLint passed with zero errors and zero warnings for changed files:

`npx eslint app/layout.jsx app/page.jsx app/en/page.jsx app/living/page.jsx app/living-en/page.jsx lib/tracking-ids.js`

Full `npm run lint` still fails on pre-existing unrelated errors across the repo.

`npm run build` did not finish after several minutes in the restricted environment and was stopped.

## Status

DONE_WITH_CONCERNS: root cause is addressed in code, but a live GTM/PostHog browser submission should still be verified in staging/production because GTM tag timing and consent behavior are external to the repo.
