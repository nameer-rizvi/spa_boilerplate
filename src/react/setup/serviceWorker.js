import { logger } from "simpul";
import { isProd } from "../../shared";

const inNavigator = "serviceWorker" in navigator;

const logStatus = (status) => logger(`👷 Service worker ${status}.`);

export const register = () =>
  window.location.hostname === "localhost" ||
  window.location.hostname === "[::1]" ||
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
    ? logStatus("not enabled for localhost")
    : !isProd
    ? logStatus("only enabled for production")
    : !inNavigator
    ? logStatus("not in navigator")
    : window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then(() => logStatus("registered"))
          .catch(() => logStatus("registration failed"));
      });

export const unregister = () =>
  inNavigator &&
  (navigator.serviceWorker.ready.then((registration) =>
    registration.unregister()
  ),
  logStatus("successfully unregistered"));
