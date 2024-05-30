<template>
    <div>
        <input type="text" v-model.number="inputNum" />
        <button @click="checkAnswer">정답확인</button>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
    rand: {
        type: Number,
        required: true,
    },
});

const inputNum = ref(0);
// 'send-msg' => Emit 이름
const emit = defineEmits(['send-msg']);

function checkAnswer() {
    let msg = '';
    if (props.rand === inputNum.value) {
        msg = '정답입니다.';
    } else if (props.rand > inputNum.value) {
        msg = 'UP';
    } else {
        msg = 'DOWN';
    }
    emit('send-msg', msg);
    inputNum.value = '';
}
</script>
