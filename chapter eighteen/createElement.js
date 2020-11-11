//simple li and append in ul

let li = document.createElement('li');
console.log(li);

li.innerHTML = 'Five';

console.log(li)

li.setAttribute('title','This is Five Number Text');

console.log(li);
classNameForLi = 'list-group-item border border-primary text-center text-muted display-5 py-4';

li.className = classNameForLi;
console.log(li);

let ul = document.getElementById('list');

console.log(ul);

ul.appendChild(li);
//end

//Same Work By Function
let liOne = createElement('li',classNameForLi,'Six');
liOne.setAttribute('title','This is Six Number');
appendChild(ul,liOne);
//End This Work

//Create Div and Appand Child
let containerDiv = createElement('div','Container bg-dark my-5 text-center text-primay');
console.log(containerDiv)
let divCont = document.getElementById('cont');
console.log(divCont)

//Create p element 
let pOne = createElement('p','text-primary display-5 my-3','I am Student of Comilla Kotbari(beforebegin)');
let pTwo = createElement('p','text-success display-5 my-3','I am a Progammer(beforeend)');
let pThree = createElement('p','text-primary display-5 my-3','I am Simple Man(afterbegin)');
let pFour = createElement('p','text-success display-5 my-3','I Want to be a Programmer(afterend)');
console.log(pOne);
console.log(pTwo);
console.log(pThree);
console.log(pFour);
//End Create p Element

//Function For Work

//insertAdjacentElement
console.log(ul);
ul.insertAdjacentElement('beforebegin',pOne);
ul.insertAdjacentElement('beforeend',pTwo);
ul.insertAdjacentElement('afterbegin',pThree);
ul.insertAdjacentElement('afterend',pFour);
//End insertAdjacentElement

//Update and remove 
console.log(ul);

let first = ul.firstElementChild;
console.log(first);

setTimeout(()=>{
    first.innerHTML = 'I Am Not Simple Man(afterbegin)';
    first.classList.add('text-success');
},5000)

let last = ul.lastElementChild;
console.log(last);
setTimeout(()=>{
    last.remove();
},2000);

let itemThree = document.getElementById('item-three');
setTimeout(()=>{
    itemThree.remove();
},2000);

//End Update and remove

//End Update and remove

//cloneNode 
let itemOne = document.getElementById('item-one');
console.log(itemOne);
let itemAnother = itemOne.cloneNode();
itemAnother.innerHTML = 'Seven';
itemAnother.style.background = 'crimson';
appendChild(ul,itemAnother);

let itemAnotherOne = itemOne.cloneNode(true);
itemAnotherOne.style.color = 'white';
itemAnotherOne.style.background = 'black';
appendChild(ul,itemAnotherOne); 
//end cloneNode

//Work With Attribute
let ulTwo = document.getElementById('ul-list');
console.log(ulTwo);
console.log(ulTwo.firstElementChild);
let firstItemFromUlTwo = ulTwo.firstElementChild;
console.log(firstItemFromUlTwo);

console.log(firstItemFromUlTwo.attributes);
console.log(firstItemFromUlTwo.getAttributeNames());
console.log(firstItemFromUlTwo.getAttributeNode('class'));
console.log(firstItemFromUlTwo.getAttributeNode('id'));
console.log(firstItemFromUlTwo.getAttribute('class'));
console.log(firstItemFromUlTwo.getAttribute('id'));

console.log(firstItemFromUlTwo.classList);

//create attribute 
firstItemFromUlTwo.title = 'This is First';
console.log(firstItemFromUlTwo.getAttributeNames());
firstItemFromUlTwo.setAttribute('id','This-is-first');
console.log(firstItemFromUlTwo.getAttribute('id'));

let attr = document.createAttribute('data-target');
attr.value = 'left';
firstItemFromUlTwo.setAttributeNode(attr);
console.log(firstItemFromUlTwo.getAttributeNames());




//Create Element Function Start

function createElement(elementName,className,innerHtml){
    let tag = document.createElement(elementName);
    tag.className= className || '';
    tag.innerHTML = innerHtml || '';
    return tag;
}

//End Create Element Function

//Start Append Child Function

function appendChild(parent,...children){
    children.forEach(child=>{
        parent.appendChild(child);
    })
}
//End Append Child Funciton

//All Function Up

