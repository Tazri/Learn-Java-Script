var person = {
    name : 'Md Tazri'
}

console.log(person)

console.log(person.toString());


var str = person.toString()

var descriptor = Object.getOwnPropertyDescriptor(person,'name');

console.log(descriptor);


var personOne = Object.getPrototypeOf(person);
var personTwo = Object.getPrototypeOf(personOne);

console.log(person);
console.log(personOne);
console.log(personTwo);

var personThree = {
    name : 'Focasa',
    FirstName : 'Pntm',
    LastName : 'Focasa'
}


console.log(personThree);

var personBaseObject = Object.getPrototypeOf(person);
var toStringDescriptor = Object.getOwnPropertyDescriptor(personBaseObject,'toString');

console.log(toStringDescriptor);


Object.defineProperty(personThree,'name',{
    value : 'Pntm Focasa',
    writable : false,
    enumerable : false,
})


console.log(personThree.name);

personThree.name = 'Md Tazri';
console.log(personThree.name)
console.log(personThree);

Object.defineProperty(personThree,'FirstName',{
    writable: true,
    enumerable : true,
    configurable : false
})
delete personThree.Firstname
console.log(personThree)


Object.defineProperty(personThree,'name',{
    get : function(){
        return this.LastName;
    }
})


console.log(personThree.name);