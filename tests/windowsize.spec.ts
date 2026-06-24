import { test, expect, chromium } from '@playwright/test';

test.use({
    viewport:{width:800,height:700}
})

test('xpath test', async ({page}) => {

    //page.setViewportSize({width:500,height:600});

   await  page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

   await page.locator("//input[@id='input-firstname']").fill('Tushar');
  //let header= await page.locator("//h1[text()='Register Account']").textContent();
  let header= await page.locator("//h1[text()='Register Account']").innerText();
  console.log(header);

await page.pause();
});