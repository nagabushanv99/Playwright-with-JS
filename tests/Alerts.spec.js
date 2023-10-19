const { test, expect } = require ('@playwright/test');
test('Alert with OK', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // Enabling alert handling
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();

    })
    await page.click('//button[normalize-space()="Alert"]');
    await page.waitForTimeout(5000);
});



test('Confirmation Dialog - Alert with OK and cancel', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // Enabling dialog window handling
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept();  //close by using OK button
        // await dialog.dismiss(); //close by using cancel

    })
    await page.click('//button[normalize-space()="Confirm Box"]');
    await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed Cancel!')
    await page.waitForTimeout(5000);
});




test ('Prompt Dialog', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // Enabling dialog window handling
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Harry potter')
        await dialog.accept('John');  

    })
    await page.click('//button[normalize-space()="Prompt"]');
    await expect(page.locator('//p[@id="demo":]')).toHaveText('Hello John! How are you today?')
    await page.waitForTimeout(5000);
});