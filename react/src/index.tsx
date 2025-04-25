import { MsalProvider } from "@azure/msal-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { instance } from "./auth";
import { router } from "./router";

// https://bifrost.intility.com/#/Welcome%20to%20Bifrost/Get%20started/Installation
import "@intility/bifrost-react/dist/bifrost-app.css";
import { reactErrorHandler } from "@sentry/react";
import "./utils/initializeSentry";

const rootElement = document.getElementById("root");

if (rootElement === null) {
  throw new Error("Root element not found");
}

const root = createRoot(rootElement, {
  // Callback called when an error is thrown and not caught by an ErrorBoundary.
  onUncaughtError: reactErrorHandler((error, errorInfo) => {
    console.warn("Uncaught error", error, errorInfo.componentStack);
  }),
  // Callback called when React catches an error in an ErrorBoundary.
  onCaughtError: reactErrorHandler(),
  // Callback called when React automatically recovers from errors.
  onRecoverableError: reactErrorHandler(),
});

root.render(
  <StrictMode>
    <MsalProvider instance={instance}>
      <RouterProvider router={router} />
    </MsalProvider>
  </StrictMode>,
);
