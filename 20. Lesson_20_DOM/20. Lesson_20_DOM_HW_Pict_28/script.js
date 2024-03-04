'use strict'

//ДЗ 27. table

let imgHolder = document.getElementById('img-holder');
let button = document.getElementById('button');
let picturesPath = {
    0: 'Manual_water_Pump_Maximum.jpg',
    1: 'Manual_water_Pump_Standard.jpg',
    2: 'Water_pump_Baby.jpg',
    3: 'Water_pump_Econom.jpg',
    4: 'Water_pump_Econom_plus.jpg',
    5: 'Water_pump_Standard_Plus.jpg',
}


function changePicture() {
    let randomNumer = Math.floor(Math.random() * Object.keys(picturesPath).length);
    let pictName = randomNumer;
    let pictureFolderPath = `<img src="img/${picturesPath[pictName]}" alt="Water Pump">`;
    imgHolder.innerHTML = pictureFolderPath;
    //просто посмотреть какой номер генерируется
    console.log(pictName);
}
//смена картинки при загрузки окна
window.addEventListener('load', changePicture);
//смена картинки при нажатии кнопки
button.addEventListener('click', changePicture);



