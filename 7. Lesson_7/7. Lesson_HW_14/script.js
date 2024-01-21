// ДЗ 14. Рахунки користувачів
// Дан масив об'єктів. Вивести масив телефонних номерів користувачів, у яких баланс більше 2000 доларів.
// І знайти суму всіх балансів користувачів

let users = [{
        "index": 0,
        "isActive": true,
        "balance": "$2,226.60",
        "name": "Eugenia Sawyer",
        "gender": "female",
        "phone": "+1 (840) 583-3207",
        "address": "949 John Street, Rose, Puerto Rico, 1857"
    },
    {
        "index": 1,
        "isActive": true,
        "balance": "$2,613.77",
        "name": "Pauline Gallegos",
        "gender": "female",
        "phone": "+1 (985) 593-3328",
        "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
        "index": 2,
        "isActive": false,
        "balance": "$3,976.41",
        "name": "Middleton Chaney",
        "gender": "male",
        "phone": "+1 (995) 591-2478",
        "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
        "index": 3,
        "isActive": true,
        "balance": "$1,934.58",
        "name": "Burns Poole",
        "gender": "male",
        "phone": "+1 (885) 559-3422",
        "address": "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
        "index": 4,
        "isActive": true,
        "balance": "$3,261.65",
        "name": "Mcfadden Horne",
        "gender": "male",
        "phone": "+1 (942) 565-3988",
        "address": "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
        "index": 5,
        "isActive": false,
        "balance": "$1,790.56",
        "name": "Suzette Lewis",
        "gender": "female",
        "phone": "+1 (837) 586-3283",
        "address": "314 Dunne Place, Bawcomville, Guam, 9053"
    }
]

let customersBalanceAmount = 0;
let customerBalanceLimit = 2000;

for (let i = 0; i < users.length; i++) {
    // почему в консоли users[i]['balance'] выдает ошибку но задачу выполняет? 
    let money = users[i]['balance'];
    let newMoney = Number(money.substring(1).split(',').join(''));
    //итого: именно так я и делал с самого начала. Но, не доконца понимал логику разделения, то-ли не там и не так запятую ставил.
    // но нужный результат не получался. 
    // На самом деле, переписывая строку 66 в тысячный раз поставил запяткую в сплите и оно сработало. 
    //И потом я понял логику того как нужно ыло сделать - запятая была символом по которому мы разделяли массив.
    // А я пытался разделить это число на элементы через пробел - и удалить запятую как элемент массива.
    
    customersBalanceAmount = customersBalanceAmount + newMoney;

    if (newMoney > customerBalanceLimit) {
        console.log(`Телефонный номер: ${users[i]['phone']} имеет баланс ${money}`);
    }

}
// почему получается столько знаков после запятой, если не использоват округление?
console.log(`Общий баланс до округления ${customersBalanceAmount}`);
console.log(`Общий баланс с приминением to Fixed ${customersBalanceAmount.toFixed(2)}`);


