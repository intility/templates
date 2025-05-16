import * as Sentry from "@sentry/react";
import { useEffect } from "react";
import { useRouteError } from "react-router";

export default function ErrorPage() {
  const error = useRouteError();

  // https://docs.sentry.io/platforms/javascript/guides/react/features/react-router/v7/#set-up-a-custom-error-boundary
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <div>
      <h1>Ouch!</h1>
    </div>
  );
}
