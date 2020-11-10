var a = 11;
function A(){
	var b = 12;
	function B(){
		var c = 23;
		console.log(c);
	}

	function C(){
		var d =56;
		console.log(d);
	}
	console.log(b)
	D();
	B();
	c();
}
function D(n){
	return n + a;
}

// GLobal scope: 
//var a;
//Accessing Function  A,B,C,D

//Scope A:
//var b;
//Accessing Function B,C;

//Scope B:
//var c;
//Accessing Function NONE;

//Scope C:
//var d;
//Accessing Function NONE;

//Scope D:
//var NONE;
//Accessing Function NONE;
  
//Accessing 
//Function A >>>  var  a,b; Function B(),C(),D(),A();
//Function B >>> var  c,b,a; Function B(),A(),D(),C();
//Function C >>> var  d,b,a; Function B(),A(),D(),C();
//Function D >>> var  a,n; Function A();
