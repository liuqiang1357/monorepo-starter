# @repo/prettier-config

Shared Prettier configuration for consistent code formatting across your projects.

## Usage

Add to your package.json:

```json
"dependencies": {
  "@repo/prettier-config": "workspace:*"
}
```

Reference in your package.json:

```json
{
  "prettier": "@repo/prettier-config"
}
```

Or extend in a config file:

```js
// .prettierrc.js
import prettierConfig from "@repo/prettier-config";

export default {
  ...prettierConfig,
  // Your custom overrides here
};
```

## Features

This configuration includes:

- Sensible defaults for code formatting
- Import sorting with [@ianvs/prettier-plugin-sort-imports](https://github.com/IanVS/prettier-plugin-sort-imports)
- Package.json formatting
- Tailwind CSS class sorting

## Ignoring Files

By default, Prettier respects your `.gitignore` file and will not format files that are ignored by Git. If you want to override this behavior, you can create a `.prettierignore` file with specific rules.

## Extending

You can extend or override any of these settings in your local project configuration.
