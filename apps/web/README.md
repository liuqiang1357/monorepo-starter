# Web Application

This is the web frontend application for the monorepo project. It's built with Next.js and provides a modern, responsive user interface.

## Technology Stack

- ⚡ [Next.js](https://nextjs.org/) - React framework with server-side rendering
- ⚛️ [React](https://react.dev/) - UI library
- 🔷 [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## Requirements

- Node.js 24.x
- pnpm 10.26.2

## Directory Structure

Structure relative to `apps/web`:

```bash
.
├── .storybook/                 # Storybook configuration
├── src/                        # Application source
│   ├── app/                    # Next.js App Router pages and layouts
│   ├── features/               # Feature modules (business-oriented)
│   └── shared/                 # Cross-feature reusable modules
├── stories/                    # Storybook docs/stories
├── tests/                      # Test files (e2e, etc.)
├── package.json                # Package manifest
└── ...                         # Tooling/config files
```

### Common directories under `features/*` or `shared/*`

Create these folders inside a feature module or inside `shared` as needed.

- `components/`: UI components
- `hooks/`: React hooks
- `actions/`: API/server actions and data mapping
- `states/`: state atoms/stores
- `utils/`: utility functions
- `types/`: TypeScript types
- `assets/`: static assets
- `configs/`: constants/configuration
- `styles/`: styles/design tokens
- `errors/`: error types/handlers
- `locales/`: i18n resources
- `svgs/`: SVG/icon components

## Getting Started

The installation is handled at the monorepo root level. See the root [README.md](../../README.md) for details.

Run the following commands from either the repository root or `apps/web`.

```bash
pnpm dev
```

## Common Commands

Run these commands from the monorepo root or `apps/web`. If you're at the root and want to target only this app, prefix with `pnpm --filter web`.

```bash
# Development
pnpm dev            # Start the dev server
pnpm storybook      # Start Storybook

# Build & Run
pnpm build          # Build the app
pnpm start          # Start the production server

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

# Tooling
pnpm generate-cf-types # Generate Cloudflare Workers types
```

## Deployment

### Cloudflare Workers (OpenNext)

This application is deployed to Cloudflare Workers using the OpenNext adapter and GitHub Actions. The workflow is configured in `.github/workflows/deploy-cloudflare.yaml`.

Required GitHub Secrets:

- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_API_TOKEN`

## Contributing

Please follow the project's coding standards:

1. Run linters and type checking before committing
2. Follow the established component patterns
3. Write tests for new features

## License

See the [LICENSE](../../LICENSE) file for details.
