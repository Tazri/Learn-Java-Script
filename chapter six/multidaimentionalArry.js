var multi = [[1,2,3,4,5,6,7,8,9],[70,60,66,70,80,88,99,88,99]];

for(var i = 0;i < multi.length;i++){
    for(var j = 0;j < multi[i].length;j++){
        console.log('>>>multi['+i+']'+'['+j+']'+' = '+multi[i][j]);
    }
}

console.log('\n>>>>>>>>>Roll With Number<<<<<<<<<\n');
for(i = 0;i < multi[0].length;i++){
    console.log('>>>Roll : '+multi[0][i]+'\t'+'>>>Result : '+multi[1][i]);
}