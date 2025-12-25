import { expect, test } from '@playwright/test';

test('hello world page shows hello world', async ({ page }) => {
  await page.goto('/hello-world');
  await expect(page.getByText('Hello World')).toBeVisible();
});
