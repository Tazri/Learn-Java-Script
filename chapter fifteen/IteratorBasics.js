let simpleNumberArray = [1,2,3,4];
let simpleNameArray = ['Pentm Focasa','Md Tazri','L LawLiet','Erwine'];


let myIterator = (collection)=>{
    let i = 0;
    return{
        next:()=>{
            return{
                Done : i >= collection.length,
                Value : collection[i++] 
            }
        }
    }
}



let iteratOnNum = myIterator(simpleNumberArray);

console.log(iteratOnNum.next());
console.log(iteratOnNum.next());
console.log(iteratOnNum.next());
console.log(iteratOnNum.next());
console.log(iteratOnNum.next());


let iteratOnName = myIterator(simpleNameArray);

console.log(iteratOnName.next());
console.log(iteratOnName.next());
console.log(iteratOnName.next());
console.log(iteratOnName.next());
console.log(iteratOnName.next());
console.log(iteratOnName.next().Done);
console.log(iteratOnName.next().Value);