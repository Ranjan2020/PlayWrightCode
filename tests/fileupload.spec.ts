import { test, expect,chromium } from '@playwright/test';

test('single file upload  test', async ({page}) => {

   await  page.goto("https://naveenautomationlabs.com/opencart/ui/file-upload.html");

   await page.locator('#single-file').setInputFiles('C:\\Users\\tusha\\Downloads\\form121HelpFile.pdf')

await page.pause();
await page.locator('#single-file').setInputFiles([])
await page.pause();

});

test('multi file upload  test', async ({page}) => {

   await  page.goto("https://naveenautomationlabs.com/opencart/ui/file-upload.html");

   await page.locator('#multi-file').setInputFiles([
    'C:\\Users\\tusha\\Downloads\\form121HelpFile.pdf',
    'C:\\Users\\tusha\\Downloads\\Resume---.pdf',
    'C:\\Users\\tusha\\Downloads\\marrige biodata bapi.docx',
    'C:\\Users\\tusha\\Downloads\\ORANGE.jpg'

   ])

 

 


await page.pause();
});

test(' file upload if type file is not present  test', async ({page}) => {

   await  page.goto("https://naveenautomationlabs.com/opencart/ui/file-upload.html");

  let [fileupload]= await Promise.all([
    page.waitForEvent('filechooser'),
    page.locator('#custom-upload-btn').click()

   ]);

await fileupload.setFiles('C:\\Users\\tusha\\Downloads\\form121HelpFile.pdf');

await page.pause();
});


test(' multiple file upload if type file is not present  test', async ({page}) => {

   await  page.goto("https://naveenautomationlabs.com/opencart/ui/file-upload.html");

  let [fileupload]= await Promise.all([
    page.waitForEvent('filechooser'),
    page.locator('#custom-upload-btn').click()

   ]);

await fileupload.setFiles([
    'C:\\Users\\tusha\\Downloads\\form121HelpFile.pdf',
    'C:\\Users\\tusha\\Downloads\\Resume---.pdf',
    'C:\\Users\\tusha\\Downloads\\marrige biodata bapi.docx',
    'C:\\Users\\tusha\\Downloads\\ORANGE.jpg'
]);

await page.pause();
});

