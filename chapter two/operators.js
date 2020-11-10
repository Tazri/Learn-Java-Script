//Operators
//Arithmetic Operators
//Comperison Operators
//Logical Operators
//assignment Operators

//Arithmetic Operators
// Plus +
// Minus -
// multiply *
// Divide /
// Remainder %
// Incremental ++
// Decremental --

var a = 20;
var b = 10;
console.log(a + b);//30
console.log(a-b);//10
console.log(a*b);//200
console.log(a / b);//2
console.log(a % 6);//2

//Incremental
console.log(++a);//Preincrementa 21
console.log(a++);//postincremental 21
console.log(a);//22
//Decremental 
console.log(--a);//Predecremental 21
console.log(a--);//Postdecremental 21
console.log(a);//20

//assinment operators
// Equal =
// PlusEqual +=
// MinusEqual -=
// MultiplayEqual *=
// DivideEqual /=
// RemainderEqual %/

a = 40;
a += 20;//a = a + 20
console.log(a);//60
a-=20;//a = a - 20
console.log(a);//40
a /= 2;
console.log(a);//20
a *= 2;
console.log(a);//40
a %= 7 ;
console.log(a);//5

//comperasion operators
// EqualEqual ==
// NotEqual !==
// Greaterthen >
// Lessthen <
// GreaterthenEqual >= 
// LessthenEqual <=
// EqualEqual ===
// GreaterthenEqualEqual >==
// LessthenEqualEqual <==
// NotEqualEqual !==

//comperasion operators
var l = 10;
var f = 20;

console.log(l == f);// false
console.log(l > f);// false
console.log(l < f);// true
f = l;
console.log(l >= f);// true
console.log(l <= f);// true
f--
console.log(l != f);//true

//comperasion operators extra
var str = '20';
var num = 20;
console.log(str == num);//true
console.log(str != num);//false
console.log(str === num);//false
console.log(str !== num);//true
str = '22'
console.log(str >= num);//true
console.log(str <= num);//false
//logical opearators
// and &&
// or ||
// not !

//bitwase opearators
// and &
// or |
// xor ^
// shift right >>
// shift left <<

//other opearator is typeof();
var strother = 'dk';
var numother = 29;
var isBoolean = true;
console.log(typeof strother);//string
console.log(typeof(strother));//string
console.log(typeof numother);//number
console.log(typeof(numother));//number
console.log(typeof isBoolean);//boolean
console.log(typeof(isBoolean));//boolean
console.log(typeof(isundefined));//undefined