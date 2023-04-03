<template>
  <div>
    <div class="container">
      <div class="tableBar">
        <el-input v-model="input" placeholder="请输入员工姓名" size="large" style="width: 250px" clearable @keyup.enter.native="handleQuery" :suffix-icon="Search"> </el-input>
        <el-button type="primary" size="large" @click="addMemberHandle('add')"> + 添加员工 </el-button>
      </div>
      <el-table :data="tableData" stripe class="tableBox" border>
        <el-table-column prop="name" label="员工姓名"></el-table-column>
        <el-table-column prop="username" label="账号"></el-table-column>
        <el-table-column prop="phone" label="手机号"></el-table-column>
        <el-table-column label="账号状态">
          <template slot-scope="scope">
            {{ String(scope.row.status) === '0' ? '已禁用' : '正常' }}
          </template>
        </el-table-column>
        <el-table-column label="操作" width="160" align="center">
          <template slot-scope="scope">
            <el-button type="text" size="small" class="blueBug" @click="addMemberHandle(scope.row.id)" :class="{ notAdmin: user !== 'admin' }"> 编辑 </el-button>
            <el-button type="text" size="small" class="delBut non" @click="statusHandle(scope.row)" v-if="user === 'admin'">
              {{ scope.row.status == '1' ? '禁用' : '启用' }}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="pageList"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="counts"
        :current-page.sync="page"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Search } from '@element-plus/icons-vue'
import { getMemberListApi } from '@/api/user'

const router = useRouter()
const input = ref('')
const tableData = ref([])
const headTitle = ref('账号管理')
const goBackFlag = ref(false)
const defAct = '2'
const userInfo = ref(window.localStorage.getItem('userInfo') || {})
const menuActived = ref(false)
const loading = ref(false)
const page = ref(1)
const pageSize = ref(10)
const counts = ref(0)
const menuList = ref([
  {
    id: '2',
    name: '账号管理',
    url: '/overview',
    icon: 'icon-member'
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
    url: 'page/food/list.html',
    icon: 'icon-food'
  }
])

const menuHandle = (item: any, goBackFlag: any) => {
  // loading.value = true
  menuActived.value = item.id
  headTitle.value = item.name
  goBackFlag.value = goBackFlag
  router.push(item.url)
  // closeLoading()
}

// const closeLoading = () => {
//   setInterval(() => {
//     loading.value = false
//   }, 1000)
// }

const logout = async () => {
  let res = await logoutApi()
  if (res.code === 1) {
    localStorage.removeItem('userInfo')
    router.push('/login')
  }
}

const goBack = () => {
  const menu = menuList.value.find((item) => item.id === menuActived.value)
  menuHandle(menu, false)
}

const addMemberHandle = (st: any) => {
  if (st === 'add') {
    router.push('/changeMember')
  } else {
    window.parent.menuHandle(
      {
        id: '2',
        url: '/backend/page/member/add.html?id=' + st,
        name: '修改员工'
      },
      true
    )
  }
}
const getMemberList = async () => {
  const params = {
    page: page.value,
    pageSize: pageSize.value,
    name: input.value ? input.value : undefined
  }
  let res = await getMemberListApi(params)
  if (String(res.code) === '1') {
    tableData.value = res.data.records || []
    counts.value = res.data.total
  }
}
onMounted(() => {
  getMemberList()
})
</script>

<style scoped>
@import url(@/styles/common.css);
@import url(@/styles/page.css);
#member-app .notAdmin::after {
  border: 0 !important;
}
.container {
  background-color: #fff;
  padding: 30px 28px;
  border-radius: 4px;
}
.tableBar {
  margin-bottom: 20px;
}
.pageList {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
