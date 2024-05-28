<script setup>
import CheckList from './components/CheckList.vue';
import TodoProps from './components/TodoProps.vue';
</script>

<style>
.todo {
    text-align: center;
}
</style>

<template>
    <div class="todo">
        <h1>오늘의 할일</h1>
        <CheckList />

        <!-- <div class="checklist">
            <h2>오늘 해야할 일 4개</h2>
            <h2>오늘 완료한 일 0개</h2>
        </div> -->
        <hr />

        <TodoProps todo="Vue 부수기" />

        <TodoProps todo="배열함수 끝내기" />
        <CheckList />
    </div>
</template>
