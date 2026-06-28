# docs/adr/

This directory contains Architecture Decision Records (ADRs) for Atlas.

## Purpose

An ADR documents a significant architectural decision: what was decided, why, what alternatives were considered, and what the consequences are. ADRs are immutable records — once approved, they are never deleted, only superseded.

## ADR Lifecycle

```
Proposed → In Review → Approved → Superseded (if replaced)
                     → Rejected
```

## Naming Convention

```
ADR-<id>-<short-title>.md
```

Example: `ADR-001-modular-monolith-over-microservices.md`

## Template

Each ADR follows this structure:

```markdown
# ADR-<id>: <Title>

**Status:** Proposed | Approved | Rejected | Superseded by ADR-<id>
**Date:** YYYY-MM-DD
**Deciders:** <names>

## Context

<What is the situation forcing this decision?>

## Decision

<What was decided?>

## Alternatives Considered

<What else was evaluated?>

## Consequences

<What are the positive and negative outcomes?>
```

## Records

> ADRs are created as architectural decisions are made. Nothing is recorded here yet.
