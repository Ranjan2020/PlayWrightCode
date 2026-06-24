import { test, expect, Browser, chromium, Page } from '@playwright/test';

test('register page test', async ({page}) => {

   //await  page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
   await  page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

//   await page.getByRole('textbox',{name:'First Name'}).fill('Tushar');
//   await page.getByRole('textbox',{name:'Last Name'}).fill('Ranjan');
//   await page.getByRole('textbox',{name:'E-Mail'}).fill('Tushar@gmail.com');
//   await page.getByRole('textbox',{name:'Telephone'}).fill('9999988888');

//    await page.getByRole('button',{name:'Continue'}).click();

   await page.getByRole('link',{name:'Forgotten Password'}).first().click();




  await page.pause();
    
});