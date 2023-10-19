// only, skip, Fixme, fail, slow()

const{test,expect, chromium, webkit}=require('@playwright/test');
// only
// test.only('test1',async({page})=>{
//     console.log('this is test1')
// })
test('test2',async({page})=>{
    console.log('this is test2')
})

// Skip
test.skip('test3',async({page})=>{
    console.log('this is test3')
})

// Skip the test based on condition

// test('test4',async({page,browserName})=>{
//     console.log('this is test4')
//     if(browserName=='chromium')
//     {
//         test.skip()
//     }
// })

// Fixme     it also like Skip

test.skip('test5',async({page})=>{     //if the test case is some bug
    test.fixme()
    console.log('this is test5')
})

// Fail

test('test6',async({page})=>{       //nagative test
    test.fail()            //exp
    console.log('this is test6')
    expect(1).toBe(2);    //act  /passed
    // expect(1).toBe(1);   //Fail
})


test('test7',async({page,browserName})=>{
        console.log('this is test7')
        if(browserName=='chromium') //fail
        {                             
            test.fail()
        }
    })

    test('test8',async({page,browserName})=>{
        console.log('this is test8')
        if(browserName=='webkit') //pass
        {                            // passed
            test.fail()
        }
    })

    // slow    passed
    //time out set default 30 sec
    test('test9',async({page})=>{       
        test.slow() 
        await page.goto('https://www.demoblaze.com/index.html')
        console.log('this is test9')       
    })

    test('test10',async({page})=>{       
        // test.slow() 
        test.setTimeout
        await page.goto('https://www.demoblaze.com/index.html')
        console.log('this is test10')       
    })

