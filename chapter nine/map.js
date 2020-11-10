var arr = [10,20,30,40,50,60,70,80,90];
var newArr = arr.map(function(item,itemIndex,itemArray){
    item *= item;
    return item;
})

console.log(arr);
console.log(newArr);

function modi(item){
    item *= 100;
    return item;
}

var oneNewArr = arr.map(modi);

function myMap(takeArray,func){
    var newArray = [];
    for(var i = 0; i < takeArray.length;i++){
        newArray.push(func(takeArray[i],i,takeArray));
    }
    return newArray;
}

var Name = ['Md Tazri','Pntm Focasa','L Lawliet','Levi','Armin','Eren']

var numOther = [1,2,3,4,5,6,7,8,9];

var newNumOther = myMap(numOther,function(item){
    item *= 10;
    return item;
})


console.log(numOther);
console.log(newNumOther);

function whatsUp(item,itemIndex,itemArray){
    return newStr = 'What\'s up '+item;
}

var whatsUpName = myMap(Name,whatsUp);

console.log(Name);
console.log(whatsUpName);




