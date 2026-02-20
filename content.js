(function () {
  function inject() {
    var s = document.createElement("script");
    s.src = browser.runtime.getURL("pixi.js");
    s.async = false;
    document.documentElement.appendChild(s);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();
