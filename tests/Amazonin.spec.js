const { test , expect } = require("@playwright/test");

test ('Amazon.in',async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.amazon.in/")


    await page.locator('.nav-line-1-container').click();
    await page.getByLabel('Email or mobile phone number').isVisible();
    await page.locator('#ap_email').fill('abcde@gmail.com');
    await page.locator("[type='submit']").click();


    await page.getByLabel('Password').isVisible();
    await page.locator('#ap_password').type('Xyz@1999');
    // await page.locator("[value='true']").click();
    await page.locator('span input ').click();

    await page.locator(".nav-search-field ").fill('vivo mobiles');
    await page.locator("#nav-search-submit-button").click();

    await page.getByText('Results').isVisible();

    const titles = await page.locator("span .a-size-medium").allTextContents();
    console.log(titles);
    
    // await page.getByLabel("Get It Today").check();

    // click item
    
    const itemlink = await page.getByText('Vivo T2x 5G (Aurora Gold, 128 GB) (6 GB RAM)')

    const [newpage] = await Promise.all([
        context,waitForEvent('page'),
        itemlink.click(),
    ])
    await page.locator("//div[@id='desktop_qualifiedBuyBox']//div[@class='a-section a-spacing-none a-padding-none']").allTextContents();

    // open cart 

    await page.locator(".nav-cart-icon.nav-sprite").click();
    const CartBox = await page.locator('#sc-active-cart')
    await expect(CartBox).toBeEnabled()
    // await getByText('Shopping Cart').isVisible();

    await page.locator('[name="isToBeGiftWrapped"]').check();
    await page.locator("input[value='Proceed to checkout']").click();

    await expect(await page.locator("//h1[normalize-space()='Checkout']")).toContainText('Checkout');


    
    
})

