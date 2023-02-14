<template>
  <div>
    <el-table :data="tableData" border style="width: 100%" v-loading="loading">
      <!-- <el-table-column
        type="selection"
        width="55"
        align="center"
      ></el-table-column> -->
      <el-table-column
        align="center"
        :prop="item.prop"
        :label="item.label"
        :width="item.width || 'auto'"
        v-for="(item, index) in colData"
        :key="index"
      >
        <template slot-scope="{ row }">
          <slot :row="row" :col="item">{{ row[item.prop] || "-" }}</slot>
        </template>
      </el-table-column>
    </el-table>
    <template v-if="showPagination">
      <div class="d-flex justify-end dom-mt-20">
        <Pagination
          :total="total"
          :pageSizes="pageSizes"
          @pagination="onPaginationChange"
          :limit.sync="limit"
          :page.sync="current"
        ></Pagination>
      </div>
    </template>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination.vue";
export default {
  components: {
    Pagination,
  },
  props: {
    // 列表数据
    tableData: {
      type: Array,
      required: true,
      default: () => [],
    },
    // 列表表头数据
    colData: {
      type: Array,
      require: true,
      default: () => [],
    },
    // 加载动画
    loading: {
      type: Boolean,
      default: false,
    },
    // 是否显示分页
    showPagination: {
      type: Boolean,
      default: true,
    },
    // 列表总条数
    total: {
      type: Number,
      default: 100,
    },
    // 每夜显示条数选择
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 50, 100, 200],
    },
    // 每页显示条数
    pageSize: {
      type: Number,
      default: 10,
    },
    // 当前页面
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      current: this.currentPage,
      limit: this.pageSize,
    };
  },
  methods: {
    // 分页change 事件
    onPaginationChange(data) {
      this.limit = data.limit;
      this.current = data.page;
      this.$emit("onPaginationChange", data);
    },
  },
};
</script>

<style>
</style>