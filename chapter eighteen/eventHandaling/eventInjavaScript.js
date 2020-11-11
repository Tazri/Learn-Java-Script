let addBtn = document.getElementById('add-btn');

// addBtn.onclick = function(e){
//     console.log(e);
// }

// addBtn.addEventListener('click',function(){
//     alert('Add is clicked');
// })


//Bellow Code For Add List Item

//Function For Add Button
let counter = 5;

addBtn.addEventListener('click',function(event){
    let listGroup = document.getElementById('list-group');
    let lastElement = listGroup.lastElementChild;
    if(!lastElement){
        let classNames = 'list-group-item border border-primary text-primary text-center';
        let listItem = document.createElement('li');
        listItem.className = classNames;
        listItem.innerHTML = 1;
        counter = 2;
        listGroup.appendChild(listItem);
    }else{
        let listItem = lastElement.cloneNode();
        listItem.innerHTML = counter++;
        listGroup.appendChild(listItem);
    }
})
//End Code For Delete Button

//Function For Delete Buttton
let deleteBtn = document.getElementById('delete-btn');

deleteBtn.addEventListener('click',function(event){
    document.getElementById('list-group').lastElementChild.remove();
    counter--;
})
//End Code For Delete Button

//Event Delegation
// let listGroup = document.getElementById('list-group');
// [...listGroup.children].forEach(listItem=>{
//     listItem.addEventListener('click',function(event){
//         listItem.remove();
//     })
// })
//End Delegation Code

//Sulotion For Event Delegation
let listGroup = document.getElementById('list-group');
listGroup.addEventListener('click',function(event){
    if(this.contains(event.target)){
        event.target.remove();
    }
})


//End Code for Add List Item And Delete List Item

//Below code for box
let box = document.getElementById('box');

box.addEventListener('mousemove',function(event){
    document.getElementById('value-x').innerHTML = event.clientX;
    document.getElementById('value-y').innerHTML = event.clientY;
    document.getElementById('value-offset-x').innerHTML = event.offsetX;
    document.getElementById('value-offset-y').innerHTML = event.offsetY;
    if(event.offsetX == 100 && event.offsetY == 100){
        alert('Now This is 100 and 100');
    }
})
//End Code For Box

//for test 

let test = document.getElementById('test');
let lastElement = test.lastElementChild;
console.log(lastElement);
console.log(Boolean(lastElement));
console.log(!lastElement);