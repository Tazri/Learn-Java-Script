let itearableAsyncObject = {
    [Symbol.iterator](){
        let counter = 0;
        return{
            next(){
                if(counter<5){
                    return Promise.resolve({
                        value : counter++,
                        done : false
                    })
                }else{
                    return Promise.resolve({
                        done: true
                    })
                }
            }
        }
    }
};


// let iterate = itearableAsyncObject[Symbol.iterator]();

// console.log(iterate.next(0));


// (async function(){
//     for await (let value of itearableAsyncObject){
//         console.log(value);
//     }
// })()
// Start infinite Loop and The Value is Undefine.


