# infrastructure/

This directory contains Infrastructure as Code (IaC) and platform configuration for Atlas.

## Planned Structure

```
infrastructure/
  terraform/          # Cloud resource provisioning (VPCs, databases, queues, etc.)
  helm/               # Kubernetes Helm charts for Atlas services
  docker/             # Dockerfiles and docker-compose configurations
  monitoring/         # Observability configuration (dashboards, alert rules)
```

## Conventions

- All infrastructure changes require a peer review from a senior engineer
- Secrets are never stored here — use a secrets manager (Vault, AWS Secrets Manager, etc.)
- Terraform state is stored remotely (never committed)
- Helm chart values for production environments are stored separately from this repo

> Infrastructure definitions are added as deployment targets are approved. Nothing is defined here yet.
