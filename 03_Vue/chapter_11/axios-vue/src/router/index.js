import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'
import Todo from '@/pages/Todo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },

    {
      path: '/todo',
      name: 'todo',
      component: Todo,
      meta:{requiresAuth:true}
    }
  ]
})

//실행전 얘부터 실행시켜주세요  = beforeEach
router.beforeEach((to,from ,next) => {
  // some - 하나라도 true라면 통과
  if(to.matched.some((item)=>item.meta.requiresAuth)){
    if(localStorage.getItem('auth') !== 'true'){
      alert('로그인이 필요합니다.')
      next({name:'login'})
    } else{
      next();
    }
  } else{
    next()
  }
})

export default router
