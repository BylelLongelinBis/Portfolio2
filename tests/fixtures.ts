import { test as base, expect, type Page } from '@playwright/test';

export const test = base.extend<{ accessiblePage: Page }>({
  accessiblePage: async ({ page }, use) => {
    await page.goto('/');
    await page.locator('.a11y-toggle').click();
    await use(page);
  },
});

export { expect };