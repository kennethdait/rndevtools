const puppeteer = require("puppeteer");

const url =
  "https://sites.google.com/ascension.org/txaus-on-call-schedule/smca";
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto(url);
