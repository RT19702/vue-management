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
        Token:'3arcs9cvax0f8axc'
    }
}