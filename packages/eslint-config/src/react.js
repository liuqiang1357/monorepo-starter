import query from '@tanstack/eslint-plugin-query';
import { defineConfig } from 'eslint/config';
import react from 'eslint-plugin-react';
import hooks from 'eslint-plugin-react-hooks';
import storybook from 'eslint-plugin-storybook';
import base from './base.js';

export default defineConfig({
  extends: [
    base,
    react.configs.flat.recommended,
    react.configs.flat['jsx-runtime'],
    hooks.configs.flat.recommended,
    query.configs['flat/recommended'],
    storybook.configs['flat/recommended'],
  ],
  rules: {
    'react/prop-types': 'off',
    'react/self-closing-comp': 'error',
  },
  settings: { react: { version: 'detect' } },
});
