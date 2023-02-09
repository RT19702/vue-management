export default [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/views/Layout.vue'),
    redirect: '/index',
    meta: {
      title: '首页'
    },
    children: [
      { // 首页
        path: '/index',
        component: () => import('@/views/Home'),
      },
      { // 所有人员
        path: '/account/all',
        component: () => import('@/views/Account'),
        meta: {
          title: '所有人员'
        }
      },
    ]
  },
  { // 登录页
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