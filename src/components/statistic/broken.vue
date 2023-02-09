<template>
    <div ref="analysis" style="height:240px"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    props: {
        date: {
            typeof: Array,
            require: true
        },
        chartData: {
            typeof: Array,
            require: true
        },
    },
    methods: {
        broken() {
            let broken = echarts.init(this.$refs.analysis);
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: this.date
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: this.chartData,
                        type: 'line',
                        smooth: true,
                        areaStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: '#99b2f9' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#fff' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            }
                        }
                    }
                ]
            };
            option && broken.setOption(option);
        },
    },
    mounted() {
        this.broken()
    },
}
</script>

<style>

</style>