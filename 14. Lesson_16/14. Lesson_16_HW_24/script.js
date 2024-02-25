'use strict'

//ДЗ 24. Гамбургери

class Burger {
    size = '';
    price = 0;
    callories = 0;

    burger_size = {
        size_small: {
            price: 50,
            callories: 20,
        },
        size_big: {
            price: 100,
            callories: 40,
        },
    };

    dops = {
        cheese: {
            price: 10,
            callories: 20,
        },
        salad: {
            price: 20,
            callories: 5,
        },
        potato: {
            price: 15,
            callories: 10,
        },
        flavoring: {
            price: 15,
            callories: 0,
        },
        sauce: {
            price: 20,
            callories: 5,
        },
    }

    constructor(size) {
        this.chooseSize(size);
    }

    chooseSize(size) {
        if (size == 'BIG') {
            this.price = this.price + this.burger_size.size_big.price;
            this.callories = this.callories + this.burger_size.size_big.callories;
            this.size = 'Size is Big';
        }
        if (size == 'SMALL') {
            this.price = this.price + this.burger_size.size_small.price;
            this.callories = this.callories + this.burger_size.size_small.callories;
            this.size = 'Size is Small';
        }
    }

    chooseDops(dop) {
        let object = this.dops;
        for (let key in object) {
            if (key == dop) {
                for (let value in object[key]) {
                    if (value == 'price') {
                        this.price = this.price + object[key][value];
                    }
                    if (value == 'callories') {
                        this.callories = this.callories + object[key][value];
                    }
                }
            }
        }
    }

    // хотел перебор сделать с помощью коротких методов - не получилось
    // if(Object.keys(dops).includes(word))
    //     for (let key in word) {
    //         console.log(word[key]);
    //     } else {
    //     console.log('no');
    //
    // }


    showCallories () {
        console.log(`Total Energy value: ${this.callories} Kcall `);
    }
    showPrice () {
        console.log(`Total Amount: ${this.price} USD`);
    }


}


let someBurger = new Burger('SMALL');
let someBigBurger = new Burger('BIG');

someBurger.chooseDops('cheese');
someBurger.chooseDops('cheese');
someBurger.chooseDops('sauce');


someBurger.showPrice();
someBurger.showCallories();


someBigBurger.showCallories();
someBigBurger.showPrice();

someBigBurger.chooseDops('sauce');
someBigBurger.chooseDops('potato');

someBigBurger.showPrice();
someBigBurger.showCallories();






