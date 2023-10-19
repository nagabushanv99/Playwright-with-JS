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




    // Child windows
    const {test, expect, request} = require('@playwright/test');
    test.only('ChildWindows hand;', async({browser})=>{

        const context = await browser.newcontext();            //switching browser
        const page = await context.newpage();
        const username=page.locator('#username');

    await page.goto("https://rahulshettyacademy.com/loginpage.practise");

    const documentLink = page.locator("[href*='documents-request']")

    const [newpage]=await Promise.all([
        context.waitForEvent('page'),
        documentLink.click(),
    ])
    const text = await newpage.locator(".red").textContext();
    const arrayText=text.split('@')
    const domain = arrayText[1].split(" ")[0]
    console.log(domain);
    await page.locator('#username').type(domain);
    console.log(await page.locator('#username').textContent());
    })

 
});