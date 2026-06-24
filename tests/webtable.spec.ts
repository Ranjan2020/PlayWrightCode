import { test, expect,chromium } from '@playwright/test';


test('webtable pagination with single selection  test', async ({page}) => {

   await  page.goto("https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html");

   while(true){

 let isUserPresent=  await page.getByRole('cell',{name:'Tushar'}).first().isVisible();

 if(isUserPresent){
  
    await page.locator('#dataTable tr').filter({hasText:'Tushar'}).first().locator('input[type="checkbox"]').check();
    break;

 }
 else{
    let nextEle= page.getByRole('button', { name: '›' });
     await page.waitForTimeout(2000);
    await nextEle.click();
   let isDisabled=await nextEle.isDisabled();
   if(isDisabled){
    console.log("pagination is over...");
    break;
   }


 }


   }



 



await page.pause();

});





test('webtable pagination with multi selection  test', async ({page}) => {

   await  page.goto("https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html");

   while(true){

let allUserChecks= await page.locator('table#dataTable tr').filter({hasText:'Tushar'}).locator('input[type="checkbox"]').all();

if(allUserChecks.length>0){
    for(let e of allUserChecks ){
        await e.check();
    }
}

 let nextEle= page.getByRole('button', { name: '›' });
    
   let isDisabled=await nextEle.isDisabled();
   if(isDisabled){
    console.log("pagination is over...");
    break;
   }

    await page.waitForTimeout(1000);
    await nextEle.click();
   


   }

await page.pause();

});


test("web table pagination: multi-selection with page-wise username count and total clicks", async ({
  page,
}) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html",
  );

  let userName = "john_doe";
  let clickedCount = 0;
  let currentPage = 1;
  let pageVsAppearanceCount: Record<number, number> = {};

  while (true) {
    let allUserChecks = await page
      .locator("#dataTable tr")
      .filter({ hasText: userName })
      .locator("input[type='checkbox']")
      .all();

    pageVsAppearanceCount[currentPage] = allUserChecks.length;

    if (allUserChecks.length > 0) {
      for (let e of allUserChecks) {
        await e.check();
        clickedCount++;
      }
    }
    let nextIconButton = page.getByRole("button", { name: "›" });
    let isDisabled = await nextIconButton.isDisabled();
    if (isDisabled) {
      // pagination has ended
      console.log("Pagination has ended");
      console.log("Page vs john_doe appearance count:");
      for (let [pageNo, count] of Object.entries(pageVsAppearanceCount)) {
        console.log(`Page ${pageNo}: ${count}`);
      }
      console.log(`${userName} clicked count: ${clickedCount}`);
      break;
    }

    await page.waitForTimeout(1000);
    await nextIconButton.click();
    currentPage++;
  }
  await page.pause();
});