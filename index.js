const puppeteer = require("puppeteer");

async function start(email) {
  const url =
    "https://sites.google.com/ascension.org/txaus-on-call-schedule/smca";
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);
  await page.type("#identifierId", email);
  await page.click("#identifierNext > div > button");
  
  await page.waitForNavigation();
  await page.type(, email);
  await page.click("#idSIButton9");
  
  await page.waitForNavigation();
}

start("kpdait@ascension.org");
