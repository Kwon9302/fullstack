<script setup>
import ChildVue from './components/Child.vue';
</script>

<template>
    <div>
        <Child :drilling="drilling" />
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            drilling: '내려가여 ~',
        };
    },
    provide() {
        return {
            fly: '훗, 한번에 와따',
        };
    },
};
</script>
