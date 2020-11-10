//array remove and replace 

//Replace
console.log('\n>>>>>Replace<<<<<\n');

var arr = ['Md Tazri','Pntm Focasa','L Lawliet','Light','Levi','Naruto','Kaneki'];

arr[3] = 'Erwine';
console.log(arr);

arr.push('Meduria');
console.log(arr);

arr.unshift('Eren');
console.log(arr);

arr.splice(3,0,'Kyigs Stone');
console.log(arr);

arr[7] = 'Mike';
console.log(arr);

arr.splice(8,1,'All for One','One for All');
console.log(arr);

//Remove
console.log('\n>>>>>Remove<<<<<\n')
arr.pop();
console.log(arr);
arr.shift(arr);
console.log(arr);
arr.splice(6,1);
console.log(arr);