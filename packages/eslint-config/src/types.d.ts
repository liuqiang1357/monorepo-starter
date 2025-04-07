declare module 'eslint-plugin-check-file' {
  const plugin: Record<string, unknown>;
  export default plugin;
}

declare module '@next/eslint-plugin-next' {
  import type { TSESLint } from '@typescript-eslint/utils';

  type ESLintRules = Record<string, TSESLint.Linter.RuleEntry>;

  const plugin: TSESLint.Linter.Plugin & {
    configs: {
      recommended: { rules: ESLintRules };
      'core-web-vitals': { rules: ESLintRules };
    };
  };
  export default plugin;
}
