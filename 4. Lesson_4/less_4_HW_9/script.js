
// ДЗ 4. Математичні операції

let firstCustomerNumber = +prompt('Put your first number');
let secondCustomerNumber = +prompt('Put your second number');


function customerNumbersCount(firstNumber, secondNumber) {

    let numbersAddition = (firstNumber + secondNumber);
    let numbersSubstraction = (firstNumber - secondNumber);
    let numbersMultiplication = (firstNumber * secondNumber);
    let numbersDividing = (firstNumber / secondNumber).toFixed(3);
    
    alert(`Сумма чисел ${firstNumber} и ${secondNumber} равна: ${numbersAddition}. \nРазность: ${numbersSubstraction}. \nПроизведение: ${numbersMultiplication}. \nЧастное: ${numbersDividing}`);
}

customerNumbersCount(firstCustomerNumber, secondCustomerNumber);