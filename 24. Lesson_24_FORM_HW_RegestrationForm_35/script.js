'use strict';

let cityCatalog = ['Укажите город', "Киев", "Харьков", "Одесса", "Днепр", "Донецк", "Львов", "Кривой Рог", "Николаев", "Запорожье"];

// для хранения введенных пользователем данных
let customerRegistrationData = {};

let customerSurname = document.getElementById('surname');
let customerName = document.getElementById('name');
let customerDateofBirth = document.getElementById('g_date');

let customerGender = document.getElementsByName('gender');

let customerCitySelect = document.getElementById('customerCity');
let customerAddress = document.getElementById('customerAddress');

let customerLanguages = document.getElementsByName('lang');

let submitButton = document.getElementById('submit_button');

//вносим города в селект
function customerOptionCityCreate(cityArray, citySelect) {

    cityArray.forEach((element, index) => {
        let cityOption = document.createElement('option');
        cityOption.textContent = element;
        cityOption.setAttribute('value', element);
        cityOption.setAttribute('id', `cityId${index}`);
        citySelect.appendChild(cityOption);
    })
}

customerOptionCityCreate(cityCatalog, customerCitySelect);


//записывает данные из импутов в объект
function saveCustomerData(placeToSave, keyName, input) {
    placeToSave[keyName] = input;
}


//проверка инпутов на заполнение
function checkCustomerImput(placeToSave, keyName, input) {
    if (input == null || input == '') {
        saveCustomerData(placeToSave, keyName, 'Вы ничего не указали')
    } else {
        saveCustomerData(placeToSave, keyName, input)
    }
}


//проверка input-ов типа radio
function checkGender(placeToSave, keyName, input) {
    let arrayToUse = Array.from(input);
    let anySelected = false;

    arrayToUse.forEach(element => {
        if (element.checked) {
            anySelected = true;
            if (element.value == 'genderWoman') {
                saveCustomerData(placeToSave, keyName, 'Woman');
            } else {
                saveCustomerData(placeToSave, keyName, 'Man');
            }
        }
    });
    if (!anySelected) {
        saveCustomerData(placeToSave, keyName, 'Вы ничего не указали');
    }
}

//проверка города на заполнение
function checkCity(placeToSave, keyName, input) {
    if (input == 'Укажите город') {
        saveCustomerData(placeToSave, keyName, 'Вы ничего не указали');
    } else {
        saveCustomerData(placeToSave, keyName, input);
    }

}

function languageChecking(placeToSave, keyName, input) {
    let langArray = Array.from(input);
    let isTrue = false;
    let langList = '';
    langArray.forEach(element => {
        if (element.checked) {
            langList += `${element.value}, `;
            isTrue = true;
        }
    });
    if (!isTrue) {
        langList = 'Вы ничего не указали';

    }
    saveCustomerData(placeToSave, keyName, langList);
}

// делаем таблицу
function makeTable() {
    let firstOpenTableTag = '<table>';
    for (let key in customerRegistrationData) {
        firstOpenTableTag += `<tr><td>${key}</td><td>${customerRegistrationData[key]}</td></tr>`;
    }

    return firstOpenTableTag += '</table>';
}

//делаем новое окно
function makeNewWindow() {
    let newWindow = window.open('', '_blank', 'top=200, left=500, width=600, height=400');

    let newStyleLink = newWindow.document.createElement('link');
    newStyleLink.rel = 'stylesheet';
    newStyleLink.href = 'style.css';

    let newDiv = newWindow.document.createElement('div');
    let newP = newWindow.document.createElement('p');
    newP.textContent = 'Customer Registraton Data';
    newWindow.document.body.append(newStyleLink, newP, newDiv);
    newDiv.innerHTML = makeTable();

}

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    checkCustomerImput(customerRegistrationData, 'Surname', customerSurname.value);
    checkCustomerImput(customerRegistrationData, 'Name', customerName.value);
    checkCustomerImput(customerRegistrationData, 'Date of birth', customerDateofBirth.value);
    checkGender(customerRegistrationData, 'Gender', customerGender);
    checkCity(customerRegistrationData, 'City', customerCitySelect.value)
    checkCustomerImput(customerRegistrationData, 'Address', customerAddress.value);
    languageChecking(customerRegistrationData, 'Languages', customerLanguages)
    makeNewWindow();

})
