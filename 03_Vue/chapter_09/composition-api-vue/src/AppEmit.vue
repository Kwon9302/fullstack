<!-- <template>
    <div>
        <h1>
            {{ count }}
        </h1>
        <h1>x={{ obj.x }} / y = {{ obj.y }}</h1>
        <h1>{{ double }}</h1>
        <button @click="increament">+1</button>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';

const count = ref(2);
const obj = reactive({ x: 0, y: 0, result: 0 });
const double = computed(() => {
    return count.value * 2;
});

function increament() {
    count.value++;
}
</script> -->

<!-- <template>
    <div>
        <h1>
            <PropsChild :msg="msg" />
        </h1>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import PropsChild from './components/PropsChild.vue';

const msg = ref('props로 전달 될 메시지');
const count = ref(2);
const obj = reactive({ x: 0, y: 0, result: 0 });
const double = computed(() => {
    return count.value * 2;
});

function increament() {
    count.value++;
}
</script> -->

<template>
    <div>
        <h1>{{ msg }}</h1>
        <EmitChild @send-msg="emitHandler" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import EmitChild from './components/EmitChild.vue';

const msg = ref('자식놈이 바꿀 메시지입니다.');

function emitHandler(value) {
    msg.value = value;
}
</script>
