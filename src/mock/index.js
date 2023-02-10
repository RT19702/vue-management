import Mock from 'mockjs';

import { login, hiredate, menuData, timeInformation } from "./user"
import { charts } from "./user/statistic"
import { listOrders } from "./order"

// 设置全局延时 没有延时的话有时候会检测不到数据变化 建议保留
Mock.setup({
    timeout: '300-600'
})

// 登录
Mock.mock('/login', 'post', login)
// 入职时间
Mock.mock('/hiredate', 'get', hiredate)
// 导航栏菜单
Mock.mock('/menuData', 'get', menuData)
// 统计图
Mock.mock('/charts', 'get', charts)
// 信息列表
Mock.mock('/information', 'get', timeInformation)
// 订单列表
Mock.mock('/listOrders', 'post', listOrders)

export default Mock;