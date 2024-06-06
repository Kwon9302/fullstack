import { reactive, computed, resolveComponent } from "vue";
import { defineStore } from "pinia";

export const useTodoListStore = defineStore("todoList", () => {
    const state = reactive({
        todoList: [
            { id: 1, todo: "ES6학습", done: false },
            { id: 2, todo: "React학습", done: false },
            { id: 3, todo: "ContextAPI 학습", done: true },
            { id: 4, todo: "야구경기 관람", done: false },
        ],
    });

    // 고유한 id값을 생성하기 위해 new Date().getTime()을 사용한다.
    const addTodo = (todo) => {
        state.todoList.push({ id: new Date().getTime(), todo, done: false });
    };

    // splice함수를 통해 목록에서 제거.
    const deleteTodo = (id) => {
        const index = state.todoList.findIndex((todo) => todo.id === id);
        state.todoList.splice(index, 1);
    };

    // todoList의 id값을 받고 done값을 true라면 false, false이면 true로 바꿔줌
    const toggleDone = (id) => {
        const index = state.todoList.findIndex((todo) => todo.id === id);
        state.todoList[index].done = !state.todoList[index].done;
    };

    // state = todoList 배열에서 filter를 통해 done값이 true인 값을 필터링하고 그 개수를 length를 통해 파악
    const doneCount = computed(() => {
        return state.todoList.filter((todoItem) => todoItem.done === true)
            .length;
    });

    // todoList의 개수 파악
    const todoList = computed(() => state.todoList);

    return { todoList, doneCount, addTodo, deleteTodo, toggleDone };
});
