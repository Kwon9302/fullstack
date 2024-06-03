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

// 부모가 자식에게 props라고 선언되어있는 곳에 데이터를 내려주는건지 아니라면 props를 내려준다는게 뭘까
// 정작 props라는건 자식에게서 정의되고 있는게 아닌가??
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