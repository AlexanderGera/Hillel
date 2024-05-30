
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

//language buttons styles changing

let pageLanguage = document.documentElement.lang;
let ukrLangButton = document.getElementById('ukr_lang');
let engLangButton = document.getElementById('eng_lang');

if (pageLanguage === 'uk') {
    ukrLangButton.classList.add('active');
    engLangButton.classList.remove('active');

} else {
    ukrLangButton.classList.remove('active');
    engLangButton.classList.add('active');
}


