import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const moneyManageStore = defineStore("moneyManage", () => {
    const balance = ref(0);
    function deposit(money) {
        balance.value = balance.value + money;
    }
    function withdraw(money) {
        balance.value = balance.value - money;
    }

    return { balance, deposit, withdraw };
});
