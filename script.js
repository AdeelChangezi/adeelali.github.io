const menu = document.querySelector('.menuButton');
const nav = document.querySelector('.navItems');
const navLinks = document.querySelectorAll('.navItems a');

function navSlide() {
    nav.classList.toggle('navItems-active');
    menu.classList.toggle('toggle');
}