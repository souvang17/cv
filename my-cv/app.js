const menu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');
const barTop = document.querySelector('.bar-top');
const barBot = document.querySelector('.bar-bot');

// Toggle Mobile Menu
const toggleMenu = () => {
    menu.classList.toggle('visible');
    barTop.classList.toggle('animate-top');
    barBot.classList.toggle('animate-bot');
};

hamburger.addEventListener('click', toggleMenu);