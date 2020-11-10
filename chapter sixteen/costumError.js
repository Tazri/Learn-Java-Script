class costumError extends Error{
    constructor(msg){
        super(msg);
        if(Error.captureStackTrace){
            Error.captureStackTrace(this,costumError);
        }
    }
}

try{
    console.log('Hello Worlds!');
    console.log('What\'s Up World!');
    throw new costumError('It is Error');
    console.log('Good Morning World');
}catch(e){
    console.log(e.message);
}finally{
    console.log('This is Finally Block');
}