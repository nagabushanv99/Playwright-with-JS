const { expect, default: test } = require("@playwright/test")

test('keyboard actions',async ({page})=>{
    await page.goto("https://gotranscript.com/text-compare")
    await page.type("[name='text1']",'welcome to automation')

    // Ctrl+A
    await page.keyboard.press('Control+A')

    // ctrl+c
    await page.keyboard.press('Control+C')

    // Tab
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    // Ctrl+V
    await page.keyboard.press('Control+V')
    await page.waitForTimeout(5000);

})