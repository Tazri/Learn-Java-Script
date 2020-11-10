function add(a,b,c,d){
    console.log(arguments);
}
add();
function b(a,b,c,d){
    console.log(JSON.stringify(arguments));
}
b();

add(4,5,6,7);
b(4,5,6,7);

function Add(){
    var sum = 0;
    for(var i = 0;i < arguments.length;i++){
        sum += arguments[i];
    }
    console.log(sum);
}

Add(4,5,67,85,56,76);
Add('Pntm ','Focasa');
Add(39,49,59);
Add('Md',' ','Tazri')