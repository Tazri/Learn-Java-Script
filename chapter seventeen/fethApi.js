baseUrl = 'https://jsonplaceholder.typicode.com';

let user = fetch(`${baseUrl}/users`);

user
    .then((v)=>{
        console.log(v);
        return v.json();
    })
    .then((user)=>{
        user.forEach((userMan)=>{
            console.log(userMan.id+'|\t'+userMan.name);
        })
        return new Promise((resolve,reject)=>{
            resolve('this is another promise');
        })
    })
    .then((value)=>{
        console.log(value);
    })
    .catch((e)=>{
    console.log(e);
    })


function getRequest(url){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open('get',url);
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if(xhr.status == 200){
                    let response = JSON.parse(xhr.response);
                    resolve(response);
                }
                else{  
                    reject(new Error('Error Occurred'));
                }
            }
        }
        xhr.send();
    })
}

let users = getRequest(`${baseUrl}/users`);

users
    .then((user)=>{
        user.forEach(user => {
            console.log(user.id+'|\t'+user.username);
        })
    })
    .catch((error)=>{
        console.log(error.message);
    })






