function sayHallo() {
    console.log('Hallo');
}


myObj = {
    name: 'Alex',
    saySmthng: sayHallo, //передача функции sayHallo()

}




myObj.saySmthng(); //обращаемся к ключам объекта для вызова функции sayHallo()