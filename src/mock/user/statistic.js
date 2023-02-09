import Mock from 'mockjs';

// 统计图
const charts = function () {
    let
        brokenList = {
            date: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            chartData: []
        },
        pieList = [],
        count = 7
    for (let index = 0; index < count; index++) {
        brokenList.chartData.push(
            Mock.mock('@integer(0,300)')
        )
        pieList.push(
            Mock.mock({
                "name|+1": [
                    Mock.mock('@name')
                ],
                "value|+1": [
                    Mock.mock('@integer(0,1000)')
                ],
            })
        )
    }
    return {
        code: 200,
        success: true,
        message: '请求成功',
        data: {
            brokenList,
            pieList
        }
    }
}


export {
    charts
}