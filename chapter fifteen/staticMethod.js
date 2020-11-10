//'use strict'
//Function create String for JSON Parse Methods

let createString = (firstName,lastName,email)=>{
   return `{"firstName" : "${firstName}","lastName":"${lastName}","email":"${email}"}`
}
//end this funciton




let string = '{"firstName" : "Pentm","lastName":"Focasa","email":"pentm.focasa@gmail.com"}'


class Person{
    constructor(firstName,lastName,email){
        this.firstName = firstName;
        this.lastName = lastName ;
        this.email = email;
        this.fullName = ()=>{
            return this.firstName + ' ' + this.lastName;
        }
        this.test = function(){
            console.log(this);
        }
    }
    sayHi(msg='Hi!'){
        console.log(this.fullName()+' '+msg);
    }
    static create(stringSomething){
        let personObjectJustInTime = JSON.parse(stringSomething);
        return new Person(personObjectJustInTime.firstName,personObjectJustInTime.lastName,personObjectJustInTime.email);
    }
}


let personOne = Person.create(string);

console.log(personOne);
console.log(personOne.fullName());
personOne.sayHi('Hello!');
personOne.sayHi();




let stringForMdTazri = createString('Md','Tazri','md.tazrii@gmail.com');
let stringForErwineSmith = createString('Erwine','Smith','erwine.smith@gmail.com');

let personTwo = Person.create(stringForMdTazri);
let personThree = Person.create(stringForErwineSmith);

console.log(personTwo);
console.log(personTwo.fullName());
personTwo.sayHi('Good Morning!');
personTwo.sayHi();

console.log(personThree);
console.log(personThree.fullName());
personThree.sayHi('Good Night!');
personThree.sayHi();
console.log('Test Diffetent....\n\n\n\n')

let Rect = function(width,height){
    this.width = width;
    this.height = height;
    this.draw = function(){
        console.log(this);
    }
}

let rectOne = new Rect(3,4);
rectOne.draw();
let rectOneDraw = rectOne.draw;

rectOneDraw()
console.log('Test Different....\n\n\n\n\n\n');

let personTwoTest = personTwo.test;


personTwo.test()
personTwoTest();