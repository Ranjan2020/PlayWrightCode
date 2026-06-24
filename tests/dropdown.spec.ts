import { test, expect, Browser, chromium, Page, Locator } from '@playwright/test';

test('jquery dropdown value  test', async ({page}) => {

   await  page.goto("https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/");

  await page.locator('#justAnInputBox').click();

//   await page.locator('span.comboTreeItemTitle')
//   .filter({hasText:'choice 2'}).first().click();

//selectChoice(page,['choice 5', 'choice 2','choice 2 1','choice 2 3','choice 7','choice 6 1'])
  await selectAllChoices(page);
//await page.pause();
});


//  async function selectChoice(page:Page,choices:string[]):Promise<void>{

//     for( let ch of choices){
//         await page.locator('span.comboTreeItemTitle')
//                .filter({hasText:`${ch}`}).first().click();

//     }
    


// }

async function selectAllChoices(page: Page): Promise<void> {

  const allChoices = page.locator('span.comboTreeItemTitle');

  const count = await allChoices.count();

  for (let i = 0; i < count; i++) {
    await allChoices.nth(i).first().click();
  }
}
