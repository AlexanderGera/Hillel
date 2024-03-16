'use strict'

// ДЗ 32. generateList

let placeForList = document.getElementsByClassName('list_holder')[0];

let arrForShow = [1, 2, [3.1, 3.2, 3.3], 4];


let firstSimbol = '<ul>';
let lastSimbol = '</ul>';
let result = '';

function listMaking() {

    arrForShow.forEach((element) => {
        if (Array.isArray(element)) {
            result += `${firstSimbol} <li>${element}</li> ${lastSimbol}`;
        } else {
            result += `<li>${element}</li>`;
        }

    })

    placeForList.innerHTML = firstSimbol + result + lastSimbol;


}

listMaking();


console.log(arrForShow);

