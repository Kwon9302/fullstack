<!-- <template>
    <div>
        <Child1 />
        <Child2 />
        <Child3 />
    </div>
</template>
<script>
import Child1 from './components/Child1.vue';
import Child2 from './components/Child2.vue';
import Child3 from './components/Child3.vue';
export default {
    name: 'App',
    components: { Child1, Child2, Child3 },
};
</script> -->

<template>
    <div>
        <SlotTest />
        <NamedSlotTest />
        <!-- <ScopedSlotTest /> -->
    </div>
</template>
<script>
import SlotTest from './components/SlotTest.vue';
import NamedSlotTest from './components/NamedSlotTest.vue';
// import ScopedSlotTest from './components/ScopedSlotTest.vue';
export default {
    name: 'App',
    components: { SlotTest, NamedSlotTest },
};
</script>
