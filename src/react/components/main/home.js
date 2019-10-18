import React, { Fragment } from "react";

import { isProd } from "../../../shared";

function HomePage() {
  return isProd ? (
    <Fragment>
      <h1>Well, would ya look at this?</h1>
      <h2>The app is in production.</h2>
      <h3>Check the console to see some goodies 🎁</h3>
    </Fragment>
  ) : (
    <Fragment>
      <h1>hey, you got it running - nice!!</h1>
      <h1>👏👏👏👏👏</h1>
      <h2>now, let's make this thing :)</h2>
      <h3>p.s. im at /src/react/components/main/home.js</h3>
    </Fragment>
  );
}

export default HomePage;
