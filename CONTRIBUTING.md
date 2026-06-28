# Contributing to Atlas

Thank you for contributing to Atlas. This document describes the standards and process expected of all contributors.

---

## Prerequisites

- Node.js ≥ 22
- pnpm ≥ 10
- Familiarity with Nx monorepo tooling
- Understanding of Domain-Driven Design and Hexagonal Architecture

## Development Setup

```bash
# Clone the repository
git clone https://github.com/kihiko-jay/atlas.git
cd atlas

# Install dependencies
pnpm install

# Verify setup
pnpm nx report
```

## Branching

All work must happen on a dedicated branch. Never commit directly to `main` or `release/*`.

| Type    | Pattern                       |
| ------- | ----------------------------- |
| Feature | `feat/<ticket-id>-short-slug` |
| Bug fix | `fix/<ticket-id>-short-slug`  |
| Chore   | `chore/short-slug`            |
| Docs    | `docs/short-slug`             |

```bash
git checkout -b feat/ATL-42-add-invoice-generation
```

## Commit Messages

Atlas uses [Conventional Commits](https://www.conventionalcommits.org/).

```
<type>(<scope>): <short description>

[optional body]

[optional footer]
```

**Types:** `feat`, `fix`, `refactor`, `test`, `docs`, `chore`, `ci`, `perf`

**Scope:** the affected package or domain (e.g., `billing`, `identity`, `web`, `api`)

**Examples:**

```
feat(billing): add invoice generation use case
fix(identity): correct JWT expiry calculation
docs(adr): add ADR-007 for event sourcing decision
chore(deps): upgrade nx to 23.1.0
```

## Code Standards

### TypeScript

- `strict` mode is enabled — no exceptions
- Never use `any`; use `unknown` and narrow properly
- Prefer `const` over `let`; avoid `var`
- Use `type` imports: `import type { Foo } from './foo'`
- Explicit return types on all public functions

### Architecture

- All business logic belongs in the domain layer
- Domain packages must have zero framework dependencies
- Cross-domain communication only through published contracts
- No direct imports from another domain's `internal/` directory

### Testing

- Every domain feature must have unit tests
- Minimum 80% coverage on domain and application layers
- Test files live next to the source: `foo.service.spec.ts`
- Use descriptive test names: `describe('InvoiceService') > it('should generate a zero-value invoice when no line items exist')`

## Pull Request Process

1. Ensure your branch is up to date with `main`
2. Run the full check suite locally:
   ```bash
   pnpm format:check
   pnpm lint
   pnpm typecheck
   pnpm nx run-many -t test
   ```
3. Open a PR against `main` with:
   - A clear title following Conventional Commits format
   - A description referencing the Feature Card or ticket
   - Screenshots or recordings for UI changes
4. Request review from at least one team member
5. Address all review comments before merging
6. Squash merge is preferred for feature branches

## Documentation

- Update `docs/` when you add or change functionality
- New domain packages must include a `README.md`
- API changes require updates to `docs/api-contracts/`
- New domain events require updates to `docs/event-catalog/`
- Architectural decisions require an ADR in `docs/adr/`

## Questions

Open a discussion in GitHub Discussions or reach out in the internal engineering channel.
