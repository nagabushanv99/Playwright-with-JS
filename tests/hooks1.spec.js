import {test, expect} from '@playwright/test';
test ('Home page test',async({page})=>{    
await page.goto("https://demo.opencart.com/")
// Login

await page.locator("login2").click();
await page.locator('#loginusername').fill('Nagabushanv')
await page.locator('#loginpassword').fill('Naga@1999')
await page.locator('[onclick="logIn()"]').click()

// Home page

const products = await page.$$('.hrefch')
expect(products).toHaveLength(a)

// logout
await page.locator('#logout2').click()
});



test ('Home page test',async({page})=>{    
await page.goto("https://demo.opencart.com/")
// Login

await page.locator("login2").click();
await page.locator('#loginusername').fill('Nagabushanv')
await page.locator('#loginpassword').fill('Naga@1999')
await page.locator('[onclick="logIn()"]').click()

// Add Product to cart

await page.locator("//a[normalize-space()='samsung galaxy56']").click();
await page.locator("//a[normalize-space()='Add tob cart']").click();

// validate Text

page.on('dialog', async dialog=>{
    expect(dialog.message()).toContain("product added")
    await dialog.accept()
})

// logout
await page.locator('#logout2').click()
});
