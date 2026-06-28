# CLAUDE.md — Atlas Engineering Guidelines

This file governs how Claude Code assists on the Atlas repository. Read it before every session.

---

## Atlas Vision

Atlas is an **AI Operating System for Business Software** built by Mikitech.

It unifies business operations through AI-native workflows, context-aware automation, and modular domain integration. Atlas thinks alongside teams — surfacing insights, automating routine work, and connecting systems — without displacing human judgment.

Atlas is designed for scale, longevity, and trustworthiness.

---

## Engineering Principles

### 1. Never Invent Requirements

Do not add features, APIs, database fields, configuration options, or business logic that has not been explicitly specified in a Feature Card, PRD, or approved ADR. If something is missing, ask. Silence is not approval.

### 2. Always Respect Feature Cards

Every piece of product functionality must trace to a Feature Card in `docs/feature-cards/`. If no Feature Card exists for a proposed change, stop and ask before proceeding. Feature Cards are the source of truth for scope.

### 3. Modular Monolith Architecture

Atlas is a **Modular Monolith** — not microservices, not a big ball of mud.

- Each domain lives in its own package under `packages/`
- Domains communicate through well-defined contracts (events or public APIs)
- No direct cross-domain imports of internal modules
- The monolith deploys as a single unit; modularization is for maintainability, not independent deployment

Do not propose microservices decomposition without an approved ADR.

### 4. Domain-Driven Design (DDD)

Apply DDD rigorously within each domain:

- Identify **Aggregates**, **Entities**, **Value Objects**, **Domain Events**, and **Domain Services**
- Place business logic in the domain layer, not in controllers or resolvers
- Use **Bounded Contexts** to define domain ownership
- Respect the **Ubiquitous Language** defined in each domain's documentation

### 5. Hexagonal Architecture (Ports & Adapters)

Each domain package follows Hexagonal Architecture:

```
packages/<domain>/
  src/
    domain/         # Pure domain logic — no framework dependencies
    application/    # Use cases / application services
    infrastructure/ # Adapters: DB, HTTP clients, message brokers
    ports/          # Interfaces (inbound and outbound ports)
```

- The domain layer has **zero** framework or infrastructure imports
- Infrastructure adapters implement port interfaces
- Tests mock ports, not infrastructure implementations

### 6. Never Change Architecture Without Approval

Architectural decisions (new frameworks, structural changes, new integration patterns, changes to domain boundaries) require an ADR approved by the Lead Engineer before implementation. Document the ADR in `docs/adr/`.

### 7. Always Update Documentation

When you implement a feature:

- Update relevant `docs/` files
- Update the relevant domain's `README.md`
- Add or update API contracts in `docs/api-contracts/` if applicable
- Add domain events to `docs/event-catalog/` if applicable
- Keep `docs/decision-log/` current with significant decisions

### 8. Keep Commits Small

- One logical change per commit
- Commit messages: `type(scope): description` (Conventional Commits)
- Types: `feat`, `fix`, `refactor`, `test`, `docs`, `chore`, `ci`
- Scope: the domain or package affected
- Example: `feat(billing): add invoice generation use case`

### 9. Always Write Tests

- Unit tests for all domain logic (pure functions, aggregates, value objects)
- Integration tests for application use cases
- E2E tests for critical user flows
- Minimum coverage: 80% for domain and application layers
- Test files live next to the code they test: `*.spec.ts`

### 10. Prefer Simple Solutions

- Choose the simplest implementation that correctly satisfies the requirement
- Avoid premature abstraction
- Three similar concrete cases are better than one over-engineered generic
- Optimize for readability; the next engineer is the most important reader
- Do not add error handling, fallbacks, or validations for scenarios that cannot occur

---

## Monorepo Structure

```
atlas/
├── apps/               # Deployable applications
├── packages/           # Shared domain packages and libraries
├── docs/               # Architecture, product, and API documentation
├── infrastructure/     # Infrastructure as Code
├── tools/              # Internal workspace tooling
├── scripts/            # CI/CD and operational scripts
└── .github/            # Workflows, templates, CODEOWNERS
```

### Package Naming

- Apps: `@atlas/<app-name>` (e.g., `@atlas/web`, `@atlas/api`)
- Domain packages: `@atlas/<domain>` (e.g., `@atlas/billing`, `@atlas/identity`)
- Shared libraries: `@atlas/shared-<name>` (e.g., `@atlas/shared-utils`)

---

## What Claude Must Not Do

- Do not add dependencies without justification tied to a Feature Card or ADR
- Do not generate demo applications, sample data, or placeholder business logic
- Do not modify `nx.json`, `tsconfig.base.json`, `pnpm-workspace.yaml`, or CI pipelines without explicit instruction
- Do not push to `main` or `release/*` branches directly
- Do not skip tests to make a build pass
- Do not silently swallow errors
- Do not use `any` type in TypeScript — use `unknown` and narrow properly
- Do not hardcode configuration values — use environment variables via a typed config module

---

## Branching Strategy

| Branch type     | Pattern                | Purpose                          |
| --------------- | ---------------------- | -------------------------------- |
| Main            | `main`                 | Production-ready code            |
| Release         | `release/vX.Y`         | Stabilization for releases       |
| Feature         | `feat/<ticket>-<slug>` | New features                     |
| Fix             | `fix/<ticket>-<slug>`  | Bug fixes                        |
| Chore           | `chore/<slug>`         | Non-feature maintenance          |
| Claude sessions | `claude/<slug>`        | AI-assisted development sessions |

---

## Sprint Context

**Current Sprint: 0.1 — Repository Foundation**

This sprint establishes the engineering workspace only. No business logic, no authentication, no database, no APIs have been implemented. The repository is ready for Sprint 0.2.

Do not begin Sprint 0.2 work without explicit instruction.
