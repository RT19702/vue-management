<template>
    <div>
        <div class="fr">
            <el-dropdown>
                <span class="el-dropdown-link">
                    欢迎你, {{ info }}
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>修改密码</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <p class="date fr">
            今天是你在阿里的第
            <span class="tips">123</span>
            天
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            info: sessionStorage.getItem('nickname')
        }
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