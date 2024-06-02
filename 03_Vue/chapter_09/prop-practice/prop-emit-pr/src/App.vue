
<template>
  <div>
<h1>{{ msg }}</h1>
<!-- :rand v-bind의 축약형이다. rand이라는 props를 ChildComponent에 전달한다 -->
<!-- v-bind란 :src="URL" const URL = "www.naver.com" 이렇게 연결(바인딩)해줄 수 있는 역할을 한다. -->
<!-- 한줄로 요약하자면 randNum이라는 const를 rand라는 이름으로 자식에게 넘긴다 -->

<!-- send-msg라는 이벤트를 리스닝한다. 이벤트가 발생할때 changeMsg 메서드를 호출한다. @는 v-on의 축약형이다. -->
<!-- send-msg는 자식컴포넌트에서 발생시킬 수 있는 이벤트이다. -->
<ChildComponent :rand="randNum" @send-msg="changeMsg"/>
</div>
</template>

<script setup>
import { ref } from 'vue';
import ChildComponent from './components/ChildComponent.vue';

const msg = ref('랜덤 숫자를 맞춰주세요');
const randNum = ref(parseInt(Math.random()*20));

function changeMsg(payload){
  msg.value = payload
}
</script>


