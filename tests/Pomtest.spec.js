import{test,expect}from '@playwright/test';
import{LoginPage} from '../Pageobjects/pages/Loginpage';
import{Homepage} from '../Pageobjects/pages/Homepage';
import {cartpage} from '../Pageobjects/pages/cartpage';

test('test', async({page})=>{
    // Login page
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('Nagabushanv','Naga@1999')
    await page.waitForTimeout(5000)

    // Home page
    const Home=new Homepage(page)
    await Home.addproductTocart("Nexus 6")
    await page.waitForTimeout(5000)
    await Home.gotocart();

    // cart page
    const cart=new cartpage(page)
    await page.waitForTimeout(3000)
    const status = await cart.checkproductIncart('Nexus 6')
    await page.waitForTimeout(5000);
    expect (await status).toBe(true);

})