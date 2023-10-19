const {test,expect,chromium}=require('@playwright/test')
test.only('Handle pages/windows',async()=>{
    const browser=await chromium.launch()
    const context =await browser.newContext()

    const Page1=await context.newPage()
    const Page2=await context.newPage()

    const allPages=context.pages();
    console.log("No of pages created:",allPages.length)

    await Page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page1).toHaveTitle("OrangeHRM")

    await page2.goto("https://www.orangehrm.com/")
    await expect(Page2).toHaveTitle("OrangeHRM HR Software | OrangeHRM")
})



test('Handle multiple pages/windows',async()=>{
    const browser=await chromium.launch()
    const context =await browser.newContext()

    const page1=await context.newPage()
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page1).toHaveTitle("OrangeHRM")
    const pagepromise=context.waitForEvent('page')
    await page1.locator('//a[normalize-space()="orange HRM,Inc"]').click()


    const newPage=await pagepromise;
    await expect(page2).toHaveTitle("OrangeHRM HR Software | OrangeHRM")

    
    await page1.waitForTimeout(3000);
    await newPage.waitForTimeout(3000);
    await browser.close()
})


