<template>
  <div class="content d-flex justify-center align-items-center">
    <el-row type="flex" justify="center" align="center">
      <el-card class="box-card">
        <div class="images">
          <img class="" src="~@/assets/images/guanli.png" alt="" />
        </div>
        <div>
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="80px"
            label-position="top"
            class="demo-ruleForm"
          >
            <el-form-item label="用户名" prop="username">
              <el-input v-model.trim="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model.trim="ruleForm.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                style="width: 100%"
                @click="submitForm"
                :loading="loading"
                plain
                >登录</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import { login } from "@/api";
import { setToken } from "@/utils/auth.js";
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
      loading: false,
    };
  },

  mounted() {},

  methods: {
    submitForm() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          login(this.ruleForm)
            .then((res) => {
              this.loading = false;
              setToken(res.Token);
              sessionStorage.setItem("nickname", res.name);
              this.$router.push({
                path: "/",
              });
            })
            .catch(() => {});
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  background: url("~@/assets/images/download.jpg") no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;

  .images {
    text-align: center;

    img {
      width: 120px;
    }
  }
}

.box-card {
  width: 500px+100px;

  h2 {
    text-align: center;
  }
}
</style>