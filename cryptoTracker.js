import puppeteer from "puppeteer";

async function cryptoTracker() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  await page.goto("https://www.coingecko.com/");
  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

  const searchInput = "#search-bar";
  await page.waitForSelector(searchInput);
  await page.locator(searchInput).click();
  await page.locator("#search-input-field").fill("Bitcoin");
  await sleep(10000);
  await page.keyboard.press("Enter");
  await sleep(1000);


  
  const data = await page.$eval(
    "#gecko-coin-page-container > div.tw-col-start-1.\\32 lg:tw-row-span-1.\\32 lg:tw-pr-6.\\32 lg:tw-border-r.tw-border-gray-200.dark:tw-border-moon-700.tw-mt-3.\\32 lg:tw-mt-0 > div > div.tw-flex-1 > div:nth-child(2) > div.tw-font-bold.tw-text-gray-900.dark\\:tw-text-moon-50.tw-text-3xl.md\\:tw-text-4xl.tw-leading-10",
    (el) => el.innerText
  );

  return data;
}
export default cryptoTracker;
