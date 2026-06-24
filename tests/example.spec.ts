import { test, expect, Browser, chromium, Page } from '@playwright/test';
import { clearScreenDown } from 'node:readline';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
clearScreenDown
test('google test', async ({  }) => {
 let browser:Browser= await chromium.launch({channel:'msedge',headless:false
  
 });
   //let browser:Browser= await chromium.launch({channel:"chromium",headless:false});
   //let browser:Browser= await chromium.launch({headless:false,executablePath:"C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe"});
     // let browser:Browser=await firefox.launch({headless:false})
     // let browser:Browser=  await webkit.launch({headless:false})
 
    
    let page:Page=await browser.newPage();
   await  page.goto("https://google.com");
    let title:string=  await page.title();
     console.log("title is: ",title);
    let url:string=  page.url();
    console.log("url is: ",url);
    await browser.close();
});


