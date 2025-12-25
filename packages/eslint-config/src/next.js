import next from '@next/eslint-plugin-next';
import { defineConfig } from 'eslint/config';
import react from './react.js';

export default defineConfig({
  extends: [react, next.flatConfig.recommended, next.flatConfig.coreWebVitals],
});
