# Monorepo Starter

A modern monorepo starter template using pnpm workspaces, Turborepo, and Changesets.

## Features

- 📦 [pnpm](https://pnpm.io/) for fast, disk-efficient package management
- 🏎️ [Turborepo](https://turbo.build/) for high-performance build system
- 🚢 [Changesets](https://github.com/changesets/changesets) for versioning and package publishing
- 📱 Scalable monorepo architecture with apps and packages directories
- 🔄 Configured scripts for development, building, testing, and deployment
- 🧹 [Husky](https://typicode.github.io/husky/) for Git hooks
- ✅ [lint-staged](https://github.com/okonet/lint-staged) for running linters on staged files
- 📝 [commitlint](https://commitlint.js.org/) for enforcing conventional commit messages

## Requirements

- Node.js 22.x
- pnpm 10.5.2+

## Project Structure

```
monorepo-starter/
├── apps/                 # Application packages
├── packages/             # Shared packages, libraries, and utilities
├── .changeset/          # Changeset configurations
├── package.json         # Root package.json
├── pnpm-workspace.yaml  # pnpm workspace configuration
└── turbo.json           # Turborepo configuration
```

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/monorepo-starter.git
cd monorepo-starter

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server for all apps
pnpm dev

# Build all packages and apps
pnpm build

# Run tests across all packages
pnpm test

# Run linting across all packages
pnpm lint

# Check types across all packages
pnpm check-types

# Format code across all packages
pnpm format
```

## Code Quality and Git Workflow

This repository is set up with several tools to ensure code quality and consistent commit history:

### Husky Git Hooks

[Husky](https://typicode.github.io/husky/) is configured to run the following Git hooks:

- **pre-commit**: Runs lint-staged to lint and format staged files before commit
- **commit-msg**: Validates commit messages with commitlint

### Lint Staged

[lint-staged](https://github.com/okonet/lint-staged) runs linters and formatters only on files that are staged for commit:

```json
"lint-staged": {
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.{json,md,yml,yaml}": [
    "prettier --write"
  ]
}
```

### Conventional Commits

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages.

#### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

Types:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to our CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files

#### Using @commitlint/prompt-cli

This project uses [@commitlint/prompt-cli](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/prompt-cli) to guide you through creating commits that follow the conventional commit format:

```bash
# Use the commit script defined in package.json
pnpm commit
```

This will launch an interactive prompt that guides you through creating a properly formatted commit message that adheres to the commitlint rules.

### Creating a Commit

1. Stage your changes:

   ```bash
   git add .
   ```

2. Use the interactive commit prompt:

   ```bash
   pnpm commit
   ```

   Or manually create a commit with a conventional message:

   ```bash
   git commit -m "type(scope): subject" -m "body"
   ```

   Example:

   ```bash
   git commit -m "feat(ui): add new button component" -m "Added a reusable button component to the UI library"
   ```

## Publishing Packages

This project uses [Changesets](https://github.com/changesets/changesets) for versioning and publishing packages to npm.

### Managing Changes with Changesets

When making changes to packages, follow these steps:

1. **Create a changeset** to document your changes:

   ```bash
   pnpm changeset
   ```

   This interactive prompt will guide you to select affected packages, bump types, and add a description.

2. **Version packages** when ready to release:

   ```bash
   pnpm changeset version
   ```

   This updates package versions and generates changelogs based on your changesets.

3. **Publish packages**:
   ```bash
   pnpm publish-packages
   ```

For CI/CD workflows, consider using [Changesets GitHub Action](https://github.com/changesets/action).

## Adding New Apps and Packages

### Creating a New App

1. Create a new directory in the `apps` folder
2. Initialize your application
3. Add it to the workspace by updating its package.json

### Creating a New Package

1. Create a new directory in the `packages` folder
2. Initialize your package
3. Add it to the workspace by updating its package.json

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
