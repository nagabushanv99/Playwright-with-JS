const {test, expect}=require('@playwright/test')

test('mouse Right click',async ({page})=>{
    await page.goto('https://swisnl.github.io/jQuery-contextmenu/demo.html')
    const button=await page.locator("//span[normalize-space()='right click me']")

    // right click button
    await button.click({button:'right'});
    await page.waitForTimeout(5000);
})