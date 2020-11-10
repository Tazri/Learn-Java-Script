let delay = (s)=> new Promise(resolve => setTimeout(resolve,s*1000));



// delay(1).then(()=>{
//     console.log('Now One Secound Gone');
// })

// delay(2).then(()=>{
//     console.log('Now Two Secound Gone');
// })

// delay(3).then(()=>{
//     console.log('Now Three Secound Gone');
// })

// delay(4).then(()=>{
//     console.log('Now Four Secound Gone');
// })

// delay(5).then(()=>{
//     console.log('Now Five Secound Gone');
// })


let resolveOne = Promise.resolve('Hello World\'s!');
let rejectOne = Promise.reject(new Error('Error occured'));

resolveOne.then(value=>{
    console.log(value);
})

rejectOne.catch(error=>{
    console.log(error.message);
})


let resolvePromiseOne = Promise.resolve('One');
let resolvePromiseTwo = Promise.resolve('Two');
let resolvePromiseThree = Promise.resolve('Three');

let promiseArrayOne = [resolvePromiseOne,resolvePromiseTwo,resolvePromiseThree];

Promise.all(promiseArrayOne)
        .then(v=>{
            console.log(v);
        })

let promiseOne = new Promise(resolve=>{
    setTimeout(resolve,1000,'One');
})

let promiseTwo = new Promise(resolve=>{
    setTimeout(resolve,2000,'Two');
})

let promiseThree = new Promise(resolve=>{
    setTimeout(resolve,3000,'Three');
})

let promiseArrayTwo = [promiseOne,promiseTwo,promiseThree]

Promise.all(promiseArrayTwo)
        .then(valueArray =>{
            for(let counter = 0;counter < valueArray.length;counter++){
                console.log(valueArray[counter]);
            }
        })



let promiseFour = new Promise(resolve=>{
    setTimeout(resolve,4000,'Four');
})

let promiseFive = new Promise(resolve=>{
    setTimeout(resolve,3000,'Five')
})

let promiseSix = new Promise(resolve =>{
    setTimeout(resolve,2000,'Six')
})



let promiseArrayThree = [promiseFour,promiseFive,promiseSix];

Promise.race(promiseArrayThree)
        .then(value=>{
            console.log(value);
        })