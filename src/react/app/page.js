import React, { Fragment, useState, useEffect } from "react";
import { Github } from "styled-icons/icomoon/Github";
import logti from "logti";
import get from "./proxy";
import { isProd } from "../../shared";

function Page() {
  useEffect(() => {
    get();
  }, []);

  const [welcome] = useState(
    "🤓 This message has been fetched from react useState()."
  );

  logti(welcome);

  const link = (
    <a
      href="https://github.com/nameer-rizvi/spa_boilerplate"
      target="_blank"
      rel="noopener noreferrer"
      style={{ height: "30px", width: "30px", color: "#000" }}
    >
      <Github />
    </a>
  );

  return isProd ? (
    <Fragment>
      <h1>Well, would ya look at this?</h1>
      <h2>The app is in production.</h2>
      <h3>Check the console to see some goodies 🎁</h3>
      {link}
    </Fragment>
  ) : (
    <Fragment>
      <h1>hey, you got it running - nice!!</h1>
      <h1>👏👏👏👏👏</h1>
      <h2>now, let&apos;s make this thing :)</h2>
      <h3>p.s. im at /src/react/components/main/home.js</h3>
      {link}
    </Fragment>
  );
}

export default Page;
