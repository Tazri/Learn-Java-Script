// let Rect = function(width,height){
//     this.width = width;
//     this.height = height;
// }

// Rect.prototype.draw = function(){
//     console.log(this);
//     console.log('Drawing...');
// }

// let rectOne = new Rect(3,4);

// console.log(rectOne);
// rectOne.draw();

class Rect{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    draw(){
        console.log(this);
        console.log('Drawing...');
    }
}


let rectOne = new Rect(3,4);
console.log(rectOne);
rectOne.draw();