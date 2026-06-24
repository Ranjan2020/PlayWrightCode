import { test, expect,chromium } from '@playwright/test';
import { clearScreenDown } from 'node:readline';

test('context click  test', async ({page}) => {

   await  page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");

  await page.getByText('right click me', { exact: true }).click({button:'right'});
  await page.pause();
  await page.getByText('Copy', { exact: true }).click();




await page.pause();

});



test(' level 2 menu sub menu  heading  test', async ({page}) => {

   await  page.goto("https://www.spicejet.com/");

  await page.getByText('Add-ons', { exact: true }).hover();
  const visaServices = page.locator('a').filter({
    hasText: 'Visa Services'
  }).first();

  await visaServices.waitFor({ state: 'visible' });

  await visaServices.click();

await page.pause();

});


test('level 4 menu submenu handing', async ({ page }) => {

    await page.goto('https://www.bigbasket.com/');
    
    //await page.locator('[id="headlessui-menu-button-:Rld956:"]').click();

    await page.getByText('Shop by', { exact: true }).nth(1).click(); //l1
    await page.waitForTimeout(1000);
    await page.locator('[id="headlessui-menu-items-:R15d956:"]').getByRole('link', { name: 'Beverages' }).hover();//l2
   // await page.waitForTimeout(1000);
    await page.locator('[id="headlessui-menu-items-:R15d956:"]').getByRole('link', { name: 'Tea' }).hover();//l3
    //await page.waitForTimeout(1000);
    await page.locator('[id="headlessui-menu-items-:R15d956:"]').getByRole('link', { name: 'Green Tea' }).click();//l4

    await page.pause();

});


test('drag and drop test', async ({ page }) => {

    await page.goto('https://jqueryui.com/resources/demos/droppable/default.html');
    
    let source= page.locator('#draggable');
    let target=page.locator('#droppable');

    await source.dragTo(target);


    await page.pause();

});

test('keyboard enter handling', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    
   let searchbox= page.getByRole('textbox', { name: 'Search' });

   await searchbox.fill('macbook');
   await searchbox.press('Enter');
   


    await page.pause();

});


test('keyboard Tab sequence accessbility form test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    
  let firstName= page.getByRole('textbox', { name: 'First Name' })
  await  firstName.fill('Tushar');

  await firstName.press('Tab');
  await page.keyboard.type('Das');

  await page.keyboard.press('Tab');
  await page.keyboard.type('tushar@gmail.com');

  await page.keyboard.press('Tab');
  await page.keyboard.type('9999999988');

  await page.keyboard.press('Tab');
  await page.keyboard.type('tushar@123');

  await page.keyboard.press('Tab');
  await page.keyboard.type('tushar@123');

   await page.keyboard.press('Tab');
  await page.keyboard.press('ArrowLeft');
  await page.keyboard.press('ArrowLeft');

  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');

  await page.keyboard.press('Space');



  await page.pause();

});



