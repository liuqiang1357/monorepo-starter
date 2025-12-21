declare module '@next/eslint-plugin-next' {
  import type { Linter } from 'eslint';

  export const flatConfig: {
    recommended: Linter.Config;
    coreWebVitals: Linter.Config;
  };
}

declare module '@tanstack/eslint-plugin-query' {
  import type { Linter } from 'eslint';

  const plugin: {
    configs: {
      'flat/recommended': Linter.Config;
    };
  };

  export default plugin;
}
