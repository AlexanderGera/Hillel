'use strict';

//
// const order = [1,2,3,4,5,6];
// showArrAndNumb(3, order);
//
//
// 5 * 2 - (3 * 2 - 2 * 2)
// 10 - (3 * 2 - 2 * 2)
// 10 - (   6  - 2 * 2)
// 10 - (   6  -   4  )
// 10     -     2
//    8

// function sum(firstStr, secondStr) {
//
//
//   if (!isNaN(firstStr) && !isNaN(secondStr)) {
//     return firstStr + secondStr;
//   }
//
//     return 0;
// }
//
// let result = sum(10, 5);
//
// console.log( result * sum( 20, 30) );
// console.log(sum('qqqq','www'));

// function showMult5(userInput) {
//   if (userInput === null) {
//     console.log('Cancelled');
//     return 0;
//   }
//
//   if (userInput === '') {
//     console.log('Empty');
//     return;
//   }
//
//   if (isNaN(userInput)) {
//     console.log('Not a number');
//     return;
//   }
//
//
//   if (userInput % 2 !== 0) {
//     console.log('Not pared');
//     return;
//   }
//
//   // ...
//
//   let num = Number(userInput);
//   console.log(num * 5)
// }
//
//
//
// const userInput = prompt('Input number');
//
// // showMult5(userInput);
//
// const myDuplicateFunction = showMult5;
//
// myDuplicateFunction(userInput);
// console.log(myDuplicateFunction);

// =====================================

(function myFunc(myParam, second, third) {
    let a = 3;

    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    if (true) {
        let a = 100;
        console.log('inside if', a);
    }

    console.log('at the end', a, myParam, second, third);
})(777, 555, 222); // IIFE

(() => {
    console.log('HERE!')
})();

// ===================

let q = 5;
test();
let myTest = () => {
    console.log('Arrow')
};
myTest();

function test() {
    let w = 7;
    console.log(q, w);
    return w;
}

// ===================
function name(arg1, arg2) {
    return arg1 + arg2;
}


// const nameArrow = arg => arg1 ** 2;
const nameArrow2 = (arg1, arg2) => arg1 + arg2;

const nameArrow3 = (arg1, arg2) => {
    console.log('There');
    let sum = arg1 + arg2;
    return sum;
}

const getArray = (arg0, arg1, arg2) => [arg0, arg1, arg2];

const getPerson = (nameParam, ageParam) => ({
    name: nameParam,
    age: ageParam,
});

const group = getArray('Oleksii', 'Alexandr', 'Oleg');
console.log(group);

const person = getPerson('Oleksii', 28);
console.log(person);

let obj = {
    a: 11,
    b: 12,
    c: 13,
}

let arr = [1, 2, 3, 4];

console.log(Object.keys(obj));