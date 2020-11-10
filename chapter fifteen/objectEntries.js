let simpleObject = {
    Name : 'Md Tazri',
    Email : 'md.tazrii@gmail.com'
}


console.log(Object.entries(simpleObject));


let simpleArray = [
    ['Name','Pentm Focasa'],
    ['Email','Pntm.Focasa@gmail.com']
]

console.log(simpleArray);
console.log(...simpleArray);

console.log(Object.fromEntries(simpleArray));