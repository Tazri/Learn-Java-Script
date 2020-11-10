function one(a,b){
    return a+b;
}
function two(a,b){
    return a*b;
}
var func = one;

console.log(func(49,39));

console.log(func)
 var arr = [];
 arr.push(one);
 arr.push(two);
 console.log(arr);
 console.log(arr[0](10,20),arr[1](10,10));
 console.log(arr[0],arr[1]);

 var objfunc = {
     functionOne : one,
     functionTwo : function(a){
         return Math.pow(a,2);
     }
 }

 console.log(objfunc);
 console.log(objfunc.functionOne(10,20));
 console.log(objfunc.functionTwo(4));
 console.log(objfunc.functionOne);
 console.log(objfunc.functionTwo);
function print(){
    console.log('Hello Worlds');
}
setTimeout(function(){
    console.log('Whats up World!');
},5000);

setTimeout(print,2000);