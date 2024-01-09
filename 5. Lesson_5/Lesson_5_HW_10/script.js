// ДЗ 10. Написання циклів

// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20.


let result = '';

for (let i = 10; i <= 20; i++) {


    if (i == 20) {
        result += i;
    } else {
        result += `${i}, `;

    }
}

console.log(`Задание 1: ${result}`);



//2. Вивести квадрати чисел від 10 до 20.


let degreeResult = '';

for (let i = 10; i <= 20; i++) {


    if (i == 20) {
        degreeResult += i ** 2;
    } else {
        degreeResult += `${i ** 2}, `;
    }
}

console.log(`Задание 2: ${degreeResult}`);


//3. Вивести таблицю множення на 7.

let table = '';
for (let i = 1; i <= 10; i++) {
    table += `${i} * 7 = ${i * 7}\n`;
}
console.log(`Задание 3:\n${table}`);


//4. Знайти суму всіх цілих чисел від 1 до 15.

let sumResult = 0;

for (let i = 1; i <= 15; i++) {
    sumResult += i;

}
console.log(`Задание 4: ${sumResult}`);


// 5. Знайти добуток усіх цілих чисел від 15 до 35.


let multResult = 1;

for (let i = 15; i <= 35; i++) {
    multResult = multResult + (multResult * i);

}
console.log(`Задание 5: ${multResult}`);

// 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.


let averageResult = 0;
let iteraionNumbers = 500;
for (let i = 1; i <= iteraionNumbers; i++) {
    averageResult += i;

}
console.log(`Задание 6: среднее арифметическое вне цикла ${averageResult / iteraionNumbers}`);


// 7. Вивести суму лише парних чисел в діапазоні від 30 до 80

let evenNumbersTotal = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 == 0) {
        evenNumbersTotal += i;
    } else {
        continue;
    }

}
console.log(`Задание 7: Сумма парных чисел от 30 до 80 равна ${evenNumbersTotal}`);


// 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3

let everyThirdNumberList = '';
for (let i = 100; i <= 200; i++) {

    if (i % 3 == 0) {
        everyThirdNumberList += `${i}, `;
    } else {
        continue;
    }
}
console.log(`Задание 8: Вивести всі числа в діапазоні від 100 до 200 кратні 3-м: ${everyThirdNumberList}`);


// 9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.


let customerNumber = +prompt('Write the number');

let dividerCountNumber = '';
let evenDividerCountNumber = 0;
let evenDividerCountNumberArray = [];
let evenDeviders = '';
let Summa = 0;

for (let i = 1; i <= customerNumber; i++) {
    let divideResult = customerNumber / i;
    if (Number.isInteger(divideResult) == true) {
        dividerCountNumber += `${i}, `;
    }
}

console.log(`Задание 9: Число имеет следующие делители: ${dividerCountNumber}`);

//10. Визначити кількість його парних дільників.
//11. Знайти суму його парних дільників.

for (let i = 2; i <= customerNumber; i += 2) {
    if (customerNumber % 2 !== 0) {
        console.log(`Задание 10: ${customerNumber} это не четное число, оно не имеет парного делителя`);
        break;
    } else {
        evenDividerCountNumber = customerNumber / i
        if (Number.isInteger(evenDividerCountNumber) == true) {
            evenDividerCountNumberArray[i - 2] = i;
            Summa += i;
            evenDeviders += ` ${i},`;

        }
    }
}

let correctedArray = evenDividerCountNumberArray.filter(Boolean).length;
console.log(`Задание 10: количество парных делителей ${correctedArray}`);
console.log(`Задание 11: Сумма парных делителей${evenDeviders} равна ${Summa}`);



//12. Надрукувати повну таблицю множення від 1 до 10.

//СДЕЛАЛ НЕ САМОСТОЯТЕЛЬНО - на примере понял как переход с первого цикла во вложенный происходит,
// но сам до этого не додумался - на готовм примере разобрался. 
//Не знаю на сколько это понимание из "знаю" в "умею" перешло

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}