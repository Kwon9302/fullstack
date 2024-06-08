<template>
    <div>
        <h1>Login</h1>
        아이디:<input type="text" v-model.trim="userId" />
        <br />
        패스워드:<input type="password" v-model.trim="userPassword" />
        <br />
        <button @click="login">로그인</button>
        &nbsp;
        <button @click="logout">로그아웃</button>
    </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

const userId = ref("");
const userPassword = ref("");

// npx json-server db.json -- 서버 실행.
async function login() {
    try {
        // db 서버 url설정
        const url = "http://localhost:3000/users";
        const loginRes = await axios.get(url);

        console.log(loginRes);

        // 여기서 data는 db.json에서 입력한 json형태의 id, password 배열값들
        const userArr = loginRes.data;

        //item은 userArr 배열의 각 개체, index는 그 배열의 index값.
        const findedUser = userArr.find(
            (item, index) => item.id === userId.value
        );

        // undefined --> null같은 느낌
        if (findedUser === undefined) {
            return alert("해당 id를 가진 사용자가 없습니다.");
        }

        // .password는 db.json에서 이름을 password: 으로 설정했다.
        if (findedUser.password !== userPassword.value) {
            return alert("비밀번호가 땡");
        }

        localStorage.setItem("auth", "true");

        alert("로그인 성공");

        // console.log(userArr)
    } catch (e) {
        alert("로그인 과정에 문제 발생!");
        console.log(e);
    }
}

async function logout() {
    localStorage.removeItem("auth");
}
</script>
