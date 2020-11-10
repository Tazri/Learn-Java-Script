let symbolOne = Symbol();
let symbolTwo = Symbol();
let symbolWithDescription = Symbol('This is Symbol');

console.log(symbolOne);
console.log(symbolTwo);
console.log(symbolWithDescription);


console.log(symbolOne === symbolTwo);

console.log(symbolOne === symbolWithDescription);

let symbolOneContainer = symbolOne;

console.log(symbolOneContainer === symbolOne);


console.log(symbolOne.toString());
console.log(symbolOne.valueOf())



let toss = {
    HEAD : Symbol('Head'),
    TAIL : Symbol('TAIL')
}


console.log(toss.HEAD);
console.log(toss.TAIL);