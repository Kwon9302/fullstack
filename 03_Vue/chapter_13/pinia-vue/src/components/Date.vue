<template>
    <div>
        <h1>Date</h1>
        <h1>{{ dateMsg }}</h1>
        <div>
            <button @click="getYear">년도 출력</button>
            <button @click="getMonth">월 출력</button>
            <button @click="getDate">일자 출력</button>
        </div>
    </div>
</template>

<script setup>
import { useDateStore } from "@/stores/date";
import { computed } from "vue";

const dateStore = useDateStore();
const { getYear, getMonth, getDate } = dateStore;

const dateMsg = computed(() => dateStore.dateMsg);
</script>
