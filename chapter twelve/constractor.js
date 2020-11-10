var creatRect = function(width,height){
    return {
        Width : width,
        Height : height,
        draw : function(){
            console.log('>>>Rect Width = '+this.Width);
            console.log('>>>Rect Height = '+this.Height);
            this.printAreaAndLine();
        },
        printAreaAndLine : function(){
            console.log('>>>Rect Area = '+(this.Width*this.Height));
            console.log('>>>Rect Line = '+(2*(this.Width+this.Height))+'\n\n');
        }
    }
}


var Rect = function(width,height){
    this.Width = width;
    this.Height = height;
    this.draw = function(){
        console.log('>>>Rect Width = '+this.Width);
        console.log('>>>Rect Height = '+this.Height);
        this.printAreaAndLine();
    };
    this.printAreaAndLine = function(){
        console.log('>>>Rect Area = '+(this.Width*this.Height));
        console.log('>>>Rect Line = '+(2*(this.Width+this.Height))+'\n\n');
    }
}

var rectOne = creatRect(20,30);
var rectTwo = new Rect(3,4);
var rectThree = {
    Width : 3,
    Height : 5,
    draw : function(){
        console.log('>>>Rect Width = '+this.Width);
        console.log('>>>Rect Height = '+this.Height);
        this.printAreaAndLine();
    },
    printAreaAndLine : function(){
        console.log('>>>Rect Area = '+(this.Width*this.Height));
        console.log('>>>Rect Line = '+(2*(this.Width+this.Height))+'\n\n');
    } 
}

console.log(rectOne);
rectOne.draw();
console.log(rectTwo);
rectTwo.draw();
console.log(rectThree);
rectThree.draw();

console.log(rectOne.constructor);
console.log(rectTwo.constructor);
console.log(rectThree.constructor);

var str = String('Md Tazri');
console.log(str);
console.log(str.constructor);
var newStr = new String('Md Tazri');
console.log(newStr);
console.log(newStr.constructor);

console.log('Hello '+newStr);

