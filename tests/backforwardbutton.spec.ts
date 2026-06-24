import { test, expect, Browser, chromium, Page } from '@playwright/test';

test('back  and frwd button simulaton  test', async ({page}) => {

   await  page.goto("https://naveenautomationlabs.com/opencart/index.php?route=common/home");
    console.log(await page.title());

    await page.goto("https://www.livpuresmart.com/");
    console.log(await page.title());

    await page.goBack();
    console.log(await page.title());


    await page.goForward();
    console.log(await page.title());
    await page.goBack();
    console.log(await page.title());
// refresh the page
    await page.reload();

  
  


//await page.pause();
});