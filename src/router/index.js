import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由Map
import routes from '@/router/routerMap'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
