var ract = {
    width : 150,
    height : 100,
    draw : function(){
        console.log('>>>Ract Width = '+this.width);
        console.log('>>>Ract Height = '+this.height);
        console.log('>>>Ract Area = '+(this.width*this.height));
        console.log('>>>Ract Line = '+(2*(this.width+this.height))+'\n');
    }
}

console.log(ract.width);
console.log(ract.height);
ract.draw();
ract.height = ract.width;
ract.draw();

