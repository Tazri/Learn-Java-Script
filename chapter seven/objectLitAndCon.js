// object

var obj = {};
console.log(obj);
console.log(typeof obj);

obj.a = 'Pntm Focasa';
obj.b = 20;
console.log(obj);

var name = {
    FirstName : 'Md',
    LastName : 'Tazri',
    FullName : 'Md Tazri'
}

console.log(name);
name.newName = 'Pntm Focasa';
console.log(name);
console.log(name.FirstName);

var objectOne = Object();
console.log(objectOne);
console.log(typeof objectOne);
var objectTwo = new Object();
console.log(objectTwo);
console.log(typeof objectTwo);

objectOne.c = 'Bla Bla Bla Bla';
objectTwo.b = 'Bla Bla Bla';
console.log(objectOne);
console.log(objectTwo);