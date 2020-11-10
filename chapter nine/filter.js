var num = [1,2,3,4,5,6,7,8,9];

var newNum = num.filter(function(item){
    return item %2 == 0;
})

function odd(item){
    return item %2 != 0;
}

var newOneNum = num.filter(odd);
console.log(newNum);
console.log(newOneNum);

var Name = ['Md Tazri','Pntm Focasa','Light','L LawLiet','Armin','Erwin','Loppy','Eren'];

var newNameWithL = Name.filter(function(item){
    return item[0] == 'L';
})

function withOutL(item){
    return item[0] != 'L';
}

var newNameWithOutL = Name.filter(withOutL);
console.log(Name);
console.log(newNameWithL);
console.log(newNameWithOutL);


function myFilter(takeArray,func){
    var newArray = []
    for(var i = 0;i < takeArray.length;i++){
        if(func(takeArray[i],i,takeArray)){
            newArray.push(takeArray[i]);
        }
    }
    return newArray;
}

console.log(num);
console.log(Name);

var evenNumFromNum = myFilter(num,function(item){
    return item % 2 == 0;
});

var oddNumFromNum = myFilter(num,odd);

var withLFromName = myFilter(Name,function(item){
    return item[0] == 'L';
}) ;
var withOutLFromName = myFilter(Name,withOutL);

console.log('>>>Array \n'+'>>>'+num);
console.log('\n>>>Even Array '+'\n>>>'+evenNumFromNum);
console.log('\n>>>Odd Array '+'\n>>>'+oddNumFromNum);

console.log('\n\n>>>Name \n'+ '>>>'+Name);
console.log('\n>>>Name First Letter With L \n'+'>>>'+withLFromName);
console.log('\n>>>Name First Letter WithOut L \n'+'>>>'+withOutLFromName);






