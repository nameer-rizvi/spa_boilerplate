import { isProd, log } from "../shared/index";

const inNavigator = "serviceWorker" in navigator;

const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    window.location.hostname === "[::1]" ||
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

const logStatus = status => {
  log({
    emoji: "👷",
    label: "[SERVICE WORKER]",
    message: `Service worker ${status}.`
  });
};

export function register() {
  isLocalhost
    ? logStatus("not enabled for localhost")
    : !isProd
    ? logStatus("only enabled for production")
    : !inNavigator
    ? logStatus("not in navigator")
    : window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then(() => {
            logStatus("registered");
          })
          .catch(() => {
            logStatus("registration failed");
          });
      });
}

export function unregister() {
  inNavigator &&
    (navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }),
    logStatus("successfully unregistered"));
}
