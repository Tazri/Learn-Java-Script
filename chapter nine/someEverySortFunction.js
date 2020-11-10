var user = [
    {
        Name : 'Light',
        Id : 5
    },
    {
        Name :'Levi' ,
        Id : 4
    },
    {
        Name : 'Pntm Focasa' ,
        Id : 2
    },
    {
        Name :'Armin' ,
        Id : 6
    },
    {
        Name :'L Lawliet' ,
        Id : 3
    },
    {
        Name : 'Md Tazri' ,
        Id : 1
    },
    {
        Name :'Amin' ,
        Id : 8
    },
    {
        Name :'Eren' ,
        Id : 9
    }
]

var userOther = [
    {
        Name : 'Light',
        Id : 5
    },
    {
        Name :'Levi' ,
        Id : 4
    },
    {
        Name : 'Pntm Focasa' ,
        Id : 2
    },
    {
        Name :'Armin' ,
        Id : 6
    },
    {
        Name :'L Lawliet' ,
        Id : 3
    },
    {
        Name : 'Md Tazri' ,
        Id : 1
    },
    {
        Name :'Amin' ,
        Id : 8
    },
    {
        Name :'Eren' ,
        Id : 9
    }
]


var num = [3,445,5,3,4,-2,34,5,6,0,7,-7,-56,67,4];
var numOne = [3,445,5,3,4,-2,34,5,6,0,7,-7,-56,67,4];

console.log(user);
console.log(num);

num.sort();
console.log(num)
num.sort(function(itemOne,itemTwo){
    if(itemOne>itemTwo){
        return 1;
    }else if(itemOne<itemTwo){
        return -1;
    }else{
        return 0;
    }
});
console.log(num);
numOne.sort(function(itemOne,itemTwo){
    if(itemOne<itemTwo){
        return 1;
    }else if(itemOne>itemTwo){
        return -1
    }else{
        return 0;
    }
})
console.log(numOne);

user.sort;
console.log(user);

user.sort(function(itemOne,itemTwo){
    if(itemOne.Id>itemTwo.Id){
        return 1;
    }else if(itemOne.Id<itemTwo.Id){
        return -1;
    }else{
        return 0;
    }
});

console.log(user);

userOther.sort(function(itemOne,itemTwo){
    if(itemOne.Id<itemTwo.Id){
        return 1;   
    }else if(itemOne.Id>itemTwo.Id){
        return -1;
    }else{
        return 0;
    }
})

console.log(userOther);


var numEven = [2,4,6,8,10,12,14,16];
var numOne = [3,354,3,2,-1,23];

var allEven = numEven.every(function(item){
    return item % 2 == 0;
});

function isZeroUp(item){
    return item>0;
};

var ZeroUp = numEven.every(isZeroUp);
var ZeroUpOne = numOne.every(isZeroUp);
console.log(allEven);
console.log(ZeroUp);
console.log(ZeroUpOne);

var someOdd = numEven.some(function(item){
    return item % 2 != 0;
});

var someNegative = numOne.some(function(item){
    return item<0;
})

console.log(someOdd);
console.log(someNegative);



















