// array method 
// .join()
// .concat()
// Array.isArray()
// Array.from();
console.log('\n>>>>>Use Join Method<<<<<\n');
var arr = [39,49,58,35,38,27,49];
var name = ['Md Tazri','Levi','L Lawliet','Light','Erwin','Eren','Armin','Jone'];
console.log(arr);
console.log(name.join('>'));
console.log(arr.join(' | '));
console.log(arr.join(' '));
console.log(name.join(' >>> '));

console.log('\n>>>>>Use .concat Method<<<<<\n');

var newArr = arr.concat(name);
console.log(newArr);

console.log('\n>>>>>Use Array.isArray Method<<<<<\n');
var aaa = 49;
console.log(Array.isArray(aaa));
console.log(Array.isArray(newArr));

console.log('\n>>>>>Use Array.from() Method<<<<<\n');

var Name = ['Md Tazri','Pntm'];
var newName = Name;

console.log(Name);
console.log(newName);
newName[1] = 'Focasa';
console.log(Name);

var NameOne = ['Md Tazri','Pntm Focasa'];
var newNameOne = Array.from(NameOne);
newNameOne[1] = 'Pntm';
console.log(NameOne);
console.log(newNameOne);