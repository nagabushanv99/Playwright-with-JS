const {test, expect, request} = require('@playwright/test');
test('UI controls', async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpage.practise");
    const username=page.locator('#username');
    const sigIn = page.locator('#signInBtn');
    const documentLink = page.locator("[href*='documents-request']")
    const dropdown=page.locator('select.form-control');
    await dropdown.selectOption('consult');
    await page.locator('.radiotextsty').last().click();
    await page.locator('#okyBtn').click();
    console.log(await page.locator('.radiotextsty').last().isChecked());
    await expect(page.locator('.radiotextsty').last()).toBeChecked();
    await page.locator('#terms').click();
    await expect(page.locator('#terms')).toBeChecked();
    await page.locator('terms').uncheck();
    expect (await page.locator("#terms").isChecked()).toBeFalsy();
    await expect(documentLink).toHaveAttribute("class","blinkingText");

 
});