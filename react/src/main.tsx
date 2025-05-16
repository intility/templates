import "./utils/instrument.ts";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MsalProvider } from "@azure/msal-react";
import * as Sentry from "@sentry/react";
import { RouterProvider } from "react-router";
import { msalInstance } from "./auth/instance.ts";
import { router } from "./router.tsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

const root = createRoot(rootElement, {
  // Callback called when an error is thrown and not caught by an ErrorBoundary.
  onUncaughtError: Sentry.reactErrorHandler((error, errorInfo) => {
    console.warn("Uncaught error", error, errorInfo.componentStack);
  }),
  // Callback called when React catches an error in an ErrorBoundary.
  onCaughtError: Sentry.reactErrorHandler(),
  // Callback called when React automatically recovers from errors.
  onRecoverableError: Sentry.reactErrorHandler(),
});

root.render(
  <StrictMode>
    <MsalProvider instance={msalInstance}>
      <RouterProvider router={router} />
    </MsalProvider>
  </StrictMode>,
);
