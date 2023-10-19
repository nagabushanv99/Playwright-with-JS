const{test,expect}=require ('@playwright/test')

test('rahulshettyacademy angularpractice',async({page})=>{

    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    await expect(page).toHaveTitle('ProtoCommerce')

    await expect(await page.locator.locator("[align='center']")).toHaveText("Protractor Tutorial");

    await page.locator("//input[@class='form-control name=']").type('Nagabushanv');
    await page.locator("//input[@name='email']").type('nagabushanv11@gmail.com');
    await page.locator("//input[@type='password']").type('Naga@123');

    await page.locator("#exampleCheck1").check();
    expect(await page.locator("#exampleCheck1")).toBeChecked()
    {
     const options=await page.locator('#exampleFormControlSelect1')
     if(options.includes("Male"))
     {
        await Option.click();
        
     }
    }

    await page.locator("#inlineRadio1").click();
    console.log(await page.locator("#inlineRadio1").first().isChecked());
    await expect(page.locator())
   

})