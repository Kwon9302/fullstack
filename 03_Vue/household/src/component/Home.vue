<template>
    <div>
        <h1>메인 홈페이지 꾸미기</h1>
        <input
            type="text"
            v-memol.trim="deposit"
            placeholder="수익 금액을 입력해주세여"
        />
        <button @click="">입금</button>
    </div>
</template>

<script setup>
import { ref } from "vue";

const deposit = ref(0);
</script>
