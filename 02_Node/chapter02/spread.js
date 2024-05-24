const fruits = ['사과', '바나나', '수박'];
console.log(fruits);
console.log(...fruits);

function conLog(a, b, c) {
    console.log(a, b, c);
}

conLog(...fruits);
