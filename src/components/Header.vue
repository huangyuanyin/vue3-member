<template>
  <div class="navbar">
    <div class="head-lable">
      <span v-if="goBackFlag" class="goBack" @click="goBack()"><img src="@/assets/images/icons/btn_back@2x.png" alt="" /> 返回</span>
      <span>{{ headTitle }}</span>
    </div>
    <div class="right-menu">
      <div class="avatar-wrapper">{{ userInfo && userInfo.name }}</div>
      <!-- <div class="logout" @click="logout">退出</div> -->
      <img src="@/assets/images/icons/btn_close@2x.png" class="outLogin" alt="退出" @click="logout" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const goBackFlag = ref(false)
const headTitle = ref('账号管理')
const userInfo = ref()

const goBack = () => {
  // const menu = menuList.value.find((item) => item.id === menuActived.value)
  // menuHandle(menu, false)
}

const logout = () => {
  router.push('/login')
}

watch(
  () => {
    return route.path
  },
  (val) => {
    switch (val) {
      case '/member':
        headTitle.value = '账号管理'
        break
      case '/changeMember':
        headTitle.value = '添加账号'
        break
      case '/backend':
        headTitle.value = '部门管理'
        break
      // case '/backend/category':
      //   goBackFlag.value = true
      //   break
      // case '/backend/food':
      //   goBackFlag.value = true
      //   break
      default:
        break
    }
  }
)

onMounted(() => {
  console.log(`output->`, route)
  switch (route.path) {
    case '/member':
      headTitle.value = '账号管理'
      break
    case '/changeMember':
      headTitle.value = '添加账号'
      break
    case '/backend':
      headTitle.value = '部门管理'
      break
    // case '/backend/category':
    //   goBackFlag.value = true
    //   break
    // case '/backend/food':
    //   goBackFlag.value = true
    //   break
    default:
      break
  }
})
</script>

<style lang="css" scoped>
@import url(@/styles/common.css);
@import url(@/styles/index.css);
@import url(@/styles/icon/iconfont.css);
</style>
