var numOne = 20;

function changeVar(n){
    n = n +299;
    console.log(n);
}

changeVar(numOne);

console.log(numOne);

var simpleObj= {
    Name : 'Md Tazei',
    Ghoal : 'Programmer'
}
function changeMe (obj){
    obj.Name  = 'Pntm Focasa';
    obj.Ghoal = 'Hacker';
    console.log(obj);
}
console.log(simpleObj);
changeMe(simpleObj);

console.log(simpleObj);

var Array = ['Md','Tazri'];
function changeMeArray(arr){
    arr[0] = 'Pntm';
    arr[1]= 'Focasa';
    console.log(arr);
}

console.log(Array);
changeMeArray(Array);
console.log(Array);

