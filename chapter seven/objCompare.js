var userOne = {
    firstName : 'Md',
    lastName : 'Tazri'
}
var userTwo = {
    firstName : 'Md',
    lastName : 'Tazri'
}
console.log(userOne == userTwo);
console.log(userOne.firstName == userTwo.firstName && userOne.lastName == userTwo.lastName);
console.log(String(userOne));
console.log(JSON.stringify(userOne));
console.log(JSON.stringify(userTwo));
console.log(JSON.stringify(userOne)==JSON.stringify(userTwo));
console.log(JSON.stringify(userOne)===JSON.stringify(userTwo));