var  num = 30;
function one(){
    console.log(num);
}
var twoo = one;
console.dir(twoo);

function two(){
    var x = 'Md Tazri';
    return function(){
        console.log(x);
    }
}

var four = two();
console.dir(four);