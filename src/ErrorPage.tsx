import React from "react";
import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops!</h1>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        {error.data && <p>{error.data}</p>}
        <p>
          Go back to{" "}
          <Link to="/" replace>
            home page
          </Link>
        </p>
      </div>
    );
  } else {
    return <div>Oops</div>;
  }
};

export default ErrorPage;
