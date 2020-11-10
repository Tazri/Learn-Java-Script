var Rect = function(width,height){
    this.width = width;
    this.height = height;
    this.myMethods = function(){
        console.log('What\'s up world\'s!');
        this.draw();
    }
}

Rect.prototype = {
    draw : function(){
        console.log('>>>Rect Width = '+this.width);
        console.log('>>>Rect height = '+this.height);
    },
    toString : function(){
        return 'Rect Width = '+this.width+'\t Rect Height ='+this.height;
    }
}


var rectOne = new Rect(29,30);
var rectTwo = new Rect(3,4);
var rectThree = new Rect(4,5);
var rectFour = new Rect(4,5);
console.log(rectOne);
console.log(rectOne);
console.log(rectTwo);
console.log(rectThree);
console.log(rectFour);

rectOne.draw();
console.log(rectOne.toString());
rectOne.draw();
rectOne.myMethods();

console.log(rectOne.hasOwnProperty('width'));
console.log(rectOne.hasOwnProperty('draw'));
console.log(Object.keys(rectOne));

console.log(Object.keys(rectOne));


for(var i in rectOne){
    console.log(i);
}
