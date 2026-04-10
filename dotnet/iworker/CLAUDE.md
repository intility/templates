## Tech stack

- .NET 10

## Placeholder Tokens

The project may contain `__SCREAMING_SNAKE_CASE__` placeholder tokens (e.g.
`__ARGO_PROJECT__`, `__OPENSHIFT_NAMESPACE__`, `__GITHUB_REPO_URL__`). These
are intentional — the app will start without them replaced, but deployment will
not work until they are filled in. Do not remove or stub them out.

## Versioning

Versions are managed by release-please via conventional commits. Do not manually bump version numbers.

## k8s High Availability

HA config (rolling update, anti-affinity, PDB) belongs in `k8s/components/high-availability/` — not in base or overlays directly. The HA component is only applied to Deployment workers, not CronJobs.
