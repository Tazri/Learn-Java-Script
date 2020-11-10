function addAll(){
    var sum = 0;
    for(var i = 0;i < arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
    console.log('What\'s up World!');
}

var sumOfNum = addAll(39,5,6,3,5,23,45,56,34,6);
console.log(sumOfNum);

function returnObject(){
    return {
        Name: 'Pntm Focasa',
        RealName: 'Md Tazri'
    }
}

var user = returnObject();
console.log(user);
console.log(returnObject().Name);