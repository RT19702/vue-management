<template>
  <div>
    <el-row type="flex" justify="center" align="center">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <h2>蚂蚁金融后台管理系统</h2>
        </div>
        <div>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="username">
              <el-input v-model.trim="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model.trim="ruleForm.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" style="width: 100%" @click="submitForm">主要按钮</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import { login } from "@/api";
export default {
  name: "ManagementLogin",

  data() {
    return {
      ruleForm: {
        username: "admin",
        password: "123456",
      },
      rules: {
        username: [
          {
            required: true,
            trigger: "blur",
          },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },

  mounted() { },

  methods: {
    submitForm() {
      login(this.ruleForm).then(res => {
        console.log("🚀 ~ file: Login.vue:55 ~ login ~ res", res)
      }).catch(err => {
        console.log("🚀 ~ file: Login.vue:57 ~ login ~ err", err)
      })
      // this.$refs.ruleForm.validate((valid) => {
      //   if (valid) {
      //     alert("submit!");
      //   } else {
      //     console.log("error submit!!");
      //     return false;
      //   }
      // });
    },
  },
};
</script>

<style lang="sass" scoped>
.box-card
  width: 500px+100px
  margin-top: (300px/2)
  h2
    text-align: center
</style>