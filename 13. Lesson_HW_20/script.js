
//ДЗ 20. this chain
//Змініть код методів up, down і showStep таким Таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:
//ladder.up().up().down().showStep(); // 1


let ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this;
    },
    down: function () {
        this.step--;
        return this;
    },
    showStep: function () { 
        alert(this.step);
    }
    
};

ladder.up().up().up().down().down().showStep();





