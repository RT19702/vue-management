<template>
    <div>
        <el-menu class="menu">
            <Menu></Menu>
        </el-menu>
    </div>
</template>

<script>
import Menu from "@/components/Menu"
export default {
    components: {
        Menu
    }
}
</script>

<style>
.menu {
    height: 100vh;
}
</style>