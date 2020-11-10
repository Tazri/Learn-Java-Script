//string buil in function 
//.concat
//.indexOf
//.lastIndexOF
//.search
//.slice
//.substring
//.substr
//.charAt
//.startsWith
//.endsWith
//.split
var firstName  = 'Md'
var lastName = 'Tazri'
var fullName = firstName.concat(' ',lastName);
console.log(fullName);//'Md Tazri'
console.log(firstName+' '+lastName);//'Md Tazri'
console.log(firstName.concat(' ',lastName));//'Md Tazri'
var Name = 'Pntm Focasa'
var str = 'i am become full stack web development and i am stack learner.';

var indexOfStack = str.indexOf('stack');
var lastIndexOfStack = str.lastIndexOf('stack');
console.log(indexOfStack);//17
console.log(str.indexOf('stack'));//17
console.log(str.indexOf('become'));//5
console.log(str.indexOf('Md Tazri'));//-1
console.log(lastIndexOfStack);//40
console.log(str.lastIndexOf('stack'));//48
console.log(str.lastIndexOf('become'));//5
console.log(str.lastIndexOf('Md Tazri'));//-1
console.log(str.search('stack'));//17
console.log(str.search('Md Tazri'));//-1

var theName = fullName.slice(3,8);
console.log(theName);
console.log(fullName.slice(3,-1));
console.log(Name.substring(5,11));
console.log(Name.substring(0,4));
console.log(Name.substr(5,6));
console.log(Name.substr(5,19));
console.log(Name.substr(5));
console.log(Name.substr(0,4));

console.log(Name.charAt(5));//F
console.log(Name.charAt(33));//''
console.log(Name.charAt(19)=='');//true

console.log(Name.startsWith());//false
console.log(Name.endsWith());//false
console.log(Name.startsWith('Pntm'));//true
console.log(Name.startsWith('P'));//true
console.log(Name.endsWith('Focasa'));//true
console.log(Name.endsWith('a'));//true

console.log(Name.toLowerCase());//'pntm fucasa'
console.log(Name.toUpperCase());//'PNTM FUCASA'

console.log(str.split());
console.log(str.split(','));
console.log(str.split(' '));
console.log(str.split('|'));

var ward = '     What\'s       ';
console.log(ward.trim());
console.log('    hello    '.trim());
console.log(str.trim());

