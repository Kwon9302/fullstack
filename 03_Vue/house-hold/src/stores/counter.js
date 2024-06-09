import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

const BASE_URL = "http://localhost:3000/bank";

export const useMoneyManageStore = defineStore("moneyManageStore", () => {
    const balance = ref(0);
    const states = reactive({
        manageList: [],
    });

    async function fetchMoneyManageList() {
        try {
            const fetchMoneyManageListRes = await axios.get(BASE_URL);

            states.manageList = fetchMoneyManageListRes.data;
        } catch (e) {
            alert("moneylist 통신 오류 발생");
            console.log(e);
        }
    }

    async function depositMoney(money) {
        try {
            const addMoneyRes = await axios.post(BASE_URL, {
                deposit: money,
                balance: (balance.value += money),
            });

            fetchMoneyManageList();
        } catch (e) {
            alert("예금 오류");
            console.log(e);
        }
    }

    async function withdrawMoney(money) {
        try {
            const minusMoneyRes = await axios.post(BASE_URL, {
                withdraw: money * -1,
                balance: (balance.value -= money),
            });

            fetchMoneyManageList();
        } catch (e) {
            alert("예금 오류");
            console.log(e);
        }
    }
    return { balance, depositMoney, withdrawMoney };
});
