//Shape class
class Shape{
    constructor(color){
        this.color = color;
        this.position = {
            x : 10,
            y : 20
        };
    }
    draw(){
        console.log('Drawing......');
    }
}
//end shape class


//Rect Class
class Rect extends Shape{
    constructor(width,height,color){
        super(color);
        this.width = width;
        this.height = height;
    }
    draw(){
        console.log('Drawing Rect....');
    }
    area(){
        return this.width*this.height;
    }
}
//End Rect Class

//Circle Class
class Circle extends Shape{
    constructor(radius,color){
        super(color);
        this.radius = radius;
    }
    draw(){
        console.log('Drawing Circle.....');
    }
    area(){
        return Math.PI*this.radius*this.radius;
    }
}
//End Circle Class


let rectOne = new Rect(23,2,'Green')
let circleOne = new Circle(34,'Crimson');


console.log(rectOne);
console.log(circleOne);
console.log(rectOne.area());
console.log(circleOne.area());
rectOne.draw();
circleOne.draw();
console.log(rectOne.position);
console.log(rectOne.position);


