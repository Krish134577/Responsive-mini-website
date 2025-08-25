let menu = document.querySelector("#menu");
let navlist = document.querySelector(".nav-list");
let links = document.querySelector(".links");
let display  = document.querySelector(".display");
let btnprimary = document.querySelector(".btn-primary");
menu.addEventListener("click", function(){
    navlist.classList.toggle("display");
    links.classList.toggle("display");
    btnprimary.classList.toggle("display");
})
