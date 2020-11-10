var name = ['Md Tazri','Levi','L Lawliet','Kaneki','Light','Pntm Focasa','All for One','One for All','Kyigs Stone','Naruto','Tazri','Armin','Erwin','Focas','Pntm','Hanji'];

var find = 'armin';
var isFind = false;

for(var i = 0;i < name.length;i++){
    var lowerFind = find.toLowerCase();
    var lowerItem = name[i].toLowerCase();
    if(lowerFind == lowerItem){
        isFind = true;
        console.log('>>>Data is find<<<');
        console.log('\n>>>Search: '+find+'\t'+'>>>Name: '+name[i]+'\n'+'>>>Index : '+(i+1)+'\t'+'>>>IsFind: '+ true);
    } 
}
if(!isFind){
    console.log('>>>Data is Not Find<<<');
}