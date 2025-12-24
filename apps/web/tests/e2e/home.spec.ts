import { expect, test } from '@playwright/test';

test('home page shows hello world and button', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Hello World')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Button' })).toBeVisible();
});
