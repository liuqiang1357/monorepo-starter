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

## Configuration

Key settings: 100 character line width, single quotes, arrow function parentheses avoided when possible, and Tailwind CSS class sorting.
