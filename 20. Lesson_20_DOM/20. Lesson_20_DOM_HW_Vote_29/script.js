'use strict'

//ДЗ 29. Голосування

//Old and bad way with many copy past

let getSmile_1 = document.getElementById('smile_1');
let getSmile_2 = document.getElementById('smile_2');
let getSmile_3 = document.getElementById('smile_3');
let getSmile_4 = document.getElementById('smile_4');
let getSmile_5 = document.getElementById('smile_5');


let getVoteTD_1 = document.getElementById('vote_smile_1');
let getVoteTD_2 = document.getElementById('vote_smile_2');
let getVoteTD_3 = document.getElementById('vote_smile_3');
let getVoteTD_4 = document.getElementById('vote_smile_4');
let getVoteTD_5 = document.getElementById('vote_smile_5');


let countVoteArray = new Array(5);
countVoteArray.fill(0);



function voteAdd (voteTD, index) {
    countVoteArray[index]++;
    voteTD.innerHTML = countVoteArray[index];
}

function getSmilesListener (smilesNumber, voteTD, index) {
    smilesNumber.addEventListener('click', () => {
        voteAdd(voteTD, index);
    });
}

getSmilesListener(getSmile_1, getVoteTD_1, 0);
getSmilesListener(getSmile_2, getVoteTD_2, 1);
getSmilesListener(getSmile_3, getVoteTD_3, 2);
getSmilesListener(getSmile_4, getVoteTD_4, 3);
getSmilesListener(getSmile_5, getVoteTD_5, 4);

console.log(countVoteArray);



//сделать Array.from в начале
//
// let smilesElements = document.getElementsByClassName('smile');
// let votesElements = document.getElementsByClassName('voute_counter');
//
//
// let votesCounters = new Array(Array.from(smilesElements).length);
// votesCounters.fill(0);
//
//
// function Vote (indexNumber) {
//     let votesElementsArray = Array.from(votesElements);
//     votesElementsArray[indexNumber].innerHTML = 77;
// }
//
// Array.from(smilesElements).forEach((element, index) => {
//     element.addEventListener('click',() => {
//         Vote(index);
//
//     });
//
//
// })
//







