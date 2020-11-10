var newObject = {};

var newObjectOne = new Object;

var isture = newObject.__proto__ == newObjectOne.__proto__;

console.log(isture);

var Rect = function(width,height){
    this.Width = width;
    this.height = height;
}

var rectOne = new Rect(3,4);    
console.log(rectOne);

console.log(newObject.__proto__==rectOne.__proto__);

var simpleObject = {
    x : 3,
    y : 3
}

console.log(newObject.__proto == simpleObject.__proto__);
console.log(newObject == newObjectOne);