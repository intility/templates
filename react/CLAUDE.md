## Stack

React 19, TypeScript 5.9, Vite 7, React Router 7 (data router), Entra ID auth with `@azure/msal-browser` & `@azure/msal-react`, `@intility/bifrost-react` design system, Sentry, React Compiler (via Babel plugin), Vitest.

## Quick Reference

- **Dev server:** `npm start` (port 3000, auto-opens browser)
- **Build:** `npm run build` (type-checks with `tsc -b`, then bundles with Vite)
- **Lint:** `npm run lint` (runs `biome check`)
- **Test:** `npm test` (Vitest with happy-dom)
- **Run single test:** `npx vitest run src/routes/Home.test.tsx`


## Project Structure

```
src/
  auth/         # MSAL config, PCA instance, authorizedFetch wrapper
  assets/       # SVG logos
  components/   # Shared components (RootLayout, ColorMode, ErrorPage, etc.)
  routes/       # Route components (colocated with tests and CSS modules)
  utils/        # Sentry instrument (side-effect import)
  App.tsx       # Root: providers stack (StrictMode, MsalProvider, ColorMode, RouterProvider)
  main.tsx      # Entry point: Sentry init, createRoot with error handlers
  router.tsx    # createBrowserRouter wrapped with Sentry tracing
k8s/            # Kustomize base + overlays (dev/prod) + HA component
argo/           # ArgoCD Application manifests (zone-1=prod, zone-2=dev)
```

## Code Conventions

- **Path alias:** `~/` maps to `src/` — use `~/components/Foo` not `../../components/Foo`
- **No barrel files** — import directly from specific files
- **CSS Modules** for component-scoped styles (`.module.css`), Bifrost utility classes (`bf-h1`, `bf-p`, `bf-link`, etc.) for everything else
- **Bifrost CSS variables** available: `var(--bfc-base-2)`, etc.
- **`import type`** enforced by `verbatimModuleSyntax` — use `import type { Foo }` for type-only imports
- **`erasableSyntaxOnly`** — no enums with values or namespaces; use `as const` objects instead
- **React Compiler active** — write pure components; ESLint enforces compiler compatibility rules. No manual `useMemo`/`useCallback` needed.
- **Colocated tests** — place `Foo.test.tsx` next to `Foo.tsx`
- **Strict TypeScript** — `noUncheckedIndexedAccess`, `noUnusedLocals`, `noUnusedParameters` all enabled
- **JSDoc comments** on exported functions/components
- **Biome** is the primary formatter/linter (2-space indent). ESLint is only for React Compiler rules.

## Testing

- Vitest with `globals: true` — no need to import `test`/`expect`
- `@testing-library/react` for rendering, `@testing-library/jest-dom` for matchers
- happy-dom environment
- Setup file: `src/setupTests.ts`

## Template Placeholders

These are replaced during scaffolding via `create-intility-app`:
`__APP_NAME__`, `__REPO_NAME__`, `__DOCKER_IMAGE_NAME__`, `__SENTRY_PROJECT_NAME__`, `__ARGO_PROJECT__`, `__ENTRA_CLIENT_ID__`

## Deployment

GitOps via ArgoCD. Kustomize overlays for dev (2 replicas) and prod (3 replicas + HA). GitHub Actions handle CI/CD: PRs run build+test, main pushes deploy to dev, tags deploy to prod.

## Documentation

Full docs live at https://create.intility.app/react with guides for:

1. **Introduction** — template overview
2. **Getting Started** — prerequisites, scaffolding (`npx degit`), template variables, npm scripts
3. **Setup** — GitHub repo, Entra ID auth, Sentry, deployment (OpenShift + ArgoCD)
4. **Data Fetching** — TanStack Query / SWR integration with `authorizedFetch`
5. **Versioning** — Release Please, Conventional Commits, SemVer
6. **Further Reading** — links to all included technology docs
