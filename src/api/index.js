import service from '@/utils/service'

export const login = (params) => {
    return service({
        url: '/login',
        method: 'post',
        data: params
    })
}