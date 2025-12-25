import { createRequire } from 'node:module';
import base from './base.js';

const require = createRequire(import.meta.url);

/** @typedef {import('./base.js').PrettierConfig} BaseConfig */
/** @typedef {import('prettier-plugin-tailwindcss').PluginOptions} TailwindPluginOptions */

/** @type {BaseConfig & TailwindPluginOptions} */
const config = {
  ...base,
  plugins: [...(base.plugins ?? []), require.resolve('prettier-plugin-tailwindcss')],
  tailwindAttributes: ['class', 'className', '.*Class', '.*ClassName', 'classNames'],
  tailwindFunctions: ['cva', 'cx', 'cn'],
  tailwindStylesheet: './src/styles/globals.css',
};

export default config;
