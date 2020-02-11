import React, { Fragment, useState, useEffect } from "react";

import { get } from "./axios";

import { log, isProd } from "../../../../shared";

function HomePage() {
  useEffect(() => {
    get();
  }, []);

  const [welcome] = useState({
    emoji: "🤓",
    label: "[REACT HOOKS]",
    message: "This message has been fetched from react useState()."
  });

  log(welcome);

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
      <h2>now, let&apos;s make this thing :)</h2>
      <h3>p.s. im at /src/react/components/main/home.js</h3>
    </Fragment>
  );
}

export default HomePage;
