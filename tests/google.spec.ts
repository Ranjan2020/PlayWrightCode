import { test, expect, Browser, chromium, Page } from '@playwright/test';

test('google title test', async ({page}) => {

   await  page.goto("https://amazon.com");
    let title:string=  await page.title();
     console.log("title is: ",title);
    let url:string=  page.url();
    console.log("url is: ",url);
   
});

