import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

/** @typedef {import('prettier').Config} PrettierConfig */
/** @typedef {import('@ianvs/prettier-plugin-sort-imports').PluginConfig} SortImportsPluginConfig */

/** @type {PrettierConfig & SortImportsPluginConfig} */
const config = {
  arrowParens: 'avoid',
  printWidth: 100,
  singleQuote: true,
  plugins: [
    require.resolve('@ianvs/prettier-plugin-sort-imports'),
    require.resolve('prettier-plugin-packagejson'),
  ],
  importOrder: ['<BUILTIN_MODULES>', '<THIRD_PARTY_MODULES>', '^@/(.*)$', '^[./]'],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
};

export default config;
