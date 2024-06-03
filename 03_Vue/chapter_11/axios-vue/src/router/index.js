import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'
import Todo from '@/pages/Todo.vue'

// routes까지는 router사용의 기본 값
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

      // meta 속성을 사용하여 특정 조건을 만족할때만 라우트를 허용한다.
      // todo 경로는 인증이 필요하도록 설정.
      meta:{requiresAuth:true}
    }
  ]
})

//실행전 얘부터 실행시켜주세요  = beforeEach
router.beforeEach((to,from ,next) => {
  
  // some - 하나라도 true라면 통과 --> find() 같이 하나씩 비교 해주는건가?
  // meta.requiresAuth가 true인지 확인.
  if(to.matched.some((item)=>item.meta.requiresAuth)){
    if(localStorage.getItem('auth') !== 'true'){
      alert('로그인이 필요합니다.')
      next({name:'login'})

      // auth == true이면 next.
    } else{
      next();
    }
  } else{
    next()
  }
})

export default router
