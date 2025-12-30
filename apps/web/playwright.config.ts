import { defineConfig, devices } from '@playwright/test';

const baseURL = `http://localhost:${process.env.PORT}`;

export default defineConfig({
  testDir: './tests/e2e',
  outputDir: './test-artifacts/e2e/test-results',
  use: {
    baseURL,
  },
  webServer: {
    command: 'pnpm run dev',
    url: baseURL,
    reuseExistingServer: process.env.CI !== 'true',
  },
  projects: [
    {
      name: 'chromium',
      use: devices['Desktop Chrome'],
    },
  ],
  reporter: [['html', { open: 'never', outputFolder: './test-artifacts/e2e/playwright-report' }]],
});
