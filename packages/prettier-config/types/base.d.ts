import type { PluginConfig as SortImportsConfig } from '@ianvs/prettier-plugin-sort-imports';
import type { Config } from 'prettier';

declare const config: Config & SortImportsConfig;
export default config;
