import type { PluginConfig as SortImportsConfig } from '@ianvs/prettier-plugin-sort-imports';
import type { Config } from 'prettier';
import type { PluginOptions as TailwindConfig } from 'prettier-plugin-tailwindcss';

declare const config: Config & SortImportsConfig & TailwindConfig;
export default config;
