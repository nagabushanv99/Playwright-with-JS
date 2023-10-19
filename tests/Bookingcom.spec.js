const { test, expect } = require('@playwright/test');
 
test('Booking.com signin', async ({ page }) => {
  
   // const email = "nagabushanv11@gmail.com";

   await page.goto("https://www.booking.com/index.en");

//    signin
   // await page.locator("a[aria-label='Sign in']")[1].click();
   await page.locator("#username").fill('nagabushanv11@gmail.com');
   await page.locator("[type='submit']").click();
   await page.locator(div .transition).waitFor();
   const textcheck = await page.locator('div h1').textContent();
   console.log(textcheck);
   await page.locator("#password").fill("Naga@12345");
   await page.locator("[type='submit']").click();
});