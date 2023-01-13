import Mock from 'mockjs';

import { login } from "./user/login"

Mock.setup({
    timeout: 500
})

Mock.mock('/login', 'post', login)

export default Mock;