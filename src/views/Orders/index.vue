<template>
  <div>
    <el-card class="box-card">
      <el-row>
        <el-col :span="6">
          <el-input
            placeholder="请输入内容"
            v-model="params.keyword"
            class="input-with-select"
          >
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="6" :offset="12">
          <div class="d-flex justify-end">
            <el-button type="primary">新建订单</el-button>
            <el-button disabled>审核</el-button>
            <el-button disabled>修改</el-button>
            <el-button disabled>作废</el-button>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="box-card dom-mt-20">
      <DirectTable
        :tableData="tableData"
        :colData="colData"
        :loading="loading"
        :total="total"
        :currentPage="params.page"
        @onPaginationChange="onPaginationChange"
      >
        <template v-slot="{ col, row }">
          <div v-if="col.prop === 'pay'">
            <!-- 是否支付 1已支付 2未支付 -->
            <el-tag v-if="row.pay == 1" type="success" plain> 已支付 </el-tag>
            <el-tag v-else type="danger" plain> 未支付 </el-tag>
          </div>
        </template>
      </DirectTable>
      <!-- <div class="d-flex justify-end dom-mt-20">
        <Pagination
          :total="total"
          :pageSize="params.pageSize"
          @handleSizeChange="handleSizeChange"
          @handleCurrentChange="handleCurrentChange"
        >
        </Pagination>
      </div> -->
    </el-card>
  </div>
</template>

<script>
import DirectTable from "@/components/DirectTable.vue";
import { getListOrders } from "@/api";
export default {
  components: {
    // 表格组件
    DirectTable,
    // 分页组件
    // Pagination: () => import("@/components/Pagination.vue"),
  },
  data() {
    return {
      tableData: [],
      colData: [
        {
          prop: "id",
          label: "订单号",
        },
        {
          prop: "status",
          label: "状态",
        },
        {
          prop: "date",
          label: "下单时间",
        },
        {
          prop: "start",
          label: "起始城市",
          width: "200px",
        },
        {
          prop: "end",
          label: "目的城市",
          width: "200px",
        },
        {
          prop: "cargo",
          label: "货物名称",
        },
        {
          prop: "count",
          label: "件数",
        },
        {
          prop: "unit",
          label: "单位",
        },
        {
          prop: "price",
          label: "运费",
        },
        {
          prop: "from",
          label: "订单来源",
        },
        {
          prop: "pay",
          label: "是否支付",
        },
      ],
      params: {
        page: 1,
        pageSize: 10,
        keyword: "",
      },
      total: 0,
      loading: true,
    };
  },
  methods: {
    getOrder() {
      this.loading = true;
      getListOrders(this.params)
        .then((res) => {
          let { list, total } = res.data;
          list.filter((element) => {
            if (element.status) {
              element.status == 1
                ? (element.status = "待审核")
                : element.status == 2
                ? (element.status = "已审核")
                : element.status == 3
                ? (element.status = "审核通过")
                : element.status == 4
                ? (element.status = "审核拒绝")
                : "";
            }
            // if (element.pay) {
            //     element.pay == 1 ? element.pay = "已支付" :
            //         element.pay == 2 ? element.pay = "未支付" : ''
            // }
          });
          this.tableData = list;
          this.total = total;
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    onPaginationChange(params) {
      // 解构赋值
      ({ page: this.params.page, limit: this.params.pageSize } = params);
      console.log(
        "🚀 ~ file: index.vue:158 ~ onPaginationChange ~ params",
        params
      );
      this.getOrder();
    },
  },
  mounted() {
    this.getOrder();
  },
};
</script>

<style lang="scss" scoped>
</style>