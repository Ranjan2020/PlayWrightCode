import { test, expect, Browser, chromium, Page } from '@playwright/test';

test('getAttribute value  test', async ({page}) => {

   await  page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

   
   let placeholderval=await page.getByRole('textbox',{name:"First Name"}).getAttribute('placeholder');
   console.log(placeholderval);

  let hrefval= await page.getByRole('link',{name:'Forgotten Password'}).getAttribute('href');
  console.log(hrefval);


await page.pause();
});