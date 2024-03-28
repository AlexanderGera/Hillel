'use strict';

//пункты меню
let waterPumpMenuItem = document.getElementById('waterPumpMenuItem');
let bottlesMenuItem = document.getElementById('bottlesMenuItem');
let preformsMenuItem = document.getElementById('preformsMenuItem');

//место для размещения списка товаров - center block
let placeForProductsList = document.getElementById('productsList');

//место для размещения информации о товаре - right block
let placeForDetailedProductInfo = document.getElementById('productsDetailsInfo');

//кнопка
let buttonBuy = document.getElementById('buttonBuy')

//собственно каталог продукции с именами и описанием
let productsCatalog = {
    ManualWaterPumps: {
        firstProduct: {
            name: `Water Pump Lilu Baby`,
            productDescription: `Помпа модели Baby, может использоваться как для бутылей емкостью 5 – 10л.,
                                   так и для бутылей емкостью 11-19 л.`,
        },
        secondProduct: {
            name: `Water Pump Lilu Econom`,
            productDescription: `Помпа модели Econom, может использоваться как для бутылей емкостью 5 – 10л.,
                                   так и для бутылей емкостью 11-19 л.`,
        },
        thirdProduct: {
            name: `Water Pump Lilu Standard`,
            productDescription: `Помпа модели Standard, с цанговым зажимом, для бутылей емкостью 11-19 л.`,
        },
    },

    Bottles: {
        firstProduct: {
            name: `PET-bottles 5 Gall`,
            productDescription: `ПЭТ-бутыль многооборотная. Ёмкость 5 галлонов (18,9 л)`,
        },
        secondProduct: {
            name: `PET-bottles 3 Gall`,
            productDescription: `ПЭТ-бутыль многооборотная. Ёмкость 3 галлонов (11 л)`,
        },
        thirdProduct: {
            name: `PET-bottles 5 L`,
            productDescription: `ПЭТ-бутыль одноразовая. Ёмкость 5 литров`,
        },
    },

    PET_preforms: {
        firstProduct: {
            name: `Preforms 650 g`,
            productDescription: `ПЭТ-преформа для изготовления бутылей емкостью 5 галлонов (18,9 л)`,
        },
        secondProduct: {
            name: `Preforms 420 g`,
            productDescription: `ПЭТ-преформа для изготовления бутылей емкостью 3 галл. (11 л)`,
        },
        thirdProduct: {
            name: `Preforms 120 g`,
            productDescription: `ПЭТ-преформа для изготовления бутылей 10л`,
        },
    },
}

let linkForDescription = '';

//функция указывает путь на имена товаров в объекте, для последующего отображения их в списке товаров
function findProductsInObject(menItem) {
    let path = '';
    if (menItem === waterPumpMenuItem) {
        path = productsCatalog.ManualWaterPumps;
    }
    if (menItem === bottlesMenuItem) {
        path = productsCatalog.Bottles;
    }
    if (menItem === preformsMenuItem) {
        path = productsCatalog.PET_preforms;
    }
    return path;
}

// для оборачивания названия товаров тегами
let linkTag = {
    openTag: `<a href="#" class="product_link">`,
    closeTag: `</a>`,
}


//функция которая принимает клик передает во вложенную функцию, та выдает соответствующий путь в объект,
//и далеее выводится список наименований товаров в центральный блок
function productsListChooseAndShow(menuItem, placeToPlacement) {
    menuItem.addEventListener('click', () => {
        //очищаем блок с детальным описанием от предыдущей информации
        clearBlocks();

        let theWayOfSearching = findProductsInObject(menuItem);

        let result = '';
        for (let category in theWayOfSearching) {
            //наименование товара оборачивается тегами <a>
            result += `${linkTag.openTag} ${theWayOfSearching[category].name} ${linkTag.closeTag}<br>`;
        }
        placeToPlacement.innerHTML = result;
        findProductDescriptionInObject(menuItem);
    })
}


