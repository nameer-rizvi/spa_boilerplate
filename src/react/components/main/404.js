import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Fragment>
      <h1>Uh oh, you're not supposed to be here!</h1>
      <h2>
        <Link to="/" className="hover-underline">
          Click here to go back home.
        </Link>
      </h2>
    </Fragment>
  );
}

export default NotFound;
