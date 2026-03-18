import type { Configuration, RedirectRequest } from "@azure/msal-browser";

/**
 * LocalStorage key for loginHint
 */
export const LOGIN_HINT_KEY = "login_hint";

/**
 * MSAL config for the PublicClientApplication
 * @see https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 */
export const msalConfig: Configuration = {
  auth: {
    clientId: import.meta.env.VITE_ENTRA_CLIENT_ID,
    authority: import.meta.env.VITE_ENTRA_AUTHORITY,
    redirectUri: `${window.location.origin}/redirect`,
  },
};

/**
 * Default login request for the app
 */
export const loginRequest: RedirectRequest = {
  scopes: ["User.Read"],
  loginHint: localStorage?.getItem(LOGIN_HINT_KEY) ?? undefined,
};
