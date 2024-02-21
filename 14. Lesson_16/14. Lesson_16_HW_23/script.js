//ДЗ 23. Студент
'use strict'

class Student {
    name;
    surname;
    yearOfBirth;
    marks = [];
    attendance = [];

    constructor(name, surname, yearOfBirth, marks) {
        this.name = name;
        this.surname = surname;
        this.yearOfBirth = yearOfBirth;

        // this.marks = marks;
        this.attendance.length = 25;
    }

    // addMarks(marks) {
    //     for (let i = 0; i < arguments.length; i++) {
    //         this.marks.push(arguments[i]);
    //     }
    // };

    getAge() {
        let currentYear = new Date().getFullYear();
        return currentYear - this.yearOfBirth;
    }
    getAverageMark() {
        let summa = 0;
        let counter = 0;
        this.marks.forEach(element => {
            summa += element;
            counter++;
        })
        return summa / counter;
    }
    checkAndFillAttendance(someNumber) {
        for (let i = 0; i < this.attendance.length; i++) {
            if (this.attendance[i] == undefined) {
                this.attendance[i] = someNumber;
                break;
            }
        }
        console.log(this.attendance);
    }
    present() {
        this.checkAndFillAttendance(true);
    }
    absent() {
        this.checkAndFillAttendance(false);
    }
}

let someNewStudent = new Student('Pieter', 'The Grate', 1672);

console.log(someNewStudent);
someNewStudent.absent();
someNewStudent.present();

// console.log(someNewStudent.getAverageMark());

console.log(someNewStudent.marks);
console.log(someNewStudent.getAverageMark());




// function showInfo() {
//     for (let i = 0; i < arguments.length; i++) {
//         arrNewEmpty.push(arguments[i]);
//     }
//     console.log(arrNewEmpty);
// }
//
// showInfo(3, 4, 5, 6);


// function checkAndFillArray(array, someNUmber) {
//     let k = 1;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] == undefined) {
//             array[i] = someNUmber;
//             break;
//         }
//     }
//     console.log(array);
// }
//
// checkAndFillArray(arr, 10);


// не получилось сделать перебор массива ни forEach ни for...of ни for... in
