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
