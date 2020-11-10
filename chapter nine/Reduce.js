var num = [1,2,-2,3,4,67,-59,39,5,6,7,8,9];
var sum = num.reduce(function(prev,curr){
    return prev+curr;
})


console.log(sum);

function forMax(firstItem,secoundItem){
    return Math.max(firstItem,secoundItem);
}

var maxNum = num.reduce(forMax);
var minNum = num.reduce(function(prev,current){
    return Math.min(prev,current);
})
console.log(maxNum);
console.log(minNum);

function myReduce(takeArray,callBack,acc){
    for(var i = 0;i < takeArray.length;i++){
        acc = callBack(acc,takeArray[i]);
    }
    return acc;
}

console.log(num);

var sumOne = myReduce(num,function(itemOne,itemTwo){
    return itemOne+itemTwo;
},0);

console.log(sumOne);
var maxNumOne = myReduce(num,forMax,0);
console.log(maxNumOne);
var minNumOne = myReduce(num,function(itemOne,itemTwo){
    return Math.min(itemOne,itemTwo);
},num[0])
console.log(minNumOne);





