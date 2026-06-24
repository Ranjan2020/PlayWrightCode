// IIFE

import { Browser, chromium, firefox, Page, webkit } from "@playwright/test";

(async()=>{
  
  let browser:Browser= await chromium.launch({channel:'msedge',headless:false});
  //let browser:Browser= await chromium.launch({channel:"chromium",headless:false});
  //let browser:Browser= await chromium.launch({headless:false,executablePath:"C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe"});
    // let browser:Browser=await firefox.launch({headless:false})
    // let browser:Browser=  await webkit.launch({headless:false})

   
   let page:Page=await browser.newPage();
  await  page.goto("https://google.com");
   let title:string=  await page.title();
    console.log("title is: ",title);
   let url:string=  page.url();
   console.log("url is: ",url);
   await browser.close();

})();