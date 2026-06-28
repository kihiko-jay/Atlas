# packages/

This directory contains all shared domain packages and libraries.

Each package is an Nx project published under the `@atlas/` scope.

## Package Types

### Domain Packages

Named `@atlas/<domain>` — encapsulate a bounded context following Hexagonal Architecture:

```
packages/<domain>/
  src/
    domain/           # Aggregates, Entities, Value Objects, Domain Events
    application/      # Use Cases, Application Services, DTOs
    infrastructure/   # Adapters: DB repositories, HTTP clients, messaging
    ports/            # Inbound and outbound port interfaces
  README.md
  project.json
  tsconfig.json
```

### Shared Libraries

Named `@atlas/shared-<name>` — cross-cutting utilities with no domain semantics:

- `@atlas/shared-utils` — pure utility functions
- `@atlas/shared-types` — shared TypeScript types and interfaces
- `@atlas/shared-config` — typed environment configuration loader
- `@atlas/shared-testing` — test helpers and fixtures

## Conventions

- Domain packages must have **zero** framework dependencies in their `domain/` layer
- Cross-domain imports are only permitted through a package's public `index.ts`
- No circular dependencies between packages

> Packages are added per sprint as Feature Cards are approved. No package exists here yet.
