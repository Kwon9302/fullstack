const obj1 = { name: '박문수', age: 29 };
const obj2 = { ...obj1, email: 'mspark@gmail.com' };
console.log(obj2);

// { name: '박문수', age: 29, email: 'mspark@gmail.com' }
