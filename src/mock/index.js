import Mock from 'mockjs';

import { login, hiredate } from "./user"

Mock.setup({
    timeout: 500
})

// 登录
Mock.mock('/login', 'post', login)
// 入职时间
Mock.mock('/hiredate', 'get', hiredate)

export default Mock;