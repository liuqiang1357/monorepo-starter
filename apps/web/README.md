# Web Application

This is the web frontend application for the monorepo project. It's built with Next.js and provides a modern, responsive user interface.

## Technology Stack

- [Next.js](https://nextjs.org/) - React framework with server-side rendering
- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## Directory Structure

Structure relative to `apps/web`:

```bash
.
├── .storybook/              # Storybook configuration
├── src/                     # Application source
│   ├── app/                 # Next.js app router pages and layouts
│   ├── assets/              # Static assets (images, fonts, etc.)
│   ├── components/          # React components specific to this app
│   │   ├── app/             # Application-level components (e.g., providers)
│   │   ├── hello-world/     # Example component demonstrating basic patterns
│   │   │   ├── hello-world.tsx  # Component implementation
│   │   │   ├── hello-world.test.tsx  # Unit tests (co-located)
│   │   │   └── hello-world.stories.tsx  # Storybook stories (co-located)
│   │   └── svgs/            # SVG icon components
│   ├── actions/             # Handlers for executing operations (e.g., RPC calls)
│   ├── configs/             # Configuration files for the application
│   ├── errors/              # Error handling utilities
│   ├── hooks/               # Custom React hooks
│   ├── locales/             # Internationalization files
│   ├── states/              # State management
│   ├── stories/             # Storybook documentation and stories not related to components
│   ├── styles/              # CSS and style definitions
│   ├── types/               # Global TypeScript type declarations and definitions
│   └── utils/               # General utility functions
├── tests/                   # Test files
│   └── e2e/                 # End-to-end tests
├── .gitignore               # App-specific git ignore rules
├── cloudflare-env.d.ts      # Cloudflare Workers env type definitions
├── eslint.config.js         # ESLint configuration
├── lint-staged.config.js    # Lint-staged configuration
├── next.config.ts           # Next.js configuration
├── open-next.config.ts      # OpenNext configuration
├── package.json             # Package manifest
├── postcss.config.js        # PostCSS configuration
├── prettier.config.js       # Prettier configuration
├── tsconfig.json            # TypeScript configuration
├── turbo.json               # Turborepo pipeline configuration
├── vitest.config.ts         # Vitest configuration
├── vitest.setup.ts          # Vitest setup
└── wrangler.jsonc           # Cloudflare Wrangler configuration
```

## Getting Started

### Prerequisites

- Node.js 22.x
- pnpm 10.5.2+

### Installation

The installation is handled at the monorepo root level. See the root [README.md](../../README.md) for details.

### Development

Run these commands from the monorepo root. To target only this app, prefix with `pnpm --filter web`.

```bash
# Start the development server
pnpm dev

# Run Storybook
pnpm storybook

# Run type checking
pnpm check-types

# Run linting
pnpm lint

# Format code
pnpm format

# Run all tests (unit + storybook + e2e)
pnpm test

# Run unit tests only
pnpm test:unit

# Run Storybook tests only
pnpm test:storybook

# Run E2E tests only
pnpm test:e2e

# Check everything (types + lint + test)
pnpm check

# Generate Cloudflare Workers type definitions
pnpm generate-cf-types
```

### Building for Production

```bash
# Build the application
pnpm build

# Start the production server
pnpm start
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
