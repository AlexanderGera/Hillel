let newArray = ['aaa', 'bbb', 'ccc', 'ddd'];

console.log(newArray[1]);
console.log(newArray.length); 
console.log(`C помощью .length - 1 выводим индекс последнего элемента массива ${newArray.length - 1}`);
// выводим индекс последнего элемента массива


let arr = [0, 1, 2, 3];

arr[2] = 15;
console.log(arr);

let newArr = [];

alert(newArr.length);

let arrayToCorrecting = [0, 1, 2, 3, 4, 5, 6, 7];

let arrayCopy = arrayToCorrecting.splice(2, 3); // вырезаем из arrayToCorrecting 3 сивола начиная с 2 (первая цифра), 
// и скопировали их в новый объект arrayCopy

console.log(arrayToCorrecting);
console.log(arrayCopy);

arrayCopy.splice(1, 0, 'aaa', 'bbb', 'cccc'); // начиная с 1 элемента вставляем (т.к. вторая цифра указана 0) указанные за ней данные 

console.log(arrayCopy);