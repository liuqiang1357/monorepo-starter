import { createRequire } from 'node:module';
import base from './base.js';

const require = createRequire(import.meta.url);

/** @typedef {import('prettier').Config} PrettierConfig */
/** @typedef {import('@ianvs/prettier-plugin-sort-imports').PluginConfig} SortImportsPluginConfig */
/** @typedef {import('prettier-plugin-tailwindcss').PluginOptions} TailwindPluginOptions */

/** @type {PrettierConfig & SortImportsPluginConfig & TailwindPluginOptions} */
const config = {
  ...base,
  plugins: [...(base.plugins ?? []), require.resolve('prettier-plugin-tailwindcss')],
  tailwindFunctions: ['cva', 'cx', 'cn'],
  tailwindStylesheet: './src/styles/globals.css',
};

export default config;
