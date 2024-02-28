'use strict'

//ДЗ 25. SuperMath

let obj = {
    X: 15,
    Y: 3,
    znak: '+',
}

class SupperMath {

// операторы вынесены в массив для проверки
    znakVariants = ['+', '-', '*', '/', '%', '^'];

// чтобы знаки "произносились"
    znakIntoWords(nameOfArray) {
        let znak = nameOfArray.znak;

        if (znak == '+') {
            return 'addition';
        }
        if (znak == '-') {
            return 'subtraction';
        }
        if (znak == '*') {
            return 'multiplication';
        }
        if (znak == '/') {
            return 'dividing';
        }
        if (znak == '%') {
            return 'remainder of dividing';
        }
    }

    //подтверждаем текущий объект
    confirmCurrectObjectMath(nameOfArray) {
        let XinObj = nameOfArray.X;
        let YinObj = nameOfArray.Y;
        let znakInObj = this.znakIntoWords(nameOfArray);
        let firstConfirmation = confirm(`Do you really want to ${znakInObj} make with ${XinObj} and ${YinObj}`);
        if (firstConfirmation) {
            //запускаем функцию подсчетов
            let result = this.makeCalculation(nameOfArray);
            console.log(result);

        } else {
            //функция замены данных в объекте
            this.newOperandsFromUserGet(nameOfArray)

        }
    }


    // получаем новые данные для пользователя и проверяем отправляем в объект для мат. операции.
    newOperandsFromUserGet(nameOfArray) {
        nameOfArray.X = +prompt('Put first number');
        nameOfArray.Y = +prompt('Put second number');
        let znakFromUser = prompt(`Please put one of the followings operators: +, -, *, /, %`);
        this.checkZnak(znakFromUser, nameOfArray);

    }

    // проверка оператора от юзера на соответствие
    // и замены данных в znak
    checkZnak(znakFromUser, nameOfArray) {
        if (!this.znakVariants.includes(znakFromUser)) {
            console.log(`You put wrong operator`);
            return;
        } else {
            nameOfArray.znak = znakFromUser;
            this.makeCalculation(nameOfArray);
        }
    }


    // функция подсчета
    makeCalculation(nameOfArray) {
        let numX = nameOfArray.X;
        let numY = nameOfArray.Y;
        let znak = nameOfArray.znak;

        if (znak === '+') {
            return console.log(numX + numY);
        }
        if (znak === '-') {
            return console.log(numX - numY);
        }
        if (znak === '*') {
            return console.log(numX * numY);
        }
        if (znak === '/') {
            return console.log(numX / numY);
        }
        if (znak === '%') {
            return console.log(numX % numY);
        }

    }


    checkMath(nameOfArray) {
        this.confirmCurrectObjectMath(nameOfArray);

    }


}


let smthngNew = new SupperMath();

smthngNew.checkMath(obj);


