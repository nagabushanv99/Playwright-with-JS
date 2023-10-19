// @ts-check
const { test, expect } = require('@playwright/test');

test('locatemultipleElements', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');


  const Links = await page.$$('a')

  for (const link of Links)
  {
    const Linktext=await link.textContent()
    console.log(Linktext);
  }

 
});
