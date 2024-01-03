// ДЗ 8. Портрет користувача

const capitals = {
    Ukraine: 'Киев',
    USA: 'Вашингтон',
    England: 'Лондон',
};

const sportList = {
    triathlon: 'Sebastian Kinley',
    boxing: 'Alexander Usik',
    chess: 'Gari Kasparov',
};

const currentYear = (new Date).getFullYear();

let proposedCapitals = Object.keys(capitals);
let proposedSport = Object.keys(sportList);

let customerYearOfBirth = +prompt(`Write your Year of Birth`);
let customerAge = currentYear - customerYearOfBirth;

if (customerYearOfBirth == null || customerYearOfBirth == '' || Number.isNaN(customerYearOfBirth)) {
    alert(`Unfortunately you didn't write your Year of Birth`);

} else {
    let customerCity = prompt(`Write the city where you live`);
    if (customerCity == null || customerCity == '') {
        alert(`Unfortunately you didn't write City of your Living`);
    } else {
        let customerFavoriteSport = prompt(`Your faworite kind of sport?`);
        if (customerFavoriteSport == null || customerFavoriteSport == '') {
            alert(`Unfortunately you didn't write your faworite kind of sport`);
        } else {
            if (customerFavoriteSport == proposedSport[0]) {
                alert(`Cool! Do you want to be like ${sportList.triathlon}?`);
            } else if (customerFavoriteSport == proposedSport[1]) {
                alert(`Cool! Do you want to be like ${sportList.boxing}?`);
            } else if (customerFavoriteSport == proposedSport[2]) {
                alert(`Cool! Do you want to be like ${sportList.chess}?`);
            }
            if (customerCity == capitals.Ukraine) {
                alert(`You are ${customerAge} years old. \nYou live in capital of ${proposedCapitals[0]}`);
            } else if (customerCity == capitals.USA) {
                alert(`You are ${customerAge} years old. \nYou live in capital of ${proposedCapitals[1]}`);
            } else if (customerCity == capitals.England) {
                alert(`You are ${customerAge} years old. \nYou live in capital of ${proposedCapitals[2]}`);
            } else {
                alert(`You are ${customerAge} years old. \nYou live in capital of ${customerCity}`)
            }
        }
    }

}


// попробовал сделать через циклы. Т.к. цикл пробегает по массиву и условие ищет совпадение.
// Если совпадение находится - сробатывает один скрипт.
// Если не находит - другой скрипт.
// НО! Всегда есть несовпадение т.к. цикл проходит по всем элементам массива (или объекта).
// Не смог придумать, чтобы цикл проводил поиск, есть сходство или нет как результат, но не отрабатывал бы на каждом элементе

// for (let i = 0; i < capitals.length; i++) {
//     if (customerCity == capitals[i]) {
//         console.log('capitals');
//     } else {
//         console.log(customerCity);
//     }


// capitals.forEach(city => {

//     if (customerCity == city) {
//         console.log('capitals');
//     } else {
//         console.log(customerCity);
//     }
// }); 