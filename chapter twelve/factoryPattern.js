function createRect(width,height){
    return {
        Width : width,
        Height : height,
        draw : function(){
            console.log('>>>Rect Width = '+this.Width);
            console.log('>>>Rect height = ' + this.Height);
            this.printAreaAndLine();
        },
        printAreaAndLine : function(){
            console.log('>>>Rect Area = '+(this.Width*this.Height));
            console.log('>>>Rect Line = '+(2*(this.Width+this.Height))+'\n\n');
        }
    }
}


var rectOne = createRect(100,2);
var rectTwo = createRect(30,3);
var rectThree = createRect(2,3);

console.log(rectOne);
rectOne.draw();
console.log(rectTwo);
rectTwo.draw();
console.log(rectThree);
rectThree.draw();

