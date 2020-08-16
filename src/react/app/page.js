import React, { useEffect, Fragment } from "react";
import { port, endpoint } from "../../shared";
import { logger } from "simpul";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { isProd } from "../../shared";

function Page() {
  useEffect(() => {
    const { origin } = window.location;
    const url = origin.includes(":" + port.client)
      ? origin.replace(port.client, port.server) + endpoint
      : origin + endpoint;
    fetch(url)
      .then((response) => response.json())
      .then(logger)
      .catch(logger);
  }, []);

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
      <h3>p.s. im at /src/react/App/Page.js</h3>
      {link}
    </Fragment>
  );
}

export default Page;
