import { test, expect, Browser, chromium, Page } from '@playwright/test';

test('fill with delay test', async ({page}) => {

   await  page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
   await page.getByRole('textbox',{name:'First Name'}).pressSequentially('Tushar Ranjan ',{delay:500});
    


    //await page.pause();
});