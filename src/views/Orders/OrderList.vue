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
        <template v-slot:operator>
          <el-table-column align="center" width="180px" label="操作">
            <!-- <template slot-scope="{ row }"> -->
            <template v-slot="{ row }">
              <div class="d-flex justify-center">
                <el-button
                  class="operator-text"
                  type="primary"
                  size="mini"
                  @click="editCurrent(row)"
                  >编辑</el-button
                >
                <el-button
                  class="operator-text"
                  type="danger"
                  size="mini"
                  @click="deleteCurrent(row)"
                  >删除</el-button
                >
              </div>
            </template>
          </el-table-column>
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
          align: "center",
        },
        {
          prop: "status",
          label: "状态",
          align: "center",
        },
        {
          prop: "date",
          label: "下单时间",
          align: "center",
        },
        {
          prop: "start",
          label: "起始城市",
          width: "200px",
          align: "center",
        },
        {
          prop: "end",
          label: "目的城市",
          width: "200px",
          align: "center",
        },
        {
          prop: "cargo",
          label: "货物名称",
          align: "center",
        },
        {
          prop: "count",
          label: "件数",
          align: "center",
        },
        {
          prop: "unit",
          label: "单位",
          align: "center",
        },
        {
          prop: "price",
          label: "运费",
          align: "center",
        },
        {
          prop: "from",
          label: "订单来源",
          align: "center",
        },
        {
          prop: "pay",
          label: "是否支付",
          align: "center",
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
          console.log("🚀 ~ file: OrderList.vue:163 ~ .then ~ res:", res);
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
      this.getOrder();
    },
    editCurrent(row) {
      console.log("🚀 ~ file: OrderList.vue:195 ~ tableEditing ~ row", row);
    },
    deleteCurrent(row) {
      console.log("🚀 ~ file: OrderList.vue:199 ~ deleteCurrent ~ row:", row);
    },
  },
  mounted() {
    this.getOrder();
  },
};
</script>

<style lang="scss" scoped>
</style>