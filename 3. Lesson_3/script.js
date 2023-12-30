let num = 10;

num += 10;

console.log('num += 10', num);


let all = 10;

all *= 10;

console.log('all *= 10', all);

let i = 10;


console.log(parseInt('2456dfsfdg55sdff'));
console.log(parseFloat('2456dfsfsd55ff'));



const myNum = 12345;
const myText = '98765';

//                                 0         1         2
const studentsNames = ['Serhii', 'Oleksii', 'Maks'];
// console.log(studentsNames[0]); // Serhii
//
// console.log(myText[3]); // 6
// console.log(myText.length); // 5 // строка з пʼяти символов
// console.log(studentsNames.length); // 3  // масив з трьох елементів
//
// console.log(myNum[1]) //undefined

// математичні оператори --------------------------
// + - * /
// ** возведення у ступень
// % - остаток від цілочисленного ділення

// console.log(75 % 6); //3
// console.log(2.5 % 1); // 0.5 - якщо не ноль, число дрібне

// скорочені оператори ----------------------
//  a += 1, a -=1, a *= 2, a/=2
// let a = 11;
// a += 3;
// console.log('a = ', a );
// a *= 5;
// console.log('a помножена на пʼять: ', a );
// a = a * 5;

// унарні оператори --------------------
// typeof,
// i++ постфіксний інкремент. Спочатку вертаємо актуальне значення, потім підвищуємо змінну на одиницю
// i-- постфіксний декремент. Спочатку вертаємо актуальне значення, потім знижуємо змінну на одиницю
// ++i префіксний інкремент. Спочатку підвищуємо змінну на одиницю, потів вертаємо нове значення
// --i префіксний декремент. Спочатку знижуємо змінну на одиницю, потів вертаємо нове значення

// let i = 7;
// console.log(typeof a, a++, a--, ++a, --a);

// логічні оператори
// &&  ||  !  ??

// console.log(true && true && true && false) // false, бо один false
// console.log(false || false || false || true) // true, бо хоч один тру
//
// let isUserLoggedIn = true;
// let userName = '';
//
// console.log( isUserLoggedIn && userName )

// Пріорітет https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

// +'3' // 3 номер
// !! // завжди приводить до boolean