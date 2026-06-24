import { test, expect, chromium } from '@playwright/test';

test('expect assertaion  test', async ({page}) => {

   await  page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

  expect(page.url()).toContain('account/register');

  let header=page.getByRole('heading', { name: 'Register Account', level:1 });

  await expect(header).toBeVisible();

  await expect.soft(header).toHaveText('Register Account111');
  console.log("Hello world");
  await expect(page.locator('aside#column-right a')).toHaveCount(13);

  await page.getByRole('textbox',{name:'First Name'}).fill('Tushar');
  await  expect.soft(page.getByRole('textbox',{name:'First Name'})).toHaveValue('Tushar1');



   await  page.goto("https://naveenautomationlabs.com/opencart/ui/data-testid-page.html");

   await expect(page.getByTestId('country-select').locator('option')).toHaveCount(6);
    await page.getByTestId('country-select').selectOption('India');
    await expect(page.getByTestId('country-select')).toHaveValue('in');









   

//await page.pause();
});




test('expect assertaion for elemnets   test', async ({page}) => {

   await  page.goto("https://naveenautomationlabs.com/opencart/ui/elementstate.html");
    await expect(page.locator('#register-btn')).toBeDisabled();
    await expect(page.locator('#firstname')).toBeEmpty();
    await page.locator('#lastname').fill('Das');
    await expect(page.locator('#lastname')).toHaveValue('Das');

    await expect(page.locator('#firstname')).toBeEditable();
    await expect(page.locator('#username')).toBeEditable();



  

  });