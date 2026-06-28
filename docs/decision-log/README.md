# docs/decision-log/

This directory contains the Atlas Engineering Decision Log — a chronological record of significant engineering decisions that do not rise to the level of a formal ADR.

## Purpose

Not every decision needs an ADR. The decision log captures smaller but still meaningful choices:

- Why a specific library was chosen over an alternative
- A trade-off made under time pressure with notes on the debt incurred
- A deliberate deviation from a standard with a rationale
- A deferred concern with a note on when to revisit

## Format

Decisions are logged as Markdown entries in a single file per month, or as individual files for particularly significant items.

```
decision-log/
  2026-06.md        # All minor decisions made in June 2026
  2026-07.md        # All minor decisions made in July 2026
```

## Entry Template

```markdown
## YYYY-MM-DD: <Short Title>

**Decision:** <What was decided?>
**Context:** <Why was this decision needed?>
**Rationale:** <Why was this the right choice?>
**Trade-offs:** <What did we give up?>
**Revisit:** <When should this be reconsidered? Leave blank if no review needed.>
```

## Log

> Decisions are logged as engineering work progresses. Nothing is logged here yet.
