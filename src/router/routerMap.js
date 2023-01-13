export default [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/views/Layout.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  }
]