const isProduction = require("../shared/index")["isProd"];
const inNavigator = "serviceWorker" in navigator;

const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    window.location.hostname === "[::1]" ||
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

const sw = "👷 service worker";

export function register() {
  if (!isLocalhost && isProduction && inNavigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(registration => {
          console.log(`${sw} registered.`);
        })
        .catch(registrationError => {
          console.log(`${sw} registration failed: `, registrationError);
        });
    });
  } else if (isLocalhost) {
    console.log(`${sw} not enabled for localhost.`);
  } else if (!isProduction) {
    console.log(`${sw} only enabled for production.`);
  } else if (!inNavigator) {
    console.log(`${sw} not in navigator.`);
  } else {
    console.log(`${sw} does not meet conditions for registration.`);
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
