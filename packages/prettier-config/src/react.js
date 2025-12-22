import { createRequire } from 'node:module';
import base from './base.js';

const require = createRequire(import.meta.url);

export default {
  ...base,
  plugins: [...(base.plugins ?? []), require.resolve('prettier-plugin-tailwindcss')],
  tailwindFunctions: ['cva', 'cx', 'cn'],
  tailwindStylesheet: './src/styles/globals.css',
};
