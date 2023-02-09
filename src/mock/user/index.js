import Mock from 'mockjs';

// 登录接口
export const login = config => {
    const { username } = JSON.parse(config.body)
    if (username !== 'admin') {
        return {
            code: 401,
            success: false,
            message: 'Account and password are incorrect.'
        }
    }
    return {
        code: 200,
        success: true,
        message: '登录成功',
        name: 'Xxx',
        Token: '3arcs9cvax0f8axc'
    }
}
// 入职时间接口
export const hiredate = () => {
    return {
        code: 200,
        success: true,
        message: '请求成功',
        time: '2020-07-01'
    }
}

const menuList = [
    {
        name: "首页",
        icon: 'el-icon-s-home',
        url: '/index'
    },
    {
        name: '账户管理',
        icon: 'el-icon-coin',
        url: '/account',
        children: [
            {
                name: '所有人员',
                icon: "el-icon-user",
                url: '/account/all'
            },
            {
                name: '业务人员',
                icon: "el-icon-phone-outline",
                url: '/account/business'
            },
            {
                name: '审核人员',
                icon: "el-icon-s-check",
                url: '/account/audit'
            },
            {
                name: '风控经理',
                icon: "el-icon-s-finance",
                url: '/account/finance'
            },
            {
                name: '管理员',
                icon: "el-icon-s-custom",
                url: '/account/admin'
            },
        ]
    },
    {
        name: '产品管理',
        icon: 'el-icon-menu',
        url: '/product',
        children: [
            {
                name: '全部产品',
                icon: 'el-icon-notebook-2',
                url: '/product/all'
            },
            {
                name: '汽车消费',
                icon: 'el-icon-truck',
                url: '/product/carConsomption'
            },
            {
                name: '房产消费',
                icon: 'el-icon-office-building',
                url: '/product/estate'
            },
            {
                name: '抵押贷款',
                icon: 'el-icon-money',
                url: '/product/mortgage'
            },
        ]
    },
    {
        name: '订单管理',
        icon: 'el-icon-s-order',
        url: '/order',
        children: [
            {
                name: '所有订单',
                icon: 'el-icon-tickets',
                url: '/orders/all'
            },
            {
                name: '资金记录',
                icon: 'el-icon-bank-card',
                url: '/orders/create'
            }
        ]
    },
    {
        name: '客户管理',
        icon: 'el-icon-user',
        url: '/customer',
        children: [
            {
                name: '基本信息',
                icon: 'el-icon-chat-square',
                url: '/customer/info'
            },
            {
                name: '资金记录',
                icon: 'el-icon-bank-card',
                url: '/record'
            }
        ]
    },
    {
        name: "待办事项",
        icon: 'el-icon-chat-dot-square',
        url: '/todo'
    },
    {
        name: "个人中心",
        icon: 'el-icon-user',
        url: '/my'
    },
]
// 导航栏菜单接口
export const menuData = () => {
    return {
        code: 200,
        success: true,
        message: '请求成功',
        data: menuList
    }
}
export const timeInformation = () => {
    let message = [], count = 5

    for (let index = 0; index < count; index++) {
        message.push(Mock.mock({
            "title": Mock.mock('@ctitle'),
            "message": Mock.mock('@csentence'),
            "date": Mock.mock('@date()'),
        }))
    }

    return {
        code: 200,
        success: true,
        message: '请求成功',
        data: message
    }
}