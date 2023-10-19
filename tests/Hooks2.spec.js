import {test, expect} from '@playwright/test'
test.beforeEach(async({browser})=>{
    page=await browser.newPage();
    await page.goto('https://www.demoblaze.com/index.html')

    // Login
    await page.locator(".nav-link").click();
    await page.locator('#loginusername').fill('Nagabushanv')
    await page.locator('#loginpassword').fill('Naga@1999')
    await page.locator('[onclick="logIn()"]').click()

    test.afterEach(async({browser})=>{
        await page.locator('#logout2').click()
    })
    test('Home page Test', async( )=>{
        const products=await page.$$('.hrefch')
        expect (products).toHavelength(9)
    })
    test('Add product to cart Test', async( )=>{
    await page.locator("//a[normalize-space()='samsung galaxy s6']").click();
    await page.locator("//a[normalize-space()='Add tob cart']").click();
    page.on('dialog', async dialog=>{
        expect(dialog.message()).toContain('product added')
        await dialog.accept()
    })
    })
})