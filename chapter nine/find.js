var num = [1,2,3,4,5,6,7,34,45,56,67,67,23,4,5,6,7,8,45,34,54,45,67,45,43]

var result = num.find(function(item){
    return item == 45
});

function findunknow(item){
    return item == 9999;
}

var resultOne = num.find(findunknow);

console.log(result);
console.log(resultOne);

var resultIndex = num.findIndex(function(item){
    return item == 45;
}) ;

var resultIndexOne = num.findIndex(findunknow);

console.log(resultIndex);
console.log(resultIndexOne);

function myFind(takeArray,callBack){
    for(var i = 0;i < takeArray.length;i++){
        if(callBack(takeArray[i])){
            return takeArray[i];
        }
    }
}

function myFindIndex(takeArray,callBack){
    for(var i = 0;i < takeArray.length;i++){
        if(callBack(takeArray[i])){
            return i;
        }
    }
    return -1;
}


var findOneMore = myFind(num,function(item){
    return item == 45;
})

var findTwoMore = myFind(num,findunknow);

console.log(findOneMore);
console.log(findTwoMore);

var findIndexOneMore = myFindIndex(num,function(item){
    return item == 45;
});

var findIndexTwoMore = myFindIndex(num,findunknow);
console.log(findIndexOneMore);
console.log(findIndexTwoMore);  

