let simpleObject = {
    start : 1,
    end : 5,
    [Symbol.iterator]:function(){
        let counter = this.start;
        let self = this;
        return {
            next(){
                return{
                    done : counter > self.end,
                    value : counter > self.end ? undefined : counter++,
                }
            }
        }
    }
}


// for(let v of simpleObject){
//     console.log(v);
// }


let simpleObjectLterator = simpleObject[Symbol.iterator]();


console.log(simpleObjectLterator.next());
console.log(simpleObjectLterator.next());
console.log(simpleObjectLterator.next());
console.log(simpleObjectLterator.next());
console.log(simpleObjectLterator.next());
console.log(simpleObjectLterator.next());
console.log(simpleObjectLterator.next());
console.log(simpleObjectLterator.next());
