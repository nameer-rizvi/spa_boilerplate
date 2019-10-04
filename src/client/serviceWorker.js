const isProduction = require("../config/index")["isProd"];
const inNavigator = "serviceWorker" in navigator;

const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    window.location.hostname === "[::1]" ||
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export function register() {
  if (!isLocalhost && isProduction && inNavigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(registration => {
          console.log("Service worker registered: ", registration);
        })
        .catch(registrationError => {
          console.log(
            "Service worker registration failed: ",
            registrationError
          );
        });
    });
  } else if (isLocalhost) {
    console.log("Service worker not enabled for localhost.");
  } else if (!isProduction) {
    console.log("Server worker only enabled for production.");
  } else if (!inNavigator) {
    console.log("Service worker not in navigator.");
  } else {
    console.log("Service worker does not meet conditions for registration.");
  }
}

export function unregister() {
  if (inNavigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
    console.log("Service worker successfully unregistered.");
  }
}
