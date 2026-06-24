import { test, expect, Browser, chromium, Page } from '@playwright/test';

test(' element with testdataid test', async ({page}) => {

   await  page.goto("https://app.hubspot.com/signup-hubspot/crm");
  await page.getByTestId('EMAIL').fill('Tushar@yahoo.com')
  


await page.pause();
});