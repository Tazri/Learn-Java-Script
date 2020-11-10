var arr = new Array;
var arrOne = [];
function Person(name){
    this.Name = name;
}

var personOne = new Person('Pntm Focasa');
var simpleObject = new Object();
console.log(arr==arrOne);
console.log(arr.__proto__==arrOne.__proto__);

console.log(arr.__proto__==simpleObject.__proto__);

console.log(arr.__proto__);
console.log(personOne.__proto__==simpleObject.__proto__);

