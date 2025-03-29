import { loadHeaderFooter, setLocalStorage } from "./utils.mjs";
import CheckoutProcess from "./CheckoutProcess.mjs";

loadHeaderFooter();

const order = new CheckoutProcess("so-cart", ".checkout-summary");
order.init();

// Add event listeners to fire calculateOrderTotal when the user changes the zip code
document
  .querySelector("#zip")
  .addEventListener("blur", order.calculateOrderTotal.bind(order));

// listening for click on the button
document.querySelector("#checkoutSubmit").addEventListener("click", async (e) => {
  e.preventDefault();
  const myForm = document.forms[0];
  const check_status = myForm.checkValidity();
  if(check_status){
    console.log(order);
    await order.checkout();
    window.location.href = "../checkout/success.html";
    setLocalStorage("so-cart", []);
  } else {
    alert("Please fill out all fields.");
  }
});