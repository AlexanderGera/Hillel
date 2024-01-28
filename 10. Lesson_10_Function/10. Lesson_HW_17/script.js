// // ДЗ 17. Написати декілька функцій

// //1. Дано масив з елементами різних типів.Створити функцію
// // яка вираховує середнє арифметичне лише числових елементів даного масиву.

let exampleArray = ['a', 'b', 1, 2, 'c', 3, 'd', 4, 'e', 10]
let exampleArrayNew = ['a', 'b', 1, 2, 'c', 3, 'd', 4, 'e', 11]

function getAverage(arrToFilter) {
    let numberCounter = 0; // они нужны только для задачи внутри функции
    let numberResult = 0;
    arrToFilter.forEach(element => {
        if (!(isNaN(element))) {
            numberCounter++;
            numberResult += element;
        }

    });
    return (numberResult / numberCounter).toFixed(2);
}

console.log(`Задание 1: Среднее арифметическое ${getAverage(exampleArrayNew)}`);

//возможно можно сделать без объявления всех этих переменных.
// Но я от них избавиться не смог.


//2.  Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y,
// рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
// Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

const firstCustomsNumber = prompt('Put first Number');
const secondCustomsNumber = prompt('Put second Number');
const customersOperator = prompt(`Please put one of the followings operators: +, -, *, /, %, ^`);

function doMath(x, znak, y) {
    let numX = Number(x);
    let numY = Number(y);
    const operators = ['+', '-', '*', '/', '%', '^']; // этот массив можно заносить во внутрь функции
    //т.к.он работает только внутри функции, на глобальном уровне он не нужен

    // if (Number.isNaN(numX) || Number.isNaN(numY) || numX === 0 || numY === 0) {
    //     console.log(`Not a Number or Zero`);
    //     return; // если не будет ретерн то пойдет дальше (без него нужен Елс). retern останавливает выполнение
    // }

    //передал проверку фунции  

    if (!isNumberValid(x) || !isNumberValid(y)) {
        console.log(`Not a Number or Zero`);
            return;
    }

    if (!operators.includes(znak)) {
        console.log(`You put wrong operator`);
        return;
    }

    if (znak === '+') {
        return numX + numY;
    }

    if (znak === '-') {
        return numX - numY;
    }

    if (znak === '*') {
        return numX * numY;
    }

    if (znak === '/') {
        return numX / numY;
    }

    if (znak === '%') {
        return numX % numY;
    }

    if (znak === '^') {
        return numX ** numY;
    }

}


console.log(`Задание 2ю Результат: ${doMath(firstCustomsNumber, customersOperator, secondCustomsNumber)}`);


function isNumberValid(usersData) { // функция проверки данных
    let numData = Number(usersData); // приводим к числу агрумент

    if (Number.isNaN(numData) || numData === 0) {
        return false;
    }
    return true;
}


// 3. Написати функцію заповнення даними користувача двомірного масиву.
// Довжину основного масиву і внутрішніх масивів задає користувач.
// Значення всіх елементів всіх масивів задає користувач.

let newArrayForModifying = [];

let customersMainArrayLength = prompt(`Put Main Array's Length`);
let customersNestedArrayNumbers = prompt(`Put the Numbers of Nested Arrays`);

function arraysFilling(mainArLenfth, nestedArrNumber) {
    // длина основного массива
    newArrayForModifying.length = mainArLenfth;
    // создаю вложенные массивы
    for (let i = 0; i < nestedArrNumber; i++) {
        newArrayForModifying[i] = [];
    }

    // заполняю вложенные массивы данными
    for (let key in newArrayForModifying) {

        let stringFromCustomers = prompt(`Write separated by commas NESTED Array's Elements`);
        let stringFromCustomersToArray = stringFromCustomers.split(' ').join('').split(',');
        newArrayForModifying[key] = stringFromCustomersToArray;
    }
    return newArrayForModifying;
}

console.log(arraysFilling(customersMainArrayLength, customersNestedArrayNumbers));


//4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
//'func(" hello world", ['l', 'd'])' поверне нам "heo wor".Вихідний рядок та символи для видалення задає користувач.

let customerString = prompt(`Write your String`);
let customersSimbolToExclude = prompt(`Write separated by commas Array's Elements`);

function wordTransform(string, simbols) {
    let customerStringToArray = string.split('');
    let excludeSimbolsToArray = simbols.split(' ').join('').split(',');

    let newArr = customerStringToArray.filter(element => !excludeSimbolsToArray.includes(element));
    // filter делает копию из значений массива element которые прошли тест на соответствие
    //include определяет включает ли в себя массив excludeSimbolsToArray значения 
    // из проверяемого значения и выдает false/true
    // если элемент есть то true (которое преобразов !. в false)
    // а если false то filter на этом значении не срабатывает и не копирует элемент в новый массив


    // часть !excludeSimbolsToArray.includes(element) вызвала у меня большие затруднения.
    // Решение подсказал ЖПТ чат. Моемо Що Маемо. 
    // Сначала я хотел это выполнить forEach но не получилось. Как мне кажется ошибки в синтаксисе.
    
    return newArr.join('');
}

let result = (wordTransform(customerString, customersSimbolToExclude));

console.log(result);