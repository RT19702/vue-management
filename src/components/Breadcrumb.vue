<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="(item, index) in levelList" :key="index"
                :to="{ path: item.path ? item.path : '/' }">
                {{ item.meta.title }}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    data() {
        return {
            levelList: null
        }
    },
    methods: {
        getBreadcrumb() {
            let matched = this.$route.matched.filter(element => element.meta && element.meta.title);
            this.levelList = matched
        }
    },
    computed: {

    },
    created() {
        this.getBreadcrumb()
    },
    watch: {
        $route() {
            this.getBreadcrumb()
        }
    }
}
</script>

<style>

</style>