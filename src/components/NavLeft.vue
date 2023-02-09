<template>
    <div>
        <div class="images">
            <img src="@/assets/images/guanli.png" alt="">
        </div>
        <el-menu default-active="2" class="el-menu-vertical-demo menu" @open="handleOpen" @close="handleClose"
            background-color="#fff" text-color="#000" active-text-color="#5284f5" :router=true>
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

<style lang="scss" scoped>
.menu {
    height: 100vh;
}

.images {
    padding: 15px 0;
    text-align: center;

    img {
        height: 35px;
    }
}
</style>