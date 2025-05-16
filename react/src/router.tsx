import * as Sentry from "@sentry/react";
import { createBrowserRouter } from "react-router";
import App from "./App";

// https://docs.sentry.io/platforms/javascript/guides/react/features/react-router/v7/#usage-with-createbrowserrouter-or-creatememoryrouter
const sentryCreateBrowserRouter =
  Sentry.wrapCreateBrowserRouterV7(createBrowserRouter);

// https://reactrouter.com/start/data/routing
export const router = sentryCreateBrowserRouter([
  {
    path: "/",
    Component: App,
  },
]);
