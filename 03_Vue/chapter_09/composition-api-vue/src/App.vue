<template>
    <div class="main">
        <button @click="showModal">모달 열기</button>
        <Modalcomponent :visible="isModalVisible" @close-modal="hideModal">
            <h1>잘내려가니</h1>
        </Modalcomponent>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Modalcomponent from './components/Modalcomponent.vue';

const isModalVisible = ref(false);

function showModal() {
    isModalVisible.value = true;
}

function hideModal() {
    isModalVisible.value = false;
}
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
