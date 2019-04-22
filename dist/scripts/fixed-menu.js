const fixedMenuOverlay = document.querySelector('.fixed__menu__overlay');
const fixedMenuContent = document.querySelector('.fixed__menu__content');

document.querySelector('.menu__toggler').addEventListener('click', function() {
    fixedMenuOverlay.classList.toggle('fixed__menu__overlay--active');
    fixedMenuContent.classList.toggle('fixed__menu__content--active');
})