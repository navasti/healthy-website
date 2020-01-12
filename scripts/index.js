const burger = document.querySelector('.hamburger-menu');
const mobileNav = document.getElementById('mobile-menu');

const showNav = () => mobileNav.classList.toggle('active');

burger.addEventListener('click', showNav);