browser.webRequest.onBeforeRequest.addListener(
  function (details) {
    if (details.url.match(/slither\.(io|com)\/s\/game.*\.js/)) {
      return { redirectUrl: "data:text/javascript," };
    }
    return {};
  },
  { urls: ["*://slither.io/*", "*://slither.com/*"], types: ["script"] },
  ["blocking"]
);
browser.runtime.onInstalled.addListener(function (details) {
  if (details.reason === "install" || details.reason === "update") {
    browser.tabs.query({ url: ["*://slither.io/*", "*://slither.com/*"] }, function (tabs) {
      for (var tab of tabs) {
        browser.tabs.reload(tab.id);
      }
    });
  }
});