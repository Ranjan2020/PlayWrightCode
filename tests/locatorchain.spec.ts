import { test, expect, Browser, chromium, Page, Locator } from '@playwright/test';

test('locator chain  test', async ({page}) => {

   await  page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

   await page.locator('form').getByRole('textbox',{name:"First Name"}).fill('Tushar');
   await page.waitForTimeout(1000);
   await page.locator('form').getByRole('checkbox').click();
   await page.waitForTimeout(1000);
   await page.locator('#column-right').getByRole('link',{name:"login"}).click();

await page.pause();
});

test('webtable checkbox click  test', async ({page}) => {

   await  page.goto("https://qavbox.github.io/demo/webtable/");

//    await page.locator('#table01').locator('tr')
//      .filter({hasText:"Selenium"})
//      .getByRole('checkbox').click();

//const checkboxes:Locator = page.locator('#table01 input[type="checkbox"]');
//table [type="checkbox"]
const checkboxes:Locator = page.locator('table td [type="checkbox"] ');
const count = await checkboxes.count();
for (let i = 0; i < count; i++) {
  await checkboxes.nth(i).click();
}

     
   
await page.pause();
});


test('webtable column  value   test', async ({page}) => {

   await  page.goto("https://qavbox.github.io/demo/webtable/");

//    await page.locator('#table01').locator('tr')
//      .filter({hasText:"Selenium"})
//      .getByRole('checkbox').click();

//const checkboxes:Locator = page.locator('#table01 input[type="checkbox"]');
//table [type="checkbox"]

 let agedata=await page.locator('#table02').locator('tr')
  .filter({hasText:'Ashton Cox'})
  .locator('td').nth(3).innerText();

  console.log(agedata);

     
   
await page.pause();
});


test('webtable user dta  test', async ({page}) => {

   await  page.goto("https://qavbox.github.io/demo/webtable/");


 let userdata:string[]=await page.locator('#table02').locator('tr')
  .filter({hasText:'Ashton Cox'})
  .locator('td').allInnerTexts();

  for(let e of userdata)
  {
    console.log(e);
  }


await page.pause();
});


test('cricbuzz   test', async ({page}) => {

   await  page.goto("https://www.cricbuzz.com/live-cricket-scorecard/152020/mi-vs-lsg-47th-match-indian-premier-league-2026");


//  let data= await page.locator("//a[text()='Mitchell Marsh']") 
//   .locator('xpath=ancestor::div[contains(@class,"flex")]')
//    .locator('div.flex.justify-center.items-center.font-bold')
//    .first().innerText();


   let data= await page.locator("//div[@id='scard-team-966-innings-1']//a[text()='Mitchell Marsh']").first()
    .locator('div.text-cbTxtSec')
     .innerText();
  


 console.log(data);





await page.pause();
});

test('webtable cricinfo data', async ({ page }) => {
    await page.goto('https://www.espncricinfo.com/series/ipl-2026-1510719/mumbai-indians-vs-lucknow-super-giants-47th-match-1529290/full-scorecard'); //enter the url

    let wktTakerName = await page.locator('table.ci-scorecard-table').first()
        .locator('tr')
        .filter({ hasText: 'Josh Inglis ' }).first()
        .locator('td').nth(1)
        .locator('span').last()
        .innerText();
    console.log(wktTakerName);
    await page.pause();

});

test('webtable cricinfo score data', async ({ page }) => {
    await page.goto('https://www.espncricinfo.com/series/ipl-2026-1510719/mumbai-indians-vs-lucknow-super-giants-47th-match-1529290/full-scorecard'); //enter the url

   const score = await page.locator('table.ci-scorecard-table').first()
  .locator('tr')
  .filter({ hasText: 'Josh Inglis' })
  .first()
  .locator('td')
  .all();

// for (let i = 0; i < score.length; i++) {
//   const text = await score[i].innerText();
//   console.log(text);
// }

for (let i = 2; i < score.length; i++) {
  const text = await score[i].innerText();
  console.log(text);
}
await page.pause();
});


test('table full data  test', async ({page}) => {

   await  page.goto("https://www.w3schools.com/html/html_tables.asp");


 let alldata= await page.locator('table').first()
.locator('tr td').allInnerTexts();

for (let e of alldata){
    console.log(e);
}


     

await page.pause();
});

test('webtable all checkbox click  test', async ({page}) => {

   await  page.goto("https://naveenautomationlabs.com/opencart/ui/webtable.html");


 let checkboxes= await page.locator('table tr td').all()


for (let e of checkboxes){
    await e.click();
    //await page.waitForTimeout(1000);
}


     

await page.pause();
});


