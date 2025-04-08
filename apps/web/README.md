# Web Application

This is the web frontend application for the monorepo project. It's built with Next.js and provides a modern, responsive user interface.

## Technology Stack

- [Next.js](https://nextjs.org/) - React framework with server-side rendering
- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## Directory Structure

```
src/
├── app/                     # Next.js app router pages and layouts
├── assets/                  # Static assets (images, fonts, etc.)
├── components/              # React components specific to this app
│   ├── app/                 # Application-level components (e.g., providers)
│   ├── home/                # Components specific to the home page
│   └── svgs/                # SVG icon components
├── configs/                 # Configuration files for the application
├── lib/                     # Utility functions and shared logic
│   ├── actions/             # Action handlers
│   ├── errors/              # Error handling utilities
│   ├── hooks/               # Custom React hooks
│   ├── states/              # State management
│   └── utils/               # General utility functions
├── locales/                 # Internationalization files
├── server/                  # Server-side code
│   ├── routes/              # API route handlers
│   └── schemas/             # Data validation schemas
└── types/                   # TypeScript type declarations and definitions
```

## Getting Started

### Prerequisites

- Node.js 22.x
- pnpm 10.5.2+

### Installation

The installation is handled at the monorepo root level. See the root [README.md](../../README.md) for details.

### Development

```bash
# Start the development server
pnpm dev

# Run type checking
pnpm check-types

# Run linting
pnpm lint

# Format code
pnpm format
```

### Building for Production

```bash
# Build the application
pnpm build

# Start the production server
pnpm start
```

## Contributing

Please follow the project's coding standards:

1. Run linters and type checking before committing
2. Follow the established component patterns
3. Write tests for new features

## License

See the [LICENSE](../../LICENSE) file for details.
