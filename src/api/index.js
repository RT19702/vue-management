import service from '@/utils/service'
// 登录
export const login = (params) => {
    return service({
        url: '/login',
        method: 'POST',
        data: params
    })
}
// 入职时间
export const hiredate = () => {
    return service({
        url: '/hiredate',
        method: 'GET',
    })
}
// 导航栏菜单
export const getMenuApi = () => {
    return service({
        url: '/menuData',
        method: 'GET',
    })
}
// 折线图
export const getBrokenApi = () => {
    return service({
        url: '/broken',
        method: 'GET',
    })
}