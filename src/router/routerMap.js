export default [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/views/Layout.vue'),
    redirect: '/index',
    meta: {
      title: '首页',
    },
    children: [
      { // 首页
        path: '/index',
        component: () => import('@/views/Home'),
        meta: {
          keepAlive: true
        }
      },
      { // 所有人员
        path: '/orders/all',
        component: () => import('@/views/Orders/OrderList'),
        meta: {
          title: '所有订单',
          keepAlive: true
        }
      },
      // { // 404页面
      //   path: '*',
      //   name: 'NotFound',
      //   component: () => import('@/views/NotFound.vue'),
      //   meta: {
      //     title: '404',
      //   }
      // }
    ]
  },
  { // 登录页
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  // { // 404页面
  //   path: '*',
  //   name: 'NotFound',
  //   component: () => import('@/views/NotFound.vue'),
  //   meta: {
  //     title: '404',
  //   }
  // }
]