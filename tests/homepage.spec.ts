import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});


test('Title to be Bylel Longelin', async ({ page }) => {
  await expect(page).toHaveTitle(/Bylel Longelin/);
});

test('H1 with name to be visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Bylel Longelin', level: 1 })).toBeVisible();
});