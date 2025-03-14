import ProductList from "./ProductList.mjs";
const url = "./src/public/json/tents.json";

async function getData(url){
    const data = fetch(url);
    if(data.ok){
        const result = data.json();
        console.log(result);
        const product = new ProductList("electronics", result, document.getElementById("productList"));
        product.init();
    }
}

getData(url);