import { test, expect, Browser, chromium, Page } from '@playwright/test';

test('page loading state  test', async ({page}) => {

   await  page.goto("https://naveenautomationlabs.com/opencart/index.php?route=common/home",{waitUntil:'commit'});
    

  
  


await page.pause();
});