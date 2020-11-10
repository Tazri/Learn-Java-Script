let add = (numberOne,numberTwo)=> numberOne+numberTwo;
let sqr = number => number*number;

console.log(add(3,4));
console.log(sqr(4));
console.log(add(34,3));
console.log(sqr(4));

let sum = (...number)=>{
    return number.reduce((numberOne,numberTwo)=>{
        return numberOne = numberOne + numberTwo;
    })
}


console.log(sum(3,3,3,10))