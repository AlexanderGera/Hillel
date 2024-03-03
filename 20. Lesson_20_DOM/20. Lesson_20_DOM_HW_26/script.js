'use strict'

//ДЗ 26. div - привид

let myInput = document.getElementById('input_test');
let myDiv = document.getElementsByClassName('main-holder__div')[0];


myInput.addEventListener('focus', addFocus);
myInput.addEventListener('blur', offFocus);

function addFocus() {
    myDiv.classList.add('visible');
}

function offFocus() {
    myDiv.classList.remove('visible');
}
