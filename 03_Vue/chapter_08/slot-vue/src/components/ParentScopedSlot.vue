<template>
    <div>
        <ChildScopedSlot v-slot:default="fromChild">
            <h1>{{ fromChild.msg }}</h1>
        </ChildScopedSlot>
    </div>
</template>

<script>
import ChildScopedSlot from './ChildScopedSlot.vue';

export default {
    name: 'ParentScopedSlot',
    components: { ChildScopedSlot },
};
</script>

<style lang="scss" scoped></style>
