# docs/event-catalog/

This directory is the Atlas Domain Event Catalog — the registry of all domain events published within the system.

## Purpose

Domain events are the primary mechanism for cross-domain communication in Atlas. The catalog ensures:

- Every event has a canonical name and schema
- Producers and consumers are documented
- Event versioning is managed intentionally
- Event schemas are machine-readable (JSON Schema)

## Entry Structure

Each event entry is a Markdown file with an accompanying JSON Schema:

```
event-catalog/
  billing/
    InvoiceCreated/
      README.md           # Human-readable description
      schema.v1.json      # Machine-readable JSON Schema
```

## README Template

```markdown
# <EventName>

**Domain:** <domain>
**Version:** v<n>
**Status:** Active | Deprecated

## Description

<What happened to trigger this event?>

## Producers

- `@atlas/<package>`

## Consumers

- `@atlas/<package>` — <what it does with the event>

## Payload

See `schema.v<n>.json`.
```

## Events

> Events are cataloged as domains are designed and implemented. Nothing is cataloged here yet.
