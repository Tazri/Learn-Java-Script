let Name = 'Pentm Focasa';
let Email = 'pentm.focasa@gmail.com';

let person = {
    Name,Email
}


console.log(person.Name);
console.log(person.Email);




let personOne = {
    name : 'Pntm Focasa',
    email : 'pntm.focasa@gmail.com'
}


let {name,email} = personOne;

console.log(name);
console.log(email);

let personTwo = {
    personTwoName : 'Md Tazri',
    personTwoEmail : 'md.tazrii@gmail.com',
    Address : {
        Country : 'Bangladesh',
        City : 'Comilla'
    }
}

let {personTwoName,personTwoEmail,Address,Address:{Country,City}} = personTwo;

console.log(personTwoName);
console.log(personTwoEmail);
console.log(Address)
console.log(Country);
console.log(City);


let simpleNumberArray = [1,2,3,4];


let [varOne,varTwo,,varLast,varLastPlus]= simpleNumberArray;

console.log(...simpleNumberArray);
console.log(simpleNumberArray);

console.log(varOne);
console.log(varTwo);
console.log(varLast);
console.log(varLastPlus);

