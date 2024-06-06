<template>
    <div>
        <h1>TodoList 테스트(Composition API)</h1>
        <hr />
        할일 추가 : <input type="text" />
        <button>추가</button>
        <hr />

        <ul>
            <li>
                <button>삭제</button>
            </li>
        </ul>
        &nbsp; &nbsp; &nbsp;
        <span> 완료된 할일 수 : {{}} </span>
    </div>
</template>

<script setup>
import { BaseTransition } from "vue";
</script>
