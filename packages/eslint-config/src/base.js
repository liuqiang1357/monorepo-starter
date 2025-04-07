import eslint from '@eslint/js';
import gitignore from 'eslint-config-flat-gitignore';
import checkFile from 'eslint-plugin-check-file';
import prettier from 'eslint-plugin-prettier/recommended';
import turbo from 'eslint-plugin-turbo';
import tseslint from 'typescript-eslint';

export default tseslint.config({
  extends: [
    gitignore(),
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    tseslint.configs.stylisticTypeChecked,
    turbo.configs['flat/recommended'],
    prettier,
  ],
  plugins: {
    'check-file': checkFile,
  },
  languageOptions: {
    parserOptions: {
      projectService: {
        allowDefaultProject: ['*.js'],
      },
    },
  },
  linterOptions: {
    reportUnusedDisableDirectives: 'error',
  },
  rules: {
    'check-file/filename-naming-convention': ['error', { '**/*.{js,jsx,ts,tsx}': '[0-9a-z-.]+' }],
  },
});
