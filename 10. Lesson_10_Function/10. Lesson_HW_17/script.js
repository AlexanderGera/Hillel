// ДЗ 17. Написати декілька функцій

//1. Дано масив з елементами різних типів.Створити функцію
// яка вираховує середнє арифметичне лише числових елементів даного масиву.

let exampleArray = ['a', 'b', 1, 2, 'c', 3, 'd', 4, 'e', 10]

let numberCounter = 0;
let numberResult = 0;
let avaregeResult = 0;

function filterArray(arrToFilter) {
    arrToFilter.forEach(element => {
        if (!(isNaN(element))) {
            numberCounter++;
            numberResult += element;
        }

    });

    avaregeResult = numberResult / numberCounter;
    console.log(`Задание 1: Среднее арифметическое ${avaregeResult}`)
}

// filterArray(exampleArray);

//возможно можно сделать без объявления всех этих переменных.
// Но я от них избавиться не смог.




//2.  Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y,
// рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
// Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.


/* КОММЕНТАРИИ
Идея была такова
все разбить на отдльеные функции:
1. функции которые вызывают промпт
2. функция которая проверяет на то чтобы вводили именно число
3. функция которая выбирает какой символ был введен
4. функция которая считает все.

В результате фиаско - соединить все у меня не получается. Кроме этого не все работает даже отельно
Кроме пункат 4 (как не странно).

При запуске функции customersNumberCheck() внутри нее должна вызываться функция firstCustomerNumberCall()
если проверка не пройдена она должна вызваться повторно, но почему-то вызывается только один раз.
Даже если введен опять текст ( к примеру)

1. У меня не получается сделать нормально проверку. 
Проверки - Это то что мы делаем регулярно, проверки на вводимый тип данных.
Но каждый раз я сталкиваюсь с проблемой. Я думаю я где-то не усвоил основной принцип.

2. Как я понимаю при реализации задуманного не обойтись без "функций высшего порядка"
о которых ты говорил.
У меня не получается сделать так чтобы функция выводила функцию.

Итого получается два вопроса: почему фунция при НЕ прохождении проверки вызывается повторно только раз
и как правильно сделать чтобы функия вызывала функцию? 
Подскажи в каком направлении мне "двигаться"?

*/

let firstCustomsNumber;
let secondCustomsNumber;
let customersOperator;
let operatorsList;



function firstCustomerNumberCall() {
    firstCustomsNumber = prompt('Put first Number');
}

function secondCustomerNumberCall() {
    secondCustomsNumber = prompt('Put second Number');
}



function customersNumberCheck(firstNumber, secondNumber) {
    firstCustomerNumberCall();
    if ((firstNumber == null) || (firstNumber.trim() == '') || (isNaN(firstNumber))) {
        // firstCustomerNumberCall();
        console.log(firstNumber)

    } else {
        console.log(firstNumber)
        secondCustomerNumberCall();
        if ((secondNumber == null) || (secondNumber.trim() == '') || (isNaN(secondNumber))) {
            secondCustomerNumberCall();
        } else {

            console.log(secondNumber);
            console.log('ok');

        }
    }

}



customersNumberCheck(firstCustomsNumber, secondCustomsNumber);

// сразу вопрос. я дико замучался с проверкой на число.Причем каждый раз как в первый.
// Почему isNaN работает если я не привожу prompt к числуа Number.isNaN нет.
// Хотя написано что лучше использовать Number.isNaN он типа более стабильный


// function operatorsCall () {
//     customersOperator = prompt(`Please put one of the followings operators: +, -, *, /, %, ^`);
// }
// operatorsCall();


// firstCustomsNumber = +prompt('Put first Number');


let operators = ['+', '-', '*', '/', '%', '^']


// operators.forEach(element => {
//     if (customersOperator == element) {
//         console.log(element);

//     } else {
//         operatorsCall();

//     }
// });


// if (firstCustomsNumber == argument) {
//     console.log(firstCustomsNumber)
// } else {
//     console.log(2 ^ 3 )

// }