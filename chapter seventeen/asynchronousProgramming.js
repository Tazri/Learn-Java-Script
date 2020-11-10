let printLine = (line)=>{
    console.log('This is '+line);
}

printLine('One');


setTimeout(()=>{
    console.log('This is Two')
},5000);
printLine('Three');
setTimeout(()=>{
    console.log('This is Four');
},0);
setTimeout(()=>{
    console.log('This is Five')
},3000);


setTimeout(()=>{
    console.log('>>>>Thats Means JavaScript Asynchronous Programming<<<<');
},6000);