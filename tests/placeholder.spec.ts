import { test, expect, Browser, chromium, Page } from '@playwright/test';

test(' element with placeholder test', async ({page}) => {

   await  page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
   await page.getByPlaceholder('First Name').fill('Tushar');
    await page.getByPlaceholder('Telephone').fill('9988775544');
    await page.getByPlaceholder('Password',{exact:true}).fill('Tushar@123');
    await page.getByPlaceholder('Password Confirm').fill('Tushar@123');



await page.pause();
});