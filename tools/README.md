# tools/

This directory contains internal Nx workspace tooling — custom executors, generators, and plugins used to extend and standardize the Atlas development workflow.

## Planned Contents

| Tool                | Description                                              |
| ------------------- | -------------------------------------------------------- |
| `tools/generators/` | Nx code generators for scaffolding new apps and packages |
| `tools/executors/`  | Custom Nx executors for build and deployment tasks       |
| `tools/scripts/`    | One-off utility scripts for workspace maintenance        |

## Conventions

- Tools in this directory must be tested
- Tools must be documented in their own `README.md`
- Tools should not contain business logic — only workspace automation

> Tools are added as the need arises. Nothing is defined here yet.
