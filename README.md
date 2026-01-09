# Monorepo Starter

A modern monorepo starter template using pnpm workspaces, Turborepo, and Changesets.

## Technology Stack

- 📦 [pnpm](https://pnpm.io/) - Fast package management
- ⚡ [Turborepo](https://turbo.build/) - High-performance build system
- 🗂️ [Changesets](https://github.com/changesets/changesets) - Versioning and publishing
- 🐶 [Husky](https://typicode.github.io/husky/) - Git hooks
- ✅ [commitlint](https://commitlint.js.org/) - Enforce conventional commits

## Requirements

- Node.js 24.x
- pnpm 10.26.2

## Directory Structure

```bash
monorepo-starter/
├── .changeset/             # Changeset files
├── .github/                # GitHub related files (workflows, templates, etc.)
├── .husky/                 # Git hooks configuration
├── .vscode/                # VS Code settings
├── apps/                   # Application packages
│   └── web/                # Next.js web application
├── packages/               # Shared packages, libraries, and utilities
│   ├── typescript-config/  # Shared TypeScript configurations
│   ├── eslint-config/      # Shared ESLint configurations
│   ├── prettier-config/    # Shared Prettier configurations
│   └── ui/                 # Shared UI component library
├── .gitattributes          # Git attributes configuration
├── .gitignore              # Git ignore file
├── .node-version           # Node.js version
├── commitlint.config.js    # Commitlint configuration
├── LICENSE                 # License file
├── package.json            # Root package.json
├── pnpm-lock.yaml          # pnpm lock file
├── pnpm-workspace.yaml     # pnpm workspace configuration
├── README.md               # Project documentation
└── turbo.json              # Turborepo configuration
```

## Getting Started

Run the following commands from the repository root.

```bash
# Clone and install
git clone https://github.com/yourusername/monorepo-starter.git
cd monorepo-starter
pnpm install
```

## Common Commands

```bash
# Development
pnpm dev            # Start all dev servers
pnpm storybook      # Start Storybook

# Build & Run
pnpm build          # Build all apps and packages
pnpm start          # Start all production servers

# Code Quality
pnpm check          # Run all checks (format + types + lint)
pnpm fix            # Fix format/lint
pnpm check-format   # Check formatting
pnpm format         # Format code
pnpm check-types    # Typecheck
pnpm lint           # Lint code
pnpm fix-lint       # Fix lint issues

# Testing
pnpm test           # Run all tests
pnpm test:unit      # Run unit tests
pnpm test:storybook # Run Storybook tests
pnpm test:e2e       # Run E2E tests

# UI Components
pnpm add-ui -- [component...]  # Add shadcn UI components to the UI library

# Single package/app
pnpm --filter web dev          # Run a command for a specific package/app
```

## Code Quality

### Husky Git Hooks

- **pre-commit**: Checks formating and runs linting on code
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

## CI/CD

Workflows live in `.github/workflows` and are shared across the monorepo. App-specific behavior and deployment details live in each app README (for example `apps/web/README.md`).

### Turborepo Remote Cache

CI uses Turborepo to orchestrate tasks (format, lint, tests, build). Remote caching is optional and configured in GitHub Actions:

- `TURBO_TEAM` (GitHub Actions variable)
- `TURBO_TOKEN` (GitHub Actions secret)

If these are not set, Turbo uses the local cache only.

### GitHub Actions Workflows

- `check-pr.yaml`: Runs project checks on `pull_request`. Optional E2E runs when a PR has the `e2e` label.
- `deploy-*.yaml`: Runs deploy pipeline on `push`. Preview vs production behavior depends on the app.

## Publishing Packages

Make sure your npm auth is configured (for example via npm login or NPM_TOKEN).

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
3. Add to workspace in `pnpm-workspace.yaml`

## License

MIT License - see the [LICENSE](./LICENSE) file for details.
