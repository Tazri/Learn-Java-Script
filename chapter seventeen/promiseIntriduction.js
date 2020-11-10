let promiseOne = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'One');
});
console.log(promiseOne);   

let promiseTwo = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,'Two')
})

promiseOne.then((v)=>{
    console.log(v);
}).catch((e)=>{
    console.log(e);
})

promiseTwo.then((v)=>{
    console.log(v);
}).catch((e)=>{
    console.log(e);
})


function getIphone(isPassed){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isPassed){
                resolve('I Will get iphone from my father');
            }else{
                reject(new Error('I am failed'));
            }
        },3000);
    })
}




let isIGetIphone = getIphone(true);

console.log(isIGetIphone);
isIGetIphone.then((v)=>{
    console.log(v);
}).catch((e)=>{
    console.log(e.message);
})


getIphone(false).then((v)=>{
    console.log(v);
}).catch((e)=>{
    console.log(e.message);
})