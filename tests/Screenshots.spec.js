import { test, expect } from '@playwright/test';
// 
test("Screenshot",async({page})=>{
    await page.goto('https://demo.opencart.com/');
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'Homepage.png'})
})

// Full page Screenshot:
test("Element Screenshot",async({page})=>{
    await page.goto('https://demo.opencart.com/');
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'Fullpage.png'+'fullpage:true'})

})

// using locator
test.only('Element screenshot', async({page})=>{
    await page.goto('https://demo.opencart.com/')
    await page.locator("//img[@class='mfp-img']").screenshot({path:'test/screenshots/'+Date.now()+'macbook1.png'});
})
    