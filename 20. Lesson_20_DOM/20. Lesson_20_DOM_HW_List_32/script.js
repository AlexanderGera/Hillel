'use strict'

// ДЗ 32. generateList

let placeForList = document.getElementsByClassName('list_holder')[0];

let arrForShow = [1, 2, [3.1, 3.2, 3.3], 4, [[3.1, 3.2, 3.3], 3.2, 3.3]];


let firstSimbol = '<ul>';
let lastSimbol = '</ul>';

function listMaking(arr) {
    let result = '';

    arr.forEach((element) => {

        if (Array.isArray(element)) {
            //т.к. элемент массив то обрабатывается той же функцией в которую в качестве аргумента заходит элемента-массив
            result += `<li>${listMaking(element)}</li>`;
        } else {
            result += `<li>${element}</li>`;
        }

    })


    return firstSimbol + result + lastSimbol;


}

//вставляется результат работы функции
placeForList.innerHTML = listMaking(arrForShow);






