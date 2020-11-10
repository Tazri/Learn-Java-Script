function greet(msg){
    return function(name){
        return '>>>' + msg + ' ' + name;
    }
}

var goodMoorning = greet('Good Moornig!');
var whatsUp = greet('What\'s up!');
var goodNight = greet('Good Night!');

console.log(goodMoorning('Tazri'));
console.log(whatsUp('World!'));
console.log(goodMoorning('Levi'));
console.log(goodNight('L LawLiet'));
console.log(whatsUp('L LawLiet'));
console.log(goodMoorning('L LawLiet'));

function base(baseNumber){
    return function(power){
        var result = 1
        for(var i = 0;i < power;i++){
            result *= baseNumber
        }
        return result;
    }
}

console.log(base(2)(3));
console.log(base(5)(3));
console.log(base(5)(5));
console.log(base(7)(2));
console.log(base(5)(7));
console.log(base(2)(64));
console.log(base(2)(124));
