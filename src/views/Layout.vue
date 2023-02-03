<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <nav-left></nav-left>
      </el-aside>
      <el-container>
        <el-header class="head">
          <top-header></top-header>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavLeft from '@/components/NavLeft.vue';
import TopHeader from '@/components/TopHeader.vue';
export default {
  name: "ManagementLoyout",
  components: { NavLeft, TopHeader },
  data() {
    return {};
  },

  mounted() { },

  methods: {},
};
</script>

<style lang="scss" scoped>
.head {
  line-height: 60px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);;
}
</style>