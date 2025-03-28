import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import Alert from "./alert";
import { loadHeaderFooter } from "./utils.mjs";

const dataSource = new ProductData();
const data = dataSource.getData("tents")
const element = document.querySelector(".product-list");
const listing = new ProductList("Tents", data, element);
const alert = new Alert();

loadHeaderFooter();

listing.init();
alert.init();