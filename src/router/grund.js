import router from './index'
import { getToken } from '@/utils/auth'

const hasToken = getToken();
console.log("🚀 ~ file: grund.js:5 ~ hasToken", hasToken)

router.beforeEach((to, from, next) => {
    if (hasToken) {
        next();
    }
    console.log("🚀 ~ file: grund.js:4 ~ router.beforeEach ~ to", to)
    console.log("🚀 ~ file: grund.js:4 ~ router.beforeEach ~ from", from)

})