var canWalk = {
    walk : function(){
        console.log('Walk..');
    }
}

var canEat = {
    eat : function(){
        console.log('Eat..');
    }
}


var person = Object.assign({},canWalk,canEat);
person.name = 'Pntm Focasa';

console.log(person);
person.eat();
person.walk();

var dog = Object.assign({},canWalk,canEat);
dog.name = 'Dog';
console.log(dog);
dog.eat();
dog.walk();



var Person = function(name){
    this.name = name;
}

var canSwinm = {
    swim : function(){
        console.log('swim...');
    }
}

function mixin(target,...methodsAndProperty){
    Object(target,...methodsAndProperty);
}

var personOne = new Person('Md Tazri');
var goldFish = new Person('Unknow');


mixin(Person.prototype,canEat,canWalk);


console.log(personOne);
console.log(goldFish);

personOne.walk();
personOne.eat();

goldFish.swim();
goldFish.eat();












