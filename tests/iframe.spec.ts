
// import { test, expect, Browser, chromium, Page } from '@playwright/test';

// test('iframe element test', async ({page}) => {

//    await  page.goto("https://www.formsite.com/templates/education/class-registration-form/");

//    await page.getByTitle('Class-Registration-Forms-and-Examples').click();
//     await page.frameLocator('#frame-one185709863').locator('#RESULT_TextField-1').fill('Tushar@');
//     //await page.waitForTimeout(500)
//     await page.frameLocator('#frame-one185709863').getByRole('textbox',{name:'Last Name'}).fill('Das');
//     await page.frameLocator('#frame-one185709863').locator('#RESULT_TextField-4').fill('tushar@gmail.com');
//     await page.frameLocator('#frame-one185709863').getByRole('textbox',{name:'Email Address'}).fill('tushar@gmail.com');

//     await page.frameLocator('#frame-one185709863').getByRole('combobox',{name:'Grade'}).selectOption('7');
//    //await page.waitForTimeout(1000);
//   await page
//   .frameLocator('#frame-one185709863')
//   .getByLabel('Information Technology', { exact: true })
//   .check({ force: true });
//   //await page.locator('#FSsubmit').click();
    
// await page .frameLocator('#frame-one185709863').getByRole('checkbox', { name: 'Computer Science 1' }).check({ force: true });

// await page
//   .frameLocator('#frame-one185709863')
//   .getByRole('radio',  { name: /Wed 2-5pm/i  })
//   .check({force: true});
//  // await page.locator('#FSsubmit').click();

//  await page.locator('#frame-one185709863').contentFrame().getByRole('button', { name: 'Submit' }).click();


// await page.pause();
// });

import { test, expect } from '@playwright/test';
import type { Frame, FrameLocator } from '@playwright/test';
test('iframe element test', async ({ page }) => {

  await page.goto(
    'https://www.formsite.com/templates/education/class-registration-form/'
  );

  // Open form
  await page
    .getByTitle('Class-Registration-Forms-and-Examples')
    .click();

  //  await page.waitForTimeout(2000);

  // Store iframe reference once
  const frame = page.frameLocator('#frame-one185709863');

  // Fill form
  await frame.locator('#RESULT_TextField-1').fill('Tushar');
  await frame.getByRole('textbox', { name: 'Last Name' }).fill('Das');

  await frame.locator('#RESULT_TextField-4').fill('tushar@gmail.com');

  await frame
    .getByRole('textbox', { name: 'Email Address' })
    .fill('tushar@gmail.com');

  // Select dropdown
  await frame
    .getByRole('combobox', { name: 'Grade' })
    .selectOption('7');

  // Checkbox
  await frame
    .getByLabel('Information Technology', { exact: true })
    .check({ force: true });;

  await frame
    .getByRole('checkbox', { name: 'Computer Science 1' })
    .check({ force: true });

  // Radio button
  await frame
    .getByRole('radio', { name: /Wed 2-5pm/i })
    .check({force: true});

  // Submit
  await frame
    .getByRole('button', { name: 'Submit' })
    .click();

  await page.pause();
});




test('frame elements test', async ({ page }) => {

  await page.goto('https://www.londonfreelance.org/courses/frames/index.html');

  let header=await page.frameLocator('[name="main"]').getByRole('heading',{level:2}).innerText();
  console.log(header);

  let footer=await page.frameLocator('[name="bot"]').getByRole('heading',{level:2}).innerText();
  console.log(footer);


  await page.pause();
});

test('total number frame test', async ({ page }) => {

  await page.goto('https://www.londonfreelance.org/courses/frames/index.html');

  let allFarames:Frame[]=page.frames();

   let framecount=  allFarames.length;
   console.log(framecount);

   for(let fr of allFarames){
   let frameName=fr.name();
   let frameUrl= fr.url();
   console.log(frameName+ ":"+frameUrl);
   }

  
  await page.pause();
});


test('nested frame test', async ({ page }) => {

  await page.goto('https://www.dezlearn.com/nested-iframes-example/');

  await page.frameLocator('#parent_iframe')
              .frameLocator('#iframe1')
               .getByRole('button',{name:'Click Here'}).click();

  let text=      await page.frameLocator('#parent_iframe')
              .frameLocator('#iframe1').locator('#processing').innerText();


              console.log(text);

              console.log("-----------");

              await page.frameLocator('#parent_iframe').getByRole('button',{name:'Click Here'}).click();
              let msg=await page.frameLocator('#parent_iframe').locator('#processing').innerText();
              console.log(msg);

      let header= await page.getByRole('heading', { name: 'Nested iFrames Example', level: 2 }).innerText();
      console.log(header);

  await page.pause();
});

test('Iframe element test', async ({ page }) => {
    await page.goto('https://www.formsite.com/templates/registration-form-templates/vehicle-registration-form/'); //web page

    await page.getByTitle('Vehicle-Registration-Forms-and-Examples').click();//image

    //iframe DOM

    let frameLocator: FrameLocator = page.frameLocator('#frame-one748593425'); //capture the iframe

    await frameLocator.getByRole('textbox', { name: 'Location' }).fill('Bangalore');
    await frameLocator.locator('#RESULT_TextField-1').fill('My Title');

    let header = await page.locator('.details__form-preview-title').innerText();
    console.log(header);

    await page.pause();
});

test('Iframe elements test1', async ({ page }) => {
    await page.goto('https://www.formsite.com/templates/registration-form-templates/vehicle-registration-form/'); //web page

    await page.getByTitle('Vehicle-Registration-Forms-and-Examples').click();//image

    //iframe DOM

    let frameLocator: FrameLocator = page.frameLocator('#frame-one748593425'); //capture the iframe

    await frameLocator.getByRole('textbox', { name: 'Location' }).fill('Bangalore');
    await frameLocator.locator('#RESULT_TextField-1').fill('My Title');

    let header = await page.locator('.details__form-preview-title').innerText();
    console.log(header);

    await page.pause();
});
