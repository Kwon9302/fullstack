<template>
    <div>
        <!-- v-model은 사용자가 입력한 값을 inputNum에 대입시켜준다. inputNum=ref(0)은 단순히 변수 선언 + 초기값 설정 -->
        <input type="text" v-model.number="inputNum">
        
        <!-- v-on은 이벤트핸들러  -->
        <button @click="checkAnswer">정답</button>
    </div>
</template>

<script setup>
import { ref, defineProps,defineEmits  } from 'vue';

const props = defineProps({
    rand : {
        type :Number,
        required: true,
    }
});
const emit = defineEmits(['send-msg']);
const inputNum = ref(0);

function checkAnswer(){
    let msg = ''
    if(inputNum.value === props.rand){
        msg = '정답입니다'
    }

    else if(inputNum.value > props.rand){
        msg = 'Down'
    }

    else{
        msg = 'Up'
    }

    emit('send-msg',msg)
}
</script>