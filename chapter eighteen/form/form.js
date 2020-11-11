//Form Add and Delete Name Stage Start
let nameInputField = document.getElementById('name');
console.log(nameInputField);

let classNameForListItem = 'list-group-item bg-primary py-2 text-white';

//Add By Enter Press
nameInputField.addEventListener('keypress',function(event){
    if(event.key == 'Enter'){
        if(event.target.value == ''){

        }else{
            let listItem = document.createElement('li');
            listItem.innerHTML = event.target.value;
            event.target.value = '';
            listItem.className = classNameForListItem;
            document.getElementById('list-group').appendChild(listItem);
        }
    }
})
//End Add By Enter press

//Add By Button
let addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click',function(event){
    let nameValue = nameInputField.value;
    if(nameValue == ''){

    }else{
        let listItem = document.createElement('li');
        listItem.innerHTML = nameValue;
        nameInputField.value = '';
        listItem.className = classNameForListItem;
        document.getElementById('list-group').appendChild(listItem);
    }
})
//End Add By Button

//Delete On Click Item
// let listGroup = document.getElementById('list-group');

// listGroup.addEventListener('click',function(event){
//     event.target.remove();
// })

//End Delete On Click Item

//Edit Item
let listGroup = document.getElementById('list-group');
listGroup.addEventListener('dblclick',function(event){
    let item = event.target;
    let itemInnerText = item.innerText;
    item.innerHTML = '';
    let inputField = document.createElement('input');
    inputField.className = 'form-control';
    inputField.value = itemInnerText;
    item.appendChild(inputField);
    inputField.addEventListener('keypress',function(event){
        if(event.key == 'Enter'){
            item.innerText = inputField.value;
        }
    })
})
//End Edit Item

//Check Box 

let skillItemClassNames = 'skill-item text-success border border-success px-2 py-2 mx-1';

let skills = document.getElementsByName('skills');
let skillItems = [];

[...skills].forEach(skillItem=>{
    skillItem.addEventListener('change',function(event){
        if(event.target.checked){
            let skillItem = document.createElement('h5');
            skillItem.className = skillItemClassNames;
            skillItem.id = event.target.value;
            skillItem.innerHTML = event.target.value;
            document.getElementById('show-skills').appendChild(skillItem)
        }else{
            document.getElementById(event.target.value).remove();
        }        
    })
})
//End Check Box