import eslint from '@eslint/js';
import checkFile from 'eslint-plugin-check-file';
import prettier from 'eslint-plugin-prettier/recommended';
import turbo from 'eslint-plugin-turbo';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.stylisticTypeChecked,
      turbo.configs['flat/recommended'],
      prettier,
    ],
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    plugins: {
      'check-file': checkFile,
    },
    rules: {
      'check-file/filename-naming-convention': ['error', { '**/*.{js,jsx,ts,tsx}': '[0-9a-z-.]+' }],
    },
  },
  {
    files: ['**/*.{js,jsx}'],
    extends: [tseslint.configs.disableTypeChecked],
  },
);
