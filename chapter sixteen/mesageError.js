let makeWords = (str)=>{
    try{
        return str.trim().split(' ');
    }catch(e){
        // return e.message;
        // console.log(e)
        return '>>>Provie Valid Text<<<'
    }
}

console.log(makeWords(45))