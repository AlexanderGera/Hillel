'use strict'

//ДЗ 26. div - привид

let myElement = document.getElementsByClassName('text-for-focus')[0];
let myDiv = document.getElementsByClassName('main-holder__div')[0];


myElement.addEventListener('mouseover', addFocus);
myElement.addEventListener('mouseout', offFocus);

function addFocus() {
    myElement.classList.add('focus');
    myDiv.classList.add('focus');
}


function offFocus() {
    myElement.classList.remove('focus');
    myDiv.classList.remove('focus');
}
