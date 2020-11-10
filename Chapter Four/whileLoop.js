//white loop statment
// while(condition){
//     codeblock;
// }

var isWin = true;
while(isWin){
    var rand = Math.floor(Math.random()*50+1);
    if(rand == 1){
        console.log('----->Winner Winner Chiken Dinner<-----');
        isWin = false;
    }else{
        console.log('You have got ' + rand);
    }
}