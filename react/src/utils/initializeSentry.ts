import { init, reactRouterV7BrowserTracingIntegration } from "@sentry/react";
import { useEffect } from "react";
import {
  createRoutesFromChildren,
  matchRoutes,
  useLocation,
  useNavigationType,
} from "react-router";

/**
 * Initialize sentry if the application is built for production.
 * @see https://docs.sentry.io/platforms/javascript/guides/react/
 * @see https://docs.sentry.io/platforms/javascript/guides/react/features/react-router/v7/
 */

if (import.meta.env.PROD) {
  init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    release: import.meta.env.VITE_SENTRY_RELEASE,
    environment: import.meta.env.VITE_SENTRY_ENVIRONMENT,
    integrations: [
      reactRouterV7BrowserTracingIntegration({
        useEffect,
        useLocation,
        useNavigationType,
        createRoutesFromChildren,
        matchRoutes,
      }),
    ],
  });
}
