<template>
  <div class="dashboard-container" id="food-app">
    <div class="container">
      <div class="tableBar">
        <el-input v-model="input" placeholder="请输入网站名称" style="width: 250px" size="large" clearable @keyup.enter.native="handleQuery" :suffix-icon="Search">
          <i slot="prefix" class="el-input__icon el-icon-search" style="cursor: pointer" @click="init"></i>
        </el-input>
        <div class="tableLab">
          <el-button text type="danger" @click="deleteHandle('批量', null)">批量删除</el-button>
          <el-button text type="primary" @click="statusHandle('1')">批量启用</el-button>
          <el-button text type="danger" style="border: none" @click="statusHandle('0')">批量停用</el-button>
          <el-button type="warning" size="large" @click="addFoodtype('add')"> + 新建链接网站 </el-button>
        </div>
      </div>

      <el-table :data="tableData" stripe class="tableBox" @selection-change="handleSelectionChange" border>
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="name" label="网站名称"></el-table-column>
        <el-table-column label="访问链接" width="400" show-overflow-tooltip>
          <template slot-scope="scope">
            <a :href="scope.row.url" target="_blank" class="buttonText">{{ scope.row.url }}</a>
          </template>
        </el-table-column>

        <el-table-column prop="image" label="图片" align="center">
          <template slot-scope="{ row }">
            <el-image style="width: auto; height: 40px; border: none; cursor: pointer" :src="getImage(row.image)" :preview-src-list="[`/common/download?name=${row.image}`]">
              <div slot="error" class="image-slot">
                <img src="@/images/noImg.png" style="width: auto; height: 40px; border: none" />
              </div>
            </el-image>
          </template>
        </el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <span style="margin-right: 10px">{{ scope.row.status == '0' ? '停用' : '启用' }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="updateTime" label="最后操作时间"> </el-table-column>
        <el-table-column label="操作" width="160" align="center">
          <template slot-scope="scope">
            <el-button type="text" size="small" class="blueBug" @click="addFoodtype(scope.row.id)"> 修改 </el-button>
            <el-button type="text" size="small" class="blueBug" @click="statusHandle(scope.row)"> {{ scope.row.status == '0' ? '启用' : '停用' }} </el-button>
            <el-button type="text" size="small" class="delBut non" @click="deleteHandle('单删', scope.row.id)"> 删除 </el-button>
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
        :current-page.sync="page"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

interface User {
  name: string
  url: string
  image: string
  status: string
  updateTime: string
}

const page = ref(1)
const pageSize = ref(10)
const counts = ref(0)
const tableData = ref([])
const multipleSelection = ref<User[]>([])

const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val
}
</script>

<style scoped>
.container {
  background-color: #fff;
  padding: 30px 28px;
  border-radius: 4px;
}
.tableBar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.pageList {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
