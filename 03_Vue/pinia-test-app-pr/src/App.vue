<template>
    <div>
        <h1>TodoList 테스트(Composition API)</h1>
        <hr />
        할일 추가 : <input type="text" v-model="todo" />
        <button @click="addTodoHandler">추가</button>
        <hr />
        <ul>
            <li v-for="todoItem in todoListPack" :key="todoItem.id">
                <span @click="toggledone(todo.id)">
                    {{ todoItem.todo }} {{ todoItem.done ? "(완료)" : "" }}
                </span>
                <button>삭제</button>
            </li>
        </ul>
        &nbsp; &nbsp; &nbsp;
        <span> 완료된 할일 수 : {{}} </span>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";

// counter.js에 있는 addTodoList를 import하여야 하므로 addTodoList를 적어야 자동완성이 적용됨
import { TodoListStore } from "./stores/counter.js";

const todo = ref("");
const todoListStore = TodoListStore();

const { todoListPack, addTodo } = todoListStore;

// 여기서 왜 addTodo 안대지
const addTodoHandler = () => {
    addTodo(todo.value);
    todo.value = "";
};
</script>
