var Person = function(name){
    this.Name = name;
}

var personOne = new Person('Md Tazri');

console.log(personOne)
console.log(Object.getPrototypeOf(personOne));
console.log(Person.prototype);

console.log(Object.getPrototypeOf(personOne)==Person.prototype);

Object.prototype.Poo = 111;
Person.prototype.Pi = 3.43;
console.log(personOne)
console.log(Object.getPrototypeOf(personOne));
console.log(Person.prototype);
console.log(personOne)

Array.prototype.myMethod = function(){

}
var array =  Array();
console.log(array)
