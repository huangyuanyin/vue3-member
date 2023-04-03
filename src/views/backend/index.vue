<template>
  <div class="dashboard-container" id="member-app">
    <div class="container">
      <div class="tableBar" style="display: inline-block">
        <el-button type="primary" size="large" class="continue" @click="addClass('class')"> + 新增子公司 </el-button>
        <el-button type="primary" size="large" @click="addClass('meal')"> + 新增项目部 </el-button>
      </div>
      <el-table :data="tableData" stripe class="tableBox" border>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="type" label="类型">
          <template slot-scope="scope">
            <span>{{ scope.row.type == '1' ? '分公司' : '项目组' }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="updateTime" label="操作时间">
          <template slot-scope="scope">
            {{ scope.row.updateTime }}
          </template>
        </el-table-column>
        <el-table-column prop="affiliatedCompany" label="所属公司"></el-table-column>
        <el-table-column label="操作" width="160" align="center">
          <template slot-scope="scope">
            <el-button type="text" size="small" class="blueBug" @click="editHandle(scope.row)"> 修改 </el-button>
            <el-button type="text" size="small" class="delBut non" @click="deleteHandle(scope.row.id)"> 删除 </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="pageList"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="counts"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
    <el-dialog :title="title" v-model="dialogVisible" width="35%" :before-close="handleClose">
      <el-form label-width="100px" :model="userForm" ref="userRuleFormRef" :rules="userRules">
        <el-form-item label="名称：">
          <el-input v-model="userForm.name" placeholder="请输入名称" size="large" maxlength="14" />
        </el-form-item>
        <el-form-item label="排序：">
          <el-input v-model="userForm.sort" type="number" size="large" placeholder="请输入排序" />
        </el-form-item>
        <el-form-item label="所属公司：">
          <el-input size="large" v-model="userForm.affiliatedCompany" placeholder="请输入公司名称" maxlength="14" />
        </el-form-item>
      </el-form>
      <el-form-item>
        <div class="button-wrap" style="display: flex">
          <el-button size="large" @click="resertForm(userRuleFormRef)">取 消</el-button>
          <el-button type="primary" size="large" @click="submitForm(userRuleFormRef)">确 定</el-button>
          <el-button v-if="action != 'edit'" type="primary" size="large" class="continue" @click="submitForm('go')"> 保存并继续添加 </el-button>
        </div>
      </el-form-item>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { logoutApi } from '@/api/user'
import { ElMessage, FormInstance, FormRules } from 'element-plus'

const router = useRouter()
const headTitle = ref('账号管理')
const goBackFlag = ref(false)
const defAct = '2'
const userInfo = ref(window.localStorage.getItem('userInfo') || {})
const menuActived = ref(false)
const loading = ref(false)
const iframeUrl = ref('')
const tableData = ref([])
const pageSize = ref(10)
const counts = ref(0)
const dialogVisible = ref(false)
const title = ref('新增子公司')
let userForm = reactive({
  name: '',
  sort: '',
  affiliatedCompany: ''
})
const userRuleFormRef = ref<FormInstance>()
const userRules = reactive<FormRules>({
  name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
  sort: [{ required: true, message: '请输入排序', trigger: 'blur' }],
  affiliatedCompany: [{ required: true, message: '请输入所属公司', trigger: 'blur' }]
})
const menuList = ref([
  {
    id: '2',
    name: '账号管理',
    url: 'page/member/list.html',
    icon: 'icon-member'
  },
  {
    id: '3',
    name: '部门管理',
    url: 'page/category/list.html',
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
  // iframeUrl = item.url
  headTitle.value = item.name
  goBackFlag.value = goBackFlag
  // closeLoading()
}

const handleClose = (done: () => void) => {
  dialogVisible.value = false
  // 重置表单
  resertForm(userRuleFormRef.value)
}

const resertForm = (formEl: FormInstance | undefined) => {
  dialogVisible.value = false
  dialogVisible.value = false
  formEl.resetFields()
}

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      if (title.value === '新增子公司') {
        addUser(userForm)
      } else {
        updateUser(userForm)
      }
    }
  })
}

const addClass = (type: any) => {
  dialogVisible.value = true
  if (type == 'class') {
    title.value = '新增子公司'
  } else {
    title.value = '新增项目部'
  }
}

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

onMounted(() => {})
</script>

<style scoped>
@import url(../../styles/common.css);
@import url(../../styles/index.css);
@import url(../../styles/icon/iconfont.css);
.container {
  background-color: #fff;
  padding: 30px 28px;
  border-radius: 4px;
}
.tableBar {
  margin-bottom: 20px;
}
.pageList {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

:deep(.el-dialog__header) {
  padding: 20px 30px;
  background: #fbfbfa;
  border-radius: 8px 8px 0px 0px;
  border-bottom: 1px solid #e5e4e4;
}
:deep(.el-dialog__title) {
  font-size: 16px;
  font-weight: 700;
  color: #333333;
  line-height: 24px;
}
:deep(.el-dialog__body) {
  padding: 43px 90px 21px;
  color: #818693;
  font-size: 14px;
  word-break: break-all;
}
:deep(.el-dialog__footer) {
  padding: 0px 30px 30px;
}
:deep(.button-wrap) {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 20px;
}
:deep(.el-input, .el-input__wrapper) {
  width: 300px;
}
:deep(.el-input__wrapper) {
  width: 300px;
}
/* .body {
  min-width: 1366px;
}
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
} */
</style>
