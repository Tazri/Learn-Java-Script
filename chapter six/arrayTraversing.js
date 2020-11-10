var arr = [10,29,30,40,50,60,70,30,40,59,69,439,59,39,59,30,509,60,40,60,58];

// for(var i = 0;i < arr.length;i++){
//     console.log(arr[i]);
// }
console.log(arr);
for(var i = 0;i<arr.length;i++){
    arr[i]=arr[i]+2;
}
console.log('>>>Update array<<</n');
console.log(arr);   

var sumOfArr = 0;
for(var j = 0;j<arr.length;j++){
    sumOfArr += arr[j];
};

console.log('\n>>>Sum of arr = '+sumOfArr);

console.log('\n>>>>All even number of array<<<<');
var sumOfEvenNum = 0;
for(var k = 0;k<arr.length;k++){
    if(arr[k] % 2 == 0){
        sumOfEvenNum +=arr[k];
        console.log(arr[k]);
    }
}
console.log('\n>>>Sum of Even Num = '+sumOfEvenNum);

console.log('\n>>>>All Odd Number Of Array<<<<');
var sumOfOddNum = 0;
for(var l = 0;l < arr.length;l++){
    if(arr[l]%2!=0){
        sumOfOddNum+=arr[l];
        console.log(arr[l]);
    }
}
console.log('\n>>>>Sum of all Odd Number = '+ sumOfOddNum);