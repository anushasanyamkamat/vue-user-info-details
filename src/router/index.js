import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import UserInfo from '@/components/UserInfo.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld
  },
  {
    path: '/user',
    name: 'userInfo',
    component: UserInfo
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
