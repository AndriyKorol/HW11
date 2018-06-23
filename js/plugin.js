//1
function Car(model, years){
    this.model = model;
    this.year = years;
    this.getModel = function (){
        return this.model[0].toUpperCase() + this.model.slice(1).toLowerCase();
    };
    this.getYear = function (){
        let date = new Date();
        return date.getFullYear() - Number(this.year);
    };
}
let lexus = new Car('lEXUS', 2);
console.log(lexus.getModel());
console.log(lexus.getYear());

//2
function Encryption(val) {
    this.text = val;
    this.encrypted = '';
    this.origin = function () {
        return this.text;
    };
    this.enCryption = function () {
        for (let i = 0; i <= this.text.length; i++) {
            this.encrypted += String.fromCharCode(i);
        }
        return this.encrypted;
    };
    this.clearAll = function () {
        for (let key in this) {
            this[key] = '';
        }
        return this;
    };
}

let text = new Encryption('some text');
 console.log(text.origin());
 console.log(text.enCryption());
 console.log(text.clearAll());

//3
