<template>
    <div>
        x : <input type="text" v-model.number="x" />
        <br />
        결과 : {{ result }}
    </div>
</template>

<script>
import { ref, watch } from 'vue';
export default {
    name: 'Calc5',
    setup() {
        const x = ref(0);
        const result = ref(0);
        // watch == 감시자 함수 => 값이 변경되면 반응하는 함수
        //  watch(감시하려는 값, (변경된값,변경전 값)=>{~ })
        watch(x, (current, old) => {
            console.log(`${old} -> ${current}`);
            result.value = current * 2;
        });
        return { x, result };
    },
};
</script>
