# @atlas/api

The Atlas API — NestJS application serving as the backend gateway for the Atlas platform.

## Architecture

```
src/
  main.ts                       # Application bootstrap
  app.module.ts                 # Root module
  config/
    config.module.ts            # Environment configuration (global)
    env.schema.ts               # Joi validation schema for env vars
  logger/
    logger.module.ts            # Structured JSON logging via pino (global)
  core/
    core.module.ts              # Global exception filter and validation pipe
    filters/
      http-exception.filter.ts  # Standardised error response shape
  health/
    health.controller.ts        # GET /health
    health.module.ts
  common/
    common.module.ts            # Shared backend utilities (empty in Sprint 0.2)
test/
  app.e2e-spec.ts               # Bootstrap and e2e tests
```

## Prerequisites

- Node.js ≥ 22
- pnpm ≥ 10

## Installation

From the **workspace root**:

```bash
pnpm install
```

## Local Development

1. Copy the example env file:

   ```bash
   cp apps/api/.env.example apps/api/.env.development
   ```

2. Edit `apps/api/.env.development` and fill in the values.

3. Start the API in development mode:

   ```bash
   pnpm nx serve api
   ```

The API will be available at `http://localhost:3000`.

## Running Tests

### Unit tests

```bash
pnpm nx test api
```

### E2E tests

```bash
pnpm nx test:e2e api
```

### Coverage

```bash
pnpm nx test api -- --coverage
```

## Health Check

```bash
curl http://localhost:3000/health
```

Expected response:

```json
{
  "status": "ok",
  "service": "atlas-api",
  "version": "0.1.0"
}
```

## Environment Variables

| Variable    | Required | Default       | Description                                        |
| ----------- | -------- | ------------- | -------------------------------------------------- |
| `NODE_ENV`  | No       | `development` | Runtime environment                                |
| `PORT`      | No       | `3000`        | HTTP port                                          |
| `LOG_LEVEL` | No       | `info`        | Pino log level (trace/debug/info/warn/error/fatal) |

See `.env.example` for the full reference.

## Build

```bash
pnpm nx build api
```

Compiled output lands in `dist/apps/api/`.
