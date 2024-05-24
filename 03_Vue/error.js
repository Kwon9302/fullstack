const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //0 ~ 10 사이의 난수 발생
        let num = parseInt(Math.random() * 10);
        if (num >= 5) {
            resolve(num);
        }
        reject(num);
    }, 1000);
});
// promise
//     .then((result) => {
//         console.log('무사 통과! 생성된 숫자 :', result);
//     })
//     .catch((error) => {
//         console.log('Error 발생! 생성된 숫자 :', error);
//     });

// try - catch, async

async function asfnc() {
    try {
        const result = await promise;
        console.log('무사 통과! 생성된 숫자 :', result);
    } catch (error) {
        console.log('Error 발생! 생성된 숫자:', error);
    }
}
asfnc();

console.log('## Promise 객체 생성!');