function findProductDescriptionInObject(menuItem) {
    placeForProductsList.addEventListener('click', function (event) {

        event.preventDefault();
        let clickedLink = event.target;
        let allTheLinksArray = Array.from(placeForProductsList.getElementsByClassName('product_link'));
        let menuIndex = allTheLinksArray.indexOf(clickedLink);

        let newPath = findProductsInObject(menuItem);
        buttonVisibleMake()
        switch (menuIndex) {
            case 0:
                placeForDetailedProductInfo.innerHTML = newPath.firstProduct.productDescription;
                linkForDescription = newPath.firstProduct.productDescription;
                descriptionInsert(shippmentDetailsBlockHolder, labelForInsertText, 'Выбранный товар:', "descriptionGoodsToInsert", plaseForInsertingDescription, linkForDescription);
                break;
            case 1:
                placeForDetailedProductInfo.innerHTML = newPath.secondProduct.productDescription;
                linkForDescription = newPath.secondProduct.productDescription;
                descriptionInsert(shippmentDetailsBlockHolder, labelForInsertText, 'Выбранный товар:', "descriptionGoodsToInsert", plaseForInsertingDescription, linkForDescription);
                break;
            case 2:
                placeForDetailedProductInfo.innerHTML = newPath.thirdProduct.productDescription;
                linkForDescription = newPath.thirdProduct.productDescription;
                descriptionInsert(shippmentDetailsBlockHolder, labelForInsertText, 'Выбранный товар:', "descriptionGoodsToInsert", plaseForInsertingDescription, linkForDescription);
                break;
        }
    })
}

function clearBlocks() {
    placeForDetailedProductInfo.innerHTML = '';
    buttonBuy.classList.add('hidden')
}

function buttonVisibleMake() {
    buttonBuy.classList.remove('hidden')
    buttonBuy.addEventListener('click', () => {
        showForm();
        buttonBuy.classList.add('hidden');
        placeForDetailedProductInfo.innerHTML = '';
        placeForProductsList.innerHTML = '';

    })
}


productsListChooseAndShow(waterPumpMenuItem, placeForProductsList);
productsListChooseAndShow(bottlesMenuItem, placeForProductsList);
productsListChooseAndShow(preformsMenuItem, placeForProductsList);


//////////////////////////////////////// new code //////////////////////////


let cityCatalog = ["Киев", "Харьков", "Одесса", "Днепр", "Донецк", "Львов", "Кривой Рог", "Николаев", "Запорожье"];
let paymentVariants = ['Cash', 'Visa/MasterCard'];


let testButton = document.getElementById('testButton');
let customerCardHolder = document.getElementById('customerCardHolder');

let customerCardForm = document.createElement('form');

//the Variables that contain DIV's
let namesBlockHolder = document.createElement('div');
let shippmentDetailsBlockHolder = document.createElement('div');
let commentsBlockHolder = document.createElement('div');

//the Variables that contain Titles each of Block

let namesBlockTitle = document.createElement('span');
let shippmentBlockTitle = document.createElement('span');
let commentsBlockTitle = document.createElement('span');


let surnameLabel = document.createElement('label');
let firstNameLabel = document.createElement('label');
let patronymicLabel = document.createElement('label');


let nameSurnameImput = document.createElement('input');
let nameFirstNameImput = document.createElement('input');
let namePatronymicImput = document.createElement('input');

let citySelectLabel = document.createElement('label');
let citySelect = document.createElement('select');

let postWarehouseLabel = document.createElement('label');
let postWarehouseNumber = document.createElement('input');

let paymentSelectLabel = document.createElement('label');
let paymentSelect = document.createElement('select');


// let plaseForDivDescription = document.createElement('div');
let labelForInsertText = document.createElement('label');
let plaseForInsertingDescription = document.createElement('span');

let quantityOfChosenGoodsLabel = document.createElement('label');
let quantityOfChosenGoodsInput = document.createElement('input');

let customerCommentLabel = document.createElement('label');
let customerCommentTextArea = document.createElement('textarea');

let inputSubmit = document.createElement('input');

//append FORM tags
customerCardHolder.appendChild(customerCardForm);

//function to create DIV - blocks for holding of inputs
function divBlocksCreation(nameElementToCreate, parentElement, ...classOfElements) {
    parentElement.appendChild(nameElementToCreate);
    nameElementToCreate.classList.add(...classOfElements);
    // return nameElementToCreate;

}

function titleOfBlockCreation(nameElementToCreate, titleText, classOfElements, parentElement) {
    nameElementToCreate.textContent = titleText;
    nameElementToCreate.classList.add(classOfElements);
    parentElement.appendChild(nameElementToCreate);

}

function labelAndInputCreat(parentsElement, labelToCreate, inputToCreate, labelsName, inputID, inputClassName, inputType, inputName) {
    parentsElement.appendChild(labelToCreate);
    labelToCreate.textContent = labelsName;
    labelToCreate.setAttribute('for', inputID);
    parentsElement.appendChild(inputToCreate);
    inputToCreate.setAttribute('id', inputID);
    inputToCreate.setAttribute('required', 'required');
    inputToCreate.setAttribute('type', inputType);
    inputToCreate.setAttribute('name', inputName);
    inputToCreate.classList.add(inputClassName);
}

