<script>
import { loginApi } from '@/api/user.js'
export default {
  data() {
    return {
      loading: false,
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 4, max: 20, message: '长度在 4 到 20 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 4, max: 20, message: '长度在 4 到 20 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleLogin(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let res = await loginApi(this.loginForm)
          if (res.code === 1) {
            this.$router.push('/home')
            localStorage.setItem('token', '111')
            localStorage.setItem('userInfo', JSON.stringify(res.data))
          } else {
            this.$message.error(res.msg)
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<!-- <script>
import { ref, reactive } from "vue";
import { ElMessage, FormInstance, FormRules } from "element-plus";
import { User, Lock } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";

const router = useRouter();

const handleLogin = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
    }
  });
};
</script> -->

<template>
  <div class="login" id="login-app">
    <div class="login-box">
      <img src="../../assets/images/login/login-l.png" alt="" />
      <div class="login-form">
        <el-form ref="ruleFormRef" :model="loginForm" :rules="rules">
          <div class="login-form-title">
            <img
              src="../../assets/images/login/logo.png"
              style="width: 139px; height: 42px"
              alt=""
            />
          </div>
          <el-form-item prop="username">
            <el-input
              v-model="loginForm.username"
              suffix-icon="el-icon-user"
              type="text"
              auto-complete="off"
              placeholder="账号"
              maxlength="20"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              suffix-icon="el-icon-lock"
              type="password"
              placeholder="密码"
              maxlength="20"
              @keyup.enter.native="handleLogin('ruleFormRef')"
            />
          </el-form-item>
          <el-form-item style="width: 100%">
            <el-button
              :loading="loading"
              class="login-btn"
              size="default"
              type="primary"
              style="width: 100%"
              @click.native.prevent="handleLogin('ruleFormRef')"
            >
              <span v-if="!loading">登录</span>
              <span v-else>登录中...</span>
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* @import url(../../styles/common.css); */
@import url(../../styles/login.css);
@import url(../../styles/icon/iconfont.css);
</style>
