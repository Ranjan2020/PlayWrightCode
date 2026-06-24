import { test, expect,chromium } from '@playwright/test';


test('context click  test', async ({page}) => {

   await  page.goto("https://seleniumpractise.blogspot.com/2016/08/how-to-handle-calendar-in-selenium.html");

   await page.locator('#datepicker').click();

   let month=await page.locator('span.ui-datepicker-month').textContent();
   let year= await page.locator('span.ui-datepicker-year').textContent();

   let currentMonthYear=`${month?.trim()} ${year?.trim()}`;
   console.log(currentMonthYear);

   let expectedMonthYear= "December 2026";

   while(true){
    if(currentMonthYear===expectedMonthYear){
        await page.getByRole('link', { name: '20',exact:true }).click();
        break;
    }
    else{
       await page.getByTitle('Next').click();
       await page.waitForTimeout(1000);
         month=await page.locator('span.ui-datepicker-month').textContent();
    year= await page.locator('span.ui-datepicker-year').textContent();

    currentMonthYear=`${month?.trim()} ${year?.trim()}`;
   console.log(currentMonthYear);

    }
   }

 



await page.pause();

});