import * as queryPlugin from '@tanstack/eslint-plugin-query';
import react from 'eslint-plugin-react';
import hooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

export default tseslint.config({
  extends: [
    react.configs.flat.recommended,
    react.configs.flat['jsx-runtime'],
    // @ts-expect-error - queryPlugin.default exists at runtime but type definition is incorrect
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    queryPlugin.default.configs['flat/recommended'],
  ],
  plugins: {
    'react-hooks': hooks,
  },
  rules: {
    ...react.configs['jsx-runtime'].rules,
    ...hooks.configs.recommended.rules,

    'react/prop-types': 'off',
    'react/self-closing-comp': 'error',
  },
  settings: { react: { version: 'detect' } },
});
