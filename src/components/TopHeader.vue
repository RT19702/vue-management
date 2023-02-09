<template>
    <div class="d-flex justify-between align-items-center">
        <div class="">
            <Breadcrumb></Breadcrumb>
        </div>
        <dir class="d-flex">
            <p class="date">
                今天是你在阿里的第
                <span class="tips">{{ entrytime }}</span>
                天
            </p>
            <div class="">
                <el-dropdown @command="handleCommand">
                    <span class="el-dropdown-link">
                        欢迎你, {{ info }}
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item>修改密码</el-dropdown-item>
                        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </dir>
    </div>
</template>

<script>
import { hiredate } from "@/api"
import { removeToken } from "@/utils/auth"
import Breadcrumb from "./Breadcrumb.vue"
export default {
    components: {
        Breadcrumb
    },
    data() {
        return {
            info: sessionStorage.getItem('nickname'),
            time: 0
        }
    },
    methods: {
        handleCommand(item) {
            if (item === "logout") {
                removeToken()
                this.$router.push('/login')
            }
        },
        async gethiredate() {
            let data = await hiredate()
            this.time = data.time
        }
    },
    computed: {
        entrytime() {
            let date = new Date()
            let formerly = this.time ? new Date(this.time) : new Date()
            return Math.floor((date - formerly) / (1000 * 3600 * 24))
        }
    },
    created() {
        this.gethiredate()
    }
}
</script>

<style lang="scss" scoped>
.date {
    margin-right: 50px;

    .tips {
        font-size: 24px;
        color: #5696FF;
    }
}
</style>