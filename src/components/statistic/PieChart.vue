<template>
    <div ref="analysis" style="height:240px"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    props: {
        chartData: {
            typeof: Array,
            require: true
        },
    },
    methods: {
        pieChart() {
            let pieChart = echarts.init(this.$refs.analysis);
            var option = {
                tooltip: {
                    trigger: 'item'
                },
                series: [
                    {
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 10,
                            borderColor: '#fff',
                            borderWidth: 2
                        },
                        data: this.chartData
                    }
                ]
            };
            option && pieChart.setOption(option);
        },
    },
    mounted() {
        this.pieChart()
    },
}
</script>

<style>

</style>