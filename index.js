var burgerCheckbox = document.querySelector('.burger__checkbox');
var navList = document.querySelector('.header__nav-list');

burgerCheckbox.checked = false;

burgerCheckbox.addEventListener('change', () => {
    navList.classList.toggle('header__nav-list--opened');
});