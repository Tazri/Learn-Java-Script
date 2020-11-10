function sayHi(n){
    if(n == 0){
        return;
    }
    console.log('>>>'+n+'|'+' What\'s up World!');
    sayHi(n-1);
}


sayHi(5);

function sum(n){
    if(n == 1){
        return 1;
    }
    return n + sum(n-1);
}


console.log(sum(100));
function facturi(n){
    if(n<1){
        return 1;
    }
    return n * facturi(n-1);
}

console.log(facturi(4));
console.log(facturi(100))
console.log(facturi(10));

var arrOne = [1,2,3,4,5,6,7,8,9];
var arr = [2,34,435,56,4,34,32,23,4];

function sumOfArr(takeArray,takeArrayLength){
    if(takeArrayLength<0){
        return 0;
    }
    return takeArray[takeArrayLength] + sumOfArr(takeArray,takeArrayLength-1);
}

var sumArr = sumOfArr(arrOne,arrOne.length-1);

console.log(sumArr)
console.log(sumOfArr(arr,arr.length-1));











