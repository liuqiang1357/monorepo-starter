import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

/** @typedef {import('prettier').Config} PrettierConfig */

/** @type {PrettierConfig} */
const config = {
  arrowParens: 'avoid',
  printWidth: 100,
  singleQuote: true,
  plugins: [require.resolve('prettier-plugin-packagejson')],
};

export default config;
