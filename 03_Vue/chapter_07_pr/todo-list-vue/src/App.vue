<script setup>
import ColorEmit from './components/ColorEmit.vue';
</script>

<template>
    <!-- 4번 -->
    <div :style="{ backgroundColor: color }">
        <h1>저의 색상을 정해주세요!!</h1>
        <!-- 2번 -->
        <ColorEmit v-on:backGroundChange="backGroundChangeHandler" />
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            color: '',
        };
    },
    methods: {
        // 3번
        backGroundChangeHandler(e) {
            this.color = e.color;
        },
    },
};
</script>
