const { When, Then, Given } = require('@cucumber/cucumber')
const{chromium}=require("@playwright/test")
const { POManager } = require('../../Pageobjects/POManager');
const { expect } = require('@playwright/test');
// const playwright = require('@playwright/test');


Given('a login to Ecommerce application with {string} and {string}', { timeout: 100 * 1000 }, async function (username, password) {
    const  browser=await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page= await context.newPage();
    this.POManager=new POManager(page)

    const products = this.page.locator(".card-body");
    const loginPage = this.POManager.getLoginPage();
    await loginPage.goTo()
    await loginPage.validLogin(username, password);
});

When('Add {string} to Cart', async function (productName) {
    // Write code here that turns the phrase above into concrete actions
    this.dashboardPage = this.POManager.getDashboardPage();
    await this.dashboardPage.searchProductAddCart(productName);
    await this.dashboardPage.navigateToCart();

});

Then('Verify {string} is displayed in the Cart', async function (productName) {
    // Write code here that turns the phrase above into concrete actions
    const cartPage = this.POManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(productName);
    await cartPage.Checkout();
});

When('Enter valid details and Place the Order', async function () {
    // Write code here that turns the phrase above into concrete actions
    const ordersReviewPage = this.POManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind", "India");
    this.orderId = await ordersReviewPage.SubmitAndGetOrderId();
    console.log(this.orderId);
});

Then('Verify order in present in the OrderHistory', async function () {
    // Write code here that turns the phrase above into concrete actions
    await this.dashboardPage.navigateToOrders();
    const ordersHistoryPage = this.POManager.getOrdersHistoryPage();
    await ordersHistoryPage.searchOrderAndSelect(this.orderId);
    expect(this.orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
});


Given('a login to Ecommerce2 application with {string} and {string}', {timeout: 100 * 1000}, async function (username,password) {
        
    // page.route('**/*.{jpg,png,jpeg}',route=> route.abort());
      const userName = this.page .locator('#username');
      const signIn = this.page .locator("#signInBtn");
      const cardTitles =  this.page .locator(".card-body a");
      await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
      console.log(await this.page.title());
      //css 
     await userName.type("rahulshetty");
     await this.page .locator("[type='password']").type("learning");
     await signIn.click();   
    });


    Then('Verify Error message is displayed', async function () {
      await expect(this.page .locator("[style*='block']")).toContainText('Incorrect');

    })










