<template>
    <div>
        <h1>Vue3 Counter</h1>
        <h2>Count : {{ count }}</h2>
        <h2>두배로! {{ double }}</h2>
        <h2>지금까지 계산한 횟수 {{ totalCount }}</h2>
        <button @click="increament">Increament</button>
        <button @click="decreament">Decreament</button>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';

const count = ref(1);
const double = computed(() => {
    return count.value * 2;
});
const totalCount = ref(0);

function increament() {
    count.value++;
    totalCount.value++;
}

function decreament() {
    count.value--;
    totalCount.value++;
}
</script>
