const { test, expect } = require('@playwright/test');

test('Date picker', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

//  await page.fill('#datepicker','03/15/2024')

//  Date picker
const year = '2024'
const month = 'march'
const date = '20'
await page.click('#datepicker')   //open calender
while(true)
{
    const currentyear=page.locator('.ui-datepicker-year').textContent()
    const currentmonth=await page.locator('.ui-datepicker-month').textContent()
    if(currentyear == year && currentmonth == month)
    {
        break;
    }
    await page.locator('[title="Next"]').click()  //next
}
const Date =await page.$$("//a[@class='ui-state-default']")
 await page.waitForTimeout(5000);

//  Date selection using loop
for(const dt of dates)
{
  if(await dt.textContent()==date)
  {
    await dt.click();
    break
  }
  await page.waitForTimeout(5000);

}


});