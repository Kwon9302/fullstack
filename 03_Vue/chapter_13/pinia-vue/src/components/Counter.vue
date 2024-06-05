<template>
    <div>
        <h1>Counter</h1>
        <h1>count : {{ count }}</h1>
        <h1>count x 2 : {{ doubleCount }}</h1>
        <button @click="increment">+1</button>
    </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
import { computed } from "vue";

const counterStore = useCounterStore();
const { increment } = counterStore;

//원시형 데이터타입은 computed로 호출(읽기전용 + 반응성 유지)
const count = computed(() => counterStore.count);
const doubleCount = computed(() => counterStore.doubleCount);
</script>
