let btn = document.getElementById('btn');
let baseUrl = 'https://jsonplaceholder.typicode.com/';

btn.addEventListener('click',function(event){
    fetch(`${baseUrl}posts`)
        .then(response=>response.json())
        .then(posts=>{
            posts.forEach((postItem,index)=>{
                let listItem = createListItem(postItem,index+1);
                document.getElementById('list-group').appendChild(listItem);
            })
        })
        .catch(event=>console.log(event));
})


function createListItem(postItem,number){
    let item = document.createElement('li');
    item.className = 'list-group-item bg-primary border border-primary';
    item.innerHTML = `${number}. ${postItem.title}`;

    return item;
}