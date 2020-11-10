//Function for Check it Iterable or Not
let isIterable = (collection)=>{
    return typeof collection[Symbol.iterator] === 'function';
}
//End This Function

//Function for Item Add in Set
let addItemInSet = (set,...items)=>{
    for(let i = 0;i < items.length;i++){
        set.add(items[i]);
    }
}
//End This Function

//Function Delete Item in Set
let deleteItemInSet = (set,...items)=>{
    for(let i = 0;i < items.length;i++){
        set.delete(items[i]);
    }
}



let simpleNumberArray = [1,2,3,4,5,6,7];

console.log(isIterable(simpleNumberArray));


let numberSet = new Set([1,2]);

console.log(numberSet);

numberSet.add(5);
numberSet.add(4);
numberSet.add(1);
console.log(numberSet);
console.log(numberSet.size);
numberSet.clear();
console.log(numberSet);
addItemInSet(numberSet,1,2,3,4,3,5,6);
console.log(numberSet)


for(let v of numberSet){
    console.log(v);
}

console.log(numberSet.keys());
console.log(numberSet.values());

numberSet.delete(3);
deleteItemInSet(numberSet,6,4,3,45);
console.log(numberSet);
let keysIterators = numberSet.keys();
console.log(keysIterators);
console.log(keysIterators.next());
console.log(keysIterators.next());
console.log(keysIterators.next());
console.log(keysIterators.next());
console.log(keysIterators.next());

let valuesIterators = numberSet.values();
console.log(valuesIterators);
console.log(valuesIterators.next());
console.log(valuesIterators.next());
console.log(valuesIterators.next());
console.log(valuesIterators.next());
console.log(valuesIterators.next());


console.log(numberSet.entries());


