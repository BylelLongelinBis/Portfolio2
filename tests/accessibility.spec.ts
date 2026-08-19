import { test, expect } from './fixtures';
import AxeBuilder from '@axe-core/playwright';


test('Accessible page is RGAA compliant', async ({ accessiblePage }) => {
    const results = await new AxeBuilder({ page: accessiblePage }).analyze();
    await expect(results.violations).toHaveLength(0)
    console.log(results.violations);
});

test('Non-Accessible page is RGAA compliant', async ({ page }) => {
    await page.goto('/');
    await page.emulateMedia({ reducedMotion: 'reduce' });
    const results = await new AxeBuilder({ page }).analyze();
    await expect(results.violations).toHaveLength(0)
    console.log(results.violations);
});