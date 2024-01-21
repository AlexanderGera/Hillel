// ДЗ 11. Написання циклів

// 1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).


// let result = '';

// for (let i = 20; i <= 30; i+=0.5) {
// result += `${i}, `;
// }

// let newResult = result.split(',').join(' ');
// console.log(`Задание 1: ${newResult}`);



// 2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.


// let usCurrency = 27;
// let usCurrencyExchangeResult = '';

// for (let i = 10; i <= 100; i += 10) {
//     usCurrencyExchangeResult += `${i} USD равно ${i * usCurrency}\n`;

// }
// console.log(`Задание 2:\n${usCurrencyExchangeResult}`);




//3. Дане ціле число.Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

let userNumber = +prompt('Put your number');
// let userResult = '';
let userResultArray = [];

for (let i = 1; i <= 100; i++) {
    // console.log(i);
    if (i ** 2 <= userNumber) {
        userResultArray.push(i);
    }
}

console.log(userResultArray.join(" "));







// //4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

// let customerNumber = +prompt('Put the number');
// let isSimple = true;

// for (let i = 2; i < customerNumber; i++) {
//     console.log(i);
//     if ((customerNumber % i === 0)) {
//         isSimple = false;
//         break; // остановка цикла после первого негативного результата (чтобы дальше не шел цикл ФОР)
//     }
// }

// if (isSimple) {
//     console.log(`Это простое, проверка на`);

// } else {
//     console.log(`Это NE простое, проверка`);

// }


// 5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь.
//(Наприклад, числа 9, 81 можна отримати, а 13 - не можна).



let customerNumberforDividing = +prompt('Put the number');

let devider = 3;
let result = 0;
let power;
let isPowerThree = false; // если не объявить то undefined приводится к false

for (let i = 1; result <= customerNumberforDividing; i++) {
    result = 3 ** i;
    if (result == customerNumberforDividing) {
        isPowerThree = true;
        power = i;
    }
    
}
console.log(isPowerThree ? `это степень ${power}` : 'не степень'  );