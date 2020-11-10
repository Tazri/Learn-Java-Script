var addtion = function(){
    var sum = 0;
    for(var i = 0;i < arguments.length;i++){
        sum+= arguments[i];
    }
    return sum;
}
function add(a,b){
    return a+b;
}

console.log(addtion(4,56,74,5,4))
var Add = add;
console.log(Add);
console.log(Add(3,4));
setTimeout(function(){
    console.log('What\'s up World!');
},3000);
var a =40;
var b =60;
setTimeout(function(a,b){
    console.log(a+b)
},4000);