var ract = {
    width : 5,
    height : 2,
    draw : function(){
        console.log('>>>Ract Width = '+this.width);
        console.log('>>>Ract Height = '+this.height);
        this.printAreaAndLine();
    },
    printAreaAndLine : function(){
        console.log('>>>Ract Area = '+(this.width*this.height));
        console.log('>>>Ract Line = '+(2*(this.width+this.height))+'\n');
        console.log(this);
    }
}

console.log(ract.width);
console.log(ract.height);
ract.draw();
ract.height = ract.width;
ract.draw();

function simpleFunction(){
    console.log(this);
    ract.printAreaAndLine();
}

simpleFunction();

var another = {
    width : 20,
    height : 2,
    print : ract.printAreaAndLine
}

another.print();






