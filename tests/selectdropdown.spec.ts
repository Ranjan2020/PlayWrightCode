import { test, expect, Browser, chromium, Page, Locator } from '@playwright/test';

test('webtable all checkbox click  test', async ({page}) => {

   await  page.goto("https://orangehrm.com/contact-sales");

   //await page.getByRole('combobox',{name:'City'}).selectOption({label:'Bhopal'});

   await page.getByRole('combobox',{name:'Country'}).selectOption({label:'India'});

   await page.waitForTimeout(1000);

   await page.getByRole('combobox',{name:'Country'}).selectOption({value:'Brazil'});

   await page.waitForTimeout(1000);

   await page.getByRole('combobox',{name:'Country'}).selectOption({index:20});



 

     

await page.pause();
});

test('multi select dropdown value select', async ({page}) => {

   await  page.goto("https://selenium08.blogspot.com/2019/11/dropdown.html");

   await page.locator('[name="Month"]').selectOption(["January",'May','August']);

   
await page.pause();
});