export const sum = (...numbers)=>{
    return numbers.reduce((numberOne,numberTwo)=> numberOne+numberTwo
    )
}

export const fact = (num)=>{
    if(num == 1){
        return 1
    }
    return num*fact(num-1);
}
