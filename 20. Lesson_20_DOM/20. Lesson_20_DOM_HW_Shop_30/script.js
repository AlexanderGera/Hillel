'use strict'

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
    openTag: `<a href="#" class="product_link" >`,
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
                break;
            case 1:
                placeForDetailedProductInfo.innerHTML = newPath.secondProduct.productDescription;
                break;
            case 2:
                placeForDetailedProductInfo.innerHTML = newPath.thirdProduct.productDescription;
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
        let confirmation = alert('buy');
        buttonBuy.classList.add('hidden');
        placeForDetailedProductInfo.innerHTML = '';
        placeForProductsList.innerHTML = '';

    })
}


productsListChooseAndShow(waterPumpMenuItem, placeForProductsList);
productsListChooseAndShow(bottlesMenuItem, placeForProductsList);
productsListChooseAndShow(preformsMenuItem, placeForProductsList);


