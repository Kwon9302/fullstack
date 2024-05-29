<script setup>
// import ParentsPhotoBox from './components/ParentsPhotoBox.vue';
import ParentScopedSlot from './components/ParentScopedSlot.vue';
</script>

<template>
    <div>
        <!-- <ParentsPhotoBox /> -->
        <ParentScopedSlot />
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {
        // ParentsPhotoBox,
        ParentScopedSlot,
    },
};
</script>

<style scoped></style>
