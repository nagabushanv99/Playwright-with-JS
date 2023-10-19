const { test, expect, request} = require('@playwright/test');
 
const loginPayLoad = {userEmail: "nagabushanv11@gmail.com", userPassword: "Naga@1999"}
const orderPayLoad ={orders: [{country: "Cuba", productOrderedId: "6262e95ae26b7e1a10e89bf0"}]}
let token;
let orderId;
 test.beforeAll( async()=>
 {
    // Login API
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {
        data:loginPayLoad
    });//200,201,202 sucess status code
    expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJson = await loginResponse.json();
    const token =loginResponseJson.token;
    console.log(token);
//  });


 const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
 {
    data:orderPayLoad,
    headers:{
                'Authorization' :token,
                'Content-Type'  : 'application/json'

             },
 });
const orderResponseJson = await orderResponse.json();
console.log(orderResponseJson)
orderId = await orderResponseJson.orders[0]        //object value json
});
 test.beforeEach( ()=>{


 });

   
test('place the order', async ({ page }) => {
  
page.addInitScript(value => {

    window.localStorage.setItem('token',value);
}, token );
   const email = "";
   const productName = 'zara coat 3';
   await page.goto("https://rahulshettyacademy.com/client/"); 
   await page.locator("//button[@routerlink='/dashboard/myorders']").click();

   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
 
 
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   await page.pause();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();
 
});
  
