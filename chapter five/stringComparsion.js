//lexicographic
var strOne = 'abc'
var strTwo = 'abcd'
console.log(strOne<strTwo);//true
console.log(strOne>strTwo);//false
console.log(strOne == strTwo);//false
var strone = 'aaaaaz';
var strtwo = 'aaaaaa';
console.log(strone < strtwo);//false
console.log(strone>strtwo);//true
console.log(strone==strtwo);//false

console.log('A'<'a');//true;
var strthree = 'Md';
var strfour = 'Md';
console.log(strthree==strfour);//true
var num = 10;
var strNum = '10';
console.log(num == strNum);//true
console.log(num == strOne);//false
console.log(num === strNum);//false
console.log(num + strNum);//20
console.log(num * strNum);//100
console.log(num + strone);//10aaaaz
console.log(num * strone);//NaN
console.log(strone * strtwo);//NaN