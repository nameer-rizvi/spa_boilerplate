const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    window.location.hostname === "[::1]" ||
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export function register() {
  if (
    !isLocalhost &&
    process.env.NODE_ENV === "production" &&
    "serviceWorker" in navigator
  ) {
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
  } else {
    console.log("Service worker only enabled for production.");
  }
}

export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
