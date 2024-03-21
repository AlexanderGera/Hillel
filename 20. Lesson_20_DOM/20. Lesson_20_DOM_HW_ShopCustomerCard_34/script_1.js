'use strict'

let testButton = document.getElementById('testButton');
let customerCardHolder = document.getElementById('customerCardHolder');

//the Variables that contain DIV's
let namesBlockHolder;
let shippmentDetailsBlockHolder;
let commentsBlockHolder;

//the Variables that contain Titles each of Block

let namesBlockTitle;
let shippmentBlockTitle;
let commentsBlockTitle;



//function to create DIV - blocks for holding of inputs
function DivBlocksCreation(NameElementToCreate, ParentElement, ...ClassOfElements) {
    NameElementToCreate = document.createElement('div');
    ParentElement.appendChild(NameElementToCreate);
    NameElementToCreate.classList.add(...ClassOfElements);
    return NameElementToCreate;

}

function TitleOfBlockCreation (NameElementToCreate, TitleText, ClassOfElements, ParentElement) {
    NameElementToCreate = document.createElement('span');
    NameElementToCreate.textContent = TitleText;
    NameElementToCreate.classList.add(ClassOfElements);
    ParentElement.appendChild(NameElementToCreate);

    return NameElementToCreate;

}


// create elements for Block "Customers name"
DivBlocksCreation(namesBlockHolder, customerCardHolder, 'navigation_left', 'block-decoration', 'content-holder' );
DivBlocksCreation(shippmentDetailsBlockHolder, customerCardHolder, 'main', 'block-decoration', 'content-holder' );
DivBlocksCreation(commentsBlockHolder, customerCardHolder, 'navigation_right', 'block-decoration', 'content-holder' );

TitleOfBlockCreation(namesBlockTitle, 'Персональные данные', 'block-title', namesBlockHolder);







// function labelAndImputCreat(LabelToCreate, InputToCreate, ParentsElement, LabelsName, InputID) {
//
// }
//
//
// function createCustomerCardElements() {




    // let surnameLabel = document.createElement('label');
    // let firstNameLabel = document.createElement('label');
    // let patronymicLabel = document.createElement('label');
    //
    //
    // let nameSurnameImput = document.createElement('input');
    // let nameFirstNameImput = document.createElement('input');
    // let namePatronymicImput = document.createElement('input');
    //

//append elements


    // namesBlockHolder.append(namesBlockTitle, surnameLabel, firstNameLabel, patronymicLabel);
    // surnameLabel.appendChild(nameSurnameImput);
    // firstNameLabel.appendChild(nameFirstNameImput);
    // patronymicLabel.appendChild(namePatronymicImput);




//create elements for Block "Shipping and Payment details"


    // let shippmentDetailsBlockTitle = document.createElement('span');


    // let nameSurnameImput = document.createElement('input');
    // let nameFirstNameImput = document.createElement('input');
    // let namePatronymicImput = document.createElement('input');




}

// createCustomerCardElements();
