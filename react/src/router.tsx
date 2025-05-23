import * as Sentry from "@sentry/react";
import { createBrowserRouter } from "react-router";
import ErrorPage from "./components/ErrorPage";
import RootLayout from "./components/RootLayout";
import Home from "./routes/Home";
import Profile from "./routes/Profile";

// https://docs.sentry.io/platforms/javascript/guides/react/features/react-router/v7/#usage-with-createbrowserrouter-or-creatememoryrouter
const sentryCreateBrowserRouter =
  Sentry.wrapCreateBrowserRouterV7(createBrowserRouter);

// https://reactrouter.com/start/data/routing
export const router = sentryCreateBrowserRouter([
  {
    Component: RootLayout,
    ErrorBoundary: ErrorPage,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "profile",
        Component: Profile,
      },
    ],
  },
]);
