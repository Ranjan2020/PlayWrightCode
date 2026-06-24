import { test, expect, Browser, chromium, Page, Locator } from '@playwright/test';

test('Two window handle  test', async ({browser}) => {

  let context=await  browser.newContext();
 let page= await  context.newPage();
await  page.goto("https://orangehrm.com/contact-sales");
//await  page.goto("https://www.livpuresmart.com/");

let [childwindowpage]= await Promise.all([
   context.waitForEvent('page'),
   page.getByRole('link', { name: 'About Us'}).click()

  ]);

 await childwindowpage.waitForLoadState();

   let allpages=  context.pages();

   console.log("total number of pages:",allpages.length);

   await childwindowpage.bringToFront();
   console.log('child window title is:',await childwindowpage.title());

   await childwindowpage.close();

  await page.bringToFront();
  console.log('parent window title is:',await page.title());
     

await page.pause();
});






test('multiple window handle test', async ({ browser }) => {

    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto('https://orangehrm.com/contact-sales');

    let links = [
        page.getByRole('link', { name: 'About Us' }),
        page.getByRole('link', { name: 'Become a Partner' }),
        page.getByRole('link', { name: 'Contact Us' }),
        page.getByRole('link', { name: 'Press Releases' })
    ];

    let childwindowpages: Page[] = [];

    for (let link of links) {

        let [childwindow] = await Promise.all([
            context.waitForEvent('page'),
            link.click()
        ]);

        await childwindow.waitForLoadState();
        childwindowpages.push(childwindow);
    }

    console.log("total number of pages", context.pages().length);

    for (let i = 0; i < childwindowpages.length; i++) {

        let child = childwindowpages[i]!;

await child.bringToFront();
console.log('child window title is:', await child.title());

await child.close();
    }

    await page.bringToFront();
    console.log('parent window title is:', await page.title());

    console.log("Remaining number of pages", context.pages().length);

    await page.pause();
});