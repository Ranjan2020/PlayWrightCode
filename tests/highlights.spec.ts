import { test, expect, Browser, chromium, Page } from '@playwright/test';

test(' highlight pratice test', async ({page}) => {

   await  page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
   page.getByRole('textbox',{name:'First Name'}).highlight();
    

    await page.pause();
});
