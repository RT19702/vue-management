<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <keep-alive>
          <nav-left></nav-left>
        </keep-alive>
      </el-aside>
      <el-container>
        <el-header class="site-head">
          <top-header></top-header>
        </el-header>
        <el-main class="site-body">
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavLeft from "@/components/NavLeft.vue";
import TopHeader from "@/components/TopHeader.vue";
export default {
  name: "ManagementLoyout",
  components: { NavLeft, TopHeader },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.site-head {
  line-height: 60px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.site-body {
  height: 70vh;
  background: #fafafa;

  // 滚动条整体样式
  &::-webkit-scrollbar {
    width: 5px; // 高宽分别对应横竖滚动条的尺寸
    height: 2px;
  }

  // 滚动条里面小方块
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(84, 92, 100, 0.4);
    background: #545c6460;
  }

  // 滚动条里面轨道
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    // border-radius: 10px;
    background: #ffffff;
  }

  // 滚动条上下的箭头按钮
  &::-webkit-scrollbar-button {
    display: none;
  }
}
</style>