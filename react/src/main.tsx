import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MsalProvider } from "@azure/msal-react";
import App from "./App.tsx";
import { msalInstance } from "./auth/instance.ts";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

createRoot(root).render(
  <StrictMode>
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  </StrictMode>,
);
