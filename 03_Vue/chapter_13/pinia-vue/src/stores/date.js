import { defineStore } from "pinia";
import { ref } from "vue";

export const useDateStore = defineStore("date", () => {
    const date = new Date();
    const dateMsg = ref("");

    function getYear() {
        dateMsg.value = `오늘은 ${date.getFullYear()}년 입니다!`;
    }

    function getMonth() {
        dateMsg.value = `오늘은 ${date.getMonth()}년 입니다!`;
    }

    function getDate() {
        dateMsg.value = `오늘은 ${date.getDate()}년 입니다!`;
    }

    return { dateMsg, getYear, getMonth, getDate };
});
