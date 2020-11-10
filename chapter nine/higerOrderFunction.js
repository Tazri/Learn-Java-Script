function sum(a,b){
    return a+b;
}
function multi(a,b){
    return a*b;
}

function sub(a,b){
    return a-b;
}

function action(a,b,func){
    return function(){
        return func(a,b);
    }
}
console.log(action);
console.log(action(10,20,sum));
console.log(action(20,10,multi));
console.log(action(10,20,sum)());
console.log(action(10,20,multi)());
console.log(action(100,50,sub));
console.log(action(100,40,sub)());

function Pow(num){
    return function(pow){
        var result = 1;
        for(var i = 0;i<pow;i++){
            result *= num;
        }
        return result;
    }
}

console.log(Pow(2));
console.log(Pow(4)(3));
console.log(Pow(4)(2));
console.log(Pow(5)(2));
console.log(Pow(5)(3));

