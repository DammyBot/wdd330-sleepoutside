import { loadHeaderFooter } from "./utils.mjs";
loadHeaderFooter();

export default class CheckoutProcess {
  constructor(key, outputSelector) {
    this.key = key;
    this.outputSelector = outputSelector;
    this.list = [];
    this.itemTotal = 0;
    this.shipping = 0;
    this.tax = 0;
    this.orderTotal = 0;
  }

  init() {
    this.list = getLocalStorage(this.key);
    this.calculateItemSummary();
  }

  calculateItemSubTotal() {
    // calculate and display the total dollar amount of the items in the cart, and the number of items.
    
  }

  calculateOrderTotal() {
    // calculate the tax and shipping amounts. Add those to the cart total to figure out the order total
    this.tax = (this.itemTotal * (6/100)).toFixed(2);
    this.shipping = 10 + (this.list.length > 1 ? (this.list.length - 1) * 2 : 0);
    this.orderTotal = parseFloat(this.itemTotal) + parseFloat(this.shipping) + parseFloat(this.tax);

    // display the totals.
    this.displayOrderTotals();
  }

  displayOrderTotals() {
    // once the totals are all calculated display them in the order summary page
    const tax = document.querySelector(`${this.outputSelector} #tax`);


    tax.innerText = `$${this.tax.toFixed(2)}`;
  }
}