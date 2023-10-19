const {test, expect} = require('@playwright/test')
test('Assertion Test', async ({page})=>{

    // Open page URl
    await page.goto('https://demo.nopcommerce.com/index.html')

    //1. expect (page).toHaveURL
    // await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F')


    // // 2. expect (page).toHavetitle()
    // await expect(page).toHaveTitle('nopCommerce demo store. Register')

    // // 3. expect(locator).toBevisible()
    // const logoElement = await page.locator('.header-logo')
    // await expect(logoElement).toBeVisible()

    // // 4. expect(locator).toBeEnabled()
    // const searchStoreBox  = await page.locator('#small-searchterms')
    // await expect(searchStoreBox).toBeEnabled()

    // 4.expect(locator).toBeChecked
    // const maleRadioButton=await page.locator('#gender-male')
    // await maleRadioButton.click()
    // await expect(maleRadioButton).toBeChecked()

    // checkbox
    // const newSletterCheckbox=await page.locator('#Newsletter')
    // await expect(newSletterCheckbox).toBeChecked()

    // // 6.expect(locator).toHaveAttribute()
    // const regButton = await page.locator('#register-button')
    // await expect(regButton).toHaveAttribute('type','submit')

    // 7 expect(locator).toHaveText()
    // await expect(await page.locator('.page-title h1')).toHaveText('Register')

    // 8. expect(locator).tocontainText
    // await expect(await page.locator('.page-title h1')).tocontainText('Reg')  

    // 9. expect(locator).tiHaveValue(value) Input has value
    // const emailInput = await page.locator('#Email')
    // await emailInput.fill('test@demo.com');
    // await expect(emailInput).toHaveValue('test@demo.com')
    

    // 10. expect(locator).toHavevalue(value)
    // const options = await page.locator('select[name="Date of Birth month"]option')
    // await expect (options).toHavecount(13)

    // Hard Assertions
    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
    await expect(page.locatorage('.navbar-brand')).toBeVisible();


    await page.waitForTimeout(5000);

})