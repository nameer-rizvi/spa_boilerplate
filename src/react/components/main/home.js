import React, { Fragment } from "react";

const isProduction = require("../../../shared/index")["isProd"];

const HomePage = () => {
  return isProduction ? (
    <Fragment>
      <h1>Well, would ya look at this?</h1>
      <h2>The app is in production.</h2>
    </Fragment>
  ) : (
    <Fragment>
      <h1>hey, you got it running - nice!!</h1>
      <h2>now, let's make this thing :)</h2>
      <h3>p.s. im at /src/react/components/main/home.js</h3>
    </Fragment>
  );
};

export default HomePage;
