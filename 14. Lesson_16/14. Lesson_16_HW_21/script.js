//ДЗ 21. Багатоквартирний будинок


/*
1. Створити клас Людина.
    Властивості:
імʼя;
стать.
    Методи:
конструктор, який приймає два параметри: імʼя та стать.
*/


class Person {
    constructor(personName, personGender) {
        this.personName = personName;
        this.personGender = personGender;

    }


}


let theFirstNewInhabitant = new Person('Veronique', 'female');
let theSecondNewInhabitant = new Person('Alex', 'male');
let theThirdNewInhabitant = new Person('Pavel', 'male');


/*
2. Створити клас Квартира.
Властивості:
конструктор не потрібен;
масив жителів, який при створенні пустий.
Методи:
додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.
*/

class Apartment {
    inhabitantsList = [];

    newInhabbitantAddition(somePersone) {
        this.inhabitantsList.push(somePersone);
        // console.log(this.inhabitantsList);
    }
}

let firstNewAppartment = new Apartment();
let secondNewAppartment = new Apartment();
let thirdNewAppartment = new Apartment();

firstNewAppartment.newInhabbitantAddition(theFirstNewInhabitant);
firstNewAppartment.newInhabbitantAddition(theSecondNewInhabitant);
secondNewAppartment.newInhabbitantAddition(theThirdNewInhabitant);

console.log(firstNewAppartment.inhabitantsList);
console.log(secondNewAppartment.inhabitantsList);
/*
3. Створити клас Будинок.
Властивості:
масив квартир, який при створенні пустий;
максимальна кількість квартир.
Методи:
конструктор, який приймає один параметр: максимальну кількість квартир;
додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти,
чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру,
в іншому випадку виводить у консоль відповідне повідомлення.
 */


class Building {
    appartments = [];
    maxAppartmentsNumber = 0;

    constructor(maxAppartmentsNumber) {
        this.maxAppartmentsNumber = maxAppartmentsNumber;
    }

    addAppartment(newAppartment) {
        if (this.appartments.length < this.maxAppartmentsNumber) {
            this.appartments.push(newAppartment);
            console.log(this.appartments);
        } else {
            console.log(`All the appartments are occupied`);
        }
    }
}

let supperPupperSkyScraper = new Building(2);

supperPupperSkyScraper.addAppartment(firstNewAppartment);
supperPupperSkyScraper.addAppartment(secondNewAppartment);
supperPupperSkyScraper.addAppartment(thirdNewAppartment);