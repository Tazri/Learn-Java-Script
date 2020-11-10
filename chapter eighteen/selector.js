//Select Item By Id, Class, Tag and Name

// let title = document.getElementById('title');

// console.log(title)

// let aboutMe = document.getElementsByClassName('aboutMe');

// console.log(aboutMe);

// let hfourTags = document.getElementsByTagName('h4');

// console.log(hfourTags)

// let tagNameWithName = document.getElementsByName('justName');

// console.log(tagNameWithName);



// //Select By Query Selector

// let titleOne = document.querySelector('#title');
// let aboutMeOne = document.querySelector('.aboutMe');
// let hFourTags = document.querySelector('h4');

// console.log(titleOne);
// console.log(aboutMeOne);
// console.log(hFourTags);


// let aboutMeAll = document.querySelectorAll('.aboutMe');
// let hFourTagsAll = document.querySelectorAll('h4');

// console.log(aboutMeAll);
// console.log(hFourTagsAll);

// let tagNameSeletor = document.querySelector('[name^=justName]');

// console.log(tagNameSeletor);


// console.log(title);
// console.log(titleOne);


// console.log(title.constructor.name);
// console.log(titleOne.constructor.name);


// console.log(aboutMeOne.children);
// console.log(aboutMeOne.childNodes);

//End Selector Part

//Traverse Element
// let aboutMe = document.getElementById('aboutMe');

// let htmlId = document.getElementById('html');

// let cssId = document.getElementById('css');

// console.log(aboutMe);
// console.log(htmlId);


// console.log(aboutMe.children);
// console.log(aboutMe.childNodes);

// console.log(htmlId.parentNode);
// console.log(htmlId.parentElement);


// console.log(cssId);

// console.log(cssId.previousSibling);
// console.log(cssId.previousElementSibling);
// console.log(cssId.nextSibling);
// console.log(cssId.nextElementSibling);



// console.log(aboutMe.firstChild);
// console.log(aboutMe.firstElementChild);

// console.log(aboutMe.lastChild);
// console.log(aboutMe.lastElementChild);

//End Traverse Element

//Loop Throw Element

let hFourTags = document.getElementsByTagName('h4');

console.log(hFourTags);

// let hFourTagsArray = Array.prototype.slice.apply(hFourTags);//Hard Way to Create Array From Html Collection
// let hFourTagsArray = Array.from(hFourTags); // Normal Way to create Array From Html Collection
let hFourTagsArray = [...hFourTags];//Easist Way to Create Array From Html Collection

console.log(hFourTagsArray);

hFourTagsArray.forEach((item)=>{
    let textFromItem = item.innerHTML;
    item.innerHTML = `> ${textFromItem}`
})












