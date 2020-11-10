var Rect = function(width,height){
    this.Width = width;
    this.Height = height;
    this.draw = function(){
        console.log('>>>Rect Width = '+this.Width);
        console.log('>>>Rect Height = '+this.Height);
        this.printAreaAndLine();
    }
    this.printAreaAndLine = function(){
        console.log('>>>Rect Area = '+(this.Width*this.Height));
        console.log('>>>Rect Line = '+(2*(this.Width+this.Height))+'\n\n');
    }
}


var rectOne = new Rect(200,400);
var rectTwo = new Rect(2,4);
var rectThree = new Rect(5,2);

console.log(rectOne);
rectOne.draw();
console.log(rectTwo);
rectTwo.draw();
console.log(rectThree);
rectThree.draw();