const {test,expect}=require('@playwright/test')
test.only('Handle dropdown',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#country').selectOption({label:'India'});
    // await page.locator('#country').selectOption('India');
    // await page.locator('#country').selectOption({value:'uk'});
    // await page.locator('#country').selectOption({index:1});
    // await page.selectOption("#country",'India');
    await page.waitForTimeout(5000);
    //Assertions
    // 1.check number of options in dropdown
    const options = await page.locator('#countryoptions')
    await expect(options).toHaveCount(10);

    // // // check number of options in dropdown-Approach-2
    // const options=await page.$$('#country option')
    // console.log("Number of options:",options.length)

    // 2. check presence of value in the dropdown

    const content =await page.locator('#country').textContent()
    await expect(content.includes('India')).toBeTruthy();


//     // Select option from dropdown using loop
//     const options1=await page.$$('#country option')
//     for(const option of options1){
//     let value=await options1.textContent();
//     if (value.includes('France'))
//     {
//         await page.selectOption("#Country",value);
//         break;
//     }
// }
});

// multiSelect Drop Down


test('Handle multiple dropdowns',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    // select multiple options from multi select dropdown
    await page.selectOption('#colors',['Blue','Red','yellow'])
    await page.waitForTimeout(5000);

    //Assertions
    // //1. check number of options in dropdown
    // const options=await page.locator('#colors options')
    // await expect(options).toHaveCount(5);
    // await page.waitForTimeout(5000);

    // 2. check number of options in dropdown using JS array

    const options = await page.$$('#colors option')
    await expect(options.length).toBe(5);
    await page.waitForTimeout(5000);

    // 3. Check presence of value in the dropdown

    const content=await page.locator('#colors').textContent();
    await expect(content.includes('Black')).toBeTruthy;
    // await page.waitForTimeout(5000);
})


   
    
