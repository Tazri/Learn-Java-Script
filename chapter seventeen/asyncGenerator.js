async function* asyncGenerator(){
    let counter = 0;
    while(true){
        if(counter>6) return;
        yield await Promise.resolve(counter++);
    }
};

(async function(){
    for await (let value of asyncGenerator()){
        console.log(value);
    }
})();


let asyncIterate = asyncGenerator();

console.log(asyncIterate);
asyncIterate.next().then(value=>{
    console.log(value);
})
asyncIterate.next().then(value=>{
    console.log(value);
})
asyncIterate.next().then(value=>{
    console.log(value);
})
asyncIterate.next().then(value=>{
    console.log(value);
})
asyncIterate.next().then(value=>{
    console.log(value);
})
asyncIterate.next().then(value=>{
    console.log(value);
})
asyncIterate.next().then(value=>{
    console.log(value);
})
asyncIterate.next().then(value=>{
    console.log(value);
})
asyncIterate.next().then(value=>{
    console.log(value);
})
