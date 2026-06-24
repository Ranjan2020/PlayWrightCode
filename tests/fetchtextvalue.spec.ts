import { test, expect, Browser, chromium, Page } from '@playwright/test';

test('fetch text value  test', async ({page}) => {

   await  page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

   await page.getByRole('textbox',{name:"First Name"}).fill('Tushar Ranjan');
   let textval=await page.getByRole('textbox',{name:"First Name"}).inputValue();
   console.log(textval);

await page.pause();
});