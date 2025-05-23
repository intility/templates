import * as Sentry from "@sentry/react";
import { useEffect } from "react";
import { useRouteError } from "react-router";

/**
 * Error page for the app.
 * Used as a react-router error boundary
 */
export default function ErrorPage() {
  const error = useRouteError();

  // https://docs.sentry.io/platforms/javascript/guides/react/features/react-router/v7/#set-up-a-custom-error-boundary
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <>
      <h1 className="bf-h1">An error has occured</h1>
      <p className="bf-p">Our developers have been notified</p>
    </>
  );
}
