//ДЗ 13. Пошук у масиві
//Дан масив [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47] 


// 1. Знайти суму та кількість позитивних елементів.


let originalArray = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log('Исходный массив ' + originalArray);

let arrayElementsAmountResult = 0;
let positivElemCounter = 0;
let arrayElementsMultiplyResult = 1;

let positivElementAmountArray = originalArray.map(function (element) {
    if (element > 0) {
        arrayElementsAmountResult += element;
        positivElemCounter++;
        //9 . Знайти добуток позитивних елементів..
        arrayElementsMultiplyResult *= element;
    }
});
console.log(`Задание 1: Сумма всех положительных элементов ${arrayElementsAmountResult}.\n Количество ${positivElemCounter}`);



//2.  Знайти мінімальний елемент масиву та його порядковий номер.

let minArrayNumber = Math.min(...originalArray);
let indexOfMINArrayNumber = originalArray.indexOf(minArrayNumber) + 1;

console.log(`Задание 2: Минимальный элемент ${minArrayNumber} имеет порядковый номер ${indexOfMINArrayNumber}`);


// 3. Знайти максимальний елемент масиву та його порядковий номер.

let maxArrayNumber = Math.max(...originalArray);
let indexOfMAXArrayNumber = originalArray.indexOf(maxArrayNumber) + 1;
console.log(`Задание 3: Максимальны элемент ${maxArrayNumber} имеет порядковый номер ${indexOfMAXArrayNumber}`);


//4. Визначити кількість негативних елементів.

let negativElemCounter = 0;

originalArray.forEach(function (element) {
    if (element < 0) {
        negativElemCounter++;
    }
});
console.log(`Задание 4: Количество всех отрицательных элементов: ${negativElemCounter}`);



//5. Знайти кількість непарних позитивних елементів.

let positivUnevenElementCounter = 0;
let positivUNEvenElementAmountResult = 0;

let positivElementNumbers = originalArray.map(function (element) {
    if (element > 0) {
        if ((element % 2)) {
            positivUnevenElementCounter++;
            //8. Знайти суму непарних позитивних елементів.
            positivUNEvenElementAmountResult += element;
        }
    }
});
console.log(`Задание 5: Количество всех непарних позитивних елементів ${ positivUnevenElementCounter}`);


//6. Знайти кількість парних позитивних елементів..

let positivEvenElementCounter = 0;
let positivEvenElementAmountResult = 0;

originalArray.forEach(function (element) {
    if (element > 0) {
        if (!(element % 2)) {
            positivEvenElementCounter++;
            //7. Знайти суму парних позитивних елементів. Строка ниже
            positivEvenElementAmountResult += element;
        }
    }
});
console.log(`Задание 6: Количество всех парних позитивних елементів ${ positivEvenElementCounter}`);
console.log(`Задание 7: Сумма всех парних позитивних елементів ${ positivEvenElementAmountResult}`);


//8. Знайти суму непарних позитивних елементів.
console.log(`Задание 8: Сумма всех непарних позитивних елементів ${ positivUNEvenElementAmountResult}`);

//9. Знайти добуток позитивних елементів..

console.log(`Задание 9: добуток позитивних елементів. ${ arrayElementsMultiplyResult}`);

//10. Знайти найбільший серед елементів масиву, ост альні обнулити.

let maxElement = Math.max(...originalArray);
let indexOfMaxElement = originalArray.indexOf(Math.max(...originalArray));
for (let key in originalArray) {
    if (key < indexOfMaxElement) {
        originalArray[key] = 0;

    } else if (key > indexOfMaxElement) {
        originalArray[key] = 0;
    }
}
console.log(`Задание 10: Наибольший элемент массива ${maxElement}.\n 
До него и после него обнуленный массив  ${originalArray}`);

