var students = [];

students.push({
    이름: '윤인성',
    국어: 80,
    수학: 50,
    영어: 20,
    과학: 5,
});

for (var i in students) {
    students[i].getSum = function () {
        return this.국어 + this.수학 + this.영어 + this.과학;
    };
}

students[i].getAverage = function () {
    console.log(this.getSum());
    return this.getSum();
};
