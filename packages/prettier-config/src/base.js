import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

export default {
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
