const{test,expect}=require('@playwright/test')
test('Reporters test1',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await expect(page).toHaveTitle('Practice Page');
})

test('Test2',async({page})=>{
    await page.goto('https://www.amazon.in/')
    await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
})

test('Test3',async({page})=>{
    await page.goto('https://demo.nopcommerce.com/');
    await expect(page).toHaveTitle('nopCommerce demo stor');
})


// step:1->Installation of "allure-playwright" module
// npm i -D @playwright/test allure-playwright

// Step:2-> Installing Allure command line
// npm install -g allure-commandline --save-dev

// Step:3-> Playwright.config.js
// reporter= ['allure-playwright',{outputFolder: 'my-allure-results'}]

// Step:4-> Run the tests
// npx playwright test/tests/Reporters.spec.js

// Step:4->Generate Allure Report:
//   allure generate my-allure-results -o allure-report --clean

//  Step:5-> open Allure Report:
//   allure open allure-report