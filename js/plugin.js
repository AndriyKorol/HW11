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
   let text = val,
       encrypted = '';
    this.origin = function () {
        return text;
    };
    this.enCryption = function () {
        for (let i = 0; i <= text.length; i++) {
            encrypted += String.fromCharCode(i);
        }
        return encrypted;
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
function stringClass(value) {
    this.text = 'value';
    this.lengthValue = '';
    this.getValue = function () {
        return this.text;
    };
    this.getLength = function () {
        this.lengthValue = this.text.length;
        return this.lengthValue;
    };
    this.toString = function () {
        for (let key in this) {
            this.text[key] = toString();
        }
        return this.text;
    }
}

let str = new stringClass('test');
console.log(str.getValue());
console.log(str.getLength());
//console.log(+str);
console.log(str.toString());

