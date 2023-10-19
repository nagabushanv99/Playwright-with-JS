const {test, expect}=require('@playwright/test')
test("popup validations",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    // await page.goto('http://google.com');
    // await page.goBack();
    // await page.goForward();

    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();

    // dialogs
    page.on('dialog', dialog=> dialog.accept());
    await page.locator('#confirmbtn').click();
    await page.locator('#mousehover').hover();

    const framespage=page.frameLocator("#courses-iframe");
    await framespage.locator("li a[href*='lifetime-access']:visible").click();
    const textcheck = await framespage.locator(".text h2").textContent();
    console.log(textcheck.split(" ")[1]);

});

test("Screenshot & visual",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await expect(page.locator('#displayed-text')).toBeVisible();

    await page.locator('#hide-textbox').screenshot({path: 'partialscreenshot.png'});   //only the locating the Element it takes.

    await page.locator('#hide-textbox').click();

    await page.screenshot({path: 'screensshot.png'});   //Full page it takes Screenshot.

    await expect(page.locator('#displayed-text')).toBeHidden();
});


//  visual Testing comparision screenshots

test.only("Screenshot & VISUAL",async({page})=>{

    await page.goto("https://www.google.com/");
    expect(await page.screenshot()).toMatchSnapshot('landing.png');
});

