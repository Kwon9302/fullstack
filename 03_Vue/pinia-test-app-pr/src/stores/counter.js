import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";

export const TodoListStore = defineStore("todoList", () => {
    const state = reactive({
        todoList: [
            { id: 1, todo: "ES6학습", done: false },
            { id: 2, todo: "React학습", done: false },
            { id: 3, todo: "ContextAPI 학습", done: true },
            { id: 4, todo: "야구경기 관람", done: false },
        ],
    });

    const addTodo = (todo) => {
        state.todoList.push({ id: new Date().getTime(), todo, done: false });
    };

    const toggleDone = (id) => {
        const idx = state.todoList.findIndex((todo) => todo.id === id);
        state.todoList[idx].done = !state.todoList[idx].done;
    };

    const todoListPack = computed(() => state.todoList);
    return { todoListPack, addTodo };
});
