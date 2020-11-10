var num = 30;
var Name = "Pntm Focasa"
console.log(num);
console.log(Name)

function b(){
    var num = 90
    Name = 'Tazri'
    console.log(Name,num);
}

b();
console.log(num);
console.log(Name);


function one(){
    var numOne = 48;
    function two(){
        console.log(numOne);
        numOne = 100;
    }
    two();
    console.log(numOne);
}
one();