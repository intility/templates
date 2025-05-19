import { MsalProvider } from "@azure/msal-react";
import { StrictMode } from "react";
import { RouterProvider } from "react-router";
import { msalInstance } from "./auth/instance";
import { router } from "./router";

export default function App() {
  return (
    <StrictMode>
      <MsalProvider instance={msalInstance}>
        <RouterProvider router={router} />
      </MsalProvider>
    </StrictMode>
  );
}
