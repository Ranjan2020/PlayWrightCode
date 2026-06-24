import { test, expect, Browser, chromium, Page, Locator } from '@playwright/test';



test('total links ', async ({page}) => {

   await  page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
  let totalLinks= await page.locator('a').count();
  console.log(totalLinks);
     
     

  //await page.pause();
});

test('total links on the page', async ({page}) => {

   await  page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
  let alllinks:Locator[]= await page.locator('//a[@href]').all();
     let totallinks= alllinks.length;

     console.log('Total number of links',totallinks);

     for(let e of alllinks){
    let text= await  e.innerText();
     let hrefval=  await e.getAttribute('href');
     console.log(text +":" +hrefval);
     }

  //await page.pause();
});

test('total images on the page', async ({page}) => {

   await  page.goto("https://flipkart.com/");
  let allImages:Locator[]= await page.locator('img').all();
     let totalimages= allImages.length;

     console.log('Total number of links',totalimages);

     for(let e of allImages){
    let altval=  await e.getAttribute('alt');
     let srcval=  await e.getAttribute('src');
     console.log(altval +":" +srcval);
     }

  //await page.pause();
});

test('itarate links and clicks with break', async ({page}) => {

   await  page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
  let allLinks:Locator[]= await page.locator('a.list-group-item').all();

  for(let e of allLinks){
    await e.highlight();
  let linkText=  (await e.innerText()).trim();
  console.log(linkText);
  await page.waitForTimeout(1000);
     if(linkText==='Transactions'){
      await  e.click();
      break;
     }
  }
     
     

  await page.pause();
});