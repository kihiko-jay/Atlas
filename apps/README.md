# apps/

This directory contains all deployable Atlas applications.

Each application is an Nx project with its own `project.json` and publishes as `@atlas/<app-name>`.

## Planned Applications

| App      | Package         | Description                             |
| -------- | --------------- | --------------------------------------- |
| `web`    | `@atlas/web`    | Next.js customer-facing web application |
| `api`    | `@atlas/api`    | NestJS GraphQL / REST API gateway       |
| `worker` | `@atlas/worker` | Background job processing service       |
| `admin`  | `@atlas/admin`  | Internal operations dashboard           |

> Applications are added per sprint as Feature Cards are approved. No application exists here yet.

## Conventions

- Each app must have its own `README.md` describing purpose, environment variables, and run instructions
- Apps import shared logic only from `packages/`, never from other apps
- Each app configures its own `tsconfig.json` extending `../../tsconfig.base.json`
