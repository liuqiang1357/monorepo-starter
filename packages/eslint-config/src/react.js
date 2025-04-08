import * as queryPlugin from '@tanstack/eslint-plugin-query';
import react from 'eslint-plugin-react';
import compiler from 'eslint-plugin-react-compiler';
import hooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

export default tseslint.config({
  // @ts-expect-error - queryPlugin.default exists at runtime but type definition is incorrect
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  extends: [queryPlugin.default.configs['flat/recommended']],
  plugins: {
    react,
    'react-compiler': compiler,
    'react-hooks': hooks,
  },
  rules: {
    ...react.configs['jsx-runtime'].rules,
    ...hooks.configs.recommended.rules,

    'react-compiler/react-compiler': 'error',
  },
});
