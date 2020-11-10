//isIterable Function
let isIterable = (collection)=>{
    return typeof collection[Symbol.iterator] === 'function';
}
//End This Funciton

//Function Set MultiPly Key and Value Pair
let setKeyAndValueInMap =(map,...keyAndValuePair)=>{
    for(let i = 0;i < keyAndValuePair.length;i++){
        map.set(keyAndValuePair[i][0],keyAndValuePair[i][1]);
    }
    console.log(keyAndValuePair)
}
//End This Function

//Function For Delete MultiPlay Key in Map
let deleteKeyInMap = (map,...keys)=>{
    for(let i = 0;i < keys.length;i++){
        map.delete(keys[i]);
    }
}
//End this funciton

let simpleMap = new Map([
    ['a',10],
    ['b',20],
    ['c',39]
])

console.log(simpleMap);
simpleMap.set('d',49);
console.log(simpleMap);

setKeyAndValueInMap(simpleMap,['k',39],['L',34],['a',39]);
console.log(simpleMap)

console.log(simpleMap.get('k'));
console.log(simpleMap.size)

simpleMap.delete('d');
console.log(simpleMap);

deleteKeyInMap(simpleMap,'a','k','p');
console.log(simpleMap);

for(let v of simpleMap){
    console.log(v);
}

for(let [k,v] of simpleMap){
    console.log(k,v);
}


simpleMap.forEach((v,k)=>{
    console.log(k,v);
})

console.log(simpleMap.keys());
console.log(simpleMap.values());

let keysIterator = simpleMap.keys();
console.log(keysIterator.next());
console.log(keysIterator.next());
console.log(keysIterator.next());
console.log(keysIterator.next());
console.log(keysIterator.next());

let valuesIterator = simpleMap.values();
console.log(valuesIterator.next());
console.log(valuesIterator.next());
console.log(valuesIterator.next());
console.log(valuesIterator.next());
console.log(valuesIterator.next());

console.log(simpleMap.entries());

let entriesIterator = simpleMap.entries();

console.log(entriesIterator.next());
console.log(entriesIterator.next());
console.log(entriesIterator.next());
console.log(entriesIterator.next());
console.log(entriesIterator.next());

let person = new Map([
    [{Name:'Md Tazri'},10],
    [{Name: 'Pentm Focasa'},33],
    [{Name:'Erwine Smith'},34],
    [{Name:'L LawLiet'},31],
    [{Name:'Amin'},23]
])


console.log(person);

