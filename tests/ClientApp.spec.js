const{test, expect}=require('@playwright/test');
test('Client App login',async({page})=>{
    const productName = 'Zara coat 4';
    const products = page.locator('.card-body');

    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator('#userEmail').fill('nagabushanv11@gmail.com');
    await page.locator('#userPassword').type("Naga@1999");
    await page.locator("[value='Login']").click();

    await page.waitForLoadState('networkidle');
    const titles =await page.locator('.card-body b').allTextContents();    //class and tag name
    console.log(titles);
    const count = await products.count();
    for(let i=0; i<count; ++i)
    {
        if(await products.nth(i).locator('b').textContent()===productName)
        {
            // add to cart
            await products.nth(i).locator("text= Add To Cart").click();
            // break
        }
    }
    // await page.pause();
    await page.locator("[routerlink*='cart']").click();
    await page.locator('div li').first().waitFor();
    console.bool=await page.locator("h3 has-text('zara coat 3')").isVisible()
    expect(bool).toBeTruthy();

    await page.locator("text=Checkout").click();
    await page.locator("[placeholder*='country']").type("ind",{delay:100});
    const dropdown = page.locator('.ta-results');
    await dropdown.waitFor();
    const optionsCount=await dropdown.locator("button").count();
    for(let i=0; i<optionsCount; ++i);
    {
        consttext = await dropdown.locator('button').nth(i).textContent();
        if(text ===' India')
        {
            await dropdown.locator('button').nth(i).click();
            
        }
    }

    // placing order and grab the orderID
    await expect(page.locator(".user__name[type='text']")).toHaveText(email);
    await page.locator(".action__submit ").click();
    await expect(page.locator(".hero-primary")).toHaveText(' Thankyou for the order.');
    const orderID = await page.locator('.em-spacer-1 .ng-star-inserted').textContent();
    console.log(orderID);


    // orderHistory 

    await page.locator("button [routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");
    for(let i=0; i<await rows.count();++i)
    {
        const rowOrderId = await rows.nth(i).locator('th').textContent();

        if (orderID.includes(rowOrderId))
        {
            await rows.nth(i).locator('button').first().click();
            break;
        }
    }

    const orderIdDetails = await page.locator(".col-text").textContent();
    expect(orderID.includes(orderIdDetails)).toBeTruthy();
    // await page.pause()

});

