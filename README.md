# Atlas

**AI Operating System for Business Software**

Atlas is an intelligent platform that unifies business operations through AI-native workflows, context-aware automation, and modular integration — built to think alongside your team, not replace it.

---

## Repository Structure

```
atlas/
├── apps/               # Deployable applications (web, api, workers)
├── packages/           # Shared libraries and domain modules
├── docs/               # Architecture, design, and product documentation
├── infrastructure/     # Infrastructure as Code (Terraform, Helm, etc.)
├── tools/              # Internal CLI tools and workspace utilities
├── scripts/            # CI/CD and operational scripts
└── .github/            # GitHub Actions workflows and templates
```

## Technology Stack

| Layer    | Technology   |
| -------- | ------------ |
| Monorepo | Nx + pnpm    |
| Language | TypeScript   |
| Runtime  | Node.js ≥ 22 |

> Additional technologies (NestJS, Next.js, Prisma, Redis, etc.) will be introduced in subsequent sprints as architectural decisions are approved.

## Getting Started

### Prerequisites

- Node.js ≥ 22
- pnpm ≥ 10

### Setup

```bash
# Install dependencies
pnpm install

# Verify the workspace
pnpm nx report
```

### Common Commands

```bash
# Format all files
pnpm format

# Check formatting
pnpm format:check

# Lint all files
pnpm lint

# Typecheck
pnpm typecheck
```

## Documentation

All architecture and product documentation lives in `docs/`. See [`docs/README.md`](./docs/README.md) for an index.

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for development guidelines.

## Code of Conduct

See [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md).

## License

Proprietary — Mikitech. See [`LICENSE`](./LICENSE).
