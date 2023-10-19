exports.Homepage=class Homepage{
    construct(page){
        this.page=page;
        this.ProductList="//*[@id='tbodyid']/div/div/div/h4/a";
        this.addTocartbtn="//a[normalize-space()='Add to cart']";
        this.cart='#cartur'

    }
    async addproductTocart(productName){
        const ProductList = await this.page.$$(this.ProductList);
        for (const product of ProductList){
            if(productName===await product.textcontent()){
                await product.click()
                break;
            }
        }
        await this.page.on('dialog', async dialog=>{
            if(dialog.message().includes('added')){
                await dialog.accept();
            }
        })
        await this.page.locator(this.addcartbtn).click();

    }
    async gotocart(){
        await this.page.locator(this.cart).click();
    }
}