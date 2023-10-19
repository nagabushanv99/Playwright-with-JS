const { test, expect } = require('@playwright/test');
 
test('Abhibus.com', async ({ page }) => {
  
   
//  From station
   await page.goto("https://www.abhibus.com/");
   await page.locator("[placeholder='From Station']").type('Bangalore');
//    await page.getByPlaceholder('From Station').fill('Bangalore');

//    To Station
//    await page.locator("[placeholder='To Station']").fill('Hyderabad');
   await page.getByPlaceholder('To Station').type('Hyderabad');

//    date picker
   await page.locator("[placeholder*='Onward'], 25/09/2023");

//    search button
   await page.locator("//a[normalize-space()='Search']").click();
   // Check box
   const newcheckbox=await page.locator('#price-drop')
   await expect(newcheckbox).toBeChecked;

   await page.locator("//div[@id='service-operator-select-seat-1701064572']//button[@class='btn bus-info-btn filled primary sm inactive button'][normalize-space()='Show Seats']").click();
   
   

   // Train 
   await page .locator('#train-link').click();

   
   //div[2]/div[4]/div[2]/div/div/div[2]/div/div[2]/button

});