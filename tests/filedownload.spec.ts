import { test, expect } from '@playwright/test';
import fs from 'fs';

test('file download test', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/download');

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('link', { name: 'test-file.txt' }).click()
  ]);

  expect(await download.failure()).toBeNull();

  console.log('file name is:', download.suggestedFilename());

  const filepath = './downloads/' + download.suggestedFilename();

  await download.saveAs(filepath);

  console.log(fs.existsSync(filepath))

  expect(fs.existsSync(filepath)).toBeTruthy();

 let fileSize= fs.statSync(filepath).size;
 console.log(fileSize);

  await page.pause();
});