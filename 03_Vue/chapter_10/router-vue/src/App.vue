<script setup></script>

<template>
    <div>
        <nav>
            <router-link to="/">홈페이지</router-link>
            &nbsp;
            <routerLink to="/About">라우터란?!</routerLink>
            &nbsp;
            <routerLink to="/dynamic/happy">행복하다</routerLink>
            &nbsp;
            <routerLink to="/dynamic/exciting">신난다</routerLink>
        </nav>

        <!-- nav 태그 안에 있는 것들을 <RouterView/> 여기다가 렌더링 하는거임 -->
        <RouterView />
    </div>
</template>

<style scoped></style>
