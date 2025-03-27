const dialog = document.getElementById("cta");
const close = document.querySelector(".close");

const date = localStorage.getItem("date") || Date.now();
const now = Date.now();

document.addEventListener("DOMContentLoaded", ()=> {
    if(date - now == 0){
        dialog.showModal();
    }
})

close.addEventListener("click", ()=> {
    dialog.close();
    localStorage.setItem("date", now);
})