# .github/

This directory contains GitHub-specific configuration for the Atlas repository.

## Contents

```
.github/
  workflows/            # GitHub Actions CI/CD pipeline definitions
  ISSUE_TEMPLATE/       # Issue templates for bugs, features, and questions
  PULL_REQUEST_TEMPLATE.md  # Pull request template
  CODEOWNERS            # Code ownership definitions
```

## CI/CD Philosophy

- Every pull request must pass all checks before merging
- Checks run in parallel where possible to minimize feedback time
- Secrets are stored in GitHub Actions secrets — never in workflow files
- Workflow files are reviewed as carefully as application code

> Workflows and templates are added as the CI/CD strategy is finalized. Nothing is defined here yet.
