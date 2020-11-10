//pure function

function add(a,b){
    return a+b;
}

console.log(add(2,4));

function multi(n){
    return n*n;
}

console.log(multi(2));
console.log(multi(2));
console.log(multi(2));
console.log(multi(2));

//Not pure function
var num = 30;
function one(){
    num =400;
    console.log('What\'s up World');
}
console.log(num);
one();
console.log(num)

var user = {
    firstName : 'Pntm',
    lastName : 'Focasa'
}
console.log(user);
function two(obj){
    obj.firstName = 'Md'
    obj.lastName = 'Tazri'
    console.log(obj);
}
two(user);
console.log(user)
