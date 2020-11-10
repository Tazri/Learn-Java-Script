
//Rect Constructo
var Rect = function(width,height,color){
    this.width = width;
    this.height = height;
    ShapeAndPrint.call(this,color);
    var position = {
        x : 3,
        y : 4
    }
    Object.defineProperty(this,'position',{
        get : function(){
            return position;
        },
        set : function(value){
            return position = value;
        }
    })
}
//End Rect Constructor

//Circle Constructor
var Circle = function(r,color){
    this.radius = r;
    ShapeAndPrint.call(this,color);
    var position = {
        x : 8,
        y : 8
    }
    Object.defineProperty(this,'position',{
        get : function(){
            return position;
        },
        set : function(value){
            return position = value;
        }
    })
}
//End Circle Constructor

//ShapeAndPrint Constructor
function ShapeAndPrint(color){
    this.color = color;
}
//End ShapeAndPrint Constructor

//Set ShapeAndPrint Prototype
ShapeAndPrint.prototype = {
    common : function(){
        return 'I am common function'
    },
    printAreaAndLine :function(){
        if(this.width != undefined && this.height != undefined){ 
            console.log('>>>Rect Area = '+(this.width*this.height));
            console.log('>>>Rect Line = '+(2*(this.width+this.height))+'\n\n');
        }else if(this.radius != undefined){
            console.log('>>>Circle Area = '+(this.radius*this.radius*(Math.PI)));
            console.log('>>>Circle Line = '+(2*Math.PI*this.radius)+'\n\n');
        }else{
            console.log('>>>This is not shape so no area and no line. \n\n')
        }
    },
    draw : function(){
        if(this.width != undefined && this.height != undefined){
            console.log('Rect width = '+this.width);
            console.log('Rect Height = '+this.height);
            console.log('Rect Position x = '+this.position.x);
            console.log('Rect Position y = '+this.position.y+'\n\n');
            this.printAreaAndLine();
        }else if(this.radius != undefined){
            console.log('Circle Radius = '+ this.radius);
            console.log('Circle position x = '+this.position.x);
            console.log('Circle Position y = '+this.position.y+'\n\n');
            this.printAreaAndLine();
        }else{
            this.printAreaAndLine();
        }
    }
}
//End set ShapeAndPrint protoType

//Create Extend Function For Child Inheritance Prototype From Parent
function myExtends(parent,child){
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}


//Inheritance Rect from ShapeAndPrint Constructor
myExtends(ShapeAndPrint,Rect);
//End Inheritance Rect from ShapeAndprint COnstructor


//Inheritance Circle From ShapeAndPrint Constructor;
myExtends(ShapeAndPrint,Circle); 
//End Inheritance Circle From ShapeAndPrint Constructor;



//Some Test
var rectOne = new Rect(38,49,'blue');
var circleOne = new Circle(3,4,'Green');
console.log(rectOne);
console.log(rectOne.position);
console.log(circleOne);
console.log(circleOne.position);

console.log(rectOne.draw())



var rectTwo = new Rect(3,4,'DarkGreen');

console.log(rectTwo);
console.log(rectTwo.draw());


var circleTwo = new Circle(6,'textyle');


console.log(circleTwo);
console.log(circleTwo.draw())



var rectThree = new Rect.prototype.constructor(3,4,'crimson');

console.log(rectThree);
rectThree.draw();

var circleFour = new Circle(4,'red');
console.log(circleFour);
circleFour.draw();
circleFour.common();
rectThree.common();

//overiding Rect common property
Rect.prototype.common = function(){
    // ShapeAndPrint.prototype.common.call(this);
    return 'I am Rect and it overriding';
}

//overriding circle common property
Circle.prototype.common = function(){
    return 'I am Circle And it overriding';
}


var rectFive = new Rect(4,5,'Green');

console.log(rectFive);
rectFive.draw();
rectFive.common();

var shapeTwo = new ShapeAndPrint('Crimson');
var circleSix = new Circle(45,'Yellow');
var rectSix = new Rect(45,65,'blue');

console.log(shapeTwo);
console.log(circleSix);
console.log(rectSix);


console.log(shapeTwo.common());
console.log(circleSix.common());
console.log(rectSix.common());

var arrShape = [shapeTwo,circleSix,rectSix];

for(var i of arrShape){
    console.log(i.common());
}



