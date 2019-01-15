var text = "Text";      //string
var number = 3;         //number
var boo = true;         //boolean
var tab1 = [1,2,3];     //table
var nulll = null;       //object
var ud = undefined;     //undefined
var kot = {             //object
    imie: "mruczek",
    wiek: 12
};

console.log(text + number);     //string
console.log(text + boo);        //string
console.log(text + tab1);       //string
console.log(text + nulll);      //string
console.log(text + ud);         //string
console.log(text + kot);        //string
console.log(number + boo);      //number
console.log(number + tab1);     //string
console.log(number + nulll);    //number
console.log(number + ud);       //NaN
console.log(number + kot);      //string
console.log(boo + tab1);        //string
console.log(boo + nulll);       //number
console.log(boo + ud);          //NaN
console.log(boo + kot);         //string
console.log(tab1 + nulll);      //string
console.log(tab1 + ud);         //string
console.log(tab1 + kot);        //string
console.log(nulll + ud);        //NaN
console.log(nulll + kot);       //string
console.log(ud + kot);          //string
