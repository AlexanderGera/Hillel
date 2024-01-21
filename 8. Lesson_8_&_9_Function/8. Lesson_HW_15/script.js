// ДЗ 15. Реалізуйте функцію removeElement


//Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

//Наприклад:

const array = [1, 2, 3, 4, 5, 6, 7];
const array1 = ['a', 'b', 'c', 'd', 'e', 'f', 'j'];
const array2 = [111, 222, 333, 444, 555, 666, 777];


function arrayRemoveElement(arrayName, elementName) {
    arrayName.find(function (element) {
        if (elementName == element) {
            arrayName.splice(arrayName.indexOf(elementName), 1);
        }
    });

    console.log(arrayName);

}



arrayRemoveElement(array, 6);

