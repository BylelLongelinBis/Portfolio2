import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});


test('Accessibility switch is not checked by default', async ({ page }) => {
  await expect(page.getByRole('checkbox', { name: /Activer le mode accessible/ })).not.toBeChecked();
});

test('Accessibility switch is working', async ({ page }) => {
    await page.locator('.a11y-toggle').click()
    await expect(page.getByRole('checkbox', { name: /Activer le mode accessible/ })).toBeChecked();
});