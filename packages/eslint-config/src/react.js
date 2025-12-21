import query from '@tanstack/eslint-plugin-query';
import react from 'eslint-plugin-react';
import hooks from 'eslint-plugin-react-hooks';
import storybook from 'eslint-plugin-storybook';
import tseslint from 'typescript-eslint';
import base from './base.js';

export default tseslint.config({
  extends: [
    base,
    react.configs.flat.recommended,
    react.configs.flat['jsx-runtime'],
    query.configs['flat/recommended'],
    storybook.configs['flat/recommended'],
  ],
  plugins: {
    'react-hooks': hooks,
  },
  rules: {
    ...hooks.configs.recommended.rules,

    'react/prop-types': 'off',
    'react/self-closing-comp': 'error',
  },
  settings: { react: { version: 'detect' } },
});
