# Monorepo Starter

Modern monorepo using pnpm, Turborepo, and Changesets.

## Features

- 📦 [pnpm](https://pnpm.io/) - Fast package management
- 🏎️ [Turborepo](https://turbo.build/) - High-performance build system
- 🚢 [Changesets](https://github.com/changesets/changesets) - Versioning and publishing
- 🧹 [Husky](https://typicode.github.io/husky/) - Git hooks
- 📝 [commitlint](https://commitlint.js.org/) - Enforce conventional commits
- 🛡️ [ESLint](https://eslint.org/) - Code linting with shared configurations
- 🔄 [TypeScript](https://www.typescriptlang.org/) - Shared TypeScript configurations
- 🎨 [Prettier](https://prettier.io/) - Code formatting with shared configurations

## Requirements

- Node.js 22.x
- pnpm 10.5.2+

## Project Structure

```bash
monorepo-starter/
├── apps/                 # Application packages
├── packages/             # Shared packages, libraries, and utilities
│   ├── typescript-config/ # Shared TypeScript configurations
│   ├── eslint-config/    # Shared ESLint configurations
│   └── prettier-config/  # Shared Prettier configurations
├── .changeset/          # Changeset files
├── package.json         # Root package.json
├── pnpm-workspace.yaml  # pnpm workspace configuration
└── turbo.json           # Turborepo configuration
```

## Getting Started

```bash
# Clone and install
git clone https://github.com/yourusername/monorepo-starter.git
cd monorepo-starter
pnpm install

# Common commands
```

## Common Commands

```bash
# Development
pnpm dev         # Start development servers
pnpm build       # Build all packages
pnpm test        # Run tests

# Code Quality
pnpm lint        # Run linting
pnpm lint-staged # Run staged files linting
pnpm check-types # Type checking
pnpm format      # Format code

# UI Components
pnpm add-ui  # Add new shadcn UI components to the UI library
```

## Code Quality

### Husky Git Hooks

- **pre-commit**: Runs type checking and linting on code
- **commit-msg**: Validates commit messages

### Conventional Commits

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>
```

Common types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`

### Creating Commits

```bash
# Interactive commit prompt
pnpm commit

# Manual commit
git commit -m "type(scope): subject" -m "description"
```

## Publishing Packages

```bash
# Create a changeset
pnpm changeset

# Version packages
pnpm changeset version

# Publish packages
pnpm publish-packages
```

## Adding New Apps and Packages

1. Create a directory in `apps/` or `packages/`
2. Initialize your application/package
3. Add to workspace in package.json

## License

MIT License - see the [LICENSE](./LICENSE) file for details.
