import { defineConfig, devices } from '@playwright/test';

const baseURL = `http://localhost:${process.env.PLAYWRIGHT_PORT}`;

export default defineConfig({
  testDir: './tests/e2e',
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
  reporter: [['html', { open: 'never' }]],
});
