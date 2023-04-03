<template>
  <div class="app-wrapper openSidebar clearfix" style="width: 200px !important">
    <div class="sidebar-container">
      <div class="logo">
        <img src="@/assets/images/login/login-logo.png" alt="" style="width: 117px; height: 32px" />
      </div>
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu :default-active="defAct" :unique-opened="false" :collapse-transition="false" background-color="#545c64" text-color="#bfcbd9" active-text-color="#f4f4f5">
          <div v-for="item in menuList" :key="item.id">
            <!-- <el-submenu :index="item.id" v-if="item.children && item.children.length > 0">
              <template slot="title">
                <i class="iconfont" :class="item.icon"></i>
                <span>{{ item.name }}</span>
              </template>
              <el-menu-item v-for="sub in item.children" :index="sub.id" :key="sub.id" @click="menuHandle(sub, false)">
                <span slot="title">{{ sub.name }}</span>
              </el-menu-item>
            </el-submenu> -->
            <el-menu-item :index="item.id" @click="menuHandle(item, false)">
              <i class="iconfont" :class="item.icon"></i>
              <span slot="title">{{ item.name }}</span>
            </el-menu-item>
          </div>
        </el-menu>
      </el-scrollbar>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const defAct = ref('2')
const router = useRouter()
const menuList = ref([
  {
    id: '2',
    name: '账号管理',
    url: '/member',
    icon: 'icon-member',
    children: []
  },
  {
    id: '3',
    name: '部门管理',
    url: '/backend',
    icon: 'icon-category'
  },
  {
    id: '4',
    name: '跳转管理',
    url: '/jump',
    icon: 'icon-food'
  }
])

const menuHandle = (item: any, goBackFlag: any) => {
  defAct.value = item.id
  // loading.value = true
  // menuActived.value = item.id
  // headTitle.value = item.name
  // goBackFlag.value = goBackFlag
  router.push(item.url)
  // closeLoading()
}

onMounted(() => {
  // defAct.value = item.id
})
</script>

<style scoped>
@import url(@/styles/common.css);
@import url(@/styles/index.css);
@import url(@/styles/icon/iconfont.css);

.app-main {
  height: calc(100% - 64px);
}
.app-main .divTmp {
  width: 100%;
  height: 100vh;
}
.sidebar-container {
  background-color: rgb(52, 55, 68);
}
:deep(.el-menu) {
  background-color: rgb(52, 55, 68);
}
</style>
