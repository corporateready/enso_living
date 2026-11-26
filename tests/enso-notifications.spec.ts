import { test, expect } from '@playwright/test';

// The pages of ENSO Notifications, ENSO's app for Google Chat. Its Google
// Workspace Marketplace listing and Google's consent screen link to these
// addresses, so they must keep answering, and the privacy policy must say
// what Google requires. ENSO's new website (corporateready/enso-pro) serves
// the same addresses.
const pages = [
  { path: '/en/enso-notifications', title: 'ENSO Notifications' },
  {
    path: '/en/enso-notifications/privacy-policy',
    title: 'Privacy policy for ENSO Notifications',
  },
  {
    path: '/en/enso-notifications/terms-and-conditions',
    title: 'Terms and conditions for ENSO Notifications',
  },
];

for (const { path, title } of pages) {
  test(`${path} shows its page and links to the other two`, async ({ page }) => {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(/ENSO Notifications/);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(title);

    const menu = page.getByRole('navigation', { name: 'ENSO Notifications' });
    await expect(menu.locator('[aria-current="page"]')).toHaveCount(1);
    for (const other of pages.filter((p) => p.path !== path)) {
      await expect(menu.locator(`a[href="${other.path}"]`)).toHaveCount(1);
    }
  });
}

test('the privacy policy names who is responsible and carries the Limited Use statement', async ({
  page,
}) => {
  await page.goto('/en/enso-notifications/privacy-policy');
  const policy = page.locator('article');

  await expect(policy).toContainText(
    'Kairos Way SRL (mun. Chișinău, str. Calea Ieșilor 6, MD-2069, Republic of Moldova)',
  );
  await expect(policy.locator('a[href="mailto:corporate@enso.ro"]').first()).toBeVisible();
  await expect(policy).toContainText('userinfo.email and userinfo.profile');
  await expect(
    policy.locator('a[href="https://developers.google.com/terms/api-services-user-data-policy"]'),
  ).toHaveText('Google API Services User Data Policy');
  await expect(policy).toContainText('including the Limited Use requirements');
});
