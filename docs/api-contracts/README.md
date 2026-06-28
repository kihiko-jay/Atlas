# docs/api-contracts/

This directory contains API contract definitions for all Atlas interfaces.

## Purpose

API contracts define the formal interface between systems — internal and external. They are the source of truth for what each API accepts and returns. Contracts are defined before implementation.

## Contract Types

| Type     | Format                      | Examples                     |
| -------- | --------------------------- | ---------------------------- |
| GraphQL  | `.graphql` schema files     | `atlas.schema.graphql`       |
| REST     | OpenAPI 3.x YAML/JSON       | `billing-api.openapi.yaml`   |
| gRPC     | Protocol Buffers (`.proto`) | `identity.proto`             |
| Webhooks | JSON Schema                 | `webhook-events.schema.json` |

## Versioning

API contracts are versioned. Breaking changes introduce a new version directory:

```
api-contracts/
  v1/
    atlas.schema.graphql
  v2/
    atlas.schema.graphql
```

## Documents

> API contracts are defined as APIs are designed and approved. Nothing is defined here yet.
