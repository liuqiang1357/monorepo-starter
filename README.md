# Monorepo Starter

A modern monorepo starter template using pnpm workspaces, Turborepo, and Changesets.

## Features

- 📦 [pnpm](https://pnpm.io/) for fast, disk-efficient package management
- 🏎️ [Turborepo](https://turbo.build/) for high-performance build system
- 🚢 [Changesets](https://github.com/changesets/changesets) for versioning and package publishing
- 📱 Scalable monorepo architecture with apps and packages directories
- 🔄 Configured scripts for development, building, testing, and deployment

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

## Publishing Packages

This project uses [Changesets](https://github.com/changesets/changesets) for versioning and publishing packages to npm.

```bash
# Create a new changeset
pnpm changeset

# Publish packages
pnpm publish-packages
```

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
