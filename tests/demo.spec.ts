import { test, chromium, expect } from '@playwright/test';

test('register test', async () => {

  const browser = await chromium.launch({
    headless: false,
    channel: 'chrome'
  });

  const context = await browser.newContext({
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36'
  });

  const page = await context.newPage();

  await page.goto(
    'https://demo.opencart.com/en-gb?route=account/register'
  );

   //await  page.goto("https://demo.opencart.com/en-gb?route=account/register");
   await expect(
    page.getByRole('textbox', { name: 'First Name' })
  ).toBeVisible({ timeout: 60000 });
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Das');
  await page.getByRole('textbox', { name: 'E-Mail' }).fill('tushar@yahoo.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('tushar@1234');
  await page.locator('#input-newsletter').click();

  console.log(await page.title());
console.log(await page.content());



  

await page.pause();
});