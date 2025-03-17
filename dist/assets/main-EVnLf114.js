import{r as n}from"./utils-BFtfnrvB.js";import{P as c}from"./ProductData-Dx0C3TkS.js";function r(e){return`<li class="product-card">
  <a href="product_pages/index.html?product=${e.Id}">
  <img
    src="${e.Image}"
    alt="Image of ${e.Name}"
  />
  <h3 class="card__brand">${e.Brand.Name}</h3>
  <h2 class="card__name">${e.Name}</h2>
  <p class="product-card__price">$${e.FinalPrice}</p></a>
</li>`}class o{constructor(t,a,s){this.category=t,this.dataSource=a,this.listElement=s}async init(){const t=await this.dataSource.getData();this.renderList(t)}renderList(t){n(r,this.listElement,t)}}class i{constructor(){this.url="./json/alerts.json"}async init(){const t=await this.fetchData();l(t)}async fetchData(){const t=await fetch(this.url);if(t.ok)return t.json()}}function l(e){e.forEach(t=>{const a=document.createElement("section");a.classList.add("alert-list"),a.style.backgroundColor=t.background,a.style.color=t.color;const s=document.createElement("p");s.textContent=t.message,s.style.textAlign="center",a.append(s),document.querySelector("main").prepend(a)})}const d=new c("tents"),m=document.querySelector(".product-list"),u=new o("Tents",d,m),h=new i;u.init();h.init();
