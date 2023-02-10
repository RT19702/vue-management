<template>
    <el-submenu v-if="menuList.children" :index="menuList.url">
        <template slot="title">
            <i :class="menuList.icon"></i>
            <span>{{ menuList.name }}</span>
        </template>
        <!-- 组件内递归 -->
        <Menu v-for="(item, index) in menuList.children" :key="index" :menuList="item" :router=true></Menu>
    </el-submenu>
    <el-menu-item v-else :index="menuList.url" class="item">
        <i :class="menuList.icon"></i>
        <span slot="title">{{ menuList.name }}</span>
    </el-menu-item>
</template>

<script>
export default {
    name: 'Menu', // 组件内递归
    props: {
        menuList: {
            required: true
        }
    }
}
</script>

<style scoped>
.item {
    min-width: auto;
    width: auto;
}
</style>