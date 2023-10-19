const {test,expect}=require ('@playwright/test')
test('Ajio login',async ({page})=>{

    await page.goto("https://luxe.ajio.com/");
    await page.locator(".login-form").click();
    await expect(await page.locator("//h1[1]")).toHaveText('AJIO LUXE');


})