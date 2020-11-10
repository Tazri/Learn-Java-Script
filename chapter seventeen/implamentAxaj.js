// const xhr = new XMLHttpRequest();

// xhr.open('get','https://jsonplaceholder.typicode.com/users');
// xhr.onreadystatechange = (e)=>{
//     if(xhr.readyState == 4){
//         if(xhr.status ==200){
//             console.log(xhr.response);
//         }else{
//             console.log(xhr.status);
//         }
//     }
// }

// xhr.send()


function getRequest(url,callBackFunction){
    const xhr = new XMLHttpRequest();
    xhr.open('get',url);
    xhr.onreadystatechange = function(e){
        if (xhr.readyState == 4 && xhr.status == 200){
            let response = JSON.parse(xhr.response);
            callBackFunction(null,response);
        }else{
            callBackFunction(xhr.status,null);
        }
    }
    xhr.send();
}

let userUrl = 'https://jsonplaceholder.typicode.com/users'
getRequest(userUrl,(err,res)=>{
    if(err){
        console.log(err);
    }else{
        res.forEach(element => {
            console.log(element.id+'\t'+element.name+'\t'+element.email);            
        });
    }
})


let postsUrl = 'https://jsonplaceholder.typicode.com/posts';

getRequest(postsUrl,(err,res)=>{
    if(err){
        console.log(err);
    }else{
        let i = 1;
        res.forEach((post)=>{
            console.log(i + '|Title :\t'+post.title);
            i++;
        })
    }
})



