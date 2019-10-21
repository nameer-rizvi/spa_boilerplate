import { isProd } from "../shared/index";

const inNavigator = "serviceWorker" in navigator;

const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    window.location.hostname === "[::1]" ||
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

const format = message => {
  return `\n👷 [SERVICE WORKER]\n\nService worker ${message}.\n\n`;
};

export function register() {
  if (!isLocalhost && isProd && inNavigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(registration => {
          console.log(format("registered"));
        })
        .catch(registrationError => {
          console.log(format("registration failed"));
        });
    });
  } else if (isLocalhost) {
    console.log(format("not enabled for localhost"));
  } else if (!isProd) {
    console.log(format("only enabled for production"));
  } else if (!inNavigator) {
    console.log(format("not in navigator"));
  } else {
    console.log(format("does not meet conditions for registration"));
  }
}

export function unregister() {
  if (inNavigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
    console.log(`${sw} successfully unregistered.`);
  }
}
