import { test, expect, chromium } from '@playwright/test';

test('xpath test', async ({page}) => {

   await  page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

   await page.locator("//input[@id='input-firstname']").fill('Tushar');
  //let header= await page.locator("//h1[text()='Register Account']").textContent();
  let header= await page.locator("//h1[text()='Register Account']").innerText();
  console.log(header);

await page.pause();
});