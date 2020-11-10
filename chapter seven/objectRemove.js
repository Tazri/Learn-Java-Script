var user = {
    firstName :'Md',
    lastName : 'Tazri',
    fullName : 'Md Tazri',
    Roll : 10
}
console.log(user);
user.fullName = undefined;
console.log(user);

delete user.Roll;
console.log(user);
delete user.fullName;
console.log(user);