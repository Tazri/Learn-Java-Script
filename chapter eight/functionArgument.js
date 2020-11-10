function add(a,b){
    console.log(a + b);
}
add(39,45);
add(40,40);
add(49,40);

function sub(a,b){
    console.log(a-b);
}

sub(40,4);
sub(80,70);
sub(70,8);

var arrOne = [39,490,29,49,59,69,39];
function sumOfArr(arr){
    var sum = 0;
    for(var i = 1;i < arr.length;i++){
        sum+=arr[i];
    }
    console.log(sum);
}
sumOfArr(arrOne);
var num = [49,60,39,4,6,4,];
var numOne = [4,6,7,3,5,3,5,6];
sumOfArr(num);
sumOfArr(numOne);