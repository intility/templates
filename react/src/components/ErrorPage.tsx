import { captureException } from "@sentry/react";
import { useEffect } from "react";
import { useRouteError } from "react-router";

/**
 * A generic Error Page, intended to be used as a Route errorElement.
 * @see https://reactrouter.com/en/main/route/error-element
 */
export default function ErrorPage() {
  const error = useRouteError();

  useEffect(() => {
    captureException(error);
  }, [error]);

  return (
    <>
      <h1 className="bf-h1">An error has occured</h1>
      <p className="bf-p">Our developers have been notified</p>
    </>
  );
}
