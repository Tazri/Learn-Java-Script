let simple = [3,34,45,2,3,4,5,6];

let simpleOneArray = [1,...simple,3];

console.log(simple);
console.log(simpleOneArray);

console.log(...simple);
console.log(...simpleOneArray);

let sum = (...numbers)=> numbers.reduce((a,b)=>a+b);


console.log(sum(1,2,3,4,5,6,7,8,9,10));


let object = {
    a: 34,
    b: 34,
    c: 43
}

let objectOne = {
    ...object
}

let objectTwo = object;

console.log(object);
console.log(objectOne);
console.log(objectTwo);

console.log(object==objectTwo);
console.log(object==objectOne);
