// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');

//   Total number of frames()
// const allFrames = await.frames();
// console.log("Number of frames:", allFrames.length)

// Approach 1: using name or url

// const var=await page.frame('name');  //if name is present
// const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
// frame1?.fill("[name='mytext1']", 'Hello');


// Approach 2: using frame locator().Css selector
const inputbox = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']");
inputbox.fill("Hello")

await page.waitForTimeout(5000);

  
});

