let simpleArray = [1,2,3,4,5,6,7,8];

for(let v of simpleArray){
    console.log(v);
    console.log(typeof v);
}

for(let v in simpleArray){
    console.log(v);
    console.log(typeof v)
}

let name = 'Pentm Focasa';

for(let v of name){
    console.log(v);
    console.log(typeof v);
}

for(let v in name){
    console.log(v);
    console.log(typeof v)
}

let simpleObject = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5
}

for(let v in simpleObject){
    console.log(v);
    console.log(typeof v);
    console.log(simpleObject[v]);
}


