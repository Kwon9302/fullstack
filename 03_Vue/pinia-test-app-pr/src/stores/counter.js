import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const addTodoList = defineStore("todoList", () => {
    const state = [
        { id: 1, todo: "ES6학습", done: false },
        { id: 2, todo: "React학습", done: false },
        { id: 3, todo: "ContextAPI 학습", done: true },
        { id: 4, todo: "야구경기 관람", done: false },
    ];

    function addList() {
        state.push;
    }

    return { count, doubleCount, increment };
});
