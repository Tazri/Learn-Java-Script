var str = '1000';
var num = 10;
console.log(str*num);//10000
console.log(str + num);//'100010'
console.log(Number.parseInt(str)+num)//'1010'
console.log(num)//10
console.log(num.toString());//'10'
console.log(String(num));//'10'
console.log(Infinity);//Infinity
console.log(Infinity.toString());//'Infinity'
console.log(String(Infinity));//'Infinity'

//falsy value
//''
//NaN
//undefined
//null
//0

console.log('empty str ' + Boolean(""));//false
console.log('NaN = ' + Boolean(NaN));//false
console.log('undefined = ' + Boolean(undefined));//false
console.log('null = ' + Boolean(null));//false
console.log('0 = ' + Boolean(0));//false
console.log('asklhfdash ' + Boolean("ksajflk"));//true
console.log('-23 = ' + Boolean(-23));//true
console.log('Infinity = ' + Boolean(Infinity));//true
console.log('-Infinity = ' + Boolean(-Infinity));//true
console.log(true);//true
console.log(String(true));//'true'
var n = true;
console.log(n.toString);//func
console.log(n.toString());//'true'