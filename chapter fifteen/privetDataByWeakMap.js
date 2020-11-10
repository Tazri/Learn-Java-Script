const _name = new WeakMap();
const _radius = new WeakMap();
const _resize = new WeakMap();
class Circle{
    constructor(radius,name){
        this.size = 100;
        _radius.set(this,radius);
        _name.set(this,name);
        _resize.set(this,()=>{
            console.log(this.size);
        })
    }
    get radius(){
        return _radius.get(this);
    }
    set radius(value){
        return _radius.set(this,value);
    }
    get name(){
        return _name.get(this);
    }
    set name(value){
        return _name.set(this,value)
    }
    draw(){
        console.log('Drawing....');
        _resize.get(this)();
        console.log(_radius.get(this),_name.get(this))
    }
}



let circleOne = new Circle(23,'Cred');

console.log(circleOne);
circleOne.draw();
console.log(circleOne.radius);
console.log(circleOne.name);
circleOne.radius= 20202;
console.log(circleOne.radius);
circleOne.draw()


console.log(circleOne.name);
circleOne.name = 'Ccrimson';
console.log(circleOne.name);
