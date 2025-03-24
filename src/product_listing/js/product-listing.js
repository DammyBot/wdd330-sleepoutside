import ProductData from "../../js/ProductData.mjs";
import ProductList from "../../js/ProductList.mjs";
import { loadHeaderFooter, getParam } from "../../js/utils.mjs";

loadHeaderFooter();

const category = getParam("category");
// first create an instance of the ProductData class.
const dataSource = new ProductData();
// then get the element you want the product list to render in
const listElement = document.querySelector(".product-list");
// then create an instance of the ProductList class and send it the correct information.
const myList = new ProductList(category, dataSource, listElement);
// finally call the init method to show the products
myList.init();