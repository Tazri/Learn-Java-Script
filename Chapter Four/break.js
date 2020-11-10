//break for stop parent loop

while(true){
    var rand = Math.floor(Math.random()*50+1);
    if(rand == 1){
        console.log('---> Winnner Winner Chiken Dinner <---');
        break;
    }else{
        console.log('>>>You Got --> '+ rand);
    }
}

for(var i = 1; i <= 100 ; i++){
    if(Math.floor(i % 30) == 0){
        console.log('Now This Number Is 30');
        break;
    }else{
        console.log(i);
    };
};