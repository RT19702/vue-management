<template>
    <div>
        <el-row :gutter="20" style="margin-bottom:20px">
            <el-col :span="6" v-for="(item, index) in dataList" :key="index">
                <el-card class="box-card card-body" :class="'theme-color' + index">
                    <div class="content">
                        <div class="fl">
                            <p class="mb">{{ item.title }}</p>
                            <p class="mb">{{ item.price }}</p>
                            <span class="mb">{{ item.growth > 0 ? "+" + item.growth : item.growth }}% 与上月同比</span>
                        </div>
                        <div class="fr">
                            <i class="icon" :class="item.icon"></i>
                        </div>
                        <div class="clear"></div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-bottom:20px">
            <el-col :span="18">
                <el-card class="box-card">
                    <div slot="header">进件统计分析</div>
                    <!-- <div style="height:240px" ref="analysis">内容</div> -->
                    <Broken v-if="broken.chartData && broken.chartData.length" :date="broken.date" :chartData="broken.chartData"></Broken>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="box-card">
                    <div slot="header">进件统计分析</div>
                    <PieChart v-if="pieList.length" :chartData="pieList"></PieChart>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="12">
                <el-card>
                    <div class="block">
                        <el-timeline>
                            <el-timeline-item :timestamp="item.date" placement="top"
                                v-for="(item, index) in information" :key="index">
                                <el-card>
                                    <h4>{{ item.title }}</h4>
                                    <p>{{ item.message }}</p>
                                </el-card>
                            </el-timeline-item>
                        </el-timeline>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-calendar v-model="value">
                </el-calendar>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Broken from "@/components/statistic/Broken"
import PieChart from "@/components/statistic/PieChart"
import { getChartsApi, getInformationApi } from "@/api"
export default {
    components: {
        Broken,
        PieChart
    },
    data() {
        return {
            dataList: [
                {
                    title: '本月进件',
                    price: 6588,
                    growth: 20.12,
                    icon: 'el-icon-tickets'
                },
                {
                    title: '本月放款（元）',
                    price: 121890,
                    growth: 1.25,
                    icon: 'el-icon-money'
                },
                {
                    title: '累计进件',
                    price: 12870,
                    growth: 11.48,
                    icon: 'el-icon-date'
                },
                {
                    title: '累计放款',
                    price: 9233809,
                    growth: -2.06,
                    icon: 'el-icon-coin'
                },
            ],
            broken: {},
            pieList: [],
            information: [],
            value: new Date()
        }
    },
    methods: {
        getBroken() {
            getChartsApi().then(res => {
                let { data } = res
                for (const key in data.brokenList) {
                    this.$set(this.broken, key, data.brokenList[key])
                }
                this.pieList = data.pieList
            })
        },
        async getInformation() {
            let { data } = await getInformationApi()
            this.information = data.sort((a, b) => {
                return b.date < a.date ? -1 : 1
            })
        }
    },
    created() {
        this.getBroken()
        this.getInformation()
    }
}
</script>

<style lang="scss" scoped>
.card-body {
    .content {
        .icon {
            font-size: 90px;
        }
    }
}

.theme-color0 {
    background: #5284f5;
    color: #fff;
}

.theme-color1 {
    background: #e54b75;
    color: #fff;
}

.theme-color2 {
    background: #5042f5;
    color: #fff;
}

.theme-color3 {
    background: #eb963f;
    color: #fff;
}
</style>