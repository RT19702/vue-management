import router from './index'
import { getToken } from '@/utils/auth'
import asyncRoute from '@/router/asyncRouterMap'
router.beforeEach((to, from, next) => {
    const hasToken = getToken();
    if (hasToken) {
        if (to.path == '/login') {
            next('/')
        } else {
            if (to.name === null) {
                asyncRoute.forEach(ele => {
                    console.log("🚀 ~ file: gurad.js:12 ~ router.beforeEach ~ ele:", ele)
                    router.addRoute(ele)
                })
                next({ ...to, replace: true })
            } else {
                next()
            }
        }
    } else {
        if (to.path == '/login') {
            next()
        } else {
            next('/login')
        }
    }
})