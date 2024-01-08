const menu = document.querySelector(".burger-nav");
const burger = document.querySelector(".burger-menu");
const close = document.querySelector(".kryds");

burger.addEventListener("click", toggleMenu);
close.addEventListener("click", toggleMenu);
function toggleMenu() {
  menu.classList.toggle("active");
  burger.classList.toggle("cross");
}

document.addEventListener("DOMContentLoaded", function () {
  var burgerIcon = document.getElementById("burger-icon");
  var menu = document.querySelector(".menu");

  burgerIcon.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
});
