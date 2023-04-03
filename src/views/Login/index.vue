<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ElMessage, FormInstance, FormRules } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'
import { loginApi } from '../../api/user.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const loading = ref(false)
const loginForm = reactive({
  username: '',
  password: ''
})
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  username: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    { min: 4, max: 20, message: '长度在 4 到 20 个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 4, max: 20, message: '长度在 4 到 20 个字符', trigger: 'blur' }
  ]
})

const handleLogin = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      let res = await loginApi(loginForm)
      if (res.code === 1) {
        router.push('/')
      } else {
        ElMessage.error(res.msg)
      }
    }
  })
}
</script>

<template>
  <div class="login" id="login-app">
    <div class="login-box">
      <img src="@/assets/images/login/login-l.png" alt="" />
      <div class="login-form">
        <el-form ref="ruleFormRef" :model="loginForm" :rules="rules">
          <div class="login-form-title">
            <img src="@/assets/images/login/logo.png" style="width: 139px; height: 42px" alt="" />
          </div>
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" :suffix-icon="User" type="text" auto-complete="off" placeholder="账号" maxlength="20" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" :suffix-icon="Lock" type="password" placeholder="密码" maxlength="20" @keyup.enter.native="handleLogin(ruleFormRef)" />
          </el-form-item>
          <el-form-item style="width: 100%">
            <el-button :loading="loading" class="login-btn" size="default" type="primary" style="width: 100%" @click.native.prevent="handleLogin(ruleFormRef)">
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
@import url(../../styles/common.css);
@import url(../../styles/login.css);
@import url(../../styles/icon/iconfont.css);
</style>
