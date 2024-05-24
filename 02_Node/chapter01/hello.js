const hello = (name) => {
    console.log(`${name}님, 안녕하세요?`);
};
module.exports = hello; // hello 함수 내보내기

exports.hello = (name) => {
    console.log(`${name}님, 안녕하세요?`);
};

// const user = '홍길동';

// module.exports = user;
