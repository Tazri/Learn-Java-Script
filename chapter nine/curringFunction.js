function sumOfThreeNumber(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}


console.log(sumOfThreeNumber(100)(30)(49));
console.log(sumOfThreeNumber(200)(300)(300));
console.log(sumOfThreeNumber(34)(3443)(34488));
