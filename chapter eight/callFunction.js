function functionName(){
    console.log('I am a function');
}

functionName();
for(var i = 0;i < 10;i++){
    functionName();
}
function Add(){
    var a = 30;
    var b = 30;
    console.log(a + b);
}

Add();
console.log(Add());
console.log(Add);
