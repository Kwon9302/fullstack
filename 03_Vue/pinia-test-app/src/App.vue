<template>
    <div>
        <h1>TodoList 테스트(Composition API)</h1>
        <hr />
        할일 추가: <input type="text" v-model="todo" />
        <button @click="addTodoHandler">추가</button>
        <hr />
        <ul>
            <li v-for="todoItem in todoList" :key="todoItem.id">
                <span style="cursor: pointer" @click="toggleDone(todoItem.id)">
                    {{ todoItem.todo }} {{ todoItem.done ? "(완료)" : "" }}
                </span>
                &nbsp; &nbsp; &nbsp;
                <button @click="deleteTodo(todoItem.id)">삭제</button>
            </li>
        </ul>
        <div>완료된 할일 수 : {{ doneCount }}</div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
// todo.js에서 export 변수명 , todo.js 확장자 붙이기
import { useTodoListStore } from "@/stores/todo.js";

// 할일 추가시 입력될 값,  input의 v-model과 연결
const todo = ref("");

// import한 store를 변수에 넣어주어 사용하여야 한다.
const todoListStore = useTodoListStore();

// 이거.. 그 배열그거.. 로 가져와서 todoListStore에 넣어준다.
const { todoList, addTodo, deleteTodo, toggleDone } = todoListStore;

// todoListStore에 있는 doneCount실행후 저장한다.
const doneCount = computed(() => todoListStore.doneCount);

const addTodoHandler = () => {
    addTodo(todo.value);
    todo.value = "";
};
</script>
