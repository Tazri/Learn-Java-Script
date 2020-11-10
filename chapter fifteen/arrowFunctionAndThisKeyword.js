let simpleObject = {
    Name : 'Pentm Focasa',
    Print : function(){
        setTimeout(()=>{
            console.log(this);
            console.log(this.Name);
        },2000)
    }
}


simpleObject.Print()