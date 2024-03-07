'use strict'

//ДЗ 29. Голосування

//Old and bad way with many copy past
//
// let getSmile_1 = document.getElementById('smile_1');
// let getSmile_2 = document.getElementById('smile_2');
// let getSmile_3 = document.getElementById('smile_3');
// let getSmile_4 = document.getElementById('smile_4');
// let getSmile_5 = document.getElementById('smile_5');
//
//
// let getVoteTD_1 = document.getElementById('vote_smile_1');
// let getVoteTD_2 = document.getElementById('vote_smile_2');
// let getVoteTD_3 = document.getElementById('vote_smile_3');
// let getVoteTD_4 = document.getElementById('vote_smile_4');
// let getVoteTD_5 = document.getElementById('vote_smile_5');
//
//
// let countVoteArray = new Array(5);
// countVoteArray.fill(0);
//
//
//
// function voteAdd (voteTD, index) {
//     countVoteArray[index]++;
//     voteTD.innerHTML = countVoteArray[index];
// }
//
// function getSmilesListener (smilesNumber, voteTD, index) {
//     smilesNumber.addEventListener('click', () => {
//         voteAdd(voteTD, index);
//     });
// }
//
// getSmilesListener(getSmile_1, getVoteTD_1, 0);
// getSmilesListener(getSmile_2, getVoteTD_2, 1);
// getSmilesListener(getSmile_3, getVoteTD_3, 2);
// getSmilesListener(getSmile_4, getVoteTD_4, 3);
// getSmilesListener(getSmile_5, getVoteTD_5, 4);
//
// console.log(countVoteArray);
//


// THE New SUPPER PROGRESSIVE WAY of programming

// получаем коллекцию из элементов
let smilesAll = document.getElementsByClassName('smile');
let votesCellsAll = document.getElementsByClassName('voute_counter');

//создаем массив для хранения голосования - длинна массива равна количеству смайликов
let votesStorageArray = new Array(Array.from(smilesAll).length);
//заполняем нулями - метод Arr.fill()
votesStorageArray.fill(0);




function printVotes(index) {
    //делаем из коллекции нормальный массив через метод Array.from()
    let votesCellArray = Array.from(votesCellsAll);
    // елемент с индексом index при клике увеличивается на 1
    //!!! индексы у всех соответствующих элементов всех трех массивов равны
    // т.е. 0-му элементу массива с результатами соответствует 0-й элемент смайла и первая ячейка голосования
    votesStorageArray[index] ++;
    //далее из массива где хранятся результаты это размещается на странице методом innerHTML
    votesCellArray[index].innerHTML = votesStorageArray[index];
}

//1. функция обработка действий со смайлами
function getSmilesVotes(arr) {
    //делаем из коллекции нормальный массив через метод Array.from()
    let elementsArray = Array.from(arr);
    //форич принимает в себя два аргумента: непосредственно элемент массива
    // и индекс элемента (element & index сответственно)
    elementsArray.forEach((elements, index) => {
        // при событии КЛИК запускается вторая функция которая считает и выводит результаты голосования
        elements.addEventListener('click', () => {
            printVotes(index)
        });
    });
}


getSmilesVotes(smilesAll);



console.log(votesStorageArray);







