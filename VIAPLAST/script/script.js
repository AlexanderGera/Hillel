
'use strict';

//hamburger menu

let headerMenu = document.getElementsByClassName('header-menu')[0];
let hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0];

hamburgerMenu.addEventListener('click', mobileMenuToggle);

function mobileMenuToggle() {
    headerMenu.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
}

let menuLinks = document.getElementsByClassName('header-menu__link');

Array.from(menuLinks).forEach((element) => {
    element.addEventListener('click', closeMenuOnClick);

})

function closeMenuOnClick() {
    headerMenu.classList.remove('active');
    hamburgerMenu.classList.remove('active');

}


