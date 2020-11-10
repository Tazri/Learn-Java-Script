try{
    console.log('Hello World');
    console.log('What\'s Up Worlds');
    throw new Error('>>>>It is Error<<<<');
    console.log('Good morning World');
}catch(e){
    console.log(e.message);
}finally{
    console.log('It Finally Block');
}