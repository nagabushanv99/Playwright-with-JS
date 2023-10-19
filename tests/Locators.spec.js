const {test, expect} = require ('@playwright/test')
// import {test,expect} from '@playwright/test'
test('Locators',async({page})=>{
    await page.goto("https://www.demoblaze.com/index.html")

    // click on login button- property
    await page.locator('id=login2').click()
    // await page.click('#login2')
    
    // provide username-css
    await page.locator('#loginusername').fill('Nagabushan')
    

    // provide password -css 
    await page.fill("input[id='loginpassword']",'Naga@123')


    // click opn login Button
    await page.click("//button[normalize-space()='log in']")

    // verify logout presence
    const logoutlink = await page.locator("//a[normalize-space()='log out']")
    await expect (logoutlink).toBeVisible();
    await page.close()
})