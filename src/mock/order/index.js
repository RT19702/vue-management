import Mock from 'mockjs';

export const listOrders = (config) => {
    let { page, pageSize, keyword } = JSON.parse(config.body)
    console.log('page', page, 'pageSize', pageSize, 'keyword', keyword)
    return {
        code: 200,
        success: true,
        message: '请求成功',
        data: Mock.mock({
            [`list|${pageSize}`]: [{
                'id|+1': 10000, // 订单号
                'status|1': [1, 2, 3, 4],//订单状态 1待审核 2已审核 3审核通过 4审核拒绝
                'date': Mock.Random.date(),//下单时间
                'name|1': ["广东第七城网络技术有限公司", "广东多谷网络科技有限公司", "东莞市好理想软件有限公司", "东莞尾音信息科技有限公司"],
                'start': Mock.Random.city(true),//起始城市
                'end': Mock.Random.city(true),//目的城市，
                'cargo|1': ["日用品", "纺织品", "生鲜", "建材", "电器"],//货物名称
                'count': Mock.Random.integer(10, 200),//件数
                'unit|1': ["方", "吨"],//单位
                'price': Mock.Random.integer(5000, 50000),//运费
                'from|1': ["移动端", "pc端"],
                'pay|1': [1, 2],//是否支付1已支付2未支付
            }],
            "total": 47
        })
    }
}