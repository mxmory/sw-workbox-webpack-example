console.log(1);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/service-worker.js").then(
      function (registration) {
        // Registration was successful
        console.log("Registered SW: ", registration.scope);
      },
      function (err) {
        // registration failed :(
        console.log("SW registration failed: ", err);
      }
    );
  });
}
