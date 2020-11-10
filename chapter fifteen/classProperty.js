class Person{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = function(){
            return firstName + ' '+lastName;
        } 
    }
    fakeName = 'Unknow'
    fakeHi = function(msg='Hi!'){
        console.log(this.fakeName+' '+msg);
    }
    sayHi(msg='Hi!'){
        console.log(this.fullName()+' '+msg);
    }
}


let personOne = new Person('Pentm','Focasa');
console.log(personOne);
console.log(personOne.fullName);
console.log(personOne.fullName());
personOne.sayHi()
personOne.sayHi('What\'s Up!');
console.log(personOne.fakeName);
personOne.fakeHi();
personOne.fakeHi('What\'s Up World!');