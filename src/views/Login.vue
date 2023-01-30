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
              <el-button type="primary" style="width: 100%" @click="submitForm" :loading="loading">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import { login } from "@/api";
import { setToken } from "@/utils/auth.js"
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
      loading: false
    };
  },

  mounted() { },

  methods: {
    submitForm() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.loading = true
          login(this.ruleForm).then((res) => {
            this.loading = false
            setToken(res.Token)
            sessionStorage.setItem('nickname', res.name)
            this.$router.push('/')
          }).catch(() => {

          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
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