const { test, expect } = require("@playwright/test");

test("Security test request intercept", async ({ page }) => {
  //login and reach orders page
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill("nagabushanv11@gmail.com");
  await page.locator("#userPassword").type("Naga@1999");
  await page.locator("[value='Login']").click();
  await page.waitForLoadState("networkidle");
  await page.locator(".card-body b").first().waitFor();

  
  await page.locator("button[routerlink*='myorders']").click();
  // order view header
  await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",

    (route) =>route.continue({url: "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6529855c7244490f95cc456c",}));
  // route.continue Intercept request call
  await page.locator("button:has-text('view')").first().click();
  await page.pause();
  await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order");
});
