const _radius = Symbol();
const _naming = Symbol();
class Circle{
    constructor(radius){
        this[_radius] = radius;
        this.area = Math.PI*this[_radius]*this[_radius];
    }
    [_naming](){
        console.log('Circling...');
    }
    draw(){
        console.log('Drawing...');
        this[_naming]();   
    }
}


let circleOne = new Circle(4);

console.log(circleOne);
console.log(circleOne.area);
console.log(circleOne)
circleOne[_naming]();
circleOne.draw();


console.log(Object.getOwnPropertyNames(circleOne));
console.log(Object.getOwnPropertySymbols(circleOne));


let keyOne = Object.getOwnPropertySymbols(circleOne)[0];

console.log(circleOne[keyOne]);


