var Rect = function(width,height){
    var position = {
        x : 20,
        y : 30
    }
    this.Width = width;
    this.Height = height;
    var printAreaAndLine = function(){
        console.log('Rect Area = '+ (this.Width*this.Height));
        console.log('Rect Line =' + (2*(this.Width+this.Height))+'\n\n');
    }.bind(this);
    this.draw = function(){
        console.log('Rect Width'+this.Width);
        console.log('Rect Height ='+this.Height);
        console.log('Position = '+position);
        console.log('Position X = '+position.x);
        console.log('Position Y = '+position.y);
        printAreaAndLine();
    }
}


var rectOne = new Rect(10,2);
var rectTwo = new Rect(2,4);
console.log(rectOne);
rectOne.draw();
console.log(rectTwo);
rectTwo.draw();
console.log(rectOne.position);
console.log(rectOne.Width);
console.log(rectOne.Height);