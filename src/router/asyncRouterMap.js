export default [
    {
        path: '/account/all',
        name: 'Team',
        component: () => import('@/views/Management/Team.vue'),
        meta: {
            auth: ['boss']
        }
    },
    { // 404页面
        path: '*',
        name: 'NotFound',
        component: () => import('@/views/NotFound.vue'),
        meta: {
            title: '404',
        }
    }
]