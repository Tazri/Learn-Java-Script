let numberArr = [3,4,5,7,8,5,4];

let numberArrSqr = numberArr.map(v=>v*v);

console.log(numberArrSqr);


function asynMap(array,callBackFunction){
    return array.map(v=>{
        setTimeout(() => {
            callBackFunction(v);
        }, 0);
    })
}


let qubeNumbers = asynMap(numberArr,v =>{
    console.log(v*v*v);
    return v*v*v
});
console.log(qubeNumbers)