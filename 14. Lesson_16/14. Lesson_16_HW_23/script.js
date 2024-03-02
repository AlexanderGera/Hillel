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
        this.marks = marks;

        // this.attendance.length = 25;
        //длину пустого массива лучше присвоить через new Array
        //с полупустыми массивами лучше не раболтать - отфильтровать, чтобы был только полный массив - убрать "пропуски"
        this.attendance = new Array(25);
    }

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
        return (summa / counter).toFixed(1);
    }

    fillInnAttendance(someNumber) {

        const indexOfUndefined = this.attendance.findIndex(v => v === undefined);
        if (indexOfUndefined !== -1) {
        this.attendance[indexOfUndefined] = someNumber;

        } else {
            console.log('Array is full');
        }



        // for (let i = 0; i < this.attendance.length; i++) {
        //     if (this.attendance[i] == undefined) {
        //         this.attendance[i] = someNumber;
        //         break;
        //     }
        // }
        console.log(this.attendance);
    }

    lerningAndVisitedDaysCount() {
        let lerningDaysCounter = 0;
        let visitedDaysCounter = 0;
        this.attendance.forEach(elements => {
            if (elements != undefined) {
                lerningDaysCounter++;
                if (elements) {
                    visitedDaysCounter++;
                }
            }
        })
        return (visitedDaysCounter / lerningDaysCounter).toFixed(1);

    }

    summary() {
        let averageMark = this.getAverageMark();
        let lerningAndVisitedDaysCount = this.lerningAndVisitedDaysCount();

        if (lerningAndVisitedDaysCount >= 0.9 && averageMark >= 90) {
            console.log('Obi Wan taught you well, young Padawan');
        } else if (lerningAndVisitedDaysCount < 0.9 && averageMark < 90) {
            console.log(`Houston we have a problem`);
        } else {
            console.log('Not bad. But brick not hit back');
        }
    }

    present() {
        this.fillInnAttendance(true);
    }

    absent() {
        this.fillInnAttendance(false);
    }

}


let someNewStudent = new Student('Pieter', 'The Grate', 1672, [100, 90, 90]);
let anotherOneNewStudent = new Student('Stive', 'Jobs', 1955, [10, 50, 60, 80, 100])

someNewStudent.absent();
someNewStudent.present();
someNewStudent.present();
someNewStudent.present();
someNewStudent.present();
someNewStudent.present();
// someNewStudent.present();

anotherOneNewStudent.absent();
anotherOneNewStudent.absent();
anotherOneNewStudent.absent();
anotherOneNewStudent.absent();
anotherOneNewStudent.present();

console.log(someNewStudent.getAverageMark());
console.log(someNewStudent.lerningAndVisitedDaysCount());

console.log(anotherOneNewStudent.getAverageMark());
console.log(anotherOneNewStudent.lerningAndVisitedDaysCount());


someNewStudent.summary();
anotherOneNewStudent.summary();






// function showInfo() {
//     for (let i = 0; i < arguments.length; i++) {
//         arrNewEmpty.push(arguments[i]);
//     }
//     console.log(arrNewEmpty);
// }
//
// showInfo(3, 4, 5, 6);



// не получилось сделать перебор массива ни forEach ни for...of ни for... in
