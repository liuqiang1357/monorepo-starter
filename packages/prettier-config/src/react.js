import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

import base from './base.js';

export default {
  ...base,
  plugins: [...(base.plugins ?? []), require.resolve('prettier-plugin-tailwindcss')],
  tailwindFunctions: ['cva', 'cx', 'cn'],
  tailwindStylesheet: './src/styles/globals.css',
};
