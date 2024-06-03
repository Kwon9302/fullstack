<template>
    <div>
        <h1>오늘의 기분은? {{ msg }}</h1>
        <img :src="imgSrc" :alt="msg"/>
    </div>
</template>

<script setup>
import { ref,computed,watch } from 'vue';
import { useRoute } from 'vue-router';

const currentRoute = useRoute();
const mood = ref(currentRoute.params.mood);

watch(()=> currentRoute.params.mood, (newMood)=>mood.value=newMood);
const msg = computed(()=>{
    mood.value === 'happy' ? '행복하다' : '신난다'
})

const imgSrc = computed(()=>mood.value==='happy' ? 'https://news.kbs.co.kr/data/fckeditor/new/image/2021/01/07/320041610007388235.jpg' :'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/cnoC/image/bA15rm1zOffsle8EVMPD_ZHtxYU.JPG')

</script>