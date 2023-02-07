import Mock from 'mockjs';

let
    brokenList = {
        date: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        chartData: []
    },
    count = 7
// 折线图
const broken = function () {
    for (let index = 0; index < count; index++) {
        brokenList.chartData.push(
            Mock.mock('@integer(0,300)')
        )
    }
    return {
        code: 200,
        success: true,
        message: '请求成功',
        data: brokenList
    }
}


export {
    broken
}