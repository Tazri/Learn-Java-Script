try{
    console.log('Hello World!');
    console.log('What\'s Up World');
    throw new Error('It is Error Please Try again');
    console.log('GoodMorning World');
}catch(e){
    console.log(e.message)
}