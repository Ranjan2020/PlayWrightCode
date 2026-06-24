import { test, expect, Browser, chromium, Page } from '@playwright/test';

test('locator pratice test', async ({page}) => {

   await  page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
    await page.getByRole('radio',{name:'Yes'}).click();
    await page.getByRole('checkbox').click();


    await page.pause();
});

test('text area test', async ({page}) => {

    let address=`101,south block
new colony,
Bhubaneswar
odisha`;

   await  page.goto("https://naveenautomationlabs.com/opencart/index.php?route=product/product&product_id=42");
await page.getByRole('textbox',{name:'* Textarea'}).fill(address);
    

    await page.pause();
});

