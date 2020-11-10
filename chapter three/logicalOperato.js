//logical operator
// && || !

var a = 90;
var b = 50;
var c = 200;

if(a > b &&  a < c){
    console.log('a is greaterthen b and lestheb c');
}else{
    console.log('nothing');
}

console.log(a > b || a > c);//true

// true || true = true
// false || true = true
// true || false = true
// false || false = false

console.log(false || true);//true
console.log(false || false);//false

// true && true = true 
// false && true = false 
// true && false = false 
// false && false = false 

console.log(false && true);//false
console.log(true && true);//true

// ! not opearator

console.log(false);//false
console.log(!false);//true
console.log(!!false);//false
console.log(!!!!!!!false);//true