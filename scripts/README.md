# scripts/

This directory contains CI/CD pipeline scripts, operational runbooks, and one-off automation used outside of the Nx task system.

## Conventions

- Scripts must be executable and documented at the top with a comment block explaining purpose, inputs, and outputs
- Scripts that interact with production must require explicit confirmation prompts
- No hardcoded credentials — use environment variables
- Prefer TypeScript (via `tsx`) over bash for complex scripts

## Planned Contents

```
scripts/
  ci/           # Scripts invoked by GitHub Actions workflows
  db/           # Database migration and seeding utilities
  release/      # Release automation (changelog generation, tagging)
```

> Scripts are added as CI/CD pipelines are designed. Nothing is defined here yet.
