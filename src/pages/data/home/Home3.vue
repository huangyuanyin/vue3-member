<template>
  <div class="Home3-wrap">
    <div class="top_wrap">
      <div class="top-left">
        <span>公司</span>
        <span>产品</span>
        <span>公告</span>
        <span>解决方案</span>
        <span class="passroed" @click="openPass">密码本</span>
      </div>
      <div class="top-right">
        <span>北京</span>
        <span>设置</span>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <span class="header" style="margin-right: 3px">
              <img src="@/assets/images/QQ.jpg" alt="" srcset="" />
            </span>
            <span>{{ userName }}</span>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="content-wrap">
      <div
        style="
          text-align: center;
          font-size: 40px;
          font-weight: 600;
          color: #004098;
          margin-top: 2.5%;
        "
      >
        <img
          style="width: 800px; height: 86px"
          src="@/assets/images/wx.svg"
          alt=""
        />
        <!-- 中航天智慧工地综合服务平台 -->
      </div>
      <div class="s-wrap">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="我的导航" name="first">
            <el-card class="box-card" shadow="always">
              <div class="box-header">
                我的导航
                <!-- <el-button type="text" icon="el-icon-edit" disabled>
                  编辑
                </el-button> -->
              </div>
              <div class="icon_list">
                <div
                  @contextmenu.prevent.capture
                  class="icon-item"
                  v-for="(item, index) in bottomList"
                  :key="'bottomList' + index"
                  @click="toLink(item.url)"
                >
                  <!-- <el-dropdown
                    ref="Contextmenu"
                    :hide-on-click="true"
                    placement="top-end"
                    @command="
                      (command) => {
                        command2(command, item);
                      }
                    "
                  > -->
                  <div style="display: flex; flex-direction: column">
                    <svg-icon
                      @contextmenu.stop="handContextmenu"
                      :iconName="item.icon"
                      className="aaa"
                      style="margin-bottom: 20px"
                    ></svg-icon>
                    <span
                      class="bbb"
                      style="display: inline-block; text-align: center"
                    >
                      {{ item.name }}
                    </span>
                  </div>
                  <!-- <el-dropdown-menu slot="dropdown"> -->
                  <!-- <el-dropdown-item>密码本</el-dropdown-item> -->
                  <!-- </el-dropdown-menu> -->
                  <!-- </el-dropdown> -->
                </div>
                <!-- <div
                  style="
                    width: 120px;
                    height: 100px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  "
                >
                  <div class="icon-item-add" @click="tip">
                    <i class="el-icon-plus" style="padding: 8px"></i>
                  </div>
                </div> -->
              </div>
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="公告" name="second">
            <div class="noticeList">
              <div
                class="notice"
                v-for="(item, index) in noticeList"
                :key="'noticeList' + index"
                @click="toNotice(item.id)"
              >
                <span>{{ item.updateTime }}</span>
                <div>{{ item.title }}</div>
              </div>
              <div
                v-if="noticeList.length >= 15"
                style="text-align: center; color: #aaaaaa; margin-bottom: 10px"
              >
                暂无更多了~
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="bottom_wrap">
      <div style="margin-right: 20px">
        <img
          style="width: 110px; height: 76px"
          src="@/assets/images/QQ.jpg"
          alt=""
        />
      </div>
      <div class="backwrap">
        <span>Copyright©中国航天科工集团公司 中航天智慧工地综合服务平台</span>
        <span>
          制作单位：中航天建设工程集团有限公司
          地址：北京市丰台区看丹路4号院甲6号 邮编：100070
          联系电话：(010)83680501
        </span>
        <span>欢迎关注官方微信公众号：casic-ZHT</span>
      </div>
    </div>
    <el-dialog
      title="密码本"
      :visible="dialogVisible"
      width="50%"
      :before-close="handleClose"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
    >
      <div class="" v-for="(item, index) in countsList">
        <el-form ref="formRef" :model="item" :rules="rules" label-width="80px">
          <div style="display: flex; margin-bottom: 20px">
            <el-form-item
              :key="index"
              :label="'账号' + (index + 1)"
              prop="userName"
            >
              <el-input
                v-model="item.userName"
                placeholder="请输入账号"
              ></el-input>
            </el-form-item>
            <el-form-item
              :key="'password' + index"
              :label="'密码' + (index + 1)"
              prop="password"
            >
              <el-input
                v-model="item.password"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
            <el-button
              type="warning"
              @click="addRow(index)"
              style="margin: 0 20px 0 30px"
            >
              新增
            </el-button>
            <el-button type="danger" @click="removeRow(index)">删除</el-button>
          </div>
        </el-form>
      </div>

      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
        <el-button type="primary" @click="submitForm">保 存</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="密码本"
      :visible.sync="passDialogVisible"
      width="60%"
      :before-close="handleClose"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
    >
      <div class="" v-for="(item, index) in passList">
        <el-form
          ref="formPassRef"
          :model="item"
          :rules="passRules"
          label-width="100px"
        >
          <div style="display: flex; margin-bottom: 20px">
            <el-form-item
              :key="index"
              :label="'网站名' + (index + 1)"
              prop="website"
            >
              <el-input
                v-model="item.website"
                placeholder="请输入网站名称"
              ></el-input>
            </el-form-item>
            <el-form-item
              :key="index"
              :label="'账号' + (index + 1)"
              prop="userName"
            >
              <el-input
                v-model="item.userName"
                placeholder="请输入账号"
              ></el-input>
            </el-form-item>
            <el-form-item
              :key="'password' + index"
              :label="'密码' + (index + 1)"
              prop="password"
            >
              <el-input
                v-model="item.password"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
            <el-button
              type="warning"
              @click="addPassRow(index)"
              style="margin: 0 20px 0 30px"
            >
              新增
            </el-button>
            <el-button type="danger" @click="removePassRow(item, index)">
              删除
            </el-button>
          </div>
        </el-form>
      </div>

      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
        <el-button type="primary" @click="submitPassForm">保 存</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import {
  dishPage,
  addDishCount,
  getNoticeListApi,
  getDishCount,
  deleteDishCount,
} from '@/api/user';
export default {
  name: 'demo',
  components: {},
  data() {
    return {
      countsList: [{ userName: '', password: '' }],
      passList: [{ website: '', userName: '', password: '' }],
      noticeList: [],
      rules: {
        userName: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
      passRules: {
        website: [
          { required: true, message: '请输入网站名称', trigger: 'blur' },
        ],
        userName: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
      // 获取localStorage中的用户信息
      userName: JSON.parse(localStorage.getItem('userInfo')).sub,
      skipId: '', // 网站id
      skipName: '', // 网站名称
      dialogVisible: false,
      passDialogVisible: false,
      activeName: 'first',
      isLoading: false,
      bottomList: [],
      iconList: [
        'icon-maozi',
        'icon-zhihuigongdi',
        'icon-shuibiao',
        'icon-zhihuigongdi1',
        'icon-jikeng',
        'icon-yanganqi',
      ],
    };
  },
  methods: {
    async openPass() {
      this.passDialogVisible = true;
      const params = {
        id: JSON.parse(localStorage.getItem('userInfo')).jti,
        page: 1,
        pageSize: 10000,
      };
      let res = await getDishCount(params);
      if (res.code == 1) {
        this.passList = res.data.records;
      }
      if (this.passList.length === 0) {
        this.passList = [{ website: '', userName: '', password: '' }];
      }
    },
    addPassRow(index) {
      this.passList.push({ website: '', userName: '', password: '' });
    },
    async removePassRow(val, index) {
      if (this.passList.length <= 1) {
        this.$message({
          message: '至少保留一个账号密码',
          type: 'warning',
        });
        return;
      }
      this.passList.splice(index, 1);
      let res = await deleteDishCount(val.id);
      if (res.code == 1) {
      }
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    async dishPageList() {
      this.isLoading = true;
      let res = await dishPage({
        page: 1,
        pageSize: 100,
      });
      if (res.code === 1) {
        this.$nextTick(() => {
          this.bottomList = res.data.records || [];
          // 循环bottomList和iconList，给每个bottomList添加icon
          // for (var i = 0; i < this.bottomList.length; i++) {
          //   this.bottomList[i].icon = this.iconList[i];
          // }
          console.log(`output->`, this.bottomList);
        });
        this.isLoading = false;
      }
    },
    tip() {
      this.$message({
        message: '请通过后台管理系统配置导航！',
        type: 'warning',
      });
    },
    toLink(it) {
      // 如果it是http开头的，就直接打开，否则就加上http://
      if (it.indexOf('http') == -1) {
        it = 'http://' + it;
      }
      window.open(it, '_blank');
    },
    command2(item, index) {
      console.log(`output->index`, index);
      this.skipId = index.id;
      this.skipName = index.name;
      this.countsList = index.count;
      this.dialogVisible = true;
    },
    handleClose(done) {
      this.dialogVisible = false;
      this.countsList = [{ userName: '', password: '' }];
      this.passDialogVisible = false;
      this.passList = [{ website: '', userName: '', password: '' }];
      done();
    },
    handleCommand(command) {
      if (command === 'a') {
        localStorage.clear();
        this.$router.push('/login');
      }
    },
    addRow(index) {
      this.countsList.splice(index + 1, 0, { userName: '', password: '' });
    },
    removeRow(index) {
      if (this.countsList.length <= 1) {
        this.$message({
          message: '至少保留一个账号密码',
          type: 'warning',
        });
        return;
      }
      this.countsList.splice(index, 1);
    },
    toNotice(id) {
      console.log(`output->id`, id);
      let url = 'http://101.43.127.118:7000/#/home4?id=' + id;
      window.open(url, '_blank');
    },
    async submitForm() {
      const forms = this.$refs.formRef;
      if (forms) {
        for (const item of forms) {
          try {
            const result = await item.validate();
            if (!result) {
              return;
            }
          } catch (error) {
            this.$message({
              message: '请完善账号密码',
              type: 'warning',
            });
            return;
          }
        }
      }
      let res = await addDishCount({
        employeeId: JSON.parse(localStorage.getItem('userInfo')).jti,
        skipId: this.skipId,
        skipName: this.skipName,
        count: this.countsList.map(({ userName, password }) => ({
          userName,
          password,
        })),
      });
      if (res.code === 1) {
        this.$message({
          message: '修改成功',
          type: 'success',
        });
        this.dialogVisible = false;
        this.countsList = [{ userName: '', password: '' }];
      }
    },
    async submitPassForm() {
      const forms = this.$refs.formPassRef;
      if (forms) {
        for (const item of forms) {
          try {
            const result = await item.validate();
            if (!result) {
              return;
            }
          } catch (error) {
            this.$message({
              message: '请完善网站名账号和密码',
              type: 'warning',
            });
            return;
          }
        }
      }
      let res = await addDishCount({
        employeeId: JSON.parse(localStorage.getItem('userInfo')).jti,
        // skipId: this.skipId,
        // skipName: this.skipName,
        count: this.passList.map(({ website, userName, password }) => ({
          website,
          userName,
          password,
        })),
      });
      if (res.code === 1) {
        this.$message({
          message: '密码本更新成功',
          type: 'success',
        });
        this.passDialogVisible = false;
        this.passList = [{ website: '', userName: '', password: '' }];
      }
    },
    async init() {
      let res = await getNoticeListApi({
        page: 1,
        pageSize: 10000,
      });
      if (String(res.code) === '1') {
        this.noticeList = res.data.records;
      } else {
        ElMessage.error(res.msg || '操作失败');
      }
    },
  },
  created() {
    this.dishPageList();
    this.init();
  },
};
</script>

<style scoped>
.top_wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.header {
  width: 28px;
  height: 28px;
  border: 1px solid #4e71f2;
  border-radius: 50%;
  /* display: inline-block; */
}
.el-dropdown-link {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex-direction: row !important;
}
.el-dropdown-link img {
  position: relative;
  /* top: 1px; */
  left: 1px;
  padding: 2px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.top-left {
  padding-left: 24px;
}

.top-left span {
  margin-right: 24px;
  /* margin-top: 19px; */
  display: inline-block;
  position: relative;
  cursor: pointer;
}

.top-left span:hover {
  color: #416bfb;
}

.bbb :hover {
}

.top-right span {
  margin-right: 24px;
  /* margin-top: 19px; */
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  color: #606266;
}

.top-right {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
}

.bottom_wrap {
  width: 100%;
  position: absolute;
  bottom: 20px;
  left: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.backwrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  color: #bbb;
  font-size: 14px;
  line-height: 30px;
}

.s-wrap {
  display: block;
  margin: 0 auto;
  border-radius: 16px;
  box-sizing: content-box;
  background: #fff;
  padding: 14px 32px 0;
  width: 60%;
  position: fixed;
  top: 26%;
  left: 20%;
}

.box-card {
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.4);
  /* border: 1px solid rgba(0, 0, 0, 0.05); */
  border-radius: 12px;
  font-family: Arial, sans-serif;
  max-height: 400px;
  display: flex;
  flex-direction: column;
}

.box-card ::-webkit-scrollbar {
  display: none;
}

.box-card /deep/.el-card__body {
  padding: 0 !important;
  height: 100%;
}

.box-header {
  width: 100%;
  height: 46px;
  font-family: Arial, sans-serif;
  font-size: 16px;
  color: #222222;
  line-height: 14px;
  position: absolute;
  /* left: 16px; */
  padding: 16px;
  /* top: 16px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.box-header /deep/.el-button {
  font-size: 16px;
  /* color: #222222; */
}

.icon_list {
  margin-top: 56px;
  flex: 1;
  padding: 16px 30px;
  display: flex;
  flex-wrap: wrap;
  max-height: 35vh;
  overflow-y: auto;
  /* justify-content: flex-; */
}
.icon_list ::-webkit-scrollbar {
  display: none;
}

.icon-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 50px;
  margin-bottom: 35px;
  width: 120px;
  height: 120px;
  cursor: pointer;
  align-items: center;
}

.icon-item:hover {
  transition: all 0.5s;
  background: #fff;
  box-shadow: 0 3px 20px 1px rgba(0, 0, 0, 0.16);
  border-radius: 6px 6px 6px 6px;
}
.el-dropdown-link {
  display: flex !important;
  flex-direction: row !important;
}
/deep/.el-dropdown-selfdefine {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon-item span:hover {
  /* color: #416bfb; */
}

.icon-item-add {
  width: 65px;
  height: 65px;
  line-height: 65px;
  text-align: center;
  border: 1px dashed #d7d9e0;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.noticeList {
  overflow-y: auto;
  max-height: 50vh;
}
/** 隐藏滚动条 */
.noticeList::-webkit-scrollbar {
  display: none;
}
.notice {
  display: flex;
  padding: 10px 0px;
  align-items: center;
  cursor: pointer;
}

.notice div {
  color: #333;
  text-decoration: none;
  font-size: 14px;
  font-family: '微软雅黑';
  margin-left: 10px;
}

.notice span {
  font-size: 10px;
  color: #7eacdb;
  font-family: Arial, Helvetica, sans-serif;
}
.aaa {
  font-size: 65px;
  margin-bottom: 20px;
  /* border: 1px solid rgba(0, 0, 0, 0.05); */
  border-radius: 8px;
  padding: 8px;
}

.Home3-wrap {
  font-family: '汉仪大黑简体', sans-serif;
  background-image: url('~@/assets/images/bg.05922c9.png');
  background-repeat: no-repeat;
  background-position: 0 100%;
  background-size: 100% auto;
  height: 100vh;
}
.el-form {
  display: flex;
  flex-direction: column;
}
.el-form .el-form-item {
  margin-bottom: 0px;
}

.passroed:hover {
  color: #416bfb;
}
</style>
