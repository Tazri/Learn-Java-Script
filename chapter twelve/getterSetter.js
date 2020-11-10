var Rect = function(width,height){
    this.Width = width;
    this.Height = height;
    var positionOne = {
        x : 90,
        y : 50
    };
    var positionTwo = {
        x : 111,
        y: 444
    }
    var printAreaAndLine = function(){
        console.log('Rect Area = '+(this.Width*this.Height));
        console.log('Rect Line = '+(2*(this.Width+this.Height))+'\n\n');
    }.bind(this);
    this.getPosition = function(){
        return positionOne;
    }
    this.draw = function(){
        console.log('Rect Width = '+this.Width);
        console.log('Rect height = '+ this.Height);
        console.log('Position X = '+positionOne.x);
        console.log('Position Y = '+positionTwo.y);
        printAreaAndLine();
    }
    Object.defineProperty(this,'position',{
        get: function(){
            return positionTwo;
        },
        set : function(value){
            if(typeof(value)=='object'){
                positionTwo = value;
            }else{
                console.log('Error');
            }   
        }
    })

}


var rectOne = new Rect(10,20);
var rectTwo = new Rect(3,4);

console.log(rectOne);
rectOne.draw();
console.log(rectTwo);
rectTwo.draw();
console.log(rectOne.getPosition());
console.log(rectOne.position);
console.log(rectTwo.position);
console.log(rectTwo.getPosition());

rectOne.position = {
    x: 555,
    y: 222
}

console.log(rectOne.position);


rectTwo.position = 'blablabla';

rectTwo.position = {
    x :3,
    y : 4
}
console.log(rectTwo.position);




