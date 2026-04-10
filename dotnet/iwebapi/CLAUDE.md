## Tech stack

- .NET 10

## Placeholder Tokens

The project may contain `__SCREAMING_SNAKE_CASE__` placeholder tokens (e.g.
`__CLIENT_ID__`, `__TENANT_ID__`, `__ARGO_PROJECT__`). These are intentional —
the app will start without them replaced, but Azure AD authentication will not
work until the auth tokens are filled in. Do not remove or stub them out.

## Versioning

Versions are managed by release-please via conventional commits. Do not manually bump version numbers.

## k8s High Availability

HA config (rolling update, anti-affinity, PDB) belongs in `k8s/components/high-availability/` — not in base or overlays directly.
