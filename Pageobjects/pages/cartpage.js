exports.cartpage=class cartPage{
    constructor(page){
        this.page=page;
        this.noOfProducts="//tbody[@id='tbodyid']/tr/td[2]"
    }
    async cxheckproductIncart(productName){
        const productsIncart=await this.page.$$(this.noOfproducts)
        for(const product of productsIncart){
            console.log(await product.textcontent())
            if(productName==await product.textcontent()){
                return true;
                break;
            }
        }
    }

}