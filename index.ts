import { Builder, By, Key, until } from "selenium-webdriver";
import * as chrome from "selenium-webdriver/chrome";

let httpProxy = "http://45.93.68.219:8000:gnxBwk:KjumGP";
let option = new chrome.Options().setProxy({
  proxyType: "manual",
  httpProxy,
});

const driver = new Builder().forBrowser("chrome").withCapabilities(option).build();

const sleep = (seconds: number) => new Promise((r) => setTimeout(r, seconds * 1000));
driver.get("http://whatismyip.host/").then(async function () {
  // await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
  // await driver.wait(until.titleContains("webdriver"), 4000);
  await sleep(5);
  await driver.quit();
});
