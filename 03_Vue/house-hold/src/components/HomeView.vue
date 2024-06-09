<template>
    <div>
        <h1>안녕하세요. 통장입니당.</h1>
        <input type="number" v-model.trim="money" placeholder="금액 입력" />
        <button @click="depositMoney(money)">수익</button>
    </div>
</template>

<script setup>
import { useMoneyManageStore } from "@/stores/counter";
import { ref } from "vue";
// import axios from "axios";

const money = ref();
const MoneyManageStore = useMoneyManageStore();
const { balance, depositMoney, widhdrawMoney } = MoneyManageStore;
</script>
