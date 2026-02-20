document.querySelector(".link a").onclick = function (e) {
  e.preventDefault();
  browser.tabs.create({ url: "http://slither.com" });
  window.close();
};
