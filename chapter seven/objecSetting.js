var Name = {
    firstName : 'Md',
    lastName : 'Tazri'
}
console.log(Name);
Name.firstName = 'Pntm';
Name.lastName = 'Focasa';
console.log(Name);
Name.fullName = 'Pntm Focasa';
console.log(Name);

var Account = {
    user : 'Tazri',
    bio : 'I am Programmer'
}
console.log(Account);
Account['user'] = 'Focasa';
Account['bio'] = 'Web Developer';
console.log(Account);
Account['LastName'] = 'Pntm';
var Grade = 'Grade';
Account[Grade] = 'A+';
console.log(Account);