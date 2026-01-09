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
│   ├── app/                    # Next.js app router pages and layouts
│   ├── assets/                 # Static assets (images, fonts, etc.)
│   ├── components/             # React components specific to this app
│   │   ├── app/                # Application-level components (e.g., providers)
│   │   ├── hello-world/        # Example component demonstrating basic patterns
│   │   │   ├── hello-world.tsx           # Component implementation
│   │   │   ├── hello-world.test.tsx      # Unit tests (co-located)
│   │   │   └── hello-world.stories.tsx   # Storybook stories (co-located)
│   │   └── svgs/               # SVG icon components
│   ├── actions/                # Handlers for executing operations (e.g., RPC calls)
│   ├── configs/                # Configuration files for the application
│   ├── errors/                 # Error handling utilities
│   ├── hooks/                  # Custom React hooks
│   ├── locales/                # Internationalization files
│   ├── states/                 # State management
│   ├── stories/                # Storybook documentation and stories not related to components
│   ├── styles/                 # CSS and style definitions
│   ├── types/                  # Global TypeScript type declarations and definitions
│   └── utils/                  # General utility functions
├── tests/                      # Test files
│   └── e2e/                    # End-to-end tests
├── .gitignore                  # App-specific git ignore rules
├── cloudflare-env.d.ts         # Cloudflare Workers env type definitions
├── eslint.config.js            # ESLint configuration
├── lint-staged.config.js       # Lint-staged configuration
├── next.config.ts              # Next.js configuration
├── open-next.config.ts         # OpenNext configuration
├── package.json                # Package manifest
├── playwright.config.ts        # Playwright configuration
├── postcss.config.js           # PostCSS configuration
├── prettier.config.js          # Prettier configuration
├── README.md                   # App documentation
├── tsconfig.json               # TypeScript configuration
├── turbo.json                  # Turborepo pipeline configuration
├── vitest.config.ts            # Vitest configuration
├── vitest.setup.ts             # Vitest setup
└── wrangler.jsonc              # Cloudflare Wrangler configuration
```

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
