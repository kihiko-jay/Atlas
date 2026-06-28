# docs/

This directory is the single source of truth for all Atlas product, architecture, and engineering documentation.

## Index

| Directory         | Contents                                                                 |
| ----------------- | ------------------------------------------------------------------------ |
| `vision/`         | Product vision, mission, and strategic goals                             |
| `prd/`            | Product Requirements Documents — what to build and why                   |
| `brd/`            | Business Requirements Documents — business context and constraints       |
| `adf/`            | Architecture Decision Framework — principles, constraints, quality goals |
| `tas/`            | Technical Architecture Specifications — detailed system design           |
| `adr/`            | Architecture Decision Records — approved architectural decisions         |
| `feature-cards/`  | Feature Cards — atomic units of product scope                            |
| `api-contracts/`  | API contracts — GraphQL schemas, REST specs, gRPC definitions            |
| `event-catalog/`  | Domain event definitions and schemas                                     |
| `prompt-library/` | Curated AI prompt templates for Atlas AI features                        |
| `decision-log/`   | Chronological log of significant engineering decisions                   |

## Governance

- Documentation is updated as part of every feature — not after the fact
- Feature Cards must exist before implementation begins
- ADRs are written before architectural changes are made
- All documentation is reviewed in pull requests like code
