import next from '@next/eslint-plugin-next';
import tseslint from 'typescript-eslint';
import react from './react.js';

export default tseslint.config({
  extends: [react, next.flatConfig.recommended, next.flatConfig.coreWebVitals],
});
