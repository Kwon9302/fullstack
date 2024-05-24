const promise = new Promise((resolve, reject) => {
    console.log('나 로또 사도 될까!?');

    setTimeout(() => {
        const rand = parseInt(Math.random() * 10);
        console.log(`나온 숫자는 ${rand}`);

        if (rand >= 5) {
            resolve(rand);
        } else {
            reject(rand);
        }
    }, 2000);
});

async function lottoAsyncAwait() {
    const data = await promise;
    console.log(data);
}

lottoAsyncAwait();

// promise
//     .then((rand) => {
//         console.log('아싸! 로또ㄱㄱ');
//     })
//     .catch((rand) => {
//         console.log('아.. 망했어요..');
//     });

// function showResult(msg, num) {
//     console.log(msg);
// }
