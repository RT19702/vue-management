<template>
  <!--  -->
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    @current-page="handleCurrentChange"
    :page-sizes="pageSizes"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
    :current-page.sync="currentPage"
    :page-size="pageSize"
  >
  </el-pagination>
</template>

<script>
export default {
  props: {
    total: {
      required: true,
      type: Number,
    },
    limit: {
      type: Number,
      default: 10,
    },
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 50],
    },
    page: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    handleSizeChange(page) {
      // 更改页面条数时,page默认为1
      let params = { page: 1, limit: page };
      this.$emit("pagination", params);
    },
    handleCurrentChange(current) {
      let params = { page: current, limit: this.limit };
      this.$emit("pagination", params);
    },
  },
  computed: {
    currentPage: {
      get() {
        return this.page;
      },
      set(val) {
        this.$emit("update:page", val);
      },
    },
    pageSize: {
      get() {
        return this.limit;
      },
      set(val) {
        this.$emit("update:limit", val);
      },
    },
  },
};
</script>

<style>
</style>