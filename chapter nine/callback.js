function sum(a,b){
    return a+b;
}
function multi(a,b){
    return a*b;
}
function sub(a,b){
    return a-b;
}
function doThis(numOne,numTwo,type){
    return type(numOne,numTwo);
}

console.log(doThis(10,10,sum));
console.log(doThis(20,10,multi));
console.log(doThis(100,50,sub));
console.log(doThis(100,50,function(a,b){
    return a / b;
}));