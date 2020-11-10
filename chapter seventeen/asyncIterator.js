let asyncIterator = {
    [Symbol.asyncIterator](){
        let counter =0;
        return {
            next(){
                return Promise.resolve({
                    value: counter<5?counter++:undefined,
                    done: counter<5
                })
            }
        }
    }
}



let itAsyncIterator = asyncIterator[Symbol.asyncIterator]();

(async function callNow(){
    console.log(itAsyncIterator.next());
    console.log(await itAsyncIterator.next());
    console.log(await itAsyncIterator.next());
    console.log(await itAsyncIterator.next());
    console.log(await itAsyncIterator.next());
    console.log(await itAsyncIterator.next());
    console.log(await itAsyncIterator.next());
})();



// console.log(itAsyncIterator);
// itAsyncIterator.next().then(value=>{
//     console.log(value);
// })
// console.log(itAsyncIterator.next());
// console.log(itAsyncIterator.next());
// console.log(itAsyncIterator.next());
// console.log(itAsyncIterator.next());
// console.log(itAsyncIterator.next());
// console.log(itAsyncIterator.next());

// itAsyncIterator.next().then(value=>{
//     console.log(value);
// })





