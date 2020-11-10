let baseUrl = 'https://jsonplaceholder.typicode.com'
// function myPromiseOne(){
//     return Promise.resolve(45);
// }

// console.log(myPromiseOne());

// myPromiseOne().then(v=>{
//     console.log('v = ',v);
// })


// async function myPromiseTwo(){
//     return 100;
// }


// console.log(myPromiseTwo);
// console.log(myPromiseTwo());
// myPromiseTwo().then(v=>{
//     console.log(v);
// })


// let promiseThree = new Promise(resolve=>{
//     setTimeout(resolve,5000,'This Function is Done');
// })


// async function myAsyncFunction(){
//     let value = await promiseThree;
//     console.log(value);
// }


// myAsyncFunction();

// console.log(myAsyncFunction);
// console.log(myAsyncFunction());
// myAsyncFunction().then(v=>{
//     console.log(v);
// })


// async function fetchData(url){
//     let res = await fetch(url);
//     return await res.json();
// }


// fetchData(`${baseUrl}/users`)
//     .then(usersArray=>{
//         let i = 1;
//         usersArray.forEach(user=>{
//             console.log(i+'/'+user.name);
//             i++;
//         })
//     })


// async function fetchData(url){
//     try{
//         let res = await fetch(url);
//         return await res.json();
//     }catch{
//         return e.message;
//     }
// }


// fetchData(`${baseUrl}/userss`)
//     .then(value=>{
//         console.log(value);
//     })


let promiseArray = [Promise.resolve('One'),Promise.resolve('Two'),Promise.resolve('Three')];

async function printPromiseResolveValue(){
    let array = await Promise.all(promiseArray);
    console.log(array);
}


printPromiseResolveValue();
