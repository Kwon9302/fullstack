<script setup>
import router from './router';

</script>

<template>
  <div>
    <nav>
      <!-- 누르면 해당 컴포넌트? 로 이동  -->
      <router-link to="/">홈페이지</router-link>
      &nbsp;
      <router-link to="/login">로그인</router-link>
      &nbsp;
      <router-link to="/todo">Todolist</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script setup>

</script>