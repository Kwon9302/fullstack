function addContact(
    name,
    mobile,
    home = '없음',
    address = '없음',
    email = '없음'
) {
    // console.log(name, mobile, home, address, email);
    console.log(
        `name : ${name}, mobile = ${mobile}, home = ${home}, address=${address}, email = ${email}`
    );
}
addContact('홍길동', '010-222-3331');
addContact('이몽룡', '010-222-3331', '02-3422-9900', '서울시');
