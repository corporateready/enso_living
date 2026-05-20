'use client';

import { useEffect } from 'react';
import posthog from 'posthog-js';
import { loadConsent } from '../../../lib/consent';

let initialized = false;

export default function PostHogProvider() {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key || initialized) return;

    const consent = loadConsent();
    const analyticsAccepted = consent?.analytics === true;

    posthog.init(key, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
      persistence: 'localStorage+cookie',
      // Start opted-out; we opt-in below only if consent is stored
      opt_out_capturing_by_default: true,
      capture_pageview: true,
      capture_pageleave: true,
    });

    if (analyticsAccepted) {
      posthog.opt_in_capturing();
    }

    initialized = true;
  }, []);

  return null;
}
