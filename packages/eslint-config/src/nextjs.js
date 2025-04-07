import next from '@next/eslint-plugin-next';
import tseslint from 'typescript-eslint';

export default tseslint.config({
  plugins: {
    '@next/next': next,
  },
  rules: {
    ...next.configs.recommended.rules,
    ...next.configs['core-web-vitals'].rules,
  },
});
