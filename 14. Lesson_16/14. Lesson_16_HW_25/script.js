'use strict'

//ДЗ 25. SuperMath

let obj = {
    X: 15,
    Y: 3,
    znak: '+',
}

class SupperMath {

// операторы вынесены в массив для проверки

    operations = {
        '+': 'addition',
        '-': 'subtraction',
        '*': 'multiplication',
    }

    znakVariants = ['+', '-', '*', '/', '%', '^'];

// чтобы знаки "произносились"

    znakIntoWords(znak) {
        // let znak = nameOfArray.znak;
//обращаемся к ключу, запрашивая его значения - в аргумент заходит оператор (+, -, * и т.п.) от пользователя
// который является именем ключа - operations[znak] по имени ключа получаем его значение - слово,
        return this.operations[znak];

        // if (znak == '+') {
        //     return 'addition';
        // }
        // if (znak == '-') {
        //     return 'subtraction';
        // }
        // if (znak == '*') {
        //     return 'multiplication';
        // }
        // if (znak == '/') {
        //     return 'dividing';
        // }
        // if (znak == '%') {
        //     return 'remainder of dividing';
        // }
    }

    //подтверждаем текущий объект
    confirmCurrectObjectMath(nameOfArray) {
        let XinObj = nameOfArray.X;
        let YinObj = nameOfArray.Y;
        let znak = nameOfArray.znak;

        let znakInObj = this.znakIntoWords(znak);

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
        //пользуемся одним объектом и для проверки и для "проговаривания" знаков

        let operatorsArray = Object.keys(this.operations);

        if (!operatorsArray.includes(znakFromUser)) {
            console.log(`You put wrong operator`);
            return;
        } else {
            nameOfArray.znak = znakFromUser;
            let result = this.makeCalculation(nameOfArray);
            console.log(result);
        }
    }


    // функция подсчета
    makeCalculation(nameOfArray) {
        let numX = nameOfArray.X;
        let numY = nameOfArray.Y;
        let znak = nameOfArray.znak;

        if (znak === '+') {
            return (numX + numY);
        }
        if (znak === '-') {
            return (numX - numY);
        }
        if (znak === '*') {
            return (numX * numY);
        }
        if (znak === '/') {
            return (numX / numY);
        }
        if (znak === '%') {
            return (numX % numY);
        }

    }


    checkMath(nameOfArray) {
        this.confirmCurrectObjectMath(nameOfArray);

    }


}


let smthngNew = new SupperMath();

smthngNew.checkMath(obj);



