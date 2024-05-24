const promise = new Promise((resolve, reject) => {
    console.log('프로미스 시작!');

    setTimeout(() => {
        console.log('setTimeoout 끝');
        resolve('promise 비동기 구현 성공!');
    }, 2000);
});

console.log(promise);

promise.then((data) => {
    console.log(data);
});
