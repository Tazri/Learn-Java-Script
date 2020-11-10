let simpleObject = {
    start : 1,
    end : 5,
    // [Symbol.iterator]: function(){
    //     let counter = this.start;
    //     let self = this;
    //     return {
    //         next(){
    //             return{
    //                 done : counter>self.end ,
    //                 value : counter > self.end? undefined :counter++
    //             }
    //         }
    //     }
    // }
    [Symbol.iterator]: function* (){
        let counter = this.start;
        while(counter<=this.end){
            yield counter++;
        }
    }


}

let iteratorOfSimpleObject = simpleObject[Symbol.iterator]();

console.log(iteratorOfSimpleObject.next());
console.log(iteratorOfSimpleObject.next());
console.log(iteratorOfSimpleObject.next());
console.log(iteratorOfSimpleObject.next());
console.log(iteratorOfSimpleObject.next());
console.log(iteratorOfSimpleObject.next());

function* itSimpleGenerators(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}


console.log(itSimpleGenerators);
console.log(itSimpleGenerators());
let itSimpleGen = itSimpleGenerators();


console.log(itSimpleGen.next());
console.log(itSimpleGen.next());
console.log(itSimpleGen.next());
console.log(itSimpleGen.next());
console.log(itSimpleGen.next());
console.log(itSimpleGen.next());


console.log(itSimpleGenerators().next());
console.log(itSimpleGenerators().next());

function* collectionGenerators(collection){
    for(let i = 0;i < collection.length;i++){
        yield collection[i];
    }
}


let simpleNumberArray = [1,2,3,4,5,6,7];
let simpleNameArray  = ['Tazri','Pentm Focasa','Erwin Smith','Levi','L Lawliet'];

let iterator = simpleNumberArray[Symbol.iterator]();

console.log(iterator);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


console.log(simpleNumberArray[Symbol.iterator]);
console.log(simpleNumberArray[Symbol.iterator]());
console.log(simpleNumberArray[Symbol.iterator]().next());
console.log(simpleNumberArray[Symbol.iterator]().next());
console.log(simpleNumberArray[Symbol.iterator]().next());


let simpleNumberArrayIterator = collectionGenerators(simpleNumberArray);

console.log(simpleNumberArrayIterator.next());
console.log(simpleNumberArrayIterator.next());
console.log(simpleNumberArrayIterator.next());
console.log(simpleNumberArrayIterator.next());
console.log(simpleNumberArrayIterator.next());
console.log(simpleNumberArrayIterator.next());
console.log(simpleNumberArrayIterator.next());
console.log(simpleNumberArrayIterator.next());
console.log(simpleNumberArrayIterator.next());



let simpleNameArrayIterator = collectionGenerators(simpleNameArray);

console.log(simpleNameArrayIterator);
console.log(simpleNameArrayIterator.next());
console.log(simpleNameArrayIterator.next());
console.log(simpleNameArrayIterator.next());
console.log(simpleNameArrayIterator.next());
console.log(simpleNameArrayIterator.next());
console.log(simpleNameArrayIterator.next());
console.log(simpleNameArrayIterator.next());














