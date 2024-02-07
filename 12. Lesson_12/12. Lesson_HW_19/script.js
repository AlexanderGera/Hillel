//ДЗ 19. Функція із замиканням


// Написати функцію, яка приймає 1 параметр.з тим, що передали перший раз і т.д.Все це із замиканнями, наприклад:
// sum(3) = 3
// sum(5) = 8
// sum(20) = 28




function numberCount(number) {
    return function (addNumber) {
        number = number + addNumber;

        return number;
    }
}

let someNumber = numberCount(1);
someNumber(2);
someNumber(3);
console.log(someNumber(4));
console.log(someNumber(5));
console.log(someNumber(5));




