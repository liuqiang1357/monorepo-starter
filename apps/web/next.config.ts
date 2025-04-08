import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
import { NextConfig } from 'next';

if (process.env.NODE_ENV === 'development') {
  void setupDevPlatform();
}

const config: NextConfig = {
  transpilePackages: ['@repo/ui'],
};

export default config;
