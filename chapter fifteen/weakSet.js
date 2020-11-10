let personOne = { 
    Name : 'Md Tazri',
}

let personTwo = {
    Name : 'Pentm Focasa'
}

let personThree = {
    Name : 'L LawLiet'
}

let personFour = {
    Name : 'Light'
}
let setPersons = new Set([personOne,personTwo,personThree]);

console.log(setPersons);

console.log(setPersons.has(personOne));
console.log(setPersons.has('d'));

personTwo = null
console.log(setPersons)

let weakSetPersons = new WeakSet([personOne,personThree,personFour])

console.log(weakSetPersons);

console.log(weakSetPersons.has(personOne));

personOne = null;
console.log(weakSetPersons.has(personOne));

