import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
import type { NextConfig } from 'next';

const config: NextConfig = {
  output: 'standalone',
  transpilePackages: ['@repo/ui'],
};

export default config;

if (process.env.NODE_ENV === 'development' && process.env.VITEST !== 'true') {
  // Enable calling `getCloudflareContext()` in `next dev`.
  // See https://opennext.js.org/cloudflare/bindings#local-access-to-bindings.
  void initOpenNextCloudflareForDev();
}
