//nested loop use and create pattern

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

var num = 30;

for(var i = 1; i <= num ; i++){
    var result = '';
    for(var j = 1; j <= i; j++){
        result += String(j + ' ');
    }
    console.log(result);
}
console.log('---------------------')

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *
for(var i = 1 ; i <= num ; i++){
    var result = '';
    for(var j = 1; j <= num; j++){
        result+= '* ';
    }
    console.log(result);
}
console.log('-------------------------');
// *
// * *
// * * *
// * * * *
// * * * * *

for(var i = 1;i <= num; i++){
    var result = '';
    for(var j = 1;j <= i;j++){
        result += '* ';
    }
    console.log(result);
}
console.log('-------------------------------------------------');

// * * * * *
// * * * * 
// * * * 
// * * 
// * 

for(var i = num; i>=1;i--){
    var result = '';
    for(var j = 1; j <= i;j++){
        result += '* ';
    }
    console.log(result);
}