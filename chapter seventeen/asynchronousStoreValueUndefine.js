let returnName = (name)=>{
    let result;
    setTimeout(()=>{
        result = name;
        console.log('I am Calling Now')
    },3000);
    return result;
}


let myName = returnName('Md Tazri');
console.log(myName)