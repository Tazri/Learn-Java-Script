let changeIt = (number)=>{
    let result = Number.parseInt(number);
    if(!result){
        return '>>>>Please provide Integer or Float Number<<<<';
    }
    return result;
}


console.log(changeIt(5));
console.log(changeIt('34lasjflj'));
console.log(changeIt('34'));
console.log(changeIt('[]'));
console.log(changeIt([]));
console.log(changeIt('sfdkaljsfdjasl'));