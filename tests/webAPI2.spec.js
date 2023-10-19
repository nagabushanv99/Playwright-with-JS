const { test, expect, request} = require('@playwright/test');
const {ApiUtils}=require('./Utils/ApiUtils');
 
const loginPayLoad = {userEmail: "nagabushanv11@gmail.com", userPassword: "Naga@1999"}
const orderPayLoad ={orders: [{country: "Cuba", productOrderedId: "6262e95ae26b7e1a10e89bf0"}]}

let response;
 test.beforeAll( async()=>
 {
    // Login API
    const apiContext = await request.newContext();
    const apiUtils = new ApiUtils(apiContext,loginPayLoad);
    response= await apiUtils.createOrder(orderPayLoad);
    
 });

 

test('place the order', async ({ page }) => {
  
//    const APIUtils = new APIUtils(apiContext,loginPayLoad);
// const orderId = creatOrder(orderPayLoad);
page.addInitScript(value => {

    window.localStorage.setItem('token',value);
}, response.token );
   // const email = "";
   // const productName = 'zara coat 3';
   await page.goto("https://rahulshettyacademy.com/client/"); 
   await page.locator("button[routerlink*='myorders']").click();

   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
 
 
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (response.orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   await page.pause();
   expect(response.orderId.includes(orderIdDetails)).toBeTruthy();
 
});