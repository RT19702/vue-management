export default [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/views/Layout.vue'),
    children: [
      {
        path: '/index',
        component: () => import('@/views/Home'),
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  { // 404页面
    path: '*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  }
]