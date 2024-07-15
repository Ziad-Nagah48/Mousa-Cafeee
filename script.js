let menu = document.querySelector("#menu-icon");
let headernav = document.querySelector(".headernav");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  headernav.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("bx-x");
  headernav.classList.remove("active");
};
