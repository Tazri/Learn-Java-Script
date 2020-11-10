var arr = [2,3,4,5,6,7];
arr.forEach(function(a){
    console.log(a);
})
var sum = 0;
function s(a){
    sum += a;
}

arr.forEach(s);
console.log(sum);
arr.forEach(function(value,index,arr){
    console.log(value,index,arr);
})

function change(i,ind,array){
    array[ind] += 5;
}
console.log(arr);
arr.forEach(change);
console.log(arr);

var Name = ['Pntm Focasa','L Lawliet','Light','Levi','Eren','Konan','Erwin','Armin','Kaneki'];

Name.forEach(function(i){
    console.log('Good moorning! '+i);
})

function everyItem(arr,cb){
    for(var i = 0;i < arr.length;i++){
        cb(arr[i]);
    }
}


sum = 0;
var num = [10,20,30,40,50,60,70,80,90];
everyItem(num,s);
console.log(sum);

function ForEach(array,cb){
    for(var i = 0;i < array.length;i++){
        cb(array[i],i,array);
    }
}
console.log(num);
ForEach(num,function(value,ind,arr){
    arr[ind] += 10;
})
console.log(num);
function forIncr(value,ind,arr){
    arr[ind] += 100;
}
console.log(num);
ForEach(num,forIncr);
console.log(num);
function sayHay(name,nameIndex,nameArr){
    console.log('>>> !Hey '+ nameArr[nameIndex]);
}
console.log(Name);
ForEach(Name,sayHay);
ForEach(Name,function(name,nameIndex,nameArray){
    console.log('\n>>> What\'s Up '+name);
});












