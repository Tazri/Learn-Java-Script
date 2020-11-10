let sayHi = (name='Pentm Focasa',msg='Hello')=>{
    console.log(`${name} ${msg}`);
}

let sayHiOne = function(name='Pentm Focasa',msg='Hello'){
    console.log(`${name} ${msg}`);
}

sayHi('Md Tazri','What\'s Up!');


sayHi('Pntm')
sayHi(null,'Whats!')

sayHi(undefined,'What\'s Up World!');

sayHiOne(undefined,'Whats')