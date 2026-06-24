import { test, expect, Browser, chromium, Page } from '@playwright/test';

test('google search test', async ({page}) => {

   await  page.goto("https://www.google.com/");
  await page.getByRole('combobox', { name: 'Search' }).fill('West Bengal Election ');
  await page.locator('div.wM6W7d span').filter({hasText:'Election Results'}).click(); 
  


await page.pause();
});

test('amazon search test', async ({page}) => {

   await  page.goto("https://www.amazon.in/");
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('Macbook pro ');
  await page.locator('div.s-suggestion span').filter({hasText:'14 inch'}).click(); 
  


await page.pause();
});