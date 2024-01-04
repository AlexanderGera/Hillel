// ДЗ 9. switch...case


let numOrStr = prompt(`input number or string`);
console.log(numOrStr);


switch (true) {
    case numOrStr === null:
        console.log(`You pressed Cancel`);
        break;
    case numOrStr.trim() == '':
        console.log(`Empty String`);
        break;
    case isNaN(+numOrStr):
        console.log(`number is Ba_NaN`);
        break;
    default:
        console.log(`OK!`)
        break;
}


// if (numOrStr === null) {
//     console.log('ви скасували')
// } else if (numOrStr.trim() === '') {
//     console.log('Empty String');

// } else if (isNaN(+numOrStr)) {
//     console.log(' number is Ba_NaN')
// } else {
//     console.log('OK!')
// }
