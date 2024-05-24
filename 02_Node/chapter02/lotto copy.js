function shouldIBuyLotto(callback) {
    console.log('나 로또 사도 될까!?');
    setTimeout(() => {
        const rand = parseInt(Math.random() * 10);
        console.log(`나온 숫자는 ${rand}`);
        // rand 가 5 이상이면 로또 사자!
        if (rand >= 5) {
            callback('아싸! 로또 사자!');
        } else {
            callback('아... 망했어요...');
        }
    }, 3000);
}
function showResult(msg) {
    console.log(msg);
}
shouldIBuyLotto(showResult);
