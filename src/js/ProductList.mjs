import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
  const discount = ((product.ListPrice - product.FinalPrice)/product.ListPrice) * 100;
  const discountRounded = Math.round(discount);
  return `<li class="product-card">
  <a href="../product_pages/index.html?product=${product.Id}">
  <img
    src="${product.Images.PrimaryMedium}"
    alt="Image of ${product.Name}"
  />
  <h3 class="card__brand">${product.Brand.Name}</h3>
  <h2 class="card__name">${product.Name}</h2>
  <p class="discount">${discountRounded}% Off</p>
  <p class="product-card__price">$${product.FinalPrice}</p></a>
</li>`;
}

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }
  async init() {
    // const list = await this.dataSource.getData();
    // this.renderList(list);
    // const list = await this.dataSource.getData(this.category);
    const list = await this.dataSource;
    this.renderList(list);
  }

  // render after doing the first stretch
  renderList(list) {
    renderListWithTemplate(productCardTemplate, this.listElement, list);
  }

  // render before doing the stretch
  // renderList(list) {
  //   const htmlStrings = list.map(productCardTemplate);
  //   this.listElement.insertAdjacentHTML("afterbegin", htmlStrings.join(""));
  // }
}