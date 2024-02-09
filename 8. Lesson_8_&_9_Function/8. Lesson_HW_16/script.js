// ДЗ 15. Реалізуйте функцію removeElement


// Реалізуйте функцію generateKey(length, characters),
// яка повертає рядок випадкових символів із набору characters довжиною length.span >

// Наприклад:

let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, string) {
    let arr = string.split('');
    let randomNumber;
    let randomString = '';

    for (let i = 1; i <= length; i++) {
        randomNumber = Math.floor(Math.random() * (arr.length));
        randomString += arr.slice(randomNumber, randomNumber + 1);
        
        
    }
    return randomString;
}

let smtngToShow = generateKey(25, characters);

console.log(smtngToShow);



