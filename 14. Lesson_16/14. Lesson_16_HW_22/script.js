//ДЗ 22. Створюємо сутності
// 1. Створити сутність "Людина".
// Властивості:
// імʼя;
// вік.
// Методи:
// конструктор, який приймає два параметри: імʼя та вік;
// метод, який виводить у консоль інформацію про людину.

class Person {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showPersonalDetail() {
        console.log(`Имя: ${this.name};\nВозраст: ${this.age}`)
    }
}

let fellow = new Person('John', 15);
let man = new Person('Smith', 30);
let dude = new Person('Michel', 35);

dude.showPersonalDetail();
fellow.showPersonalDetail();

// 2. Створити сутність "Автомобіль".
//
// - Властивості:
// марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
// власник.
// - Методи:
// - конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак
// - присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі,
// якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
// - метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина
// для виведення інформації про власника

class Auto {
    brand;
    model;
    manufactureDate;
    registrationNumber;
    owner;

    constructor(brandName, model, manufactureDate, registrationNumber) {
        this.brand = brandName;
        this.model = model;
        this.manufactureDate = manufactureDate;
        this.registrationNumber = registrationNumber;
    }
    newOwnerAddition(ownerPersonalDetails) {
        if(ownerPersonalDetails.age < 18) {
            console.log(`You are younger than 18`);
        } else {
            this.owner = ownerPersonalDetails;
        }
    }
}


let myF1Bolide = new Auto('GAZ', '21', 1965, 'XA 3120',);
let mySupperCar = new Auto('Shelby Mustang', 'GT350', 1968, 'I ride on legend Baby');
let myAnotherCar = new Auto('Audi', 'A6 allroad', 2023, '333333');

myAnotherCar.newOwnerAddition(dude);
myF1Bolide.newOwnerAddition(dude);
mySupperCar.newOwnerAddition(fellow);
console.log(myAnotherCar);
console.log(myF1Bolide);
