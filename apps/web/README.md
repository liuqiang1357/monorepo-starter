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
├── __screenshots__/         # Visual regression screenshots
├── src/                     # Application source
│   ├── app/                 # Next.js app router pages and layouts
│   ├── assets/              # Static assets (images, fonts, etc.)
│   ├── components/          # React components specific to this app
│   │   ├── app/             # Application-level components (e.g., providers)
│   │   ├── hello-world/     # Example component demonstrating basic patterns
│   │   └── svgs/            # SVG icon components
│   ├── configs/             # Configuration files for the application
│   ├── lib/                 # Utility functions and shared logic
│   │   ├── actions/         # Handlers for executing operations (e.g., RPC calls)
│   │   ├── errors/          # Error handling utilities
│   │   ├── hooks/           # Custom React hooks
│   │   ├── states/          # State management
│   │   └── utils/           # General utility functions
│   ├── locales/             # Internationalization files
│   ├── styles/              # CSS and style definitions
│   └── types/               # TypeScript type declarations and definitions
├── stories/                 # Storybook stories
├── tests/                   # Integration and E2E tests
│   ├── e2e/                 # End-to-end tests
│   └── integration/         # Integration tests
│   # Unit tests should live alongside implementation files in src
├── .gitignore               # App-specific git ignore rules
├── eslint.config.js         # ESLint configuration
├── lint-staged.config.js    # Lint-staged configuration
├── next.config.ts           # Next.js configuration
├── package.json             # Package manifest
├── postcss.config.js        # PostCSS configuration
├── prettier.config.js       # Prettier configuration
├── tsconfig.json            # TypeScript configuration
├── turbo.json               # Turborepo pipeline configuration
├── vercel.json              # Vercel deployment configuration
├── vitest.config.ts         # Vitest configuration
├── vitest.setup.ts          # Vitest setup
├── vitest.shims.d.ts        # Vitest TypeScript shims
└── wrangler.toml            # Cloudflare Wrangler configuration
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

# Run tests
pnpm test
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

This application is deployed to Cloudflare Workers using the OpenNext adapter and GitHub Actions. The workflow is configured in `.github/workflows/deploy-web.yaml`.

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
