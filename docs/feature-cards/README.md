# docs/feature-cards/

This directory contains Feature Cards — the atomic units of product scope in Atlas.

## Purpose

A Feature Card defines a single, deliverable unit of product functionality. It is the contract between Product and Engineering. No implementation begins without an approved Feature Card.

Feature Cards provide:

- A unique identifier (`FC-<id>`) referenced in branch names and commits
- Clear acceptance criteria written as testable statements
- Scope boundaries (what is in and out of scope)
- UI/UX references where applicable
- Domain ownership (which package is responsible)
- Dependencies on other Feature Cards or ADRs

## Naming Convention

```
FC-<id>-<short-title>.md
```

Example: `FC-001-create-workspace.md`

## Template

```markdown
# FC-<id>: <Feature Title>

**Status:** Draft | Approved | In Progress | Done | Deferred
**Sprint:** <sprint-id>
**Domain:** <package-name>
**Depends on:** FC-<id>, ADR-<id>

## Summary

<One paragraph description of the feature.>

## Acceptance Criteria

- [ ] <Testable criterion 1>
- [ ] <Testable criterion 2>

## Out of Scope

- <What this feature explicitly does NOT include>

## Notes

<Design references, edge cases, open questions>
```

## Feature Cards

> Feature Cards are created as product scope is approved. Nothing is defined here yet.
