/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */

/** @type { PrettierConfig | SortImportsConfig | TailwindConfig } */
export default {
  arrowParens: 'avoid',
  printWidth: 100,
  singleQuote: true,
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-packagejson',
    'prettier-plugin-tailwindcss',
  ],
  importOrder: ['<BUILTIN_MODULES>', '<THIRD_PARTY_MODULES>', '^@/(.*)$', '^[./]'],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
  tailwindFunctions: ['cva', 'cx', 'cn'],
  tailwindStylesheet: '../ui/src/styles/globals.css',
};
