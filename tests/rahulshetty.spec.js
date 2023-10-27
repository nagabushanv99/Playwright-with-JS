const{test,expect}=require ('@playwright/test')

test('rahulshettyacademy angularpractice',async({page})=>{

    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    await expect(page).toHaveTitle('ProtoCommerce')

    await expect(await page.locator("[align='center']")).toHaveText("Protractor Tutorial");

    await page.locator("div[class='form-group'] input[name='name']").type('Nagabushanv');
    await page.locator("//input[@name='email']").type('nagabushanv11@gmail.com');
    await page.locator("//input[@type='password']").type('Naga@123');

    await page.locator("#exampleCheck1").check();
    expect(await page.locator("#exampleCheck1")).toBeChecked();
    
     await page.locator('#exampleFormControlSelect1').selectOption({label:'Male'});
     


    await page.locator("#inlineRadio1").click();
    console.log(await page.locator("#inlineRadio1").first().isChecked());
    // await expect(page.locator("#inlineRadio1")).isChecked().toBeTruthy();

    // await page.fill('[name="bday"]','15-03-2024')
    // await page.fill('[name="bday"]','15-03-2024')

    await page.locator("[type='submit']").click();

    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();

})

test.only("Shop page",async({page})=>{

    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    await page.locator("//a[normalize-space()='Shop']").click();
    // await page.getByText("ProtoCommerce Home").isVisible();

    const titles=await page.locator("//h4[@class='card-title']").allTextContents();
    console.log(titles);

    // const count = await products.count();
    // for(let i=0; i<count; ++i)
     // {
    //     if(await products.nth(i).locator("//h4").textContent()===ProductName)
    //     {
    //         await products.nth(i).locator("text='Add'" ).click();
    //         break;
    //     }
    // }
    await page.locator("//app-card[1]//div[1]//div[2]//button[1]").click();

})