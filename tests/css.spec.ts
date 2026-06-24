import { test, expect, Browser, chromium, Page } from '@playwright/test';

test('css test', async ({page}) => {

   await  page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

   await page.locator("#input-firstname").fill('Tushar');
  
   await page.locator('input#input-email').fill('tushar@gmail.com')

await page.pause();
});