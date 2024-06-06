<template>
    <div>
        <h1>Date</h1>
        <h1>{{ xx }}</h1>
        <!-- <h1>{{ dateMsg }}</h1> -->
        <div>
            <button @click="yy">년도 출력</button>
            <button>월 출력</button>
            <button>일자 출력</button>
        </div>
    </div>
</template>

<script setup>
import { dateStore } from "@/stores/useDateStore";
import { ref, computed } from "vue";

// const dateStore = useDateStore();
const date = dateStore();
const xx = ref("");
console.log("xx : ", xx);

function yy() {
    // xx.value = computed(() => date.year);
    xx.value = date.year;
}
// const { getYear, getMonth, getDate } = dateStore;
// const { year, month, day } = dateStore;
// const dateMsg = computed(() => dateStore.dateMsg);
</script>
