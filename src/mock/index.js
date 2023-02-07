import Mock from 'mockjs';

import { login, hiredate, menuData } from "./user"
import { broken } from "./user/statistic"
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
// 折线图
Mock.mock('/broken', 'get', broken)

export default Mock;