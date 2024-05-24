let arr1 = [100, 200, 300];
let arr2 = ['hello', ...arr1, 'world'];
const arr3 = [...arr1];

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr1 === arr3);
// [ 100, 200, 300 ]
//  [ 'hello', 100, 200, 300, 'world' ]
