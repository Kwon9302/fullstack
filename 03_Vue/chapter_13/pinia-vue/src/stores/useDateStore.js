import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const dateStore = defineStore("dateStore", () => {
    const dayday = new Date();

    const year = dayday.getSeconds();
    console.log(year);

    const month = ref(dayday.getMonth());
    console.log(month);

    const day = ref(dayday.getDate());
    console.log(day);

    return { year, month, day };
});
