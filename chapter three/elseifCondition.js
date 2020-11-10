//else if is secound condition and else last condition and if first condition

//satement
// if(condition){
//     codeblock;
// }else if(condition){
//     codeblock;
// }else{
//     codeblock;
// }

var a = 20;
var b = 20;

if(a > b){
    console.log('a is greaterthen b');
}else if(b > a){
    console.log('b is greaterthen a');
}
else{
    console.log('both are same');
}

var num = 10;
if(num == 0){
    console.log('This number is 0 .');
}else if(num % 2 == 0){
    console.log(num + ' is even number.');
}else{
    console.log(num + ' is odd number.');
}