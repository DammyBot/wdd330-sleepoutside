import{s as e,a as r}from"./utils-BFtfnrvB.js";import{P as i}from"./ProductData-Dx0C3TkS.js";function o(t){return`<section class="product-detail"> <h3>${t.Brand.Name}</h3>
    <h2 class="divider">${t.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${t.Image}"
      alt="${t.NameWithoutBrand}"
    />
    <p class="product-card__price">$${t.FinalPrice}</p>
    <p class="product__color">${t.Colors[0].ColorName}</p>
    <p class="product__description">
    ${t.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${t.Id}">Add to Cart</button>
    </div></section>`}class s{constructor(a,d){this.productId=a,this.product={},this.dataSource=d}async init(){this.product=await this.dataSource.findProductById(this.productId),this.renderProductDetails("main"),document.getElementById("addToCart").addEventListener("click",this.addToCart.bind(this))}addToCart(){e("so-cart",this.product)}renderProductDetails(a){document.querySelector(a).insertAdjacentHTML("afterBegin",o(this.product))}}const c=new i("tents"),n=r("product"),l=new s(n,c);l.init();