function selectAndOptionCreat(parentsElement, labelToCreate, labelsName, selectToCreate, cityArray, inputID) {
    parentsElement.appendChild(labelToCreate);
    labelToCreate.textContent = labelsName;
    labelToCreate.setAttribute('for', inputID);
    parentsElement.appendChild(selectToCreate);
    selectToCreate.setAttribute('id', inputID);
    cityArray.forEach((element, index) => {
        let option = document.createElement('option');
        option.textContent = element;
        option.setAttribute('value', index)
        selectToCreate.appendChild(option);
    })

}

function descriptionInsert(parentsElement, labelToCreate, labelsName, inputID, inputToCreate, textToUInsert) {
    parentsElement.appendChild(labelToCreate);
    labelToCreate.textContent = labelsName;
    labelToCreate.setAttribute('for', inputID);
    parentsElement.appendChild(inputToCreate);
    inputToCreate.setAttribute('id', inputID);
    inputToCreate.innerHTML = textToUInsert;

    labelAndInputCreat(shippmentDetailsBlockHolder, quantityOfChosenGoodsLabel, quantityOfChosenGoodsInput, `Укажите количество:`, 'goodsQuantity', 'input_quantity', 'number', 'productsQuantyty');

}

function showForm() {
    customerCardHolder.classList.remove('hidden');
}

function textAreaCreate(parentsElement, labelToCreate, textAreaToCreate, labelsName, textareaID, areaClassName, areaName) {
    parentsElement.appendChild(labelToCreate);
    labelToCreate.textContent = labelsName;
    labelToCreate.setAttribute('for', textareaID);
    parentsElement.appendChild(textAreaToCreate);
    textAreaToCreate.setAttribute('id', textareaID);
    textAreaToCreate.setAttribute('name', areaName);
    textAreaToCreate.setAttribute('resize', 'none');
    textAreaToCreate.setAttribute('rows', '10');
    textAreaToCreate.setAttribute('cols', '10');
    textAreaToCreate.classList.add(areaClassName);
}

function submitCreate(parenElement, inputToCreate, inputType, inputID, inputValue) {
parenElement.appendChild(inputToCreate);
inputToCreate.setAttribute('type', inputType);
inputToCreate.setAttribute('id', inputID);
inputToCreate.setAttribute('value', inputValue);

}


// create Blocks
divBlocksCreation(namesBlockHolder, customerCardForm, 'navigation_left', 'block-decoration', 'content-holder');
divBlocksCreation(shippmentDetailsBlockHolder, customerCardForm, 'main', 'block-decoration', 'content-holder');
divBlocksCreation(commentsBlockHolder, customerCardForm, 'navigation_right', 'block-decoration', 'content-holder');

//create Title for Blocks
titleOfBlockCreation(namesBlockTitle, 'Персональные данные', 'block-title', namesBlockHolder);
titleOfBlockCreation(shippmentBlockTitle, 'Данные для отправки и способ оплаты', 'block-title', shippmentDetailsBlockHolder);
titleOfBlockCreation(commentsBlockTitle, 'Комментарии к заказу', 'block-title', commentsBlockHolder);

labelAndInputCreat(namesBlockHolder, surnameLabel, nameSurnameImput, `Фамилия:`, 'surnameInput', 'input_name', 'text', 'custSurname');
labelAndInputCreat(namesBlockHolder, firstNameLabel, nameFirstNameImput, `Имя:`, 'firstNameInput', 'input_name', 'text', 'custName');
labelAndInputCreat(namesBlockHolder, patronymicLabel, namePatronymicImput, `Отчество:`, 'patronymicInput', 'input_name', 'text', 'custPatrName');

selectAndOptionCreat(shippmentDetailsBlockHolder, citySelectLabel, 'Выберите город доставки:', citySelect, cityCatalog, 'cityToSend');

labelAndInputCreat(shippmentDetailsBlockHolder, postWarehouseLabel, postWarehouseNumber, `Склад Новой Почты No:`, 'postWarehouseNumber', 'input_name', 'number', 'postWarehouseNumber');

selectAndOptionCreat(shippmentDetailsBlockHolder, paymentSelectLabel, 'Выберите способ оплаты:', paymentSelect, paymentVariants, 'paymentVariants');



textAreaCreate (commentsBlockHolder, customerCommentLabel, customerCommentTextArea, 'добавьте комментарии к заказу:', 'customerComment', 'customer_comments_area', 'customerComments');
submitCreate(commentsBlockHolder, inputSubmit, 'submit', 'inputSubmitForm', 'Submit Form');