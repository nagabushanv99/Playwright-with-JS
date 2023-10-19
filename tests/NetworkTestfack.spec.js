const { test, expect, request} = require('@playwright/test');
const {ApiUtils}=require('./Utils/ApiUtils');
 
const loginPayLoad = {userEmail: "nagabushanv11@gmail.com", userPassword: "Naga@1999"}
const orderPayLoad ={orders: [{country: "Cuba", productOrderedId: "6262e95ae26b7e1a10e89bf0"}]}
const fackpayLoadOrder={data:[],message:"No Orders"};

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

   page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
   async route=>
   {                                                                         //in th place of star you can write any orderid
      const response=await page.request.fetch(route.request())    //64ff03137244490f95ac3a5f
      let body=JSON.stringify(fackpayLoadOrder);
      route.fulfill(
      {
         response,
         body,
      });
      // intercepting response - API response->{playwright fackresponse}->browser->render  data on front end
   }
   )
   await page.locator("button[routerlink*='myorders']").click();
   // await page.pause();
   await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
   console.log(await page.locator(".mt-4").textContent());
   
 
 
});


// const { test, expect, request } = require('@playwright/test');
// const { APiUtils } = require('../utils/APiUtils');
// const loginPayLoad = { userEmail: "anshika@gmail.com", userPassword: "Iamking@000" };
// const orderPayLoad = { orders: [{ country: "India", productOrderedId: "6262e95ae26b7e1a10e89bf0" }] };
// const fakePayLoadOrders = { data: [], message: "No Orders" };
 
// let response;
// test.beforeAll(async () => {
//   const apiContext = await request.newContext();
//   const apiUtils = new APiUtils(apiContext, loginPayLoad);
//   response = await apiUtils.createOrder(orderPayLoad);
 
// })
 
 
// //create order is success
// test('@SP Place the order', async ({ page }) => {
//   page.addInitScript(value => {
 
//     window.localStorage.setItem('token', value);
//   }, response.token);
//   await page.goto("https://rahulshettyacademy.com/client");
 
 
//   await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
//     async route => {
//       const response = await page.request.fetch(route.request());
//       let body = JSON.stringify(fakePayLoadOrders);
//       route.fulfill(
//         {
//           response,
//           body,
 
//         });
//       //intercepting response -APi response-> { playwright fakeresponse}->browser->render data on front end
//     });
 
//   await page.locator("button[routerlink*='myorders']").click();
//   await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*")
 
//   console.log(await page.locator(".mt-4").textContent());
 
 
 
// });