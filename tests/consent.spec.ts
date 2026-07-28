import { test, expect, type BrowserContext, type Page } from '@playwright/test';

const CONSENT_COOKIE = 'enso_consent';

async function blockThirdPartyRequests(page: Page) {
  await page.route('**/*', async (route) => {
    const url = new URL(route.request().url());
    const isLocal = url.hostname === '127.0.0.1' || url.hostname === 'localhost';

    if (url.protocol.startsWith('http') && !isLocal) {
      await route.abort();
      return;
    }

    await route.continue();
  });
}

async function readConsent(context: BrowserContext) {
  const cookie = (await context.cookies()).find(
    ({ name }) => name === CONSENT_COOKIE,
  );

  expect(cookie, `${CONSENT_COOKIE} should be saved`).toBeDefined();
  return JSON.parse(decodeURIComponent(cookie!.value));
}

test.beforeEach(async ({ page }) => {
  await blockThirdPartyRequests(page);
});

test('shows Romanian consent UI on /living and saves custom preferences', async ({
  context,
  page,
}) => {
  await page.goto('/living');
  await expect(page.locator('#consent-managed-gtm')).toHaveCount(0);

  const banner = page.getByRole('region', {
    name: 'Consimțământ pentru cookie-uri',
  });
  await expect(banner).toBeVisible();
  await expect(banner.getByText('Acest site utilizează cookie-uri')).toBeVisible();
  await expect(banner.getByRole('button', { name: 'Respinge' })).toBeVisible();
  await expect(
    banner.getByRole('button', { name: 'Personalizează' }),
  ).toBeVisible();
  await expect(
    banner.getByRole('button', { name: 'Acceptă toate' }),
  ).toBeVisible();

  await banner.getByRole('button', { name: 'Personalizează' }).click();

  const dialog = page.getByRole('dialog', { name: 'Preferințe cookie-uri' });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByText('Esențiale', { exact: true })).toBeVisible();
  await expect(dialog.getByText('Mereu active')).toBeVisible();

  const analytics = dialog.getByRole('switch', {
    name: 'Analiză și performanță',
  });
  const marketing = dialog.getByRole('switch', {
    name: 'Marketing și publicitate',
  });
  await expect(analytics).toHaveAttribute('aria-checked', 'false');
  await expect(marketing).toHaveAttribute('aria-checked', 'false');

  await analytics.click();
  await dialog.getByRole('button', { name: 'Salvează preferințele' }).click();

  await expect(dialog).toBeHidden();
  await expect(await readConsent(context)).toMatchObject({
    analytics: true,
    marketing: false,
  });
  await expect(page.locator('#consent-managed-gtm')).toHaveCount(1);
});

test('shows English consent UI on /living-en and saves rejection', async ({
  context,
  page,
}) => {
  await page.goto('/living-en');

  const banner = page.getByRole('region', { name: 'Cookie consent' });
  await expect(banner).toBeVisible();
  await expect(banner.getByText('This website uses cookies')).toBeVisible();
  await expect(banner.getByRole('button', { name: 'Deny' })).toBeVisible();
  await expect(banner.getByRole('button', { name: 'Customize' })).toBeVisible();
  await expect(banner.getByRole('button', { name: 'Allow all' })).toBeVisible();

  await banner.getByRole('button', { name: 'Deny' }).click();

  await expect(banner).toBeHidden();
  await expect(await readConsent(context)).toMatchObject({
    analytics: false,
    marketing: false,
  });
});

test('rejecting analytics does not request PostHog feature flags', async ({
  page,
}) => {
  let flagsRequestCount = 0;
  page.on('request', (request) => {
    if (new URL(request.url()).pathname.includes('/flags/')) {
      flagsRequestCount += 1;
    }
  });

  await page.goto('/living');
  await page.evaluate(() => {
    const posthog = {
      __loaded: true,
      config: {
        advanced_disable_feature_flags: false,
      },
      set_config(config: Record<string, unknown>) {
        Object.assign(this.config, config);
      },
      stopSessionRecording() {},
      opt_out_capturing() {},
      reset() {
        if (!this.config.advanced_disable_feature_flags) {
          void fetch('/flags/?v=2&compression=base64', { method: 'POST' });
        }
      },
      persistence: { clear() {} },
      sessionPersistence: { clear() {} },
      __request_queue: [],
      _requestQueue: { _queue: [] },
      _retryQueue: { _queue: [] },
    };

    Object.defineProperty(window, 'posthog', {
      configurable: true,
      value: posthog,
      writable: true,
    });
  });

  await page
    .getByRole('region', { name: 'Consimțământ pentru cookie-uri' })
    .getByRole('button', { name: 'Respinge' })
    .click();
  await page.waitForTimeout(100);

  expect(flagsRequestCount).toBe(0);
});

test('shares consent across languages and reopens preferences in English', async ({
  page,
}) => {
  await page.goto('/living');

  const romanianBanner = page.getByRole('region', {
    name: 'Consimțământ pentru cookie-uri',
  });
  await romanianBanner.getByRole('button', { name: 'Acceptă toate' }).click();
  await expect(romanianBanner).toBeHidden();

  await page.getByRole('link', { name: 'en', exact: true }).click();
  await expect(page).toHaveURL(/\/living-en$/);
  await expect(page.getByRole('region', { name: 'Cookie consent' })).toBeHidden();

  await page.evaluate(() => {
    window.dispatchEvent(new CustomEvent('open-consent-manager'));
  });

  const dialog = page.getByRole('dialog', { name: 'Cookie preferences' });
  await expect(dialog).toBeVisible();
  await expect(
    dialog.getByRole('switch', { name: 'Analytics and performance' }),
  ).toHaveAttribute('aria-checked', 'true');
  await expect(
    dialog.getByRole('switch', { name: 'Marketing and advertising' }),
  ).toHaveAttribute('aria-checked', 'true');
  await expect(
    dialog.getByRole('button', { name: 'Save preferences' }),
  ).toBeVisible();
});

test('uses the ENSŌ logo and reopens saved preferences from the cookie button', async ({
  page,
}) => {
  await page.goto('/living');

  const banner = page.getByRole('region', {
    name: 'Consimțământ pentru cookie-uri',
  });
  await expect(
    banner.getByRole('img', { name: 'ENSŌ Living' }),
  ).toHaveAttribute('src', /enso-dark-logo\.png/);

  await banner.getByRole('button', { name: 'Personalizează' }).click();
  const dialog = page.getByRole('dialog', { name: 'Preferințe cookie-uri' });
  const analytics = dialog.getByRole('switch', {
    name: 'Analiză și performanță',
  });
  await analytics.click();
  await dialog
    .getByRole('button', { name: 'Salvează preferințele' })
    .click();

  const reopenButton = page.getByRole('button', {
    name: 'Preferințe cookie-uri',
  });
  await expect(reopenButton).toBeVisible();
  // The pre-existing Next.js dev issue indicator overlays the bottom-left
  // corner in local test runs, exactly where the cookie button is anchored.
  await reopenButton.focus();
  await reopenButton.dispatchEvent('click');

  await expect(dialog).toBeVisible();
  await expect(
    dialog.getByRole('switch', { name: 'Analiză și performanță' }),
  ).toHaveAttribute('aria-checked', 'true');
  await expect(
    dialog.getByRole('switch', { name: 'Marketing și publicitate' }),
  ).toHaveAttribute('aria-checked', 'false');

  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
  await expect(reopenButton).toBeFocused();
});
