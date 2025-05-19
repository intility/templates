import { MsalProvider } from "@azure/msal-react";
import { StrictMode } from "react";
import { RouterProvider } from "react-router";
import { msalInstance } from "./auth/instance";
import { ColorModeApplier } from "./components/ColorMode";
import { router } from "./router";

/**
 * Main react entry point for the app.
 */
export default function App() {
  return (
    <StrictMode>
      <ColorModeApplier>
        <MsalProvider instance={msalInstance}>
          <RouterProvider router={router} />
        </MsalProvider>
      </ColorModeApplier>
    </StrictMode>
  );
}
