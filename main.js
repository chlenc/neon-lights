let webdriver = require("selenium-webdriver");
let chrome = require("selenium-webdriver/chrome");
let proxy = require("selenium-webdriver/proxy");
let opts = new chrome.Options();

const sleep = (seconds) => new Promise((r) => setTimeout(r, seconds * 1000));
(async function example() {
  opts.setProxy(proxy.manual({ http: "45.93.68.219:8000:gnxBwk:KjumGP" }));
  let driver = new webdriver.Builder().forBrowser("chrome").setChromeOptions(opts).build();
  try {
    await driver.get("http://whatismyip.host/");
    await sleep(5);
  } finally {
    await driver.quit();
  }
})();
