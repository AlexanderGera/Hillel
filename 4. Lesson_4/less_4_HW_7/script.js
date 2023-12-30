// ДЗ 7. Калькулятор

let customerAction = prompt(`Write necessary action: "add", "sub", "mult" or "div"`);

if (customerAction == 'add' || customerAction == 'sub' || customerAction == 'mult' || customerAction == 'div') {

    let firstCustomerNumber = +prompt('Put your first number');
    let secondCustomerNumber = +prompt('Put your second number');

    let result;

    if (Number.isNaN(firstCustomerNumber) || Number.isNaN(secondCustomerNumber)) {
        //typeof не работает с +prompt при попытки засунуть в проверку на число typeof firstCustomerNumber != 'number'. 
        //Даже буква все равно число.
        //Почему в таких условиях работает Number.isNaN()
        alert(`You wrote NOT A NUMBER`);

    } else if (customerAction == 'add') {
        result = firstCustomerNumber + secondCustomerNumber;
        alert(`${firstCustomerNumber} + ${secondCustomerNumber} = ${result}`);

    } else if (customerAction == 'sub') {
        result = firstCustomerNumber - secondCustomerNumber;
        alert(`${firstCustomerNumber} - ${secondCustomerNumber} = ${result}`);

    } else if (customerAction == 'mult') {
        result = firstCustomerNumber * secondCustomerNumber;
        alert(`${firstCustomerNumber} * ${secondCustomerNumber} = ${result}`);

    } else if (customerAction == 'div') {
        result = (firstCustomerNumber / secondCustomerNumber).toFixed(3);
        alert(`${firstCustomerNumber} / ${secondCustomerNumber} = ${result}`);
    }

} else {
    alert('You wrote wrong comand');

}