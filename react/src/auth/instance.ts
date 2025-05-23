import {
  type AuthenticationResult,
  EventType,
  PublicClientApplication,
} from "@azure/msal-browser";
import * as Sentry from "@sentry/react";
import { msalConfig } from "./config";

/**
 * A PublicClientApplication instance
 * @see https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/getting-started.md
 */
export const msalInstance = new PublicClientApplication(msalConfig);

/**
 * Register event callback to set the active account after successful login
 * @see https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/accounts.md#active-account-apis
 * @see https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/events.md
 */
msalInstance.addEventCallback((message) => {
  if (
    message.eventType === EventType.LOGIN_SUCCESS ||
    message.eventType === EventType.SSO_SILENT_SUCCESS
  ) {
    const result = message.payload as AuthenticationResult;

    if (!result.account) return;

    msalInstance.setActiveAccount(result.account);

    Sentry.setUser({
      id: result.account.homeAccountId,
      username: result.account.username,
    });
  }
});
