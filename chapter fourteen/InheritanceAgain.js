//Work Object for Mixing
var canWalk = {
    walk : function(){
        console.log('Walking...');
    }
}

var canEat = {
    eat : function(){
        console.log('Eating...');
    }
}

var canSwim = {
    swim : function(){
        console.log('Swimign...');
    }
}
//End of Work Object

//Create Mixin Function For Inheritance
function mixin(targetObject,...methodsAndProperty){
    Object.assign(targetObject,...methodsAndProperty);
}
//End Create Mixin Function

//Person Object
function Person(name){
    this.Name = name ;
}
//End Person Object

//Inheritance Person Prototype from canEat and canWalk
mixin(Person.prototype,canEat,canWalk);
//End Inheritance

//Create Fish Class
function Fish(name){
    this.Name = name;
}
//End Create Fish Class

//Inheritance Fish Prototype From canEat And canSwim
mixin(Fish.prototype,canEat,canSwim);
//End Inheritance


//test
var personOne = new Person('Md Tazri');

console.log(personOne)
personOne.eat();
personOne.walk();

var fishOne = new Fish('Gold Fish');

console.log(fishOne);
fishOne.eat();
fishOne.swim();



