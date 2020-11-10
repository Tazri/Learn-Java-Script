function simpleFunction(a,b,c){
    var i = a;
    i =b;
    i = c;
    console.log('It simple function');
}


simpleFunction(13,43,3);

console.log(simpleFunction.constructor);



var Rect = new Function('width','height',`this.Width = width;
this.Height = height;
this.draw = function(){
    console.log('Width = '+ this.Width);
    console.log('Height = '+ this.Height);
}`);


var rectOne = new Rect(20,40);
var rectTwo = new Rect(30,30);
console.log(rectOne);
rectOne.draw();
console.log(rectTwo);
rectTwo.draw();


console.log(rectOne.constructor);

console.log(simpleFunction.name);
console.log(simpleFunction.length);
console.log(simpleFunction.arguments);
