//some variable name we need next work
let baseUrl = 'https://jsonplaceholder.typicode.com';
let listItemClassNames = 'list-group-item bg-primary py-2'
let postForm = document.getElementById('post-form');
let posts = document.getElementById('posts');
//End Variable Name

//post request start when click on submit botton
postForm.addEventListener('submit',function(event){
    event.preventDefault();
    userId = this.userNumber.value || 100;
    title = this.title.value || undefined;
    body = this.body.value || undefined;
    
    if(title && body){
        //Create Post Objcet
        let postObject = {
            userId,title,body
        }
        
        //Now Post Request From Server
        fetch(`${baseUrl}/posts`,{
            method: 'POST',
            headers:{
                'Content-type' : 'Application/JSON'
            },
            body: JSON.stringify(postObject)
        })
            .then(response => response.json())
            .then(post=>{
                let listItem = listItemGenerator(post);
                posts.appendChild(listItem);
            })
            .catch(error=>console.log(error.message));
    }else{
        alert('Please Provide Correct Details.')
    };

    this.reset();
})


//li item list generator function

function listItemGenerator(post){
    let li = document.createElement('li');
    let liData = `${post.id}. ${post.title}(${post.userId})`;
    li.innerHTML = liData;
    li.className = listItemClassNames;
    return li;
}