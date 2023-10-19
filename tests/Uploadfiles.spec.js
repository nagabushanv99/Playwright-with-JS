const {test, expect}=require('@playwright/test')
test('single File', async({page})=>{
    await page.goto('https://www.foundit.in/')
    await page.waitForSelector('.mqfind-upload');

    await page.locator(':mqfind-upload').click()
    await page.locator('#file-upload').setInputFiles('tests\Uploadfiles\testfile1.pdf')
    await page.waitForTimeout(5000)
})

// upload multiple files

test.only('multiple Files', async ({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.locator('#filesToupload').setInputFiles
    (['tests\Uploadfiles\testfile1.pdf', 'tests\Uploadfiles\testfile2.pdf']);

    await page.waitForTimeout(3000)

    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('testfile1.pdf');
    expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('testfile2.pdf')
    await page.waitForTimeout(5000)
});

// // Removing files
// await page.locator('#FilesToupload').setInputFiles([])
// await page.waitForTimeout(3000)
// expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files selected')
