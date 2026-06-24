import { test, expect, Browser, chromium, Page } from '@playwright/test';

test('Total links on the page test', async ({page}) => {

   await  page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

 let LinkTexts:string[]=  await page.locator('//a[@href]').allInnerTexts();

 for(let e of LinkTexts){
    console.log(e);
 }

//await page.pause();
});