import { test, expect, Browser, chromium, Page, Locator } from '@playwright/test';

test('shadow dom elemnts  test', async ({page}) => {

   await  page.goto("https://naveenautomationlabs.com/opencart/ui/shadow-dom.html");

   await page.locator('#shadow-btn').click();

   await page.locator('#username').fill('Tushar');
   await page.locator('#email').fill('tushar@gmail.com');
   await page.locator('#bio').fill('i love my india');
   await page.locator('#submit-btn').click();


   const checkboxes = await page.locator('input[type="checkbox"]').all();

for (const checkbox of checkboxes) {
  await checkbox.check();
}


await page.pause();
});



