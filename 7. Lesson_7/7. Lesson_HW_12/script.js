/*
ДЗ 12. Масив
- Створити масив, довжину та елементи якого задає користувач.
- Відсортувати масив за зростанням.
- Видалити елементи з масиву з 2 по 4(включно!).
- У міру змін виводити вміст масиву на сторінку.

*/

let customersArray = [];
let usersArrayLenght;
let usersArrayElementsData;
let usersArrayValue;
let customerValueToArray;

function usersArrayLengthPromptCall() {
    usersArrayLenght = prompt(`Put array's length`);
}

function usersArrayValuePromptCall() {
    usersArrayValue = prompt(`Put array's Value separate by SPACE`);
}



for (let i = 0; i < 1; i++) {
    usersArrayLengthPromptCall();
    if (Number.isNaN(+usersArrayLenght) || usersArrayLenght == null || usersArrayLenght.trim() == '') {
        alert(`It's not a number`);
        i--;
    } else {
        customersArray.length = usersArrayLenght;
        console.log(customersArray);
        // alert(customersArray.toString());
        for (let i = 0; i < 1; i++) {
            usersArrayValuePromptCall();
            if (usersArrayValue == null || usersArrayValue.trim() == '') {
                alert(`you put empty string`);
                i--;
            } else {
                customerValueToArray = usersArrayValue.trim().split(' ');
                console.log(customerValueToArray);
                Object.assign(customersArray, customerValueToArray);
                console.log(customersArray);
                customersArray.sort();
                console.log(customersArray);
                customersArray.splice(1, 3);
                console.log(customersArray);

            }
        }

    }
}

