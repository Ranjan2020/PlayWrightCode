import { Browser, BrowserContext, Page, chromium, firefox, webkit } from "playwright";

(async () => {

    let browser: Browser = await chromium.launch({ channel: 'chrome', headless: false, slowMo: 2000 });

    let ctx1: BrowserContext = await browser.newContext();
    let ctx2: BrowserContext = await browser.newContext();

    let page1: Page = await ctx1.newPage();
    let page2: Page = await ctx2.newPage();

    await page1.goto('http://localhost:3000');//Tushar
    await page2.goto('http://localhost:3000');//Nihar

    await page1.locator('[data-testid="username-input"]').fill('Tushar');
    await page1.locator('[data-testid="join-btn"]').click();

    await page2.locator('[data-testid="username-input"]').fill('Nihar');
    await page2.locator('[data-testid="join-btn"]').click();

    await page1.locator('[data-testid="message-input"]').fill('Hi Nihar bhai how are u??')
    await page1.locator('[data-testid="send-btn"]').click();

    await page2.locator('[data-testid="message-input"]').fill('Hi Tuhsar, im good... how are u??')
    await page2.locator('[data-testid="send-btn"]').click();


})();
