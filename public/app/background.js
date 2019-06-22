window.browser = (function () {
   return window.msBrowser ||
     window.browser ||
     window.chrome;
 })();

browser.browserAction.onClicked.addListener(function(tab) {
   browser.windows.create({
     url: browser.runtime.getURL("index.html"),
     type: "popup"
   });
 });
 