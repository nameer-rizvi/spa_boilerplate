import { isProd, log } from "../shared/index";

const inNavigator = "serviceWorker" in navigator;

const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    window.location.hostname === "[::1]" ||
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

const logStatus = message => {
  log({
    emoji: "👷",
    label: "[SERVICE WORKER]",
    message: `Service worker ${message}`
  });
};

export function register() {
  if (!isLocalhost && isProd && inNavigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(registration => {
          logStatus("registered");
        })
        .catch(registrationError => {
          logStatus("registration failed");
        });
    });
  } else if (isLocalhost) {
    logStatus("not enabled for localhost");
  } else if (!isProd) {
    logStatus("only enabled for production");
  } else if (!inNavigator) {
    logStatus("not in navigator");
  } else {
    logStatus("does not meet conditions for registration");
  }
}

export function unregister() {
  if (inNavigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
    logStatus("successfully unregistered");
  }
}
