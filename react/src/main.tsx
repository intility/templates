import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MsalProvider } from "@azure/msal-react";
import { RouterProvider } from "react-router";
import { msalInstance } from "./auth/instance.ts";
import { router } from "./router.tsx";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

createRoot(root).render(
  <StrictMode>
    <MsalProvider instance={msalInstance}>
      <RouterProvider router={router} />
    </MsalProvider>
  </StrictMode>,
);
