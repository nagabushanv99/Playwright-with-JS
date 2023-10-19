const{test, expect}=require('@playwright/test');
test('test1 @sanity',async({page})=>{
    console.log("This is my test1")
})

test('test2 @sanity',async({page})=>{
    console.log("This is my test2")
})

test('test3 @reg',async({page})=>{
    console.log("This is my test3")
})

test('test4 @reg',async({page})=>{
    console.log("This is my test4")          //npx playwright test --grep @sanity
})                                           //npx playwright test tests/Tags.spec.js--project chromium --grep @sanity

test('test5 @sanity @reg',async({page})=>{
    console.log("This is my test5")
})