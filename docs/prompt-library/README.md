# docs/prompt-library/

This directory contains the Atlas Prompt Library — curated, versioned AI prompt templates used to power Atlas AI features.

## Purpose

Atlas is an AI-native product. The prompts used to drive AI behavior are as important as the code. This library:

- Stores canonical prompt templates with version history
- Documents the intended behavior, model compatibility, and context requirements for each prompt
- Provides a review process for prompt changes (prompts are reviewed like code)
- Tracks prompt performance and iteration history

## Structure

```
prompt-library/
  <domain>/
    <prompt-name>/
      v1.md             # Prompt template (version 1)
      v2.md             # Revised version
      README.md         # Purpose, usage, known limitations, model compatibility
```

## Conventions

- Prompts use `{{variable}}` syntax for dynamic inputs
- Each prompt version is immutable once published
- Prompt changes create a new version, never overwrite the previous
- Model compatibility is tested and documented before publishing

## Prompts

> Prompts are added as AI features are designed and approved. Nothing is defined here yet.
