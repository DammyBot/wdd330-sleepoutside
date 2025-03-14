export default class ProductList {
    constructor(category, dataSource, listElement){
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init(){
        const product = await this.dataSource.getData();
        console.log(product);
    }
}