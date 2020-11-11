let ul = document.getElementById('list');

let title = document.getElementById('title');

title.style.color = 'crimson';

console.log(title);


let styleForLiElement = {
    background : 'black',
    color : 'crimson',
    fontSize : '40px'
}



console.log(ul);
console.log(ul.children);

[...ul.children].forEach(liElement=>{
    Object.assign(liElement.style,styleForLiElement);
    liElement.style.border = '1px solid crimson';
})