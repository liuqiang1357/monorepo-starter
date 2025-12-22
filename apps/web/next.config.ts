import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
import type { NextConfig } from 'next';

if (process.env.NODE_ENV === 'development') {
  void initOpenNextCloudflareForDev();
}

const config: NextConfig = {
  output: 'standalone',
  transpilePackages: ['@repo/ui'],
};

export default config;
