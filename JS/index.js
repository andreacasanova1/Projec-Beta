//identificar al objeto que es el padre de mi menu
document.querySelector(".menu-burger").addEventListener("click" , animateBurger) //crear esta funcion animateBurger
//antes hay que crear variables para las barras

let line1__burger = document.querySelector(".line1__menu-burger");
let line2__burger = document.querySelector(".line2__menu-burger");
let line3__burger = document.querySelector(".line3__menu-burger");
let topbar = document.querySelector(".topbar");
//comandos rápidos, si dejo presionado (alt) y marco los puntos que quiero
//modificar se cambian simultaneamente.

//ahora crear la funcion
function animateBurger() {
    line1__burger.classList.toggle("activeline1__menu-burger");
    line2__burger.classList.toggle("activeline2__menu-burger");
    line3__burger.classList.toggle("activeline3__menu-burger");
    topbar.classList.toggle("topbar__menu");
}

