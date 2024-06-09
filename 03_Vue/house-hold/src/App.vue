<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <div>
        <nav><<router-link to="/">메인</router-link></nav>
        <RouterView />

        <div>
            <vue-cal style="height: 600px"></vue-cal>
        </div>
    </div>
</template>

<script>
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";

export default {
    name: "App",
    components: {
        VueCal,
    },
};
</script>

<style>
@import "vue-cal/dist/vuecal.css";

/* Custom styles */
.vuecal__wrapper {
    background-color: #f9f9f9; /* 변경된 배경색 */
}

.vuecal__header {
    background-color: #4caf50; /* 변경된 헤더 배경색 */
    color: white; /* 헤더 텍스트 색상 */
}

.vuecal__cell--day {
    border: 1px solid #ddd; /* 날짜 셀의 경계선 색상 */
}

.vuecal__event {
    background-color: #ff9800; /* 이벤트 배경색 */
    color: white; /* 이벤트 텍스트 색상 */
}
</style>
