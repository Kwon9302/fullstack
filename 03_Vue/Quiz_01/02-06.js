function foodReport(name, age, ...anything) {
    this.name;
    this.age;
    console.log(name, age);
    console.log(anything);
}
foodReport('이몽룡', 20, '짜장면', '냉면', '불고기');
foodReport('홍길동', 16, '초밥');

// 이몽룡, 20
//  [ '짜장면', '냉면', '불고기' ]
// 홍길동, 16
//  [ '초밥' ]
