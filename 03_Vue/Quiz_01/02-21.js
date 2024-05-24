const p = new Promise((res, rej) => {
    setTimeout(() => {
        let num = Math.random();
        if (num >= 0.8) return res(num);
        return rej(num);
    }, 2000);
});
// p.then((result) => {
//     console.log('처리 결과 : ', result);
// }).catch((error) => {
//     console.log('오류 : ', error);
// });
// console.log('## Promise 객체 생성!');

async function asyncFunc() {
    try {
        const a = await p;
        console.log('생성된 숫자가 0.8 이상임' + a);
    } catch (error) {
        console.log('에러 : ' + error);
    }
}

asyncFunc();
