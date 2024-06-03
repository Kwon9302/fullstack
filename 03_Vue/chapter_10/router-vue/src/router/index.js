import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Dynamic from '@/pages/Dynamic.vue';
import NotFound from '@/pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/pages/About.vue'),
        },
        {
            // dynamic 뒤에 어떤 정보가 오면 mood라는 정보로 받겠다
            path: '/dynamic/:mood',
            name: 'dynamic',
            component: Dynamic,
            props: true,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notFound',
            component: NotFound,
            props: true,
        },
    ],
});

export default router;
