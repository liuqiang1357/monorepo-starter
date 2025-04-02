# TypeScript Config

Shared TypeScript configurations for the monorepo.

## Usage

### Next.js Project

```json
{
  "extends": "@repo/typescript-config/nextjs.json",
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### React Library

```json
{
  "extends": "@repo/typescript-config/react-library.json",
  "include": ["src/**/*.ts", "src/**/*.tsx"],
  "exclude": ["node_modules", "dist"]
}
```

### Node.js Library

```json
{
  "extends": "@repo/typescript-config/node-library.json",
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "dist"]
}
```

## Configurations

The package includes several pre-defined configurations:

- `base.json`: Base configuration for all TypeScript projects
- `nextjs.json`: Configuration for Next.js applications
- `react-library.json`: Configuration for React libraries
- `node-library.json`: Configuration for Node.js libraries

Each configuration is tailored for its specific use case while maintaining consistency across projects.
