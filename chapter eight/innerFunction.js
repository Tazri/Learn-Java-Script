function a(greet,name){
    function innerr(){
        console.log(greet,name);
    }
    innerr();
}

a('A+','Pntm')

function enterName(name){
    function sayHi(){
        if(name){
            console.log('Good Mooring ! '+name.split(' ')[0]);
        }else{
            console.log('What\'s up World!');
        }
    }
    sayHi();
}


enterName();
enterName('Pntm Focasa')
enterName('Md Tazri');
enterName('Tazri')
enterName()
var word = 'Hello World';
console.log(typeof word.split(' '));
console.log(word.split(' '));