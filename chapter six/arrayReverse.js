var arr = [1,2,3,4,5,6,7];
console.log('>>>arr \n'+arr);

for(var i = 0;i < arr.length/2;i++){
    var temp = arr[i];
    arr[i] = arr[arr.length -1-i];
    arr[arr.length -1-i]=temp;
}
console.log('\n>>>New arr \n'+arr);

//var temp = arr[i];
//     arr[i] = arr[arr.length -1-i];
//     arr[arr.length -1-i]=temp;

var name = ['Md Tazri','L Lawliet','Light','Levi','Jone','Pntm Focasa'];
console.log('\nName: \n'+name);
for(var j = 0;j < name.length/2;j++){
    var nameTemp = name[j];
    name[j] = name[name.length -1-j];
    name[name.length -1-j]=nameTemp;
}
console.log('\nReverse Name: \n'+name);

console.log(arr.reverse());
console.log(name.reverse());