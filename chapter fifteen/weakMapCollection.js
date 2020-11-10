let personOne = {
    name: 'Md Tazri'
}

let personTwo = {
    name : 'Pentm Focasa'
}

let personThree = {
    name : 'L LawLiet'
}

let personFour = {
    name : 'Erwine Smith'
}

let mapPersons = new Map([
    [personOne,1],
    [personTwo,2],
    [personThree,3],
    [personFour,4]
])

console.log(mapPersons);
personOne = null;


let weakMapPersons = new WeakMap([
    [personTwo,2],
    [personThree,3],
    [personFour,4]
])

console.log(weakMapPersons);
console.log(weakMapPersons.has(personTwo));
personTwo = null;
console.log(weakMapPersons.has(personTwo));
console.log(weakMapPersons.has(personFour));

