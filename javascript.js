const menuIcon = document.querySelector(".menu");
const sideBar = document.querySelector(".sidebar");

menuIcon.onclick = function() {
 sideBar.classList.toggle("small-sidebar");
}