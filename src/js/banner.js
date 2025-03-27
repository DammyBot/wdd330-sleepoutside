const dialog = document.getElementById("cta");
const close = document.querySelector(".close");

const date = Number(localStorage.getItem("date")) || 0;
const now = Date.now();
const oneDay = 24*60*60*1000;

document.addEventListener("DOMContentLoaded", ()=> {
    if(now - date > oneDay) {
        dialog.showModal();
    }
})

close.addEventListener("click", ()=> {
    dialog.close();
    localStorage.setItem("date", now);
})