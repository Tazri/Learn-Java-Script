//for loop statement

// for(intilition;condition;increament or decrement){
//     codeblock;
// }

// for(var i = 0; i < 100; i++){
//     console.log((i+1)+'/'+'Md Tazri');
// };

// for(var i = 0;i <= 100;i++){
//     i % 2 == 0 && console.log('Even number is'+ i);
// };

// var sum = 0;
// for(var i = 0;i <= 100;i++){
//     console.log(sum + ' + ' + i + ' = ' + (sum+i));
//     sum += i;
// }

// var sum = 0;
// for(var i = 0; i <= 100;i++){
//     sum += i % 2 == 0 ?  i:0;
// }
// console.log(sum);

// var num = 10;
// for(var i = 1; i <= num;){
//     console.log('--------'+'Start'+'--------');
//     for(var j = 0; j <= 10; j++){
//         console.log(i + ' x ' + j + ' = ' + (i*j));
//     }
//     console.log('--------'+'End'+'--------\n')
//     i++
// }
console.log('----------Start----------');
for(var isOff = true;isOff;){
    var numone = Math.round(Math.random()*1000000 + 1);
    var numtwo = Math.round(Math.random()*2 + 1);
    numone == numtwo || console.log('!Sad numone = ' + numone + ' not Equal numtwo = ' + numtwo);
    numone == numtwo && (isOff = false);
    numone == numtwo && console.log('\n---numone = '+ numone + ' numtwo---\n-->Winner Winner Chiken Dinner<--');
}
