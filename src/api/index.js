import request from '@/utils/request'
// 登录
export const login = (params) => {
    return request({
        url: '/login',
        method: 'POST',
        data: params
    })
}
// 入职时间
export const hiredate = () => {
    return request({
        url: '/hiredate',
        method: 'GET',
    })
}
// 导航栏菜单
export const getMenuApi = () => {
    return request({
        url: '/menuData',
        method: 'GET',
    })
}
// 统计图
export const getChartsApi = () => {
    return request({
        url: '/charts',
        method: 'GET',
    })
}
// 信息列表
export const getInformationApi = () => {
    return request({
        url: '/information',
        method: 'GET'
    })
}
// 订单列表
export const getListOrders = (params) => {
    return request({
        url: '/listOrders',
        method: 'POST',
        data: params
    })
}
