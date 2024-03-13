//ДЗ 31. Слайдер базовий

let imagesArray = ['Manual_water_1.jpg', 'Manual_water_2.jpg', 'Manual_water_3.jpg', 'Manual_water_4.jpg', 'Manual_water_5.jpg', 'Manual_water_6.jpg'];

let pictureInSlider = document.getElementById('sliderPictureToChange');

let buttonSliderForward = document.getElementById('buttonForward');
let buttonSliderBack = document.getElementById('buttonBack');

let picturesNumber = 0;


function pictureToShow() {
    pictureInSlider.src = `img/${imagesArray[picturesNumber]}`;
    pictureOnClickBack();
    pictureOnClickForward();
}

function pictureCheck() {
    if (picturesNumber == 0) {
        buttonSliderBack.classList.add('hidden');
    } else {
        buttonSliderBack.classList.remove('hidden');
    }
    if (picturesNumber == imagesArray.length - 1) {
        buttonSliderForward.classList.add('hidden');
    } else {
        buttonSliderForward.classList.remove('hidden');
    }
}

function pictureOnClickForward() {
    buttonSliderForward.addEventListener('click', () => {
        picturesNumber++;
        pictureCheck();
        pictureInSlider.src = `img/${imagesArray[picturesNumber]}`;
    })
}

function pictureOnClickBack() {
        buttonSliderBack.addEventListener('click', () => {
            picturesNumber--;
            pictureCheck();
            pictureInSlider.src = `img/${imagesArray[picturesNumber]}`;
        })
    }


pictureToShow();