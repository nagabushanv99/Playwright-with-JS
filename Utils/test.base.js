const{base, default: test}=require('@playwright/test');
exports.customtest=base.test.extend(
{
    testDataFororder:{
  
        "username" : "nagabushanv11@gmail.com",
        "password"  : "Naga@1999",
        "productName" :"Zara Coat 3"
    }
    }
)