var Name = {
    firstName : 'Md',
    lastName : 'Tazri',
    FullName : 'Md Tazri',
    HideFirstName : 'Pntm',
    HideLastName : 'Focasa',
    HideFullName : 'Pntm Focasa'
}
console.log(Object.keys(Name));
console.log(Object.values(Name));
console.log(Object.entries(Name));
var arr = Object.entries(Name);
console.log(arr);
arr.fill(0);
console.log(arr);
var Anime = {
    deathNote : 'Light and L Lawliet',
    attackOnTitan : 'Levi',
}
var newAnime = Anime;
console.log(newAnime);
console.log(Anime);
newAnime.deathNote = 'L Lawliet';
console.log(Anime);

var user = {
    Name : 'Pntm Focasa',
    Propassion : 'Hacker'
}
var newuser = Object.assign({},user);

newuser.Name = 'Md Tazri';
newuser.Propassion = 'Programmer';
console.log(user);
console.log(newuser);