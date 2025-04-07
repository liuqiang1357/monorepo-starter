import query from '@tanstack/eslint-plugin-query';
import react from 'eslint-plugin-react';
import compiler from 'eslint-plugin-react-compiler';
import hooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

export default tseslint.config({
  extends: [query.configs['flat/recommended']],
  plugins: {
    react,
    'react-compiler': compiler,
    'react-hooks': hooks,
  },
  rules: {
    ...react.configs['jsx-runtime'].rules,
    'react-compiler/react-compiler': 'error',
    ...hooks.configs.recommended.rules,
  },
});
