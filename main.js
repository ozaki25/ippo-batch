const puppeteer = require('puppeteer');

const baseUrl = process.env.BASE_URL;

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(baseUrl, { waitUntil: 'networkidle0' });
  await page.waitFor(2000);

  await page.goto(`${baseUrl}/admin`, { waitUntil: 'networkidle2' });
  await page.evaluate(() => document.querySelector('#execute').click());
  await page.waitFor(3000);

  await browser.close();
})();
