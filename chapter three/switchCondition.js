//switch condition statement
// switch(value){
//     case value: 
//         codeblock;
//         break;
//     case value: 
//         codeblock;
//         break;
//     case value:
//         codeblock;
//         break;
//     default: 
//         codeblock;
// }

var date = new Date();

var today = date.getDay();

switch(today){
    case 0:
        console.log('Today is Sunday');
        break;
    case 1:
        console.log('Today is Monday');
        break;
    case 2:
        console.log('Today is Tuesday');
        break;
    case 3:
        console.log('Today is Wednesday');
        break;
    case 4:
        console.log('Today is Thursday');
        break;
    case 5:
        console.log('Today is Friday');
        break;
    case 6:
        console.log('Today is Saturday');
        break;
    default: 
        console.log('Not a valid number')
}
var num = Math.round(Math.random()*5+1);
switch(num){
    case 1:
        console.log('This is one');
        break;
    case 2:
        console.log('This is two');
        break;
    case 3:
        console.log('This is three');
        break;
    case 4: 
        console.log('This is four');
        break;
    case 5: 
        console.log('This is five');
        break;
}