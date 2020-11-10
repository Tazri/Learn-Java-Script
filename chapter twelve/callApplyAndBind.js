//Call ,apply and Bind


var CreateObj = function(a,b){
    this.a = a;
    this.b = b;
}


var obj = new CreateObj(10,20);
var objOnw = new CreateObj(5,2);

function simpleSumFunction(numOne,numTwo){
    console.log(this.a+this.b+numOne+numTwo);
}


simpleSumFunction.call(obj);
simpleSumFunction.apply(obj);
simpleSumFunction.call({a:4,b:4});
simpleSumFunction.apply({a:3,b:4});
simpleSumFunction.call(obj,2,3);
simpleSumFunction.call({a:3,b:4},4,5);

simpleSumFunction.apply(obj,[3,2]);
simpleSumFunction.apply({a:3,b:4},[3,4]);

var test = simpleSumFunction.bind(obj);

test(3,4);

var testOne = simpleSumFunction.bind({a:4,b:5});

testOne(1,1);
