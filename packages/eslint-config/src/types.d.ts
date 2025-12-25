declare module '@next/eslint-plugin-next' {
  import type { Linter } from 'eslint';

  export const flatConfig: {
    coreWebVitals: Linter.Config | Linter.Config[];
    recommended: Linter.Config | Linter.Config[];
  };
}

declare module 'eslint-plugin-storybook' {
  import type { Linter } from 'eslint';

  const plugin: {
    configs: {
      'flat/recommended': Linter.Config | Linter.Config[];
    };
  };
  export default plugin;
}
