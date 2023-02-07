<template>
    <div>
        <el-menu default-active="2" class="el-menu-vertical-demo menu" @open="handleOpen" @close="handleClose"
            background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :router=true>
            <Menu v-for="(item, index) in menuList" :key="index" :menuList="item"></Menu>
        </el-menu>
    </div>
</template>

<script>
import Menu from "@/components/Menu"
import { getMenuApi } from "@/api"
export default {
    components: {
        Menu
    },
    data() {
        return {
            menuList: []
        }
    },
    methods: {
        async getMenu() {
            let { data } = await getMenuApi()
            this.menuList = data
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    created() {
        this.getMenu()
    }
}
</script>

<style>
.menu {
    height: 100vh;
}
</style>