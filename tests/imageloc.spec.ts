import { test, expect, Browser, chromium, Page } from '@playwright/test';

test(' element with image test', async ({page}) => {

   await  page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
  await page.getByAltText('naveenopencart').highlight();
 await  page.getByAltText('naveenopencart').click();


await page.pause();
});