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
let pOne = createElement('p','text-primary display-5 my-3','I am Student of Comilla Kotbari');
let pTwo = createElement('p','text-success display-5 my-3','I am a Progammer');
console.log(pOne);
console.log(pTwo);
//End Create p Element

appendChild(divCont,pOne,pTwo);

//Function For Work

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

